// Renders a scene job's out/<scene>.html into out/preview.mp4 with the same engine and HyperFrames
// renderer the app uses. Run inside a job folder:  node ../../render/video.mjs
// Needs HyperFrames (HYPERFRAMES=path, default: hyperframes on PATH) and ffmpeg.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const RENDER = path.dirname(new URL(import.meta.url).pathname);
const here = process.cwd();
const { scene: id, dur, kit: kitName, width: W = 1920, height: H = 1080 } = JSON.parse(fs.readFileSync(path.join(here, "render.json"), "utf8"));
const scene = path.join(here, "out", id + ".html");
if (!fs.existsSync(scene)) { console.log("write out/" + id + ".html first"); process.exit(1); }
const work = path.join(here, "out/.video");
fs.rmSync(work, { recursive: true, force: true });
fs.mkdirSync(work, { recursive: true });
// The job's real photos and clips (inputs/materials/<id>.jpg, <id>-cutout.png, <id>.mp4), so photo:<id> and clip:<id>
// show in the video as they do in look.mjs's stills (2026-11-28: the van and invoice photos were missing from MP4s).
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
const voice = path.join(here, "inputs", "voice.wav");
const plan = { duration: dur, width: W, height: H, kit, pieces: [path.join(kit, "pieces"), path.join(kit, "..", "pieces")], sets: path.join(kit, "sets"),
  scenes: [{ id, file: scene, at: 0, dur }], materials: materialsOf(path.join(here, "inputs/materials")), ...(fs.existsSync(voice) ? { voice } : {}) };
fs.writeFileSync(path.join(work, "plan.json"), JSON.stringify(plan));
const res = JSON.parse(execFileSync("node", [path.join(RENDER, "tools/assemble_scenes.mjs"), path.join(work, "plan.json"), path.join(work, "page")])
  .toString().trim().split("\n").pop());
if (res.problems?.length) console.log("the engine reports: " + res.problems.join("; "));
const file = path.join(here, "out", "preview.mp4");
execFileSync(process.env.HYPERFRAMES || "hyperframes", ["render", "--quality", "looks", "--fps", "30", "--output", file],
  { cwd: path.join(work, "page"), stdio: "inherit" });
fs.rmSync(work, { recursive: true, force: true });
console.log("wrote out/preview.mp4");
