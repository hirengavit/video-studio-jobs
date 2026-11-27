# Fix animated scene s065

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s065" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s065), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s064.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s065.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Physics and seam fine: a cut from the matrix to a new screen ("Continues: no"), and the heading and card 1 are already there at 0.2 s. Each card arrives on its spoken words (card 2 at 4.46 on "दूसरे शहरों", card 3 at 8.88 on "छोटे towns"). The still stretches in the check notes are the planned holds between reveals, so they are intended. All three local cases from the screen notes are shown and correct.

Fixes:
1. Hindi lines under each card name ("तय PIN codes के अंदर booking और delivery", "municipal सीमा के अंदर", "उसी PIN code का delivery इलाका") render at about 36 px, too small for a phone (CRAFT minimum 44). Raise them to 44 px, wrap to at most 2 lines, and keep them centred inside the 520 px cards.
2. Card content sits in the top ~60% of each 480 px card and leaves the lower part empty. Scale each icon from 200 to 240 px tall, put the English name at 52 px bold, and spread icon / name / Hindi lines down the card (icon top y 320, name about y 590, Hindi lines y 650–740) so the card is evenly filled.
3. The empty band below the cards (y 770–1000) makes the group sit high. After fix 2, lower the three cards to y 300–820 so the margins above and below come out even.

The scene lasts 14.54 s: every time in it is between 0 and 14.54.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s065.html`: one `<section class="vs-scene" id="s065" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
