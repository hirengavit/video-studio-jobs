# Fix animated scene s250

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s250" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s250), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s249.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s250.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s249 is fine for a new point, and the beats follow the voice: the track builds on "booking के 15 दिन बाद, 60 दिन के अंदर", the Damage card comes in on "Damage की complaint" (4.8 s) and "2 दिन" lands at 8.54 s on "2 दिन". The stills the check flagged (0.25–1.74 s on the title, 6.96–8.45 s on "item मिलने के बाद") are read-and-hold beats, as intended. The 1.99–4.23 s "still" is there because the ticks and arrow are so small they barely register as motion, which is the real problem:

1. The track's words are too small for a phone. "बाद" and "अंदर" are about 32 px, and the tick labels "Booking (0)", "15 दिन" and "60 दिन" are about 40 px. Raise the tick labels to 48 px (weight 700) and "बाद"/"अंदर" to 44 px. There is room: the track can move to y 400 and the labels to y 490 inside the y 190–560 card.
2. "Booking (0)" and "15 दिन" sit next to each other on one baseline and read as one phrase ("Booking (0) 15 दिन"). Centre each label under its own tick: "Booking (0)" left-aligned at x 220, "15 दिन" centred on the 15-day tick (about x 590). Draw the ticks 24 px tall so each label clearly belongs to one tick. If they still touch at 48 px, put "Booking (0)" above the track at x 220, on the "बाद" line.
3. Make the yellow 15→60 window a 36 px band behind the track rather than a thin line, so "अंदर" reads as the allowed window at a glance (it grows 15→60 at 4.22 s as planned).

The scene lasts 9.75 s: every time in it is between 0 and 9.75.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s250.html`: one `<section class="vs-scene" id="s250" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
