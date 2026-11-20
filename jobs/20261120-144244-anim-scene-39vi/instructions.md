# Fix animated scene s026

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s026" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s026), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s025.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s026.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The glue smear under the envelope's bottom edge is tiny, about 90×20 px at full size, and its slate cross is smaller still. A phone viewer won't see "glue left outside". Draw the smear about 180×70 px, hanging off the lower right edge of the envelope (around x 760–940, y 840–910), with a 3 px ink outline and a pale fill like #e8e2c8. Make the slate cross on it at 9.96 s about 80 px with a 6 px stroke.
2. The markers in the point list don't match: points 1 and 2 have green ticks, but point 3 has a red numbered badge. Red is brand only, and this point is a "not allowed". Give point 3 a slate (#4b4f58) cross chip the same size as the ticks, so the list reads ✓ ✓ ✗.
3. Point 2, "कहीं कोई हिस्सा खुला नहीं", wraps onto two lines inside a narrow chip while the right column has room. Widen all three point chips to the full x 1100–1820 so each point fits on one line at 46 px.

The scene lasts 10.84 s: every time in it is between 0 and 10.84.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s026.html`: one `<section class="vs-scene" id="s026" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
