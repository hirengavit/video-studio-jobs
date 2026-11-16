# Fix animated scene s134

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s134" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s134), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s133.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s134.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

"पैसा खत्म होते ही" (2.2 s) should drain the gauge. Instead it rises from about 0.5 to nearly full by 5.7 s, which says the opposite. The "Permit fee भरा → deposit की ज़रूरत खत्म" line is laid over the ledger's rows. The strike is red, and the kit uses slate for rejected ideas.

1. Gauge: on "खत्म" (2.2 s), drain #deposit-level from its s133 end (1.0) to 0.05 over 1.2 s, and keep it there. Remove the rise at about 4–5.7 s.
2. Move the slate line "Permit fee भरा → deposit की ज़रूरत खत्म" out of the ledger. Either put it in its own slate pill below the bottom row (about y 1000), or fade the ledger group to 0.35 opacity at 5.5 s and centre the pill over it. Text must not sit on the ledger's rows. Set it to 34 px.
3. Strike at 8.3 s: draw the strike-through in slate #4b4f58, 4 px, not red, and add a small slate cross at the line's right end. (The kit says red is never the signal for wrong.)
4. The texts under the gauge ("या", "पैसा खत्म होते ही") are about 26 px. Set them to 34 px. Make "जो पहले हो" a 34 px pill and keep it inside the 80 px margin.
5. Set data-section="PART 7 · BUSINESS REPLY ARTICLES".

The scene lasts 9.53 s: every time in it is between 0 and 9.53. Shared states (use with level/pour {state}): "deposit" (during this scene: 1.36 s: 0.45, 8.54 s: 1).

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s134.html`: one `<section class="vs-scene" id="s134" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
