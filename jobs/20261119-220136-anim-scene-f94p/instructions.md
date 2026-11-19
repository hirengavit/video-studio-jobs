# Fix animated scene s150

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s150" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s150), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s149.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s150.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is correct: the cut keeps s149's pushed-in layout, and the tick beside row 3 pops on "पूरा बंद". The cut to #five at 2.0 is on time. Row 1 lands on "Postage पूरा prepaid", row 2 on "वज़न", and "5 grams" is highlighted at 7.03 as it is said. The stills are reading holds.

1. The Hindi sub-label under row 1 ("पहले से चुकाया") renders at about 30 px. That is under the kit's 36 px floor and the storyboard's 40 px, and it stays on screen through s153. Set it to 40 px, and give row 1 enough height that the sub-label sits 8 px below "Postage पूरा Prepaid" without touching row 2.
2. From 2.0 to 4.15 the big white card holds only its title, and rows 3–5 stay empty for the whole scene. To show the card's structure, draw the five red number badges at x 170 (y 330/470/610/750/890) in grey (#6f6a63, 40% opacity) together with the card at 2.0. Each badge then turns red when its row arrives (row 1 at 4.15, row 2 at 6.41). Don't add any text early.
3. The row 1 icon at x 1650 reads as a small document with "=" lines, not a stamp. Give the inline red outline a perforated (scalloped) edge and a small value box, so it matches the `postage-stamp` look used throughout the video.

The scene lasts 9.41 s: every time in it is between 0 and 9.41.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s150.html`: one `<section class="vs-scene" id="s150" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
