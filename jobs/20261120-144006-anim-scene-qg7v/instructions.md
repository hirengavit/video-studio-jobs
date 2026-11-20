# Fix animated scene s024

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s024" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s024), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s023.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s024.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Continues from s023 cleanly. The cut to shot #four is right for the new list, and the four tiles (parcel, ID badge, letters, sorting machine) pop on "सामान", "staff", "दूसरी डाक" and "equipment", which works well. Two problems a viewer will see. First, the cancelling beat barely reads: the wavy cancel lines over the small stamps are thin and light, so at phone size the stamps look unchanged. The chip "cancel का काम ज़्यादा" is squeezed into two cramped lines with small Hindi, smaller than the "जगह घटती" chip above it. Second, after the cut at 3.25 s the screen holds only the heading for about 2.3 s, with the lower three-quarters empty.

Fixes:
1. Draw the cancel lines in ink #2b2622 at stroke-width 4 (not a thin light stroke), as 2–3 wavy lines running across both rows of small stamps, `draw` at ≈0.7 s on "cancel करने में".
2. Make the chip "cancel का काम ज़्यादा" one line, the same height and font size as "जगह घटती" (Hindi ≥34 px): widen it to ~420 px and place it below "जगह घटती" at x 1440–1860, y ≈ 830, `pop` at ≈1.5 s (on "भी काम बढ़ता है").
3. At the shot #four cut (3.25 s), bring the four empty tile frames (380×520, x 100–1820, y 330–900) in with the heading, faint (envelope #f3ead6 fill, no icon or word), so the "four things" read at once; then `pop` each tile's icon and word on its spoken word as now (5.59, 6.62, 7.87, 9.47 s).

The scene lasts 10.80 s: every time in it is between 0 and 10.80.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s024.html`: one `<section class="vs-scene" id="s024" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
