import fs from "node:fs";
import vm from "node:vm";
const f = "out/s146.html";
const dur = 11.730;
const errors = [];
const html = fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "";
if (!html) { console.log(f + ": missing"); process.exit(1); }
if (!fs.existsSync("out/look.jpg") && !fs.existsSync("out/look-failed.txt")) errors.push("run node look.mjs and look at out/look.jpg before finishing");
if (fs.existsSync("out/look.jpg") && fs.statSync("out/look.jpg").mtimeMs < fs.statSync(f).mtimeMs - 2000) errors.push("out/" + "s146" + ".html changed after your last look: run node look.mjs again and check the picture");
if (!new RegExp('<section[^>]*class="vs-scene"[^>]*id="s146"|<section[^>]*id="s146"[^>]*class="vs-scene"').test(html)) errors.push(f + ': needs <section class="vs-scene" id="s146">');
if ((html.match(/<svg\b/g) || []).length < 1 || !/<svg[^>]*viewBox="0 0 1920 1080"/.test(html)) errors.push(f + ': the scene svg needs viewBox="0 0 1920 1080"');
const m = html.match(/<script\s+type="text\/scene"\s*>([\s\S]*?)<\/script>/);
let def = null;
if (!m) errors.push(f + ': needs a <script type="text/scene"> block');
else {
  // The scene block is run in a sealed context with a time limit (it's code written by an AI).
  try { def = vm.runInNewContext("(" + m[1] + ")", { S: { rand: () => () => 0.5, clamp: (v) => v, lerp: (a) => a, kf: () => 0 } }, { timeout: 1000 }); }
  catch (e) { errors.push(f + ": the scene block isn't valid: " + e.message); }
}
if ((html.match(/<script\b/g) || []).length > 1) errors.push(f + ': only one <script type="text/scene"> block is allowed');
const verbs = new Set(["draw","write","pop","fade","out","slide","move","grow","pulse","shake","wiggle","float","spin","type","count","color","words","letters","tracking","smear","reveal","stamp","bounce","flip","scatter","strike","underline","highlight","swap","morph","ticker","hold","pour","fall","place","level"]);
const poses = new Set([]);
const faces = new Set([]);
const pieces = new Set(["comment-box","envelope-article","old-book-stack","post-counter-icon","round-postmark","signature-slip","document-card-blank","govt-building-icon","icon-boat","icon-mail-van","icon-plane","icon-train","magnifier-icon","postal-ladder","icon-act-document","icon-army-mailbag","icon-insurance-shield","icon-money-order","icon-passbook","postmark-round","stamp-card-red","city-pin","icon-common-seal","icon-foundation-stone","icon-globe-mail","icon-laptop-code","icon-mail-plane","icon-old-chart","icon-parcel","icon-sports-medal","icon-stamp-sheet","icon-stores-carton","icon-training-cap","icon-calendar-page","icon-clock","icon-envelope-letter","icon-house-small","icon-houseboat","icon-ledger-book","icon-mail-bag-red","icon-moon-star","icon-mountain-peak","icon-nameplate","icon-navy-ship","icon-parcel-box","icon-pin-tag","icon-post-office-building","icon-rulebook-2024","icon-town-skyline","icon-village-huts","pigeonhole-rack","letter-box-pillar","newspaper-bundle","post-office-front","timings-notice-board","aerogramme","embossed-envelope","franking-impression","franking-machine","letter-card","office-safe","phone-screen","postage-due-mark","postage-stamp","postcard-blank","postmark","qr-tile","registration-envelope","rupee-cash","scales-icon","business-reply-card","envelope-face-large","invoice-sheet","letter-box","mail-bag","non-postage-labels","parcel-with-tag","postal-date-stamp","rubber-date-stamp","accounting-meter","adhesive-stamp","calendar-page","lead-seal","licence-certificate","psd-chip","rmfm-digital-frank","rmfs-server","window-ticket","airtight-tin","booking-kiosk","booking-receipt","ceramic-cup","clock-face","glass-bottle","letter-box-icon","phone-app","protective-box","regulations-book","straight-pin","wax-seal","window-envelope","wooden-case","icon-airplane","icon-city-pin","icon-dak-bhawan","icon-designation-plate","icon-envelope","icon-forms-stack","icon-graduation-cap","icon-notice-document","icon-passbook-rupee","icon-tech-laptop","icon-village-post-office","icon-welfare-hands","step-ladder-diagram","account-ledger","address-envelope","calendar-sheet","mail-van","mobile-post-van","wall-clock","bo-hours-register","crescent-moon","parcel-box","passbook","week-day-tile","cancelled-stamp","counter-receipt","letter-scale","packet-stack","perforated-initials-stamp","qr-code-stand","smartphone-blank","stamp-sheet","stamp-tin-box","calendar-quarters","city-big","deposit-gauge","franchisee-outlet","packet-with-tag","reply-label","rupee-coin","town-small","cut-out-label","domestic-envelope","franking-die","mail-bundle","post-office-building","posting-counter","prepaid-phone","record-book","rupee-deposit","counter-window","double-receptacle","pin-icon","sealed-insured-cover","valuables-case","camp-bag","forces-green-envelope","icon-air-force-jet","icon-army-helmet","photograph-print","post-box-wall","qr-code-tile","special-mail-bag","calendar-leaf","envelope-plain","icon-circle-office","intimation-slip","padlock-and-key","post-bag-locked","postman-satchel","smart-delivery-box","attendant-badge","box-key","collection-bag","gps-pin","hour-plate","key-cabinet","letter-box-door-open","mis-sheet","padlock","rented-post-box","ballot-cover","booking-counter","designation-nameplate","icon-camp","icon-globe","service-postcard","service-stamp","signature-stamp","t-stamp-mark","tag-label","airmail-label","clip-and-staple","excel-sheet-icon","film-packet","letter-card-folded","letter-card-open","limited-airlift-label","linear-barcode","paper-sheet-swatch","postal-roll","postal-scale","qms-letter-box","specimen-box","three-forms-icons","transport-icons","acid-bottle","banana-bunch","battery","bee-box","bird-feather","coin-stack","counter-ledge","currency-bundle","explosive-crate","gold-bar","hing-tin","jewellery-box","lottery-ticket","matchbox","medicine-bottle","osmic-acid-pack","perfume-pack","pin","pistol-icon","rakhi","sharp-tool","tray-prohibited","tray-restricted","tray-suspect","two-receptacle-pack","varnish-tin","airtight-case","book-packet-icon","counter-scale","document-roll","envelope-back","fragile-box","liquid-pack-box","packet-no-cover","slide-off-cover","airmail-plane","braille-book-icon","globe-icon","gyan-post-book-icon","handwritten-letter","house-icon","institution-building","open-ended-wrapper","paper-roll","postage-stamp-plain","recorded-media-icons","value-paper"]);
const sets = {"rules-counter":{"spots":["tray-prohibited","tray-restricted","tray-suspect","counter-left","counter-right","tag-prohibited","tag-restricted","tag-suspect","label-prohibited","label-restricted","label-suspect"],"framings":["wide","medium","close","close-prohibited","close-restricted","close-suspect"]}};
const transitions = new Set(["cut","fade","wipe"]);
const moves = {"deny":["smear","ticker","scatter","spin","float","wiggle","shake","bounce","flip","letters"]};
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]));
const late = (t) => typeof t !== "number" || !(t >= 0) || t > dur + 0.05;
if (def) {
  for (const l of def.on || []) {
    if (!verbs.has(l[1])) errors.push("unknown action word '" + l[1] + "' (see SCENE-API.md)");
    if (moves && ((moves.allow && !moves.allow.includes(l[1]) && !["hold", "pour", "fall", "place", "level"].includes(l[1])) || (moves.deny && moves.deny.includes(l[1])))) errors.push("action word '" + l[1] + "' isn't allowed by this channel's kit (moves: " + JSON.stringify(moves) + ")");
    if (late(l[0])) errors.push("action " + l[1] + " " + l[2] + " at " + l[0] + ": times must be between 0 and " + dur);
    if (typeof l[2] === "string") for (const id of l[2].match(/#[\w-]+/g) || []) if (!ids.has(id.slice(1)) && !html.includes('href="piece:')) errors.push("action " + l[1] + ": no element " + id + " in the drawing");
  }
  const rigs = Object.keys(def.rigs || {});
  for (const l of (def.on || []).filter((x) => x[1] === "hold")) if (!rigs.includes((l[3] || {}).rig || "host")) errors.push("hold " + l[2] + ": its rig '" + ((l[3] || {}).rig || "host") + "' needs a line in rigs");
  for (const [k, r] of Object.entries(def.rigs || {})) {
    for (const [t, p] of r.pose || []) { if (!poses.has(p)) errors.push("rig " + k + ": no pose '" + p + "' in the kit"); if (late(t)) errors.push("rig " + k + ": pose at " + t + " is outside 0–" + dur); }
    for (const [t, fc] of r.face || []) { if (!faces.has(fc)) errors.push("rig " + k + ": no face '" + fc + "' in the kit"); if (late(t)) errors.push("rig " + k + ": face at " + t + " is outside 0–" + dur); }
  }
  for (const [t, sel] of def.shots || []) { if (late(t)) errors.push("shot " + sel + " at " + t + " is outside 0–" + dur); if (typeof sel === "string" && sel.startsWith("#") && !ids.has(sel.slice(1))) errors.push("shots: no group " + sel + " in the drawing"); }
  for (const [t] of def.camera || []) if (late(t)) errors.push("camera key at " + t + " is outside 0–" + dur);
  // Sets: spot and framing names must be the set's own.
  const used = [...html.matchAll(/href="set:([\w-]+)"/g)].map((x) => x[1]);
  const setId = def.set || used[0];
  const st = setId && sets[setId];
  if (def.set && !used.includes(def.set)) errors.push("set: '" + def.set + "' is named but not drawn; add <use href=\"set:" + def.set + "\" layer=\"back\"/>");
  const spotNames = (ctx, n) => { if (typeof n !== "string") return; if (!st) errors.push(ctx + ": spot '" + n + "' needs the scene to be in a set"); else if (!st.spots.includes(n)) errors.push(ctx + ": no spot '" + n + "' in set " + setId + " (spots: " + st.spots.join(", ") + ")"); };
  for (const [t, c] of def.camera || []) if (typeof c === "string") { if (!st) errors.push("camera at " + t + ": framing '" + c + "' needs the scene to be in a set"); else if (!st.framings.includes(c)) errors.push("camera at " + t + ": no framing '" + c + "' in set " + setId + " (framings: " + st.framings.join(", ") + ")"); }
  for (const l of def.on || []) if (l[1] === "place" && l[3] && l[3].spot !== undefined) spotNames("place " + l[2], l[3].spot);
  for (const [k, r] of Object.entries(def.rigs || {})) for (const a of r.at || []) spotNames("rig " + k, a[1]);
}
for (const x of html.matchAll(/href="set:([\w-]+)"/g)) if (!sets[x[1]]) errors.push("set:" + x[1] + " isn't in the library (see pieces.md)");
const din = (html.match(/data-in="([^"]*)"/) || [])[1];
if (din && !transitions.has(din)) errors.push('data-in="' + din + '" is not allowed by the kit (' + [...transitions].join(", ") + ")");
const dind = (html.match(/data-in-dur="([^"]*)"/) || [])[1];
if (dind !== undefined && !(Number(dind) >= 0.1 && Number(dind) <= 1.5)) errors.push('data-in-dur="' + dind + '" must be a number of seconds between 0.3 and 0.8');
for (const p of html.matchAll(/href="piece:([\w-]+)"/g)) if (!pieces.has(p[1])) errors.push("piece:" + p[1] + " isn't in the library (see pieces.md)");
for (const sl of ["section","series"]) if (!new RegExp('<section[^>]*data-' + sl + '="[^"]+"').test(html)) errors.push('the app draws the header: put data-' + sl + '="…" on the <section> (see the storyboard) and draw no header yourself');
if (/section-header/.test(html)) errors.push("the header is drawn by the app now: remove the section-header piece and any section label or tag you drew");

for (const u of html.matchAll(/<use\b[^>]*href="piece:([\w-]+)"[^>]*transform="[^"]*scale\(\s*(-?[\d.]+)[\s,]+(-?[\d.]+)\s*\)/g)) if (Math.abs(Number(u[2]) - Number(u[3])) > 0.01) errors.push("piece:" + u[1] + " is squashed with scale(" + u[2] + " " + u[3] + "): pieces keep their proportions (one scale number); if you need another shape, draw it in the scene or ask for a piece of that size");
if (/data-rig=/.test(html) || (def && Object.keys(def.rigs || {}).length)) errors.push("this channel has no character: remove the data-rig placeholder and the rigs block");
for (const r of html.matchAll(/data-rig="([\w-]+)"/g)) if (r[1] !== "host") errors.push("data-rig=\"" + r[1] + "\": the kit's character is \"host\"");
for (const id of []) if (!new RegExp((id.startsWith("clip:") ? "<video\\b[^>]*\\bsrc=\"" : "<image\\b[^>]*\\bhref=\"") + id + "(-cutout)?\"").test(html.replace(/<!--[\s\S]*?-->/g, ""))) errors.push(id + " was found for this scene (see inputs/materials/) but the scene doesn't place it: show it as the storyboard plans (" + (id.startsWith("clip:") ? "<video src=\"" + id + "\"> in a <foreignObject>" : "<image href=\"" + id + "\"> or its -cutout") + ")");
if (/<g\b[^>]*data-rig="[^"]*"[^>]*[^\/]>\s*<(?!\/g)/.test(html)) errors.push('the character placeholder must be empty: <g id="host" data-rig="host"/>');
// Pictures only from the materials (photo:id), clips only as <video src="clip:id"> in a <foreignObject>; nothing from the web.
for (const m of html.matchAll(/<image\b[^>]*>/g)) if (!/\bhref="photo:[\w-]+"/.test(m[0])) errors.push(f + ": an <image> may only show a real photo from inputs/materials (href=\"photo:<id>\")");
for (const m of html.matchAll(/<foreignObject\b[^>]*>([\s\S]*?)<\/foreignObject>/g)) if (!/^\s*<video\b[^>]*\bsrc="clip:[\w-]+"[^>]*(\/>|>\s*<\/video>)\s*$/.test(m[1])) errors.push(f + ": a <foreignObject> may only hold one <video src=\"clip:<id>\"/>");

for (const bad of ["href=\"http", "requestAnimationFrame", "Math.random", "Date.now", "performance.now", "setTimeout", "setInterval", "@keyframes", "transition:", "<animate", "<set "]) if (html.includes(bad)) errors.push(f + ": must not use " + bad);
if (errors.length) { console.log([...new Set(errors)].join("\n")); process.exit(1); }
console.log("PASS");
