# Fix animated scene s106

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s106" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s106), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s105.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s106.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The bracket and "साथ याद रखिए" land on "साथ याद रखिए" (1.4), Andhra Pradesh and Telangana arrive on their words, and Vijayawada arrives at 8.5. The timing is good. Two things need fixing: the board has to follow s105's fix, and the bracket label is crammed into the 32 px gap between the two rows, touching both card edges.

1. Open on s105's fixed last frame: s104-style board, title and tip pill, and the 23-pin strip with pins 1–3 filled. After the 3.65 sub-shot, pin 4 fills with its tick at 8.97. The other pins stay as outlines.
2. Move "साथ याद रखिए" out of the gap between the rows. Put it in a soft-yellow (#fde9a6) pill at 44 px, #8a5d00, centred under the Circle column at y≈815 (between row 2's bottom at 776 and the strip at 850), popping at 1.42. Run the yellow bracket down the left edge of both rows (x≈84, y 320–776) so the pill sits at its foot.

The scene lasts 10.57 s: every time in it is between 0 and 10.57.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s106.html`: one `<section class="vs-scene" id="s106" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
