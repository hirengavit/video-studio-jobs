# Fix animated scene s071

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s071" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s071), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s070.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s071.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The scene carries over from s070 cleanly and the chips pop on their words. But row 2's detail cell crams the grey label and three chips into a 180 px row. The chip text comes out around 28 px and "लकड़ी का case" around 20 px, which you can't read on a phone and which breaks the kit's 32 px minimum for Hindi. The pops are so small that the automatic check saw the scene as frozen.
1. Move the grey "प्रकृति के हिसाब से" out of the detail cell into the left column, under "बहुत कीमती चीज़ें" (x 200, row 2 name baseline + 50, 34px, supporting #6f6a63). That frees the whole 1000 px detail column for the chips.
2. Make the three chips big enough for the row: each one 320×120 px (x 760, 1100, 1440), centred in row 2. English 40px bold, with the Hindi line "लकड़ी का case" at 34px under "Wooden case". Draw them as chips in the scene at one scale; don't squash a library pill.
3. If the chips still don't fit with their padding, grow row 2 to 260 px and shrink rows 3 and 4 to 140 px each. They only hold a one-line name for now, and the table stays at y 180–990.
4. At 0.00, when row 2's name gets its highlight, remove the highlight from row 1's name over 0.3 s. That way only the current row is highlighted, as the kit's colour rule asks.

The scene lasts 9.84 s: every time in it is between 0 and 9.84.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s071.html`: one `<section class="vs-scene" id="s071" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
