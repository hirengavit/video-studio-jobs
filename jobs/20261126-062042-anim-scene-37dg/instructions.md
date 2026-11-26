# Fix animated scene s008

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s008" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s008), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s007.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `key-term` (Key term): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: key-term: the term, its translation and abbreviation; the meaning line; the chips; replace the chain with an example or a rule line; drop the exam pill.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:letters-pigeonhole-rack`: Letters waiting in a pigeon-hole sorting rack at a post office, the slots and envelopes clearly visible, no identifiable faces (BR Mk1 POS W80300 - sorting racks), 1366×910. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s008.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The term card, its Hindi (1.14 s) and the "एक व्यवस्था" strip read well. The jump at 3.22 s is the planned cut to shot `#how`. The person slides in on "वो व्यक्ति" and stands on the floor, and the "खुद आकर ले जाता है" label lands on its words. The photo is styled correctly. The problems are the envelope's scale and placement, and the medium zoom.

1. Envelope in the rack (`place` at 5.58 s to `rack-slot`): it is far bigger than a pigeonhole and covers two cells, so it doesn't sit in the slot. Scale it down to fit inside the centre cell (about 0.22, roughly 165×90 px), resting on the cell's bottom edge, with its POSTE RESTANTE postmark still visible.
2. Envelope at the start of `#how` (3.08 s): it sits at the counter's far left end, half over the edge. Put it on `counter-centre` (960, 730), resting on the counter top, before it moves to the rack.
3. Camera `medium` at 10.5 s: the push brings the rack's top-right corner against the series pill (at 11.9 s it touches y 144 under the pill). Aim the zoom at y 640 or reduce it to 1.25, so the rack top stays below y 160 and clear of the pill.
4. The blank sand sign plate between the rack and the counter reads as a floating box. Letter it "Poste Restante" (Inter bold 40 px, ink) so it reads as the counter's sign.
5. Photo: add a small grey credit line under the "Post office pigeonholes" caption (about 22 px, supporting colour), as the kit asks for every real photo.

The scene lasts 11.93 s: every time in it is between 0 and 11.93.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s008.html`: one `<section class="vs-scene" id="s008" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
