# Fix animated scene s153

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s153" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s153), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s152.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s153.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea reads and every beat lands on its word (term card 2.68, "Authorised customer" 4.3, credit line 6.84), but the whole layout sits in the top half of the frame: both cards end around y 680, leaving y 700–1000 empty, and the left rule card, the only thing on screen for the first 2.7 s, is a small box at x ~150–770.

1. Re-centre and enlarge both cards to fill the content area: left rule card x 100–760, y 200–960; right term card x 820–1820, y 200–960 (same 100 px side margins, card centres at y 580). Keep the red rule on the term card's left edge.
2. Scale up the left card's content for the opening hold: envelope icon about 1.6× (≈ 260 px wide, centred at y 420), "पूरा prepayment" bold 72 px and "आम नियम" 52 px #6f6a63 beneath, the pill sized to them (≈ 560 × 200). It is the only anchor for 2.7 s, so it should read as the rule.
3. In the term card, space the items down the taller card instead of stacking them at the top: "Book Now Pay Later" 84 px at y 300, Hindi 52 px at y 380, "Authorised customer" chip (56 px) at y 520, credit icon + "credit सुविधा से भुगतान" (60 px) at y 700, so the card isn't mostly empty while the items wait.
4. Put the Hindi meaning under "Authorised customer" ("अधिकृत ग्राहक", 40 px #6f6a63, fading in 0.5 s after the English), as the kit's English-term rule asks.

The scene lasts 9.38 s: every time in it is between 0 and 9.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s153.html`: one `<section class="vs-scene" id="s153" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
