# Fix animated scene s204

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s204" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s204), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s203.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-table` (Compare table): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-table: two or three columns (re-space the centres), three to five rows, which row gets the outline, the source line; interest rates must name the quarter and the source.

## What to change

The current file is `inputs/current/s204.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is clean (same map, cut). Rows 2–8 dim and row 1's band sweeps in on "Packing आज Regulations". After that, nothing visibly moves from 1.97 s to 11.29 s: the three `pulse`s on "25", "96" and "121" (default amount 0.14 on about 40 px digits) don't show, so the numbers the voice names are never pointed at.

1. Make the number beats visible: put "25", "96" and "121" in their own `<text>` elements (or use `words`), and on each word time `pulse` with `amount` 0.45 plus `color` to #8a5d00 (dur 0.25). Use the times in the storyboard: 25 at 4.0, 96 at 5.7, 121 at 9.9.
2. The `underline` on "International" shows up late (missing at 6.9 s, present at 9.1 s) while "international items" is said from 6.4 s to 8.7 s. Start it at 6.6 (dur 0.5, #f2b705, width 5).
3. Same table fix as s203: Hindi topic lines 32 px with 14 px clear of the row rules, and numbers 44 px bold, vertically centred in their rows.

The scene lasts 11.34 s: every time in it is between 0 and 11.34.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s204.html`: one `<section class="vs-scene" id="s204" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
