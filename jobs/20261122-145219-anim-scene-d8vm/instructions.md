# Fix animated scene s053

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s053" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s053), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s052.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s053.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The arrows draw and the numbers type on their spoken words: "चौड़ाई" 1.6 s, "35" 2.1 s, "– 50 mm" by 3.9 s, "लंबाई" 4.8 s, "80" 5.7 s, "– 125 mm" 8.0 s. The numbers are the whole point, but they sit in small white label boxes at about 44 px while the space below and to the right stays empty.

1. Make the values the main text: "35 – 50 mm" and "80 – 125 mm" in Inter bold 72 px, with "चौड़ाई" / "लंबाई" at 52 px in heading red #9e1b1b beside or above each value. Grow the white label boxes to fit, with about 24 px padding.
2. Use the empty space. Centre the width label on the vertical arrow's mid-height, 40 px to its right. Centre the length label under the horizontal arrow at y ≈ 860. Keep everything inside x 100–1820, y 160–1000.
3. The full "80 – 125 mm" lands at 8.0 s and the scene cuts at about 9.3 s, which is barely 1 s to read it. Type "– 125 mm" by 7.6 s (while "80 से 125" is said), so the finished pair holds at least 1.5 s.

The scene lasts 9.38 s: every time in it is between 0 and 9.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s053.html`: one `<section class="vs-scene" id="s053" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
