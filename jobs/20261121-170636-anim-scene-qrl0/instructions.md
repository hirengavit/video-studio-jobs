# Fix animated scene s056

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s056" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s056), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s055.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s056.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The key point ("envelope कागज़ का ही है, बस window इन materials की", 3.4–10.2 s) is shown as a thin strip under the table. That strip sits at about y 1010–1050, below the content area, with a window-envelope icon about 30 px tall and tags about 40 px. A viewer won't see it.

1. Make room for the bottom band. At 4.8 s, `move` the table card group up and scale it to 0.72 (one scale value) over 0.6 s, anchored at its top, so it spans about y 170–720. Then bring in the band at y 760–990.
2. In the band, draw the window-envelope icon at about 360 × 200 px, centred at x 960. Tag its body "कागज़" (sand pill, 52 px) on the left, with a leader line to the paper body. Tag its window "ये materials" (52 px) on the right, with a leader to the window. Bring "कागज़" in on "envelope कागज़ का" (7.2 s) and "ये materials" in on "window" (8.6 s).
3. Move the `highlight` of the "ये materials" tag to 8.9 s, the storyboard time, on "window इन materials". It shows only by about 10.5 s now.
4. "Biaxially Oriented Polypropylene" under BOPP is about 28 px. Set it to 40 px #6f6a63, the same as "Polyvinyl Chloride" in s055.

The scene lasts 10.50 s: every time in it is between 0 and 10.50.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s056.html`: one `<section class="vs-scene" id="s056" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
