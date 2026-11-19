# Fix animated scene s169

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s169" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s169), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s168.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s169.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s168 is clean, and rows 2 and 3 land on their words ("stamp" at 0–1.4, "postal directions" at about 3.8). The badges on the card match the rows. The stills the check found are the intended reading holds. There are two real problems. The one annotation, the arrow to the stamp corner, can hardly be seen. The Hindi sub-lines are smaller than the kit's 32 px minimum.

Fixes:
1. Arrow (draws at 8.5): it runs up the card's right border, so it reads as part of the card outline. Draw it through the gap instead: start at the note box's top-left (about x 1300, y 870), curve through x 1265 and end with an arrowhead just inside the top-right corner (about x 1215, y 290). Use the ink-line class at 3 px with a 14 px head, and draw it over 0.6 s from 8.5 s.
2. Hindi sizes: "डाक निर्देश" under row 3 and "जहाँ तक हो सके" in the note render at about 28 px. Set both to 34 px with a line height of 1.3, and grow the note box so the text keeps 12 px from its edge.
3. Row 2's `franking-impression` icon is a tiny glyph stuck above the end of the text (about 24 px). Scale it to about 56 px tall. Place it to the right of the row with a 16 px gap, centred on the row, so it doesn't read as a stray mark.
4. The stamp-zone pulse at 9.4: keep it as one pulse (scale 1.06, 0.4 s) that starts after the arrow has finished (9.2+), so the two don't stack on "corner".

The scene lasts 10.08 s: every time in it is between 0 and 10.08.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s169.html`: one `<section class="vs-scene" id="s169" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
