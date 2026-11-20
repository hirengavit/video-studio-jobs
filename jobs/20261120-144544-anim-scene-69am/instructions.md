# Fix animated scene s040

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s040" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s040), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s039.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s040.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The top-gap arrow and "≥ 40 mm" land on "40 mm" and sit cleanly between the two dashed zones. The cut to shot #material on the question is right, and the cards fill on "35 GSM"/"Glassine" and "40 GSM"/"Cellophane". Fixes:

1. Seam: the first frame shows the bottom "≥ 15 mm" pill where s039 has it now, on the dashed line under "लंबाई 80–125 mm". Move it to match s039's corrected spot (about x 330–500, y 820–868; the bottom-gap arrow at x ≈ 580), so the carry-over agrees.
2. The material cards (540×600) hold the number at the top and a small icon, and their bottom 40% stays empty. Scale the paper icons about 1.8× and put them centred at y ≈ 560. Raise "Glassine Paper"/"Cellophane Paper" from 40 to 48 px at y ≈ 720, and the Hindi lines "ग्लासीन कागज़"/"सेलोफ़ेन कागज़" from 34 to 40 px at y ≈ 780 in #6f6a63, at full opacity rather than faint.
3. Title "Window किस चीज़ की?": raise it from 52 to 60 px. For the 2 s before the cards pop it is the only thing on screen, so it should carry the frame.

The scene lasts 12.81 s: every time in it is between 0 and 12.81.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s040.html`: one `<section class="vs-scene" id="s040" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
