# Fix animated scene s171

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s171" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s171), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s170.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-table` (Compare table): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-table: two or three columns (re-space the centres), three to five rows, which row gets the outline, the source line; interest rates must name the quarter and the source.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:india-post-parcel` (and `photo:india-post-parcel-cutout`, its subject cut out): an India Post or Speed Post parcel with its postal label visible, whole parcel in view (RegisteredMailBarcode) (shown in the scene before; use it where this scene continues that frame), 1920×1259. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s171.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The table builds as planned. The row labels reveal with a stagger at 0.8 s, "Counter" is highlighted on "Counter" (about 2.3 s), and row 1 is highlighted on "एक बोतल" (3.2 s). The still stretch from 1.7 s to 3.2 s is a reading hold, so it's fine. The bottom of the frame (y 870–1000) stays free for the note and traps in s173–s174, as planned.

1. The Hindi text in the table is too small for a phone and breaks the kit's 32 px minimum for Hindi. The header subtitles "काउंटर पर" and "घर तक delivery" look about 24–26 px, and the row sub-labels "2 बोतलों का pack" and "4 बोतलों का pack" about 28 px. Set every Hindi line in the table to 34 px, and the grey "Gangotri" to 32 px. Make room by growing the header row from 110 to 130 px (y 240–370) and moving the rows down 20 px (row 1 y 370–505, row 2 y 505–640, row 3 y 640–775). Keep the note band at y 790–870. Use exactly the same numbers in s172, s173 and s174 so the cut stays invisible.
2. Clear the "Counter" header outline when the row-1 highlight lands (3.24 s) so only one yellow mark is active at a time. Otherwise the yellow outlines pile up on the header through s172–s174 (Counter, Delivered and row 1 all stay outlined).

The scene lasts 4.22 s: every time in it is between 0 and 4.22.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s171.html`: one `<section class="vs-scene" id="s171" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
