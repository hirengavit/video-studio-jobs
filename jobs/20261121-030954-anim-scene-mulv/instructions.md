# Fix animated scene s122

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s122" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s122), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s121.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `mind-map` (Mind map): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: mind-map: up to 4 branches (bilingual screens hold fewer); the grey example lines or drop them; the centre words.

## What to change

The current file is `inputs/current/s122.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The jump at 5.42 s is the planned cut to #map, so it is intended. The mind-map half is clean. The first half is crowded: the letter box and the counter are squeezed into the narrow gap between the house ghost and the agreement sheet.

1. At 0.00 fade the house ghost out (0.0 → 0.3). By 0.6 s, slide the agreement sheet and the "COD = Accountable" pill out to the right (or fade them to 0) so the box and the counter get the left two-thirds of the screen.
2. Make the two larger and space them out: the small letter box at about x 300 and `posting-counter` at about x 900, both resting on one floor line (y ≈ 820), at about 1.8× their current scale. Use `place` to rest the receipt on the counter top; right now it floats above the counter's corner.
3. "नहीं" under the slate cross touches the base of the box. Move it 24 px lower and set it at 40 px, so it clears the cross and the Devanagari stays ≥ 32 px.
4. The "Counter + receipt" label overlaps the right edge of the counter and the sheet. Centre it under the counter, 30 px below its base, at 44 px.
5. Keep the receipt tick on 2.92 s ("receipt") as planned, then hold the layout still until the cut.

The scene lasts 12.11 s: every time in it is between 0 and 12.11.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s122.html`: one `<section class="vs-scene" id="s122" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
