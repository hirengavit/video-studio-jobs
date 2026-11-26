# Fix animated scene s029

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s029" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s029), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s028.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:letters-pigeonhole-rack`: Letters waiting in a pigeon-hole sorting rack at a post office, the slots and envelopes clearly visible, no identifiable faces (BR Mk1 POS W80300 - sorting racks), 1366×910. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s029.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The counter set with the envelope in the centre pigeonhole is a good, literal picture of "deposit". The beats land on their words: the bar on "लागू अवधि तक deposit", "हमेशा के लिए" on "हमेशा", the strike on "कोई वादा नहीं". The rack is on the back wall and the counter stands on the floor, so nothing floats. Readability and the photo treatment need work.

1. Give the pigeonhole photo at upper left the kit's paper cut-out treatment. Tilt it -1.5°, keep the white border and soft shadow, and add a small grey (#6f6a63) caption with its credit beneath, about 28 px, using the source and licence from materials.json. Right now this real photo has no credit.
2. The sign-plate label "लागू अवधि तक deposit" fills the sand plate edge to edge, and its red bar is only about 470 px long. Widen the plate, or draw the label panel in the scene, to about 800 px (x 560–1360, as the storyboard says). Keep the text at 48 px with at least 24 px padding on each side, and `grow` the red bar across the full width under it, with its end tick.
3. Size the right panel to what it holds: about 360×220 at y 300–520, instead of a tall card down to y 700 that is mostly empty. Keep "हमेशा के लिए" at 52 px with at least 20 px side padding (it currently touches the card edges). Make the slate cross about 120 px, centred under the struck words.

The scene lasts 9.57 s: every time in it is between 0 and 9.57.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s029.html`: one `<section class="vs-scene" id="s029" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
