# Fix animated scene s163

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s163" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s163), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s162.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s163.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The sub-lines "Letter: envelope, बंद करना" and "Letter card: न अंदर, न ऊपर" are about 26–28 px, squeezed into the top-right corner of row 3, and the first one touches the card's top edge. Set them to 36 px with a line height of 1.3, and place them as two stacked lines under the step-3 title (x ≈ 660, y step3 + 70 and + 120). Grow row 3 to hold them, and shift rows 4 and 5 down to match. Hindi must not shrink below 32 px.
2. At 2.5 s, enter the "Letter" sub-line on "Letter में envelope" (narration 2.8 s) with a `fade` of 0.3 s. At 6.2 s, bring in "Letter card" on its words "Letter card में" (6.3 s), not at 4.95 s. Right now the chip appears while the voice still says "बंद करना".
3. Make "न अंदर, न ऊपर" the screen's single keyword chip: soft band #fde9a6, words in #8a5d00 at 36 px. Keep the label "Letter card:" in ink #2b2622 at full weight. Neither line should be pale red, which now looks like the dimmed-step colour.
4. Step 2 dims to a pale red/grey at 0.2 s. Use the supporting colour #6f6a63 for dimmed titles across s162–s165, so a dimmed step doesn't read as a red highlight.

The scene lasts 10.10 s: every time in it is between 0 and 10.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s163.html`: one `<section class="vs-scene" id="s163" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
