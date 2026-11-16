// Portable preview for scene jobs. Run inside a job folder:  node ../../render/look.mjs
// Renders out/<scene>.html with the real engine and writes out/look-<t>.png (six moments),
// out/look.jpg (all six, if Python's PIL is available) and out/look.json (the engine's warnings).
// Needs only Node and a Chromium/Chrome binary (CHROME=..., default /usr/bin/chromium).
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawn } from "node:child_process";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const RENDER = path.dirname(new URL(import.meta.url).pathname);
const here = process.cwd();
const job = JSON.parse(fs.readFileSync(path.join(here, "render.json"), "utf8"));
const { scene: id, dur, kit: kitName, width: W = 1920, height: H = 1080 } = job;
const CHROME = process.env.CHROME || ["/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"].find((p) => fs.existsSync(p));
if (!CHROME) { console.log("no Chromium found: set CHROME=/path/to/chromium"); process.exit(1); }

const scene = path.join(here, "out", id + ".html");
if (!fs.existsSync(scene)) { console.log("write out/" + id + ".html first"); process.exit(1); }
const work = path.join(here, "out/.look");
fs.rmSync(work, { recursive: true, force: true });
fs.mkdirSync(work, { recursive: true });

// The job's real photos and clips (inputs/materials/<id>.jpg, <id>-cutout.png, <id>.mp4), so photo:<id> and clip:<id> show.
function materialsOf(dir) {
  if (!fs.existsSync(dir)) return {};
  const out = {};
  for (const f of fs.readdirSync(dir)) {
    const ext = path.extname(f).toLowerCase();
    const kind = [".jpg", ".jpeg", ".png", ".webp"].includes(ext) ? "photo" : [".mp4", ".webm", ".mov"].includes(ext) ? "clip" : null;
    if (kind) out[path.basename(f, path.extname(f))] = { file: path.join(dir, f), kind };
  }
  return out;
}

const kit = path.join(RENDER, "kits", kitName, "anim");
const plan = { duration: dur, width: W, height: H, kit, pieces: [path.join(kit, "pieces"), path.join(kit, "..", "pieces")], sets: path.join(kit, "sets"),
  scenes: [{ id, file: scene, at: 0, dur }], materials: materialsOf(path.join(here, "inputs/materials")) };
fs.writeFileSync(path.join(work, "plan.json"), JSON.stringify(plan));
const res = JSON.parse(execFileSync("node", [path.join(RENDER, "tools/assemble_scenes.mjs"), path.join(work, "plan.json"), path.join(work, "page")])
  .toString().trim().split("\n").pop());

const ts = [0.3, 0.2, 0.4, 0.6, 0.8, 1].map((f, k) => (k === 0 ? 0.3 : Math.max(0.3, Math.min(dur - 0.15, f * dur)))).map((t) => t.toFixed(2));

// Drive Chrome over its DevTools protocol with Node's built-in WebSocket: no npm packages needed.
const profile = path.join(work, "profile");
const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-sandbox", "--no-first-run",
  "--disable-dev-shm-usage", "--no-zygote", "--disable-software-rasterizer", "--allow-file-access-from-files",
  "--remote-debugging-port=0", "--user-data-dir=" + profile, "about:blank"], { stdio: ["ignore", "ignore", "pipe"] });
let chromeErr = "";
proc.stderr.on("data", (d) => { chromeErr += d; });
let exited = null;
proc.on("exit", (code, sig) => { exited = code ?? sig; });
proc.on("error", (e) => { exited = e.code; chromeErr += e.message; });
const portFile = path.join(profile, "DevToolsActivePort");
for (let i = 0; i < 300 && !fs.existsSync(portFile) && exited === null; i++) await sleep(100);
if (!fs.existsSync(portFile)) {
  proc.kill();
  console.log("Chromium did not start (" + CHROME + (exited !== null ? ", exited " + exited : ", timed out") + "). Its output:\n" + chromeErr.slice(-3000));
  process.exit(1);
}
const port = fs.readFileSync(portFile, "utf8").split("\n")[0];
const target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === "page");
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let seq = 0; const waiting = new Map(), events = [];
ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (m.id && waiting.has(m.id)) { waiting.get(m.id)(m); waiting.delete(m.id); } else if (m.method) events.push(m.method); });
const send = (method, params = {}) => new Promise((r) => { const id = ++seq; waiting.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
const evaluate = async (expr) => (await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;
await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 1, mobile: false });

const shots = [], audit = [];
try {
  for (const t of ts) {
    events.length = 0;
    await send("Page.navigate", { url: "file://" + path.join(work, "page", "index.html") + "?t=" + t });
    for (let i = 0; i < 300 && !events.includes("Page.loadEventFired"); i++) await sleep(50);
    await evaluate("document.fonts.ready.then(() => true)");
    await sleep(150);
    const png = path.join(here, "out", "look-" + t + ".png");
    fs.writeFileSync(png, Buffer.from((await send("Page.captureScreenshot", { format: "png" })).result.data, "base64"));
    shots.push(png);
    try { audit.push(...JSON.parse((await evaluate('document.getElementById("vs-audit")?.textContent || "[]"')) || "[]")); } catch {}
  }
} finally { ws.close(); proc.kill(); }
let sheet = "";
try {
  execFileSync("python3", ["-c", `
import sys
from PIL import Image, ImageDraw
files=sys.argv[1].split(','); ts=sys.argv[2].split(','); out=sys.argv[3]
W,H=(360,640) if sys.argv[4]=='p' else (640,360); S=Image.new('RGB',(W*3+8,(H+24)*2+4),'#111'); d=ImageDraw.Draw(S)
for i,(f,t) in enumerate(zip(files,ts)):
    x,y=(i%3)*(W+4),(i//3)*(H+24); d.text((x+6,y+6),f'{i+1}. {t}s',fill='white'); S.paste(Image.open(f).convert('RGB').resize((W,H)),(x,y+22))
S.save(out,quality=85)`, shots.join(","), ts.join(","), path.join(here, "out/look.jpg"), H > W ? "p" : "l"], { stdio: "ignore" });
  sheet = "out/look.jpg and ";
} catch {}
const seen = new Set(), warnings = [];
for (const a of audit) { const k = a.kind + ":" + (a.message || a.text || ""); if (!seen.has(k)) { seen.add(k); warnings.push(a); } }
fs.writeFileSync(path.join(here, "out/look.json"), JSON.stringify({ moments: ts, problems: res.problems || [], warnings }, null, 1));
console.log("wrote " + sheet + "out/look-<t>.png (moments " + ts.join(", ") + " s)" + (res.problems?.length ? "; problems: " + res.problems.join("; ") : "") +
  (warnings.length ? "; the engine warns: " + warnings.map((w) => w.kind + " " + (w.message || w.text || "")).join(" | ").slice(0, 600) : ""));
