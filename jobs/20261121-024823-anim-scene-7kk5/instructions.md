# Fix animated scene s054

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s054" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s054), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s053.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s054.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. On the #phone shot, the "काम पूरा" chip is on screen from 4.8 s while "≠" only arrives at about 7.7 s. For 3 s the screen reads "electronic entry ✓ → काम पूरा", the opposite of the point. Hold the "काम पूरा" chip until 7.7 s and `pop` it together with the "≠" (≠ at 7.7 s, chip at 7.8 s). Then bring "काम खत्म नहीं" in at 8.7 s, on "खत्म नहीं होते", not later.
2. The green "✓ठीक से" and "✓सुरक्षित" labels left of the box are about 36 px and squeezed against the left margin. Raise them to 44 px, and add 20 px between the tick and the word. Land them on their words: "ठीक से" at 1.9 s and "सुरक्षित" at 3.2 s (they currently arrive at about 4 s).
3. The "≠" is slate and small next to two large items. Size it to about 120 px tall, centred between the phone and the chip, so the comparison reads on a phone.

The scene lasts 10.30 s: every time in it is between 0 and 10.30.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s054.html`: one `<section class="vs-scene" id="s054" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
