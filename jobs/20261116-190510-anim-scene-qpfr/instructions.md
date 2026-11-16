# Fix animated scene s036

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s036" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s036), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s035.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:india-post-letter-box` (and `photo:india-post-letter-box-cutout`, its subject cut out): A red India Post pillar letter box standing on a street or outside a post office, whole box visible, front view (India Post letter box in Bhopal -1), 1920×1440. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s036.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is clean: the photo and heading stay, and the term block gives way to the grid. The tiles fill on their words (Letters, Cards, the soft group, then Literature for the blind highlighted on its words), and no category is invented. Readability is the problem. The grid is squeezed into x ≈ 760–1800, y ≈ 490–870, so each tile is ≈ 90 px tall. The Hindi lines under the terms (पत्र, कार्ड, दृष्टिहीनों के लिए साहित्य) are about 24–28 px, under the kit's 32 px minimum. The "छपी डाक की बाकी श्रेणियाँ" pill sits on top of the remaining tile borders, so lines run behind it.

1. Make the Hindi translation lines in every tile at least 32 px (line height 1.3) and the English terms at least 44 px. Grow each tile to ≈ 110 px tall by starting the grid right under the heading (y ≈ 470) and using the space down to y ≈ 920. Keep the band area s037 needs by reflowing, not by shrinking text.
2. Replace the "other" tiles with one merged soft panel (envelope #f3ead6, no inner tile borders), and centre "छपी डाक की बाकी श्रेणियाँ" in it at ≥ 36 px, so no tile lines cross the label.
3. Start the empty grid frames at ≈ 1.0 s instead of 0.0 (Letters still at 1.58 s), so the grid doesn't sit empty.

The scene lasts 10.58 s: every time in it is between 0 and 10.58. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s036.html`: one `<section class="vs-scene" id="s036" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
