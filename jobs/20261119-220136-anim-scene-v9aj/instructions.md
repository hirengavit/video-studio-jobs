# Fix animated scene s140

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s140" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s140), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s139.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s140.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The Rakhi envelope drawing is a strong new anchor, and "Circle Head" lands on its word. Row 2 is broken: "= ordinary embossed envelope की कीमत" doesn't fit its card. "की कीमत" wraps to a cramped second line at about 26 px, the strike scrawls across both lines, and the × crowds the text. On a phone this row can't be read.

1. Row 2 (y 470–640): make it a two-line card, y 450–680. Line 1 is "= ordinary embossed envelope" at 44 px Inter (baseline y 540). Line 2 is "की कीमत" at 40 px Noto Sans Devanagari (baseline y 610, line height 1.3). Keep the text inside x 900–1660 and put the slate × at x 1720, outside the text block.
2. Row 2 strike: strike each line separately, with `strike` on line 1 at 9.2 and on "की कीमत" at 9.3, so neither line is cut through its matras. Draw the × at 9.5.
3. Row 3 (y 700–870 → y 720–890): "= उतनी prepaid value" at 44 px. Check that the × at x 1720 doesn't touch the text, as in row 2.
4. Row 1 Hindi "सर्किल प्रमुख": raise it to 36 px (it renders under 32 px).

The scene lasts 13.56 s: every time in it is between 0 and 13.56.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s140.html`: one `<section class="vs-scene" id="s140" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
