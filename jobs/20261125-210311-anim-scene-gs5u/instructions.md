# Fix animated scene s205

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s205" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s205), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s204.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s205.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s204 is correct. Row 3's pill "7 दिन तक · लिखित application + fee" lands at once on the carried line and is ticked by 3.7 s. Row 4 "Complaint (item न मिला)" appears near 4.5 s on "Item न मिलने". Its pill builds "Booking से:" → "15 दिन बाद" (about 7 s, on 6.3 s) → "60 दिन के अंदर" (about 9 s, on 8.0 s), and the timing is good. Problems: row 4's label is set smaller than the other four labels so that it fits. Its pill text ("Booking से: 15 दिन बाद | 60 दिन के अंदर") is the smallest on the card, about 26–28 px at 1080p. This row's two numbers are the exam fact, and they won't read on a phone.

1. Row 4 label: shorten it to "Complaint" and set it in the same size and weight as "ePayment / eMO", "VP article" and "Extension". Move "(item न मिला)" into the pill as its first word, or drop it, since the voice says it.
2. Row 4 pill: drop the "Booking से:" prefix and set "15 दिन बाद · 60 दिन के अंदर" at least 38–40 px, matching row 3's pill. Keep the two-step build on 6.3 s and 8.0 s.
3. Row 3 pill: keep "7 दिन तक · लिखित application + fee" at the same size as row 4's new pill. Widen the pill column by about 80 px, taking it from the label column, so neither pill has to shrink.

The scene lasts 9.22 s: every time in it is between 0 and 9.22.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s205.html`: one `<section class="vs-scene" id="s205" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
