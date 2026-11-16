import fs from "node:fs";
const errors = [];
const read = (f) => { try { return fs.readFileSync(f, "utf8"); } catch { errors.push(f + ": missing"); return ""; } };
const count = (s) => s.split(/\s+/).filter(Boolean).length;
// Letters of every script (with their vowel signs) and digits count; punctuation doesn't.
const norm = (s) => s.normalize("NFC").toLowerCase().replace(/[’']/g, "'").replace(/[^\p{L}\p{M}\p{N}' ]+/gu, " ").split(/\s+/).filter(Boolean);
const grams = new Map();
if (fs.existsSync("inputs/transcripts"))
  for (const f of fs.readdirSync("inputs/transcripts")) {
    const w = norm(fs.readFileSync("inputs/transcripts/" + f, "utf8"));
    for (let i = 0; i + 10 <= w.length; i++) grams.set(w.slice(i, i + 10).join(" "), f);
  }
function noCopies(f, text) {
  const w = norm(text);
  for (let i = 0; i + 10 <= w.length; i++) {
    const g = w.slice(i, i + 10).join(" ");
    if (grams.has(g)) { errors.push(f + ": copies " + grams.get(g).replace(/^(ref|channel)-|\.transcript\.txt$/g, "") + " word for word (\"" + g + "…\"). Say it in new words"); return; }
  }
}
function sections(f, text, names) {
  for (const n of names) if (!new RegExp("^##\\s+" + n, "im").test(text)) errors.push(f + ": missing the section \"## " + n + "\"");
}
// The spoken part of a script: the chapters before "Production notes", minus headings and notes. The title
// and the one-line promise above the first chapter aren't spoken.
function spoken(script) {
  const body = script.split(/^#{1,3}\s*Production notes/im)[0];
  const first = body.search(/^##\s/m);
  return (first >= 0 ? body.slice(first) : body).split("\n").filter((l) => !/^\s*#/.test(l) && !/^\s*(\*\*|>|---)/.test(l)).join("\n");
}
const offFile = fs.existsSync("inputs/channel/off-limits.json") ? JSON.parse(fs.readFileSync("inputs/channel/off-limits.json", "utf8")) : {};
// Signature and quoted lines are blocked outright; catchphrases are left to the writer's and reviewer's judgement.
const offLimits = [...(offFile.signature || []), ...(offFile.quoted || [])];
function noSignatureLines(f, text) {
  const t = " " + norm(text).join(" ") + " ";
  for (const p of offLimits) {
    const n = norm(p).join(" ");
    if (n.split(" ").length >= 2 && t.includes(" " + n + " ")) errors.push(f + ": uses the channel's signature line \"" + p + "\"; that belongs to them. Make our own");
  }
}
function checkScript(f, script, low, high) {
  if (!script) return;
  noSignatureLines(f, spoken(script));
  if (!/^#\s+\S/m.test(script)) errors.push(f + ": start with the title as \"# Title\"");
  const chapters = (script.match(/^##\s+(?!Production notes|What changed)/gim) || []).length;
  if (chapters < MIN_CHAPTERS) errors.push(f + ": needs at least " + MIN_CHAPTERS + " chapters headed \"## \" (found " + chapters + ")");
  if (!/^#{1,3}\s*Production notes/im.test(script)) errors.push(f + ": add a \"## Production notes\" section after the script");
  const words = count(spoken(script));
  if (words < low || words > high) errors.push(f + ": the spoken part is " + words + " words; it must be " + low + "–" + high + " for the target length");
  if (/\[[^\]]*\]|\((pause|beat|music|sfx)[^)]*\)/i.test(spoken(script))) errors.push(f + ": stage directions like [..] or (pause) belong in Production notes, not in the spoken lines");
  noCopies(f, spoken(script));
}
function done() { if (errors.length) { console.log(errors.join("\n")); process.exit(1); } console.log("PASS"); }

const MIN_CHAPTERS = 4;
const before = read("inputs/script.md");
const after = read("out/script-final.md");
const asksLength = false;
checkScript("out/script-final.md", after, asksLength ? 20 : 300, asksLength ? 100000 : 100000);
if (after && norm(after.split(/^##\s+What changed/im)[0]).join(" ") === norm(before.split(/^##\s+What changed/im)[0]).join(" ")) errors.push("out/script-final.md: nothing changed yet; make the requested change");
if (after && !/^##\s+What changed/im.test(after)) errors.push("out/script-final.md: end with \"## What changed\"");
done();
