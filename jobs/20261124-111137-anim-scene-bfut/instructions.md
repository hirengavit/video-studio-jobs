# Fix animated scene s026

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s026" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s026), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s025.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s026.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s025 holds and the beats land on their words (निजी चिट्ठी 2.2 s, cross ~2.7 s, असंबंधित 3.9 s, bar ~7.9 s). But the screen now holds nine things, against the kit's limit of five. The "निजी चिट्ठी" card is squeezed into the header between the title and the series pill. The "असंबंधित कागज़" chip is about 30 px grey text with a strike through it, which you can't read on a phone.

1. At 2.0 s, fade the three reply cards and the two country chips to the supporting colour at opacity 0.4 (`color` to #6f6a63, or fade them down). This scene is about what is NOT allowed, so the rejected items need to stand out.
2. Move the `handwritten-letter` + "निजी चिट्ठी" card out of the header band: put it at about x 1060–1460, y 360–620 (scale about 0.8, label 48 px), over the faded cards. Keep the slate cross on it at 2.66 s.
3. Make "असंबंधित कागज़" a proper slate chip beside it, at about x 1500–1800, y 420–540, with 48 px text and a slate cross or strike at 3.88 s. At 0.45 dim, the strike must leave the words readable.
4. Make the bottom bar "देश के अंदर वाली शर्तें भी पूरी होनी हैं" 48 px text in a bar about 90 px tall at y 900–990. It stays at 7.76 s.

The scene lasts 12.98 s: every time in it is between 0 and 12.98.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s026.html`: one `<section class="vs-scene" id="s026" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
