# Fix animated scene s089

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s089" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s089), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s088.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s089.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s088 is clean and the race closes on "आगे बढ़ता है". The #notall sentence lands on its words and "ज़रूरी नहीं" is underlined on time. The flagged stills (1.74–6.44, 6.69–8.17, 8.67–10.65) are reading holds on spoken lines, so they are intended. The weak beat is #air: the storyboard's link between the emblem and the three planes, which is the visual for "किसी एक airline से बँधा नहीं", is missing at both 8.7 s and 10.6 s.

1. #air: draw the three dashed ink lines (2.5 px, dash 10 10, #2b2622) from the top of `speed-post-emblem` (about 960, 760) to the base of each plane (x 400/960/1520, y about 600) at 8.64 with `draw`, stagger 0.15, so one emblem visibly connects to all three airlines on "किसी एक airline".
2. #air: the emblem reads as a small icon (about 240 px wide) under three large planes. Raise it to scale 0.6 and keep it centred at y 760–940, so it is the hub the lines start from.
3. #air: the bottom line "किसी एक airline से बँधा नहीं" is already up at 8.7 s, before "airline" is said (about 8.8–9.0 s). Hold it until 9.0, then `reveal` it.
4. #notall: the sentence and the plane/truck tiles sit in the top half, with the lower ~40% empty for 5 s. Move the tiles to y 300–560 and the sentence to y 700, so the group is centred in the content area (y 150–1000).

The scene lasts 10.70 s: every time in it is between 0 and 10.70.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s089.html`: one `<section class="vs-scene" id="s089" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
