# Fix animated scene s003

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s003" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s003), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s002.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s003.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s002 is exact. "2024" types onto both covers as the voice says it (0.0–1.5 s), and the postmark stamps on "16 December 2024" (~1.8 s). The jump at 4.72 s is the planned shot change to #tiers, which is fine. Tier 1 lands as "लागू Regulations" begins, and "+ Later Orders" lands on "बाद के orders" (~6.8 s). Two problems remain. The books carry s002's small lettering. And inside the red tier card, the Hindi "बाद के आदेश" is pale yellow at about 28–30 px, too small to read on red on a phone.

1. Match whatever s002's fix sets for the books, so the cut stays invisible: scale 1.15 at x 980–1325 / 1420–1765, y 230–690, cover lettering 36 px, Hindi names 40 px ink at y 750, bracket y 800, "दोनों" y 850. Keep the postmark centre at y ~950, clear of "दोनों".
2. In the tier 1 card, set "+ Later Orders" to 48 px and the Hindi "बाद के आदेश" beneath it to 38 px, with line height 1.3 (≥ 50 px gap from the line above).
3. Centre tier 1's text block vertically in the card (y 200–480): title at y ~285, "+ Later Orders" y ~360, Hindi y ~420. Keep the "प्राथमिकता" pill at right, centred on y 340. s004 must carry the same positions.

The scene lasts 8.74 s: every time in it is between 0 and 8.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s003.html`: one `<section class="vs-scene" id="s003" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
