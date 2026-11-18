#!/usr/bin/env node
// Builds one HyperFrames page from an animated video's scene files.
//
//   node assemble_scenes.mjs <plan.json> <out dir>
//
// plan.json:
//   { "duration": 42.5, "canvas": "#f3ecdc", "voice": "/abs/voice.wav" | null,
//     "kit": "/abs/kit dir",                      // kit.json + rigs/<name>.svg (+ fonts/)
//     "pieces": ["/abs/pieces dir", …],           // library pieces for <use href="piece:id">
//     "sets": "/abs/sets dir",                    // optional: sets for <use href="set:id" layer="back|front">
//     "scenes": [{ "id": "s001", "file": "/abs/scenes/s001.html", "at": 0, "dur": 4.2 }, …],
//     "state": { "pitcher": [[0, 1], [38.5, 0.6], …] },   // optional shared values over video time
//     "materials": { "coin": { "file": "/abs/coin.jpg", "kind": "photo" }, "rain": { "file": "/abs/rain.mp4", "kind": "clip", "seconds": 7 } } }
//                                                 // real photos and clips for <image href="photo:id"> and <video src="clip:id">
//
// What it does to each scene file: pastes library pieces in place of <use href="piece:…">, fills
// <g data-rig="…"> with the kit's character drawing, sets the scene's time, and moves its
// <script type="text/scene"> into one script at the end of the page (HyperFrames needs page scripts
// outside the timed content).
import fs from "node:fs";
import path from "node:path";

const HERE = path.dirname(new URL(import.meta.url).pathname);
const ENGINE = path.join(HERE, "..", "engine", "scene.js");
const GSAP = path.join(HERE, "..", "vendor", "gsap.min.js");

const [planFile, out] = process.argv.slice(2);
const plan = JSON.parse(fs.readFileSync(planFile, "utf8"));
const kit = JSON.parse(fs.readFileSync(path.join(plan.kit, "kit.json"), "utf8"));
fs.mkdirSync(path.join(out, "assets"), { recursive: true });
fs.copyFileSync(ENGINE, path.join(out, "assets/scene.js"));
fs.copyFileSync(GSAP, path.join(out, "assets/gsap.min.js"));
if (plan.voice) fs.copyFileSync(plan.voice, path.join(out, "assets/voice.wav"));
const fontDir = path.join(plan.kit, "fonts");
const fontFaces = [];
// Two fonts always travel with the page, so renders never fetch fonts from the network: Caveat (hand
// lettering) and Inter (clean). A kit can add its own under fonts.files.
const NM = path.join(HERE, "..", "node_modules");
for (const [family, file, weight] of [
  ["Caveat", "@fontsource/caveat/files/caveat-latin-400-normal.woff2", "400"],
  ["Caveat", "@fontsource/caveat/files/caveat-latin-700-normal.woff2", "700"],
  ["Inter", "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", "100 900"],
]) {
  const src = path.join(NM, file);
  if (!fs.existsSync(src)) continue;
  fs.copyFileSync(src, path.join(out, "assets", path.basename(src)));
  fontFaces.push(`@font-face { font-family: "${family}"; src: url("assets/${path.basename(src)}") format("woff2"); font-weight: ${weight}; }`);
}
// Fonts a scene brings with it (plan.fonts, e.g. the shared outro's), by absolute path.
for (const f of plan.fonts ?? []) {
  if (!fs.existsSync(f.path)) continue;
  fs.copyFileSync(f.path, path.join(out, "assets", path.basename(f.path)));
  fontFaces.push(`@font-face { font-family: "${f.family}"; src: url("assets/${path.basename(f.path)}"); font-weight: ${f.weight ?? 400};${f.style ? ` font-style: ${f.style};` : ""}${f.unicodeRange ? ` unicode-range: ${f.unicodeRange};` : ""} }`);
}
// A kit font may be split by script (unicodeRange: the browser picks the file that covers each letter) and italic.
for (const f of kit.fonts?.files ?? []) {
  fs.copyFileSync(path.join(fontDir, f.file), path.join(out, "assets", f.file));
  fontFaces.push(`@font-face { font-family: "${f.family}"; src: url("assets/${f.file}"); font-weight: ${f.weight ?? 400};${f.style ? ` font-style: ${f.style};` : ""}${f.unicodeRange ? ` unicode-range: ${f.unicodeRange};` : ""} }`);
}

// ---------------------------------------------------------------- pieces and rigs
const pieceCache = new Map();
function svgBody(file) {
  const svg = fs.readFileSync(file, "utf8");
  const open = svg.match(/<svg\b([^>]*)>/);
  const close = svg.lastIndexOf("</svg>");
  if (!open || close < 0) return null;
  const keep = [...open[1].matchAll(/\s(fill|stroke|stroke-width|stroke-linecap|stroke-linejoin)="([^"]*)"/g)].map((m) => ` ${m[1]}="${m[2]}"`).join("");
  const inner = svg.slice(open.index + open[0].length, close).replace(/<rect\b[^>]*\bwidth="400"[^>]*\bheight="400"[^>]*\/?>/, "");
  return { attrs: keep, inner };
}
function piece(id) {
  if (pieceCache.has(id)) return pieceCache.get(id);
  let body = null;
  for (const d of plan.pieces ?? []) {
    const f = path.join(d, `${id}.svg`);
    if (fs.existsSync(f)) {
      body = svgBody(f);
      break;
    }
  }
  pieceCache.set(id, body);
  return body;
}
/** Ids inside a pasted drawing get a prefix so two copies (or two scenes) never clash. */
function scopeIds(markup, prefix) {
  const ids = [...markup.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  let s = markup;
  for (const id of new Set(ids)) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    s = s
      .replace(new RegExp(`\\sid="${esc}"`, "g"), ` id="${prefix}-${id}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, "g"), `url(#${prefix}-${id})`)
      .replace(new RegExp(`href="#${esc}"`, "g"), `href="#${prefix}-${id}"`);
  }
  return s;
}

// Sets: a place built once, drawn as its back layer (behind the character) and front layer (in front of it).
const sets = {};
if (plan.sets && fs.existsSync(plan.sets))
  for (const f of fs.readdirSync(plan.sets).filter((x) => x.endsWith(".json"))) {
    const d = JSON.parse(fs.readFileSync(path.join(plan.sets, f), "utf8"));
    if (d.id) sets[d.id] = d;
  }
function setLayer(id, layer) {
  const d = sets[id];
  if (!d) return null;
  return (d[layer] ?? [])
    .map((l) => {
      const p = piece(l.piece);
      if (!p) return `<!-- set ${id}: no piece ${l.piece} -->`;
      return `<g data-piece="${l.piece}"${l.transform ? ` transform="${l.transform}"` : ""}${p.attrs}>${scopeStyles(p.inner, `[data-piece="${l.piece}"]`)}</g>`;
    })
    .join("");
}

const problems = [];
const rigKits = {};
const scripts = [];
const sections = [];
const clips = [];
let blinkCount = 0;
for (const sc of plan.scenes) {
  let html = fs.readFileSync(sc.file, "utf8");
  // The scene's action list.
  const m = html.match(/<script\s+type="text\/scene"\s*>([\s\S]*?)<\/script>/);
  html = html.replace(/<script\s+type="text\/scene"\s*>[\s\S]*?<\/script>/, "");
  if (!m) problems.push(`${sc.id}: no <script type="text/scene"> block`);
  // Sets: each layer becomes its pieces, placed as the set says.
  html = html.replace(/<use\b[^>]*\bhref="set:([\w-]+)"[^>]*?(?:\/>|>\s*<\/use>)/g, (tag, id) => {
    const layer = tag.match(/\blayer="(back|front)"/)?.[1] ?? "back";
    const body = setLayer(id, layer);
    if (body === null) {
      problems.push(`${sc.id}: no set "${id}" in the library`);
      return "";
    }
    return `<g data-set="${id}" data-set-layer="${layer}">${body}</g>`;
  });
  // Real photos: <image href="photo:id"> points at the file, copied next to the page.
  const mats = plan.materials ?? {};
  const useMat = (id, kind) => {
    const m = mats[id];
    if (!m || m.kind !== kind || !fs.existsSync(m.file)) return null;
    fs.mkdirSync(path.join(out, "assets", "m"), { recursive: true });
    const name = path.basename(m.file);
    if (!fs.existsSync(path.join(out, "assets", "m", name))) fs.copyFileSync(m.file, path.join(out, "assets", "m", name));
    return { src: `assets/m/${name}`, seconds: m.seconds, faces: m.faces };
  };
  html = html.replace(/(<image\b[^>]*?\b(?:xlink:)?href=")photo:([\w-]+)"/g, (all, head, id) => {
    const m = useMat(id, "photo");
    if (!m) problems.push(`${sc.id}: no photo "${id}" in the materials`);
    // A drawing's faces travel with it, so the engine can flag a camera move that pushes one out of the frame.
    return m ? `${head}${m.src}"${m.faces?.length ? ` data-faces="${m.faces.map((b) => b.join(",")).join(";")}"` : ""}` : `${head}"`;
  });
  // Blinks: a drawing with a blink twin next to its file (draw-X-blink.png: the same picture, eyes closed) gets the
  // twin as a hidden copy; the engine shows it for a moment every few seconds, so a held drawing never looks frozen.
  html = html.replace(/<image\b[^>]*?\bhref="assets\/m\/(draw-[\w-]+?)\.png"[^>]*?(?:\/>|>\s*<\/image>)/g, (tag, name) => {
    const m = mats[name];
    const twin = m && path.join(path.dirname(m.file), `${name}-blink.png`);
    if (!twin || !fs.existsSync(twin)) return tag;
    if (!fs.existsSync(path.join(out, "assets", "m", `${name}-blink.png`))) fs.copyFileSync(twin, path.join(out, "assets", "m", `${name}-blink.png`));
    const k = String(++blinkCount);
    const open = tag.replace(/^<image\b/, `<image data-blink-src="${k}"`);
    const copy = tag.replace(/\bid="[^"]*"\s*/, "").replace(/\bhref="assets\/m\/[\w-]+\.png"/, `href="assets/m/${name}-blink.png"`).replace(/^<image\b/, `<image data-blink="${k}" style="opacity:0"`).replace(/\sdata-faces="[^"]*"/, "");
    return open + copy;
  });
  // Clips: <foreignObject x y width height><video src="clip:id" data-at="1.2" data-trim="0"/></foreignObject>, times in
  // the scene's seconds. HyperFrames' render loses whatever follows a <video> inside a page, so the clip itself goes
  // at the very end of the page and the scene keeps an empty placeholder box; the engine lays the clip over its
  // placeholder every frame (position, size, fades), so it still follows the scene's moves and the camera.
  html = html.replace(/<foreignObject\b([^>]*)>\s*<video\b([^>]*?)\bsrc="clip:([\w-]+)"([^>]*?)(?:\/>|>\s*<\/video>)\s*<\/foreignObject>/g, (all, fo, a, id, b) => {
    const m = useMat(id, "clip");
    if (!m) {
      problems.push(`${sc.id}: no clip "${id}" in the materials`);
      return `<foreignObject${fo}></foreignObject>`;
    }
    const attrs = `${a} ${b}`;
    const at = Math.max(0, Number(attrs.match(/\bdata-at="([\d.]+)"/)?.[1] ?? 0));
    const trim = Math.max(0, Number(attrs.match(/\bdata-trim="([\d.]+)"/)?.[1] ?? 0));
    const want = Number(attrs.match(/\bdata-duration="([\d.]+)"/)?.[1] ?? sc.dur - at);
    const len = Math.max(0.1, Math.min(want, sc.dur - at, (m.seconds ?? 1e9) - trim));
    const fit = attrs.match(/object-fit:\s*(\w+)/)?.[1] ?? "cover";
    const radius = attrs.match(/border-radius:\s*([\d.]+)px/)?.[1] ?? "0";
    const uid = `${sc.id}-clip${clips.length + 1}`;
    clips.push(`<video data-for="${uid}" src="${m.src}" muted="muted" playsinline data-start="${(sc.at + at).toFixed(3)}" data-duration="${len.toFixed(3)}" data-media-start="${trim.toFixed(3)}" data-radius="${radius}" style="position:absolute;left:0;top:0;width:0;height:0;object-fit:${fit};display:none"></video>`);
    return `<foreignObject${fo} data-clip="${uid}"></foreignObject>`;
  });
  // Library pieces.
  html = html.replace(/<use\b[^>]*\bhref="piece:([\w-]+)"[^>]*?(?:\/>|>\s*<\/use>)/g, (tag, id) => {
    const p = piece(id);
    if (!p) {
      problems.push(`${sc.id}: no library piece "${id}"`);
      return "";
    }
    const t = tag.match(/\btransform="([^"]*)"/)?.[1] ?? "";
    const cls = tag.match(/\bclass="([^"]*)"/)?.[1];
    const own = tag.match(/\sid="([^"]+)"/)?.[1];
    return `<g data-piece="${id}"${own ? ` id="${own}"` : ""}${cls ? ` class="${cls}"` : ""}${t ? ` transform="${t}"` : ""}${p.attrs}>${scopeStyles(p.inner, `[data-piece="${id}"]`)}</g>`;
  });
  // Characters: fill each <g data-rig="name"> with the kit drawing (its ids stay local to the rig).
  // (Lazy: an empty placeholder right before its group's closing tag must not swallow that tag.)
  html = html.replace(/<g\b([^>]*?)\bdata-rig="([\w-]+)"([^>]*?)(\/>|>\s*<\/g>)/g, (tag, a, name, b) => {
    const r = kit.rigs?.[name];
    const file = r && path.join(plan.kit, r.svg);
    if (!r || !fs.existsSync(file)) {
      problems.push(`${sc.id}: no character "${name}" in the kit`);
      return "";
    }
    rigKits[name] = r;
    const body = svgBody(file);
    return `<g${a}data-rig="${name}"${b}><g${body.attrs}>${scopeStyles(body.inner, `[data-rig="${name}"]`)}</g></g>`;
  });
  for (const m of html.matchAll(/<g\b[^>]*\bdata-rig="([\w-]+)"[^>]*>(?!\s*<g[^>]*>\s*<)/g)) if (!kit.rigs?.[m[1]]) problems.push(`${sc.id}: no character "${m[1]}" in the kit`);
  if (/<g\b[^>]*\bdata-rig="[\w-]+"[^>]*[^/]>\s*<(?!g\b|\/g)/.test(html)) problems.push(`${sc.id}: a character placeholder <g data-rig> must be empty (write <g id="host" data-rig="host"/>)`);
  html = html.replace(/<section\b([^>]*)>/, (tag, attrs) => {
    const clean = attrs.replace(/\sdata-(at|dur)="[^"]*"/g, "");
    return `<section${clean} data-at="${sc.at.toFixed(3)}" data-dur="${sc.dur.toFixed(3)}">`;
  });
  // Ids get the scene id as a prefix so scenes never clash; the engine still finds them by their
  // original names within the scene.
  const prefix = sc.id;
  const inner = html.replace(/^[\s\S]*?<section\b[^>]*>/, "").replace(/<\/section>\s*$/, "");
  const open = html.match(/<section\b[^>]*>/)[0];
  const scoped = scopeIds(inner, prefix);
  const actions = m ? m[1] : "{}";
  sections.push(`${open}${scoped}</section>`);
  // Each scene's code travels as data and the engine compiles it on its own (HyperFrames bundles a page's
  // scripts together, so a syntax error in one script tag would still stop every scene).
  scripts.push(`<script type="application/json" class="vs-src" data-scene="${sc.id}">${JSON.stringify(actions.trim()).replace(/</g, "\\u003c")}</script>`);
}

/** Kit CSS may be written as text or as {selector: declarations}. */
function cssText(css) {
  if (!css) return "";
  if (typeof css === "string") return css;
  return Object.entries(css)
    .map(([sel, body]) => `${sel} { ${typeof body === "string" ? body : Object.entries(body).map(([k, v]) => `${k}: ${v}`).join("; ")} }`)
    .join("\n");
}
/** Styles inside a piece or character apply only to it (never to other pieces or scenes). */
function scopeStyles(markup, scope) {
  return markup.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/g, (all, css) => {
    const scoped = css.replace(/([^{}]+)\{/g, (m, sels) => (/^\s*@/.test(sels) ? m : `${sels.split(",").map((x) => `${scope} ${x.trim()}`).join(", ")} {`));
    return `<style>${scoped}</style>`;
  });
}

/** The video's frame size: plan.width × plan.height, 1920×1080 by default (a vertical Short is 1080×1920). */
const W = plan.width ?? 1920, H = plan.height ?? 1080;
const portrait = H > W;

/** The channel's fixed frame (a header with a section label and a series tag, say), drawn once above every scene.
 * kit.frame = {svg: "frame.svg", portrait: "frame-portrait.svg"}; a vertical video uses the portrait frame, or none.
 * Slots are elements with data-slot="name", filled from each scene's data-<name> (or plan.frame.<name> as the default). */
function frameLayer() {
  const name = portrait ? kit.frame?.portrait : kit.frame?.svg;
  const file = name && path.join(plan.kit, name);
  if (!file || !fs.existsSync(file)) return "";
  const body = svgBody(file);
  if (!body) return "";
  let inner = scopeIds(scopeStyles(body.inner, "#vs-frame"), "frame");
  for (const [slot, value] of Object.entries(plan.frame ?? {})) inner = inner.replace(new RegExp(`(<[a-z]+\\b[^>]*data-slot="${slot}")`), `$1 data-default="${String(value).replace(/"/g, "&quot;")}"`);
  return `<div id="vs-frame" style="position:absolute;inset:0;pointer-events:none;z-index:100000"><svg viewBox="0 0 ${W} ${H}" style="position:absolute;inset:0;width:${W}px;height:${H}px;overflow:hidden"${body.attrs}>${inner}</svg></div>`;
}
const kitForPage = { ...kit, rigs: {}, sets: Object.fromEntries(Object.entries(sets).map(([id, d]) => [id, { spots: d.spots ?? {}, framings: d.framings ?? {}, character: d.character ?? {} }])) };
for (const [name, r] of Object.entries(kit.rigs ?? {})) kitForPage.rigs[name] = { ...r, svg: undefined };

const dur = plan.duration.toFixed(3);
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=${W}, height=${H}" />
<script src="assets/gsap.min.js"></script>
<script src="assets/scene.js"></script>
<style>
${fontFaces.join("\n")}
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body, #root { width: ${W}px; height: ${H}px; overflow: hidden; background: ${plan.canvas ?? kit.palette?.canvas ?? "#ffffff"}; }
#root { position: relative; }
.vs-scene { position: absolute; inset: 0; overflow: hidden; background: ${plan.canvas ?? kit.palette?.canvas ?? "#ffffff"}; }
.vs-scene > svg { position: absolute; inset: 0; width: ${W}px; height: ${H}px; overflow: hidden; }
text:not([font-family]) { font-family: ${JSON.stringify(kit.fonts?.default ?? "Caveat")}, "Inter", sans-serif; }
${cssText(kit.css)}
</style>
<script>S.useKit(${JSON.stringify(kitForPage)}); S.useState(${JSON.stringify(plan.state ?? {})});</script>
</head>
<body>
<div id="root" data-composition-id="main" data-start="0" data-duration="${dur}" data-fps="30" data-width="${W}" data-height="${H}">
${sections.join("\n")}
${frameLayer()}
${plan.voice ? `<audio id="voice" src="assets/voice.wav" data-start="0" data-duration="${dur}" data-track-index="9"></audio>` : ""}
${clips.join("\n")}
</div>
${scripts.join("\n")}
<script>
S.loadScenes();
const tl = gsap.timeline({ paused: true });
tl.to(S.clock(), { t: ${dur}, duration: ${dur}, ease: "none" }, 0);
window.__timelines = window.__timelines || {};
window.__timelines["main"] = tl;
S.start();
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(out, "index.html"), page);
fs.writeFileSync(
  path.join(out, "scenes.json"),
  JSON.stringify(plan.scenes.map((s) => ({ id: s.id, at: s.at, dur: s.dur, inDur: Number(fs.readFileSync(s.file, "utf8").match(/data-in-dur="([\d.]+)"/)?.[1] ?? (/data-in="(?!cut)/.test(fs.readFileSync(s.file, "utf8")) ? 0.5 : 0)) }))),
);
console.log(JSON.stringify({ ok: problems.length === 0, problems }));
