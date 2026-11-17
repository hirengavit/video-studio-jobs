# Fix animated scene s006

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s006" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s006), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s005.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s006.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seven stamps arrive on "सातों नाम screen पर हैं" and tiles 1–4 are highlighted on their names, which is correct. But the grid is small: the tile labels (English and Hindi) are about the minimum size or below it on a phone, and the lower third of the frame stays empty until s007's band arrives.

1. Readability: raise the tile label sizes. English to Inter bold 40 px (from 34) and Hindi to Noto Sans Devanagari 38 px (from 36, at least 32 after scaling) with 1.3 line height. Put each tile's label block in the tile's group so the labels scale with it.
2. Framing: scale the `postage-stamp` tiles from 1.6 to 2.0 (240×300). Spread row A to x 260/680/1100/1520 at y 250–550 and row B to x 470/890/1310 at y 640–860 (labels below each). That fills x 160–1760 and leaves y 900–1000 free for s007's band. s007 must use the same positions.
3. Highlight: the yellow band covers only the lower half of each number. Put the band behind the whole number (full inner cream centre, highlightSoft #fde9a6) so the highlighted tile reads as one clear state.

The scene lasts 9.40 s: every time in it is between 0 and 9.40.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s006.html`: one `<section class="vs-scene" id="s006" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
