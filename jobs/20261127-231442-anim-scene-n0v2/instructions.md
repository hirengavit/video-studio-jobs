# Fix animated scene s207

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s207" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s207), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s206.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s207.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s206 is exact. "बात करना" (0.53) and the fourth chip (3.32) land on their words. The cut to #aims at 5.99 sits just before "मकसद", and the three cards pop on "financial inclusion", "Digital India" and "गाँव,". The cards fill the frame evenly (x 160–1760) with clear icons. The problem is the fourth chip: "सरकारी और postal सुविधाएँ पास" has been squeezed into a 90 px chip, and its two lines shrink to about 28–30 px. That is below the kit's 32 px minimum for Hindi and visibly smaller than the other chips.

Fixes:
1. Chip 4 "सरकारी और postal सुविधाएँ पास": keep it at 40 px like the other chips, never shrunk. Either grow this chip to 130 px tall with two lines at 40 px and line height 1.3 ("सरकारी और postal" / "सुविधाएँ पास"), or widen the chip column to x 1300–1800 so it fits on one line. Make sure the column still ends above the counter top (y ≤ 750). If it doesn't, tighten the gap between chips evenly (for example a 12 px gap).
2. The pop must still land at 3.32, with the text inside the chip's group so the two arrive together.

The scene lasts 12.13 s: every time in it is between 0 and 12.13.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s207.html`: one `<section class="vs-scene" id="s207" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
