# Fix animated scene s093

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s093" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s093), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s092.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s093.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The timing is right: the row 6 chip comes at 0.22, its strike at 3.74 after "नहीं", the highlight on "किताबों की list" at 4.70, and the row 5 chip at 7.30 with its strike at 8.96. But the two slate chips are the scene's whole point (the traps), and their text is about 18–20 px. On a phone they are grey smudges, and once struck they are unreadable.

1. Set both chip texts to font-size 32 (Hindi font) and size the chips to fit. Make "आम commercial advertising" one line, chip about 470×60, right of "Advertisements नहीं" (start x ≈ 820) on row 5's title line. Split "दूसरी किताबों के / bills, supply orders" into two lines at 32 px with 1.3 line height, chip about 380×96, from x ≈ 1120 on row 6. Shorten row 6's green allowance band to end at x ≈ 1100 so the chip doesn't sit on it.
2. Move the row 6 `invoice-sheet` icon to the right of the bigger chip (x ≈ 1640–1740), at the size given for s092 (about 96 px tall), so the chip and icon don't crowd. Keep the same place as s092's last frame so the seam holds.
3. Make the strikes heavier so they read at phone size: `strike` width 4, color #4b4f58, dim 0.55. `draw` a small slate cross (ink-line path, 28 px) at each chip's left end on the strike's time (3.74 and 8.96).

The scene lasts 10.20 s: every time in it is between 0 and 10.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s093.html`: one `<section class="vs-scene" id="s093" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
