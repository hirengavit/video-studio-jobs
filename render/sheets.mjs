// Portable drawing previews. Run node sheets.mjs in a job with {type: "drawings", kit} in render.json.
// Needs Node 22+, Chrome (CHROME=/path/to/chrome), and python3 with Pillow; no npm packages.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execFileSync, spawn } from "node:child_process";

const RENDER = path.dirname(fileURLToPath(import.meta.url));
const here = process.cwd(), out = path.join(here, "out");
const sheets = path.join(out, "sheets"), work = path.join(out, ".sheets");
const kitDir = path.join(work, "kit");
const made = [], warnings = [];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const readJSON = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const files = (dir, suffix) => fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(suffix)).sort() : [];
const xml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]);
const warn = (s) => { if (!warnings.includes(s)) warnings.push(s); };
let browserPromise;

async function until(test, message) {
  for (let i = 0; i < 300; i++) {
    if (test()) return;
    await sleep(50);
  }
  throw new Error(message);
}

// Chrome's DevTools protocol and Node's built-in WebSocket replace the local snapshot CLI.
async function openBrowser() {
  const chrome = process.env.CHROME || ["/usr/bin/chromium", "/usr/bin/google-chrome", "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"].find((p) => fs.existsSync(p));
  if (!chrome) throw new Error("No Chrome found: set CHROME=/path/to/chrome");
  const profile = path.join(work, "profile");
  const proc = spawn(chrome, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-sandbox", "--no-first-run",
    "--disable-dev-shm-usage", "--allow-file-access-from-files", "--remote-debugging-port=0",
    "--user-data-dir=" + profile, "about:blank"], { stdio: ["ignore", "ignore", "pipe"] });
  let stderr = "", failure = "", ws;
  proc.stderr.on("data", (d) => { stderr = (stderr + d).slice(-3000); });
  proc.on("error", (e) => { failure = e.message; });
  proc.on("exit", (code, signal) => { failure = `Chrome exited (${code ?? signal})`; });
  const waiting = new Map();
  const close = () => {
    for (const reject of waiting.values()) reject(new Error("Chrome closed"));
    ws?.close();
    proc.kill();
  };
  try {
    const portFile = path.join(profile, "DevToolsActivePort");
    await until(() => {
      if (failure) throw new Error(failure + ": " + stderr);
      return fs.existsSync(portFile);
    }, "Chrome did not start: " + stderr);
    const port = fs.readFileSync(portFile, "utf8").split("\n")[0];
    const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(15_000) })).json();
    const target = targets.find((t) => t.type === "page");
    if (!target) throw new Error("Chrome has no page target");
    ws = new WebSocket(target.webSocketDebuggerUrl);
    await until(() => {
      if (failure || ws.readyState === WebSocket.CLOSED) throw new Error(failure || "Chrome connection closed");
      return ws.readyState === WebSocket.OPEN;
    }, "Chrome connection timed out");
    let seq = 0, loaded = false;
    const replies = new Map();
    ws.addEventListener("message", (e) => {
      const m = JSON.parse(e.data);
      if (m.id) replies.get(m.id)?.(m);
      if (m.method === "Page.loadEventFired") loaded = true;
    });
    ws.addEventListener("close", () => {
      for (const reject of waiting.values()) reject(new Error("Chrome connection closed"));
    });
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++seq;
      const timer = setTimeout(() => finish(new Error(method + " timed out")), 15_000);
      function finish(error, result) {
        clearTimeout(timer); replies.delete(id); waiting.delete(id);
        if (error) reject(error); else resolve(result);
      }
      replies.set(id, (m) => finish(m.error && new Error(m.error.message), m.result));
      waiting.set(id, (error) => finish(error));
      try { ws.send(JSON.stringify({ id, method, params })); } catch (e) { finish(e); }
    });
    const evaluate = async (expression) => {
      const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
      return result.result?.value;
    };
    await send("Page.enable");
    await send("Emulation.setDeviceMetricsOverride", { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });
    return {
      close,
      async capture(page, dst, time) {
        loaded = false;
        const url = pathToFileURL(page);
        if (time !== undefined) url.searchParams.set("t", String(time));
        const nav = await send("Page.navigate", { url: url.href });
        if (nav.errorText) throw new Error(nav.errorText);
        await until(() => loaded, "Page did not load: " + page);
        await evaluate("document.fonts.ready.then(() => true)");
        if (time !== undefined) {
          const audit = await evaluate(`(() => {
            if (!window.S || !window.__timelines?.main) throw new Error('Scene engine did not start');
            S.render(${Number(time)});
            return S.audit();
          })()`);
          const errors = audit.filter((a) => a.kind === "error");
          if (errors.length) throw new Error(errors.map((a) => a.message).join("; "));
          for (const a of audit.filter((a) => a.kind === "misuse")) warn(path.basename(dst) + ": " + a.message);
        } else {
          await evaluate("document.getElementById('piece').decode().then(() => true)");
        }
        await evaluate("new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))");
        const shot = await send("Page.captureScreenshot", { format: "png" });
        fs.writeFileSync(dst, Buffer.from(shot.data, "base64"));
      },
    };
  } catch (e) { close(); throw e; }
}

// JSON arguments preserve filenames and labels without relying on comma-separated lists.
function tile(shots, dst, width, columns, labels = []) {
  execFileSync("python3", ["-c", `
import json, sys
from PIL import Image, ImageDraw
shots, dst, w, cols, labels = json.loads(sys.argv[1]), sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), json.loads(sys.argv[5])
h = w * 9 // 16; cols = min(cols, len(shots)); rows = (len(shots) + cols - 1) // cols
band = 28 if labels else 0; gap = 4
sheet = Image.new('RGB', (cols*w+(cols-1)*gap, rows*(h+band)+(rows-1)*gap), 'white')
draw = ImageDraw.Draw(sheet)
for i, shot in enumerate(shots):
    x, y = (i % cols)*(w+gap), (i // cols)*(h+band+gap)
    if labels: draw.text((x+4, y+6), labels[i], fill='black')
    with Image.open(shot) as image: sheet.paste(image.convert('RGB').resize((w,h), getattr(Image, 'Resampling', Image).LANCZOS), (x,y+band))
sheet.save(dst, quality=85)
`, JSON.stringify(shots), dst, String(width), String(columns), JSON.stringify(labels)], { timeout: 60_000, stdio: ["ignore", "pipe", "pipe"] });
}

async function renderScenes(name, scenes, { sets, labels = [], width = 480, columns = 4 } = {}) {
  const dir = path.join(work, name);
  fs.mkdirSync(path.join(dir, "scenes"), { recursive: true });
  const plan = { duration: scenes.length, kit: kitDir, pieces: [path.join(kitDir, "pieces")], sets,
    scenes: scenes.map((s, i) => {
      const id = "s" + String(i).padStart(3, "0"), file = path.join(dir, "scenes", id + ".html");
      fs.writeFileSync(file, `<section class="vs-scene" id="${id}"><svg viewBox="0 0 1920 1080">${s.svg}</svg>
<script type="text/scene">${JSON.stringify(s.actions).replace(/</g, "\\u003c")}</script></section>`);
      return { id, file, at: i, dur: 1 };
    }) };
  if (!scenes.length) throw new Error("No poses or faces to render");
  fs.writeFileSync(path.join(dir, "plan.json"), JSON.stringify(plan));
  const result = readBuilder(path.join(dir, "plan.json"), path.join(dir, "page"));
  if (!result.ok) throw new Error((result.problems || ["Page build failed"]).join("; "));
  const browser = await (browserPromise ??= openBrowser());
  const shots = [];
  for (let i = 0; i < scenes.length; i++) {
    const shot = path.join(dir, "shot-" + i + ".png");
    await browser.capture(path.join(dir, "page", "index.html"), shot, i + 0.9);
    shots.push(shot);
  }
  tile(shots, path.join(sheets, name + ".jpg"), width, columns, labels);
}

function readBuilder(plan, page) {
  const result = execFileSync(process.execPath, [path.join(RENDER, "tools", "assemble_scenes.mjs"), plan, page],
    { timeout: 60_000, stdio: ["ignore", "pipe", "pipe"] }).toString();
  return JSON.parse(result.trim().split("\n").pop());
}

async function rigSheet(name, rig, kit) {
  if (!/^[\w-]+$/.test(name)) throw new Error("Rig name must use letters, numbers, underscores or hyphens");
  const poses = Object.keys(rig.poses ?? {});
  const faces = Object.keys(rig.faceMap ?? {}).length ? Object.keys(rig.faceMap) : ["neutral"];
  const items = [...poses.map((pose) => ({ label: `pose: ${pose}`, pose, face: rig.defaultFace ?? faces[0] })),
    ...faces.map((face) => ({ label: `face: ${face}`, pose: rig.defaultPose ?? poses[0], face, close: true }))];
  const svg = fs.readFileSync(path.join(kitDir, rig.svg), "utf8");
  const vb = (svg.match(/viewBox\s*=\s*["']([^"']+)["']/)?.[1] ?? "0 -500 1 500").split(/[\s,]+/).map(Number);
  const top = vb[1];
  if (!Number.isFinite(top) || top >= 0) throw new Error("Rig viewBox must have its top above the feet at y=0");
  const canvas = xml(kit.palette?.canvas ?? "#f3ecdc");
  const scenes = items.map((it) => {
    const scale = it.close ? Math.min(3, 700 / Math.abs(top)) : Math.min(1.6, 820 / Math.abs(top));
    const y = it.close ? 180 - top * scale : 1000;
    return { svg: `<rect width="1920" height="1080" fill="${canvas}"/>
<text x="60" y="110" font-size="64" font-family="Helvetica" fill="#333">${xml(it.label)}</text><g id="who" data-rig="${xml(name)}"/>`,
      actions: { rigs: { who: { at: [[0, [960, y]]], scale, pose: [[0, it.pose]], face: [[0, it.face]] } } } };
  });
  await renderScenes("rig-" + name, scenes);
}

async function piecesSheet(kit) {
  const browser = await (browserPromise ??= openBrowser());
  const dir = path.join(work, "pieces");
  fs.mkdirSync(dir, { recursive: true });
  const shots = [];
  for (const file of files(path.join(out, "pieces"), ".svg")) {
    try {
      const source = fs.readFileSync(path.join(out, "pieces", file));
      const page = path.join(dir, "piece.html"), shot = path.join(dir, String(shots.length) + ".png");
      fs.writeFileSync(page, `<!doctype html><html><meta charset="utf-8"><style>
html,body { margin:0; width:1920px; height:1080px; overflow:hidden; background:${xml(kit.palette?.canvas ?? "#f3ecdc")}; }
#piece { position:absolute; left:120px; top:60px; width:1680px; height:840px; object-fit:contain; }
p { position:absolute; top:950px; width:100%; margin:0; text-align:center; font:56px Helvetica,Arial,sans-serif; color:#333; }
</style><img id="piece" src="data:image/svg+xml;base64,${source.toString("base64")}"><p>${xml(file.slice(0, -4))}</p></html>`);
      await browser.capture(page, shot);
      shots.push(shot);
    } catch (e) { warn("pieces/" + file + ": " + e.message); }
  }
  if (!shots.length) throw new Error("No readable SVG pieces");
  tile(shots, path.join(sheets, "pieces.jpg"), 480, 4);
}

async function setSheet(file, kit) {
  const set = readJSON(path.join(kitDir, "sets", file));
  if (!/^[\w-]+$/.test(set.id ?? "")) throw new Error("Set needs an id with letters, numbers, underscores or hyphens");
  const rig = Object.keys(kit.rigs ?? {})[0];
  // Use only this set in the builder, so another broken set cannot spoil its sheet.
  const sets = path.join(work, "set-" + file.slice(0, -5), "sets");
  fs.mkdirSync(sets, { recursive: true });
  fs.writeFileSync(path.join(sets, file), JSON.stringify(set));
  for (const layer of ["back", "front"]) for (const item of set[layer] ?? []) {
    if (!fs.existsSync(path.join(kitDir, "pieces", item.piece + ".svg"))) throw new Error("Missing piece " + item.piece);
  }
  const framings = Object.keys(set.framings ?? {}).length ? Object.keys(set.framings) : ["wide"];
  const markers = Object.entries(set.spots ?? {}).map(([name, [x, y]]) =>
    `<g><circle cx="${x}" cy="${y}" r="9" fill="#e5484d" stroke="#fff" stroke-width="3"/>
<text x="${x + 14}" y="${y - 12}" font-size="30" font-family="Helvetica" fill="#e5484d" stroke="#fff" stroke-width="6" paint-order="stroke">${xml(name)}</text></g>`).join("");
  const scenes = framings.map((framing) => ({
    svg: `<rect width="1920" height="1080" fill="${xml(kit.palette?.canvas ?? "#ffffff")}"/>
<use href="set:${xml(set.id)}" layer="back"/>${rig ? `<g id="who" data-rig="${xml(rig)}"/>` : ""}
<use href="set:${xml(set.id)}" layer="front"/>${markers}`,
    actions: { set: set.id, camera: [[0, framing]], rigs: rig ? { who: {
      pose: [[0, set.character?.pose ?? kit.rigs[rig].defaultPose ?? "stand"]],
    } } : {} },
  }));
  await renderScenes("set-" + file.slice(0, -5), scenes,
    { sets, labels: framings.map((f) => `${set.id} · ${f}`), width: 640, columns: 3 });
}

async function attempt(name, render) {
  try { await render(); made.push("out/sheets/" + name + ".jpg"); }
  catch (e) { warn(name + ": " + e.message); }
}

fs.mkdirSync(out, { recursive: true });
fs.rmSync(sheets, { recursive: true, force: true });
fs.mkdirSync(sheets, { recursive: true });
try {
  const job = readJSON(path.join(here, "render.json"));
  if (job.type !== "drawings") throw new Error('render.json must have type "drawings"');
  fs.rmSync(work, { recursive: true, force: true });
  fs.mkdirSync(kitDir, { recursive: true });
  const channelKit = job.kit && path.join(RENDER, "kits", job.kit, "anim");
  if (channelKit && fs.existsSync(channelKit)) fs.cpSync(channelKit, kitDir, { recursive: true });
  // Job assets replace the channel's versions; the first kit job needs no existing channel kit.
  for (const file of ["kit.json", "rigs", "fonts", "pieces", "sets", ...files(out, ".svg")]) {
    if (fs.existsSync(path.join(out, file))) fs.cpSync(path.join(out, file), path.join(kitDir, file), { recursive: true });
  }
  let kit = {};
  try { kit = readJSON(path.join(kitDir, "kit.json")); } catch (e) { warn("kit.json: " + e.message); }
  if (fs.existsSync(path.join(out, "kit.json"))) {
    for (const [name, rig] of Object.entries(kit.rigs ?? {})) await attempt("rig-" + name, () => rigSheet(name, rig, kit));
  }
  if (files(path.join(out, "pieces"), ".svg").length) await attempt("pieces", () => piecesSheet(kit));
  for (const file of files(path.join(out, "sets"), ".json")) await attempt("set-" + file.slice(0, -5), () => setSheet(file, kit));
} catch (e) { warn(e.message); }
finally {
  if (browserPromise) { try { (await browserPromise).close(); } catch {} }
  // Chrome may still be writing its profile for a moment after it's told to close: retry, and never let tidying up
  // fail a render whose sheets are made.
  try { fs.rmSync(work, { recursive: true, force: true, maxRetries: 10, retryDelay: 300 }); } catch {}
  fs.writeFileSync(path.join(sheets, "sheets.json"), JSON.stringify({ made, warnings }, null, 2) + "\n");
}
console.log(JSON.stringify({ made, warnings }));
