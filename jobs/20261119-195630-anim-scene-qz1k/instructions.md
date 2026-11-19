# Fix animated scene s151

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s151" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s151), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s150.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s151.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s150 is correct, and row 2 greys out while row 3 slides in at 0.68. "70 g/m²" is highlighted on "70 grams" (1.7–3.0). The square icon and the underline under "70 grams" (9.62) both land on their words. The weakness is that the scene's own point, the gist line, is the smallest text on screen.

1. The gist line "1 square metre कागज़ ≥ 70 grams" renders at about 26–28 px in grey, under the kit's 36 px floor, even during the push-in. Set it to 40 px in ink (#2b2622), not grey, because it is the explanation the voice is giving. Place it on its own line inside row 3 at x 700, about 12 px below "कागज़ की substance ≥ 70 g/m²", and grow row 3's height to fit it (rows 4–5 are still empty, so there is room).
2. The push-in `{on: '#row3', zoom: 1.12}` makes the 1720 px card wider than the frame, so at 6.6 s and 8.9 s the card's left and right borders are cut off at the frame edges. Lower the zoom to 1.08 so the card's borders stay inside x 20–1900. Keep the start at 4.74 and the return to wide by 10.6.
3. Set the "कागज़ का भार" sub-label to 40 px as well (it is about 30 px now), matching the fix for row 1 in s150.
4. Draw the underline under "70 grams" at 9.62 to the new 40 px line's baseline, spanning only "70 grams".

The scene lasts 11.12 s: every time in it is between 0 and 11.12.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s151.html`: one `<section class="vs-scene" id="s151" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
