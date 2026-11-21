# Fix animated scene s116

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s116" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s116), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s115.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s116.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The facing diagram (a messy stack, an arrow, then a neat row) is the right picture, and the caption lands on "पता लिखा हिस्सा". But row 2, "Sorting और जाँच के लिए facing", isn't on screen at 2.2 s and the scene cuts away at 3.64 s, so the row is visible for barely a second while the voice has already said it (0–3.6 s). Also, the diagram is small: the envelopes in the neat row are about 60 px wide, and the messy stack shows every envelope address-side up. The "different directions" that facing fixes doesn't read.

1. Bring row 2 in at 0.3 s (the voice says "Sorting" at 0.0 s) so it holds for about 3 s before the cut to #facing.
2. Scale the two diagram panels and the arrow by about 1.4, so they span x 140–1780 and y 400–860. Then the neat-row envelopes are about 180 px wide. Move the caption pill down to y≈930.
3. Make the messy stack truly mixed. Draw one envelope with its back (flap side) up and one rotated by about 180° (address upside down), keeping one face-up, so the contrast with the neat row is obvious.

The scene lasts 10.64 s: every time in it is between 0 and 10.64.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s116.html`: one `<section class="vs-scene" id="s116" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
