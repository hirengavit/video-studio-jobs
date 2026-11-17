# Fix animated scene s049

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s049" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s049), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s048.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s049.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The calculation builds cleanly on its words: ₹20, − ₹10, the rule line, then the highlighted ₹10 row. It joins s048 with no jump. The still stretches are reading holds after each row, which is intended.
The problem is the "wrong" line (#wrong). It sits jammed against the bottom edge of the card. At 44 px it is too small and too pale to read on a phone once it is struck through, and this is the point the scene ends on ("₹20 नहीं").

Fixes:
1. #wrong: raise the card bottom from y 960 to y 1010 (keep the top at 180), and set #wrong at y 935 so it has at least 30 px clear above the card edge. Set font-size 52 px (it's Hindi, so never under 32 px, and this is the line the voice ends on).
2. #wrong: centre it under the result row (x 960, text-anchor middle) instead of left-aligned at the label column, and use slate #4b4f58 at full opacity, not the faded tint. Then add a small slate cross (`draw`, dur 0.3) at its right end at 9.56 together with the `strike`, so it reads as rejected and not just as greyed-out.
3. Move `fade` #l4 "− पहले चुकाए" from 1.98 to 2.6 (the voice says "पहले" at 2.6), and `pop` #v4 from 2.84 to 3.2, so nothing appears before it is spoken.

The scene lasts 10.52 s: every time in it is between 0 and 10.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s049.html`: one `<section class="vs-scene" id="s049" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
