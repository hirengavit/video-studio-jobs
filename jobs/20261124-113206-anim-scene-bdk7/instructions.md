# Fix animated scene s099

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s099" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s099), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s098.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s099.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The slate chips land on their words ("seal तोड़ना", "कागज़ फाड़ना", "चिपकी सतहें अलग करना", "न पड़े"), and the seam with s098 is exact. The ending is the problem. The tied-packet card pops on top of columns 2 and 3 and cuts the label "बिना बंद enve…" in half, and the card sits empty before its words arrive.

1. Tied-packet card (from 7.48 s): don't leave it half over column 2. When the columns fade to grey, place the card fully over column 3's area (x 1240–1780, y 300–860), or centred over all three columns with the columns faded to ~15 % opacity. No label should be cut off at its edge.
2. Bring "ऐसे न बँधा हो" in with the card or by 8.6 s (the voice says "तब भी packet ऐसे" at 8.6 s) instead of 10.4 s, so the card isn't empty for about 1.5 s.
3. Make the tied `packet-with-tag` bigger inside the card (scale 0.7 → about 1.1) so the tight string reads on a phone. The packet is the point of this beat.
4. Column 3 label "आराम से हटने वाला cover": as in s098, set it to ≥ 34 px on two lines (match s098's fix so the seam stays exact).

The scene lasts 11.48 s: every time in it is between 0 and 11.48.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s099.html`: one `<section class="vs-scene" id="s099" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
