# Fix animated scene s017

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s017" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s017), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s016.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Not found:** poste-restante-cover (A real old envelope or postcard addressed 'Poste Restante' (the words clearly visible in the address), whole cover in view, address side). Show these another way (drawn, or with words), never with a made-up photo.

## What to change

The current file is `inputs/current/s017.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Continuity at the seam: the red "POSTE RESTANTE" postmark is on the envelope at the end of s016 but is gone from 0.2 s (only the empty dashed stamp box shows at 2.5–8.6 s) and stamps back in at 8.8 s. Keep the postmark group inside the envelope group so it moves with it from 0.0 s, and drop the `stamp` at 8.80 (the `write` "Poste Restante" + row 4 `highlight` carry that beat).
2. Framing: the envelope sits at the top (about y 350–750) with the box below it (x 140–860, y 760–990) empty because no photo was placed. Either place the poste-restante photo there as planned (paper cut-out, tilt -2°, caption "Poste Restante लिखा लिफ़ाफ़ा"), or move the envelope down to centre it in the left column (translate so it spans about y 390–790).
3. The list card x 980–1780, y 200–980 is a third empty below row 4. Shrink it to fit four rows (y 220–860) or spread the rows to y 300/450/600/750 so it is evenly filled, and centre it vertically with the envelope.
4. "Poste Restante" written on the envelope at 8.8 s is small (about 30 px on screen after the move to scale 1.0); write it at 56 px so it reads on a phone, since it is the point of row 4.

The scene lasts 10.90 s: every time in it is between 0 and 10.90.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s017.html`: one `<section class="vs-scene" id="s017" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
