# Fix animated scene s090

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s090" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s090), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s089.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s090.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Row 3, column 2 is overcrowded. When the amber line "कर्मचारी की personal चिट्ठी = private letter" arrives at 1.62 s, it becomes the cell's 3rd and 4th lines. The first line "authorised सरकारी (official) डाक" jumps up to touch the row's top border, and "= private letter" sits on the bottom border. Make row 3 about 60 px taller: take about 20 px from each of rows 1, 2 and 4, and keep the table's outer edges where they are. Grow it with a 0.4 s ease that finishes before 1.62 s. Then all four lines fit at 1.3× line height with at least 12 px of padding.
2. Keep "authorised सरकारी (official) डाक" and "private letter नहीं" fixed in place when the amber line fades in; don't re-centre the cell's text block. The layout must not change during a reading hold.
3. Fade the earlier line "private letter नहीं" to the supporting grey #6f6a63 when the amber line arrives, so the cell reads as one new point (amber) under an old point (grey).
4. Move the band to row 4 at 4.34 s in one clean move (about 0.5 s, ease in-out). At 4.4 s the band is still split between rows 3 and 4 and looks like a smear.

The scene lasts 10.90 s: every time in it is between 0 and 10.90.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s090.html`: one `<section class="vs-scene" id="s090" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
