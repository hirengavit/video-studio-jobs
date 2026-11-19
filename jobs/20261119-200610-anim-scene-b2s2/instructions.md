# Fix animated scene s183

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s183" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s183), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s182.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s183.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The "allowed / मंज़ूर" pill in the ad row (right card, bottom row, lands about 13.3 s) is far too small: "मंज़ूर" is around 18–20 px and "allowed" around 26 px, and it won't read on a phone, which breaks the kit's 32 px minimum for Hindi. Enlarge the pill to about 230×96. Set "allowed" to Inter 700 at 36 px in #2e7d4f and "मंज़ूर" to Noto Sans Devanagari at 32 px beneath it, line height 1.3. Keep the tick. Keep the pill inside the ad row's group and grow the row's height to about 130 px so the pill has margins top and bottom.
2. The four name chips (Single · Reply · Printed · Meghdoot) at the top of the right card use about 30 px text in short pills. Raise the label to 36 px and widen each chip to match, keeping even gaps across the card's width (the card is about 1000 px wide, so there is room).
3. The ad row text "तय जगह में / छपा advertisement" sits in the row's top-left with empty space to its right until the pill arrives. Set it at 40 px so it matches the struck rows above and lines up with their text start.

(The left side is empty until the stamp card slides in at 5.46 s on "postage". That is the storyboard's plan and lands on its word, so leave it. The "jump" in the check notes at 5.66 s is that slide, which is intended.)

The scene lasts 14.82 s: every time in it is between 0 and 14.82.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s183.html`: one `<section class="vs-scene" id="s183" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
