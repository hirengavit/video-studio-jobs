# Fix animated scene s033

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s033" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s033), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s032.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s033.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The bend beat lands on its words (लचीला 1.64, U drawn 2.67, U SHAPE 2.91) and the cut to the table at 4.57 is a clean change of idea. Two problems a viewer would notice:

1. The Hindi translations in the table label column (कम से कम, अधिकतम, छूट, मोटाई, कागज़) render at about 24–28 px and touch the row line beneath — the kit says Hindi is never under 32 px and never touches a line. Set them to 34 px (class `hi`, fill #6f6a63), English labels to 40 px; within each 120 px row put the English baseline at row top + 46 and the Hindi baseline at row top + 96. If they still don't fit, shorten the header bar to 64 px and give the five rows the space it frees (card stays y 170–790). Every later scene that reuses this table (s034–s037) must use the same sizes.
2. The empty grid stays on screen from 5.97 to 7.23 (an empty card for ~2.7 s after the header lands at 4.57). Bring the rows in with the row lines: start the row `fade` stagger (0.15) at 6.0, right after `draw` row lines (5.97), so the card fills while the voice is on "envelope के नाप".

The scene lasts 8.73 s: every time in it is between 0 and 8.73.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s033.html`: one `<section class="vs-scene" id="s033" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
