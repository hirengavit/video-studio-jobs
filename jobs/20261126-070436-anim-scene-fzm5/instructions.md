# Fix animated scene s154

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s154" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s154), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s153.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:newspaper-bundle-tied` (and `photo:newspaper-bundle-tied-cutout`, its subject cut out): A bundle of newspapers tied with string or in a paper wrapper, ready for dispatch, whole bundle visible (Man with Bundled Newspapers - BBD Bagh District - Kolkata - India (12304056183)), 1920×1440. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s154.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s153 is clean, and both row 2 lines land on their words. But on a phone, the row's icons and lettering are smaller than row 1's and don't read.
1. Row 2 icons: the newspaper-bundle cut-out is about 100 px tall, and `insured-letter-bag` (scale 0.35) is squeezed against its right edge, where it reads as a smudge. Make the photo about 130 px tall at the left of the row (x ≈ 160–300) and set the bag to scale 0.5, at least 16 px to its right with no overlap. Move the label lines right to fit.
2. Make "Printed-paper packet या bag" and "insured letter या box" the same size as row 1's label (44 px, bold, ink). They render at about 36 px now. If the 2 lines don't fit, let the row grow taller (the row 3 space is free until s161) rather than shrinking the type.
3. The "Poste Restante" tag starts fading in at 0.20 s, before the voice says "Poste restante" (≈1.0 s). Start the fade at 0.9 s.

The scene lasts 11.20 s: every time in it is between 0 and 11.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s154.html`: one `<section class="vs-scene" id="s154" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
