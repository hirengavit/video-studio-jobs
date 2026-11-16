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
const kit = path.join(RENDER, "kits", kitName, "anim");
const voice = path.join(here, "inputs", "voice.wav");
const plan = { duration: dur, width: W, height: H, kit, pieces: [path.join(kit, "pieces"), path.join(kit, "..", "pieces")], sets: path.join(kit, "sets"),
  scenes: [{ id, file: scene, at: 0, dur }], materials: {}, ...(fs.existsSync(voice) ? { voice } : {}) };
fs.writeFileSync(path.join(work, "plan.json"), JSON.stringify(plan));
const res = JSON.parse(execFileSync("node", [path.join(RENDER, "tools/assemble_scenes.mjs"), path.join(work, "plan.json"), path.join(work, "page")])
  .toString().trim().split("\n").pop());
if (res.problems?.length) console.log("the engine reports: " + res.problems.join("; "));
const file = path.join(here, "out", "preview.mp4");
execFileSync(process.env.HYPERFRAMES || "hyperframes", ["render", "--quality", "looks", "--fps", "30", "--output", file],
  { cwd: path.join(work, "page"), stdio: "inherit" });
fs.rmSync(work, { recursive: true, force: true });
console.log("wrote out/preview.mp4");
