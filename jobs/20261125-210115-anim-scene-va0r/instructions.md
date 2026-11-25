# Fix animated scene s193

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s193" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s193), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s192.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s193.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Seam with s192 is exact (same card, rows 1–2 in place) and rows 3 and 4 land on their words ("Claim" at 0.0, "Complaint के 5 रास्ते" at 3.85 against the voice at about 3.5–4.4). The still stretches in the check notes are the planned holds of an exam-angle card while each row is read, so they are intended. One real problem: row 5, the row the voice is on at the end, is cramped. "धोखाधड़ी, पहली नज़र में आधार:" is set at about 40 px, against 60 px for rows 1–4, and it hugs the top of its yellow band with empty band below. In s194 a second line gets squeezed into the same band.

Fixes:
1. Row 5 (#row-5): lay it out from the start as a two-line row. Grow its band from about 105 px to 125 px tall (y ≈ 850–975, still inside the card, which ends at about y 983). Set both lines at 48 px with a line height of 1.15, and put line 1 "धोखाधड़ी, पहली नज़र में आधार:" at the top line's position (band top + 14). Line 2 stays empty until s194, so this line doesn't move at the seam.
2. Row 5's entry time: move it from 5.87 to 6.5, so it lands with "धोखाधड़ी" (voice at about 6.8) rather than about a second early while "Complaint के पाँच रास्ते" is still being heard. Keep `fade` + 0.2 s `slide from left dist 40`, and move the yellow `highlight` from row 4 to row 5 at the same time.

The scene lasts 8.89 s: every time in it is between 0 and 8.89.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s193.html`: one `<section class="vs-scene" id="s193" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
