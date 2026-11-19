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
Shillong lands in the header pill, and the Assam and Sikkim panels make "outside the North East Circle" easy to see. The stills are reading holds.
1. Overlap: at about 2.0 s the "Assam Circle" panel slides in over the "6" stamp while the stamp is still fading out, so the two texts share a spot. Start the stamp's `out` at 1.60 (0.3 s), and start panel 1's `slide` at 1.95 so that it arrives after the stamp is gone.
2. Raise the tiny "Headquarters" label in the HQ pill to at least 26 px and "शिलांग" to 32 px. Grow the pill's height so that the three lines don't touch the pill's edges.
3. Raise the Hindi in the panels ("असम परिमंडल", "गुवाहाटी", "सिक्किम", "पश्चिम बंगाल परिमंडल") and under the greyed states to at least 32 px. The "West Bengal Circle" box in panel 2 should be 40 px taller so that its Hindi isn't cramped.

The scene lasts 9.40 s: every time in it is between 0 and 9.40.

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
