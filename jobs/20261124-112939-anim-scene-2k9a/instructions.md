# Fix animated scene s094

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s094" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s094), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s093.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s094.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is a planned cut to #screenC, and tracker circle 7 fills. "छपाई से" (3.66) and "या हाथ से" (5.58) land on their words.

1. For the first 3.6 s the card is empty. Only the roughly 28 px sub-heading "सातवीं: किताब पर लिखे अक्षर" is on screen while the voice says "सातवीं शर्त, किताब पर लिखे अक्षर", so the frame reads as blank. Pop the row 7 box and its red "7" badge at 0.20 as the anchor, and bring "अक्षर सिर्फ" in at 1.90 (the voice's "अक्षर"), not 2.94. Set the sub-heading to 34 px.
2. The storyboard asks for "one big row 7". Right now it is the same height as the old rows, with about 60 % of the card empty below it for the whole scene. Set the row 7 words ("अक्षर सिर्फ", "छपाई से", "या हाथ से") to 52 px, the slate chip to 36 px, and the row box to fit them. Keep everything above y ≈ 560 so s095's "लिखा जा सकता है" block still fits below.
3. The slate chip "किसी और तरीके से नहीं" shows at 6.84, before the voice reaches it at 7.5. Move it to 7.50, and `draw` a 28 px slate cross at its left so it reads as rejected, like the other slate items.

The scene lasts 9.66 s: every time in it is between 0 and 9.66.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s094.html`: one `<section class="vs-scene" id="s094" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
