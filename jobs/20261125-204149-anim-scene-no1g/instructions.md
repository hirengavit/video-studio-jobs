# Fix animated scene s132

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s132" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s132), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s131.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s132.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Fixes:
1. Overlap: the white row card "रखने की अवधि ≠ पैसा रोकने की छूट" (y 600–720, from 5.36) is drawn over the tops of the two invoice sheets, which start at about y 624. From 5.4 s to the end the sheets look cut off behind the row. Make both sheets smaller and lower: set the "Administrative instructions" and "Service व्यवस्था" sheets to scale 0.65, with their tops at y ≥ 750 and their labels ending by y 1000, so there is at least a 24 px gap under the row card. Keep the row card where it is.
2. The connector lines from the chip's right edge cross the row card: the inner branch runs down at about x 1210 through y 600–720. Route both arrows so they come down to the right of x 1800 and turn in below y 730. Or, simpler, `fade` the connector group out at 5.2, before the row arrives at 5.36.
3. At 0.0–2.96 the second arrowhead (at about x 1600) points at empty space, because the Service sheet doesn't arrive until 2.96. Draw that branch with `draw` at 2.96 together with the `slide` of the service sheet.
4. "≠ पैसा रोकने की छूट" is squeezed against the row card's right edge. Give it a 40 px inner margin. If it doesn't fit at 52 px, let the row card grow to y 600–760 and put "≠ पैसा रोकने की छूट" on a second line under "रखने की अवधि". Don't shrink the Hindi.

The scene lasts 11.89 s: every time in it is between 0 and 11.89.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s132.html`: one `<section class="vs-scene" id="s132" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
