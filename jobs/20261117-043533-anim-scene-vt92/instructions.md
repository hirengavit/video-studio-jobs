# Fix animated scene s053

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s053" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s053), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s052.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s053.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s052 is seamless, and row 4 fills in on its words: left 15 on "बाएँ" (1.38), top 40 (3.0), bottom 15 mm (4.48), then the tick. The "frozen" note is wrong: the pops and the tick are there, they are just small. Small is the real problem. The three window pills are about 28 px text in a row that already holds a two-line label, so the numbers (the facts of this scene) are the smallest thing on the screen. "नीचे 15 mm" also shows no pill fill, so it looks different from the other two.

Fixes:
1. #p4a / #p4b / #p4c: set the pill text to 36 px (Hindi never under 32 px) with the numbers bold, pills 56 px tall. Space them at x 1000 / 1230 / 1460 with widths of 200 / 200 / 240, and keep them inside the row (row right edge at x 1660 minus a 30 px margin).
2. #p4c "नीचे 15 mm": give it the same pill fill (#fde9a6 soft band) as #p4a so all three read as one set. If "mm" belongs to all three values, put "mm" after each value or once as a small grey label after the row, not only on the last pill.
3. `highlight` #p4b: drop it. "ऊपर 40" isn't stressed in the narration, and yellow on one value of three suggests it was changed. Keep all three pills in the same soft band.
4. If the row can't fit the larger pills, make row 4 about 30 px taller (move the card bottom from y 970 to y 1000) rather than shrinking the text.

The scene lasts 6.71 s: every time in it is between 0 and 6.71.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s053.html`: one `<section class="vs-scene" id="s053" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
