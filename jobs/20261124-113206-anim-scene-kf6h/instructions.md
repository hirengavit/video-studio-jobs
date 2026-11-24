# Fix animated scene s103

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s103" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s103), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s102.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s103.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
"(± 2 mm)" arrives with "2 mm ऊपर-नीचे की छूट", and the maximum writes on from about 4.4 s, ahead of "600 गुणा 300 गुणा 300" at 5.1 s. Both are crammed into row 4 at about 22–26 px, so the scene's main new fact, the maximum, can't be read on a phone.

1. Row 4: make it a two-line row. Line 1 is "Roll के अलावा: minimum 140 × 90 mm (± 2 mm)" and line 2 is "maximum 600 × 300 × 300 mm". Set the values at the same size as "140 × 90 mm" (≥ 40 px, weight 700, ink colour, no yellow band on the maximum). Get the height by reducing rows 1–3 and 5 from about 128 px to 110 px and giving row 4 about 200 px, all inside the same table frame (y 200–980).
2. "(± 2 mm)": raise it from about 22 px to ≥ 32 px and put it on the same line, right after "140 × 90 mm" in grey (#6f6a63), not as a tiny subscript under the band.
3. Write "maximum 600 × 300 × 300 mm" on at 5.1 s (on "600") instead of building it from 4.4 s. Show it as one write-on, not a growing number, then hold it.
4. Keep the "Literature for the Blind जैसी" note at the s101 fix size (≥ 34 px).

The scene lasts 8.52 s: every time in it is between 0 and 8.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s103.html`: one `<section class="vs-scene" id="s103" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
