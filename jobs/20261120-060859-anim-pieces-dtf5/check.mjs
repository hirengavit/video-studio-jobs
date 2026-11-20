import fs from "node:fs";
const want = JSON.parse(fs.readFileSync("inputs/pieces.json", "utf8"));
const sets = fs.existsSync("inputs/sets.json") ? JSON.parse(fs.readFileSync("inputs/sets.json", "utf8")) : [];
const library = new Set(["comment-box","envelope-article","old-book-stack","post-counter-icon","round-postmark","signature-slip","document-card-blank","govt-building-icon","icon-boat","icon-mail-van","icon-plane","icon-train","magnifier-icon","postal-ladder","icon-act-document","icon-army-mailbag","icon-insurance-shield","icon-money-order","icon-passbook","postmark-round","stamp-card-red","city-pin","icon-common-seal","icon-foundation-stone","icon-globe-mail","icon-laptop-code","icon-mail-plane","icon-old-chart","icon-parcel","icon-sports-medal","icon-stamp-sheet","icon-stores-carton","icon-training-cap","icon-calendar-page","icon-clock","icon-envelope-letter","icon-house-small","icon-houseboat","icon-ledger-book","icon-mail-bag-red","icon-moon-star","icon-mountain-peak","icon-nameplate","icon-navy-ship","icon-parcel-box","icon-pin-tag","icon-post-office-building","icon-rulebook-2024","icon-town-skyline","icon-village-huts","pigeonhole-rack","letter-box-pillar","newspaper-bundle","post-office-front","timings-notice-board","aerogramme","embossed-envelope","franking-impression","franking-machine","letter-card","office-safe","phone-screen","postage-due-mark","postage-stamp","postcard-blank","postmark","qr-tile","registration-envelope","rupee-cash","scales-icon","business-reply-card","envelope-face-large","invoice-sheet","letter-box","mail-bag","non-postage-labels","parcel-with-tag","postal-date-stamp","rubber-date-stamp","accounting-meter","adhesive-stamp","calendar-page","lead-seal","licence-certificate","psd-chip","rmfm-digital-frank","rmfs-server","window-ticket","airtight-tin","booking-kiosk","booking-receipt","ceramic-cup","clock-face","glass-bottle","letter-box-icon","phone-app","protective-box","regulations-book","straight-pin","wax-seal","window-envelope","wooden-case","icon-airplane","icon-city-pin","icon-dak-bhawan","icon-designation-plate","icon-envelope","icon-forms-stack","icon-graduation-cap","icon-notice-document","icon-passbook-rupee","icon-tech-laptop","icon-village-post-office","icon-welfare-hands","step-ladder-diagram","account-ledger","address-envelope","calendar-sheet","mail-van","mobile-post-van","wall-clock","bo-hours-register","crescent-moon","parcel-box","passbook","week-day-tile","cancelled-stamp","counter-receipt","letter-scale","packet-stack","perforated-initials-stamp","qr-code-stand","smartphone-blank","stamp-sheet","stamp-tin-box","calendar-quarters","city-big","deposit-gauge","franchisee-outlet","packet-with-tag","reply-label","rupee-coin","town-small","cut-out-label","domestic-envelope","franking-die","mail-bundle","post-office-building","posting-counter","prepaid-phone","record-book","rupee-deposit"]);
const errors = [];
const drawn = fs.existsSync("out/pieces") ? fs.readdirSync("out/pieces").filter((f) => f.endsWith(".svg")).map((f) => f.slice(0, -4)) : [];
for (const id of drawn) {
  const f = "out/pieces/" + id + ".svg";
  const svg = fs.readFileSync(f, "utf8");
  if (!/<svg[\s>]/.test(svg) || !/<\/svg>\s*$/.test(svg)) errors.push(f + ": not a complete SVG");
  for (const bad of ["<script", "<image", "<foreignObject", "href=\"http"]) if (svg.includes(bad)) errors.push(f + ": must not contain " + bad);
  // Words drawn into a piece must be part of the object and named in its description (never sample text).
  const listed = (() => { try { return JSON.parse(fs.readFileSync("out/pieces.json", "utf8")).find((x) => x.id === id) || {}; } catch { return {}; } })();
  const desc = ((listed.description || (want.find((w) => w.id === id) || {}).description || "")).toLowerCase();
  for (const m of svg.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)) {
    const words = m[1].replace(/<[^>]+>/g, " ").toLowerCase().match(/[a-z]{3,}/g) || [];
    if (words.length && !words.slice(0, 3).every((w) => desc.includes(w))) errors.push(f + ': contains the text "' + m[1].replace(/<[^>]+>/g, " ").trim().slice(0, 40) + '": pieces carry no sample text (the scene writes its own words); remove it, or name that lettering in the description if it is part of the object');
  }
}
for (const p of want) {
  const f = "out/pieces/" + p.id + ".svg";
  if (!fs.existsSync(f)) { errors.push(f + ": missing"); continue; }
  const svg = fs.readFileSync(f, "utf8");
  for (const a of p.anchors || []) if (!svg.includes('data-anchor="' + a + '"')) errors.push(f + ": missing anchor " + a);
}
for (const s of sets) {
  const f = "out/sets/" + s.id + ".json";
  let d;
  try { d = JSON.parse(fs.readFileSync(f, "utf8")); } catch { errors.push(f + ": missing or not valid JSON"); continue; }
  if (!d.description) errors.push(f + ": needs a description");
  const layers = [...(d.back || []), ...(d.front || [])];
  if (!Array.isArray(d.back) || !Array.isArray(d.front ?? [])) errors.push(f + ": back and front must be lists");
  if (!layers.length) errors.push(f + ": a set needs at least one piece");
  for (const l of layers) {
    if (!library.has(l.piece) && !drawn.includes(l.piece)) errors.push(f + ": piece " + l.piece + " is neither in the library nor in out/pieces/");
    if (l.transform && !/^(\s*(translate|scale|rotate)\([^)]*\))+\s*$/.test(l.transform)) errors.push(f + ": transform of " + l.piece + " must be translate(..)/scale(..)/rotate(..)");
  }
  const spots = Object.entries(d.spots || {});
  if (!spots.length) errors.push(f + ": needs spots");
  for (const [k, p] of spots) if (!Array.isArray(p) || p.length !== 2 || !(p[0] >= 40 && p[0] <= 1880 && p[1] >= 40 && p[1] <= 1060)) errors.push(f + ": spot " + k + " must be [x, y] inside the frame");
  for (const k of s.spots || []) if (!d.spots?.[k]) errors.push(f + ": the storyboard needs spot " + k);
  const fr = Object.entries(d.framings || {});
  if (!fr.length) errors.push(f + ": needs framings");
  for (const [k, c] of fr) if (!(c && c.zoom >= 1 && c.zoom <= 3)) errors.push(f + ": framing " + k + " needs a zoom from 1 to 3");
  for (const k of s.framings || []) if (!d.framings?.[k]) errors.push(f + ": the storyboard needs framing " + k);
  if (d.character?.spot && !d.spots?.[d.character.spot]) errors.push(f + ": character.spot " + d.character.spot + " isn't one of its spots");
  if (d.character?.pose && ![].includes(d.character.pose)) errors.push(f + ": character.pose " + d.character.pose + " isn't a kit pose");
}
try { if (!Array.isArray(JSON.parse(fs.readFileSync("out/pieces.json", "utf8")))) throw 0; } catch { errors.push("out/pieces.json: missing or not a JSON list"); }
if (errors.length) { console.log(errors.join("\n")); process.exit(1); }
console.log("PASS");
