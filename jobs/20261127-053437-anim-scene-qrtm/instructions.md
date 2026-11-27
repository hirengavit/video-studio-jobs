# Fix animated scene s167

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s167" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s167), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s166.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s167.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The measurements land on their words: "500 g" at 5.8 s, 420 mm at 9.5 s, 297 mm at 10.9 s and 24 mm at 12.6 s. The final frame holds every document limit from the screen notes (500 g incl. volumetric, 420 × 297 × 24 mm), complete and correct. The opening is weak, though: for the first 4.5 s the screen is a single small title line on an empty canvas.

1. Bring the `domestic-envelope` in at 2.0 s, on "ordinary document की शर्तें" (fade, 0.4 s), instead of 4.60 s. Keep the "सामान वही" pill at 4.6 s, after "सामान वही" is said at 3.8 s. The screen then has its main object during the opening.
2. Title: make "Premium documents" heading red (#9e1b1b) and 56 bold. Close the gap before "= ordinary document की शर्तें" to one word space (about 16 px); it currently reads as two separate labels.
3. Move the "सामान वही" pill from bottom-left (y 930, far from everything) to just under the title at x 300, y 250–300. Shift the length arrow and "420 mm" label down 20 px if needed so the two never touch. The pill then reads as the subtitle of the idea, not a stray tag.

The scene lasts 14.66 s: every time in it is between 0 and 14.66.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s167.html`: one `<section class="vs-scene" id="s167" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
