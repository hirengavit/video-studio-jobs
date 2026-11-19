# Fix animated scene s128

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s128" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s128), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s127.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s128.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The tiles drift apart on "दूर-दूर", three Circle slots appear on "तीन Circles", and Yanam → Andhra Pradesh Circle lands on its words. The stills are reading holds. But the part tiles and the Circle slots look the same, which blurs the idea that parts go to Circles.
1. Make the Circle slots look different from the part tiles: fill the three slots (y 800–990) with envelope #f3ead6 and a postal-red 3 px outline, and keep the part tiles white with a thin grey outline. Then "part → Circle" reads at a glance.
2. Slot 1, "Andhra Pradesh Circle / आंध्र प्रदेश परिमंडल": the text touches the slot's top and bottom edges. Grow the slots to 190 px high, centre the two lines, set the EN at 36 px and the Hindi at 32 px, and keep 14 px of padding.
3. Label "3 Circles": it's squeezed between the middle tile and the middle slot. Move it to the left of the slot row (x 60, y 900) or above the slots, with a gap of at least 20 px from the tile, and add "3 परिमंडल" beneath it at 32 px.
4. Connector lines: when the outer tiles move outward, the old line segments show doubled for a moment (0.2 s). Move the connector paths in the same group as each tile (or `move` them with the same spring) so that they stay joined.

The scene lasts 8.54 s: every time in it is between 0 and 8.54.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s128.html`: one `<section class="vs-scene" id="s128" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
