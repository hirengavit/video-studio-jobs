# Fix animated scene s166

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s166" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s166), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s165.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s166.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The beats land on their words (the date, Regulation 96, ACCOUNTABLE, Regulation 22, "letter box से बाहर"). But everything in the NEW card is drawn far too small for a phone: chips and rows read at about 20–30 px, and the key word ACCOUNTABLE is a tiny pill. The content is also packed into the top half of the card (y ~450–750), while the card runs to y ~930.
1. Set the NEW card text to readable sizes. The "16 December 2024" chip: 40 px bold. The "Regulation 96" and "Regulation 22" stamps: 44 px bold, on #7d1414 pills with white text, so they read as the stamps the storyboard asks for. "सभी India Post Parcels" and "accountable items → letter box से बाहर": 38 px, with Hindi at ≥34 px and 1.3 line height. Wrap the second line onto two lines rather than shrinking it.
2. Make the green "ACCOUNTABLE" pill 40 px bold white on #2e7d4f, and put it on its own line under "सभी India Post Parcels" instead of squeezed at the row's right end. This is the point of the line.
3. Spread the rows over the card's full height, using the storyboard values: date chip y 420, Regulation 96 block from y 520, Regulation 22 block from y 720. Leave the space below y 860 free for s167's chip.
4. Keep the `regulations-book` at top right at 0.35, but make sure it doesn't crowd the bigger date chip (put the chip at x ≤ 1500).

The scene lasts 13.50 s: every time in it is between 0 and 13.50.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s166.html`: one `<section class="vs-scene" id="s166" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
