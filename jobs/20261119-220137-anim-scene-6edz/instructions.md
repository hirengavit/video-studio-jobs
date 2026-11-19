# Fix animated scene s212

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s212" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s212), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s211.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `recap-card` (Recap envelope): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: recap-card: title and seal number; 3 or 4 rows (English term, Hindi term, fact pill); pills can hold a date, a number or a short Hindi phrase.

## What to change

The current file is `inputs/current/s212.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s211 matches exactly. The slate cross on the arrow, "आगे नहीं भेजा जाता", the green return arrow to the sender and the "बिना charge" pill read clearly, left to right and then back. The recap card is well sized (x160–1760, y160–980). Fix these:

1. `#foreign` SENDER box under the envelope: "प्रेषक" renders at about 28 px and "SENDER" at about 40 px, below the kit's 32 px floor for Hindi. Enlarge the box to about 300×130 and set "SENDER" to 52 px bold Inter and "प्रेषक" to 40 px Noto Sans Devanagari. Keep its left edge in line with the envelope tile, and move the return arrow's end to the box's new right edge.
2. `#exam` row 1 pill "prepaid rate × 2": pop it at 9.20 (on "का दोगुना"), not 8.13, so "× 2" isn't on screen before the voice says it. Move the tick to 9.60.
3. Rows 1–5 pill text: set one size for all pill labels, at least 40 px (the Hindi in them is at least 36 px), and use the same values in s213 and s214 so the card doesn't jump at the cuts. Widen a pill rather than shrink its text.

The scene lasts 10.37 s: every time in it is between 0 and 10.37.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s212.html`: one `<section class="vs-scene" id="s212" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
