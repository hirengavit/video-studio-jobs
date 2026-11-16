# Fix animated scene s125

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s125" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s125), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s124.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s125.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
It continues correctly from s124: the same panels, with the NOW side filling in. The envelope outline, "minimum", 140 and 90 mm, and ± 2 mm build in order. The "frozen" note only reflects small, slow reveals and is not a real problem. The problems are the label and two late reveals.
Fixes:
1. Section label: use exactly "PART 7 · BUSINESS REPLY ARTICLES", as in s121–s123 and s127–s128. It currently reads "BUSINESS REPLY ARTICLES".
2. Bring the "90" height dimension in at 5.4 s, not at about 7 s (the voice says "140 by 90" between 4.2 and 6.8), and add "mm" at 6.2 s.
3. Bring the "± 2 mm" chip in at 7.2 s, when "2 millimetre" is said (6.8–8.7), instead of after 9 s.
4. The envelope diagram is small in the panel (about 400 px wide). Scale its group up about 1.25× (one scale number) around its centre, so the outline and the 140/90 labels fill the NOW panel's empty lower area with 40 px margins inside the panel.

The scene lasts 11.66 s: every time in it is between 0 and 11.66. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s125.html`: one `<section class="vs-scene" id="s125" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
