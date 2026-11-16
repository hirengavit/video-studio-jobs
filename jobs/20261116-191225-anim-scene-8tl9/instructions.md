# Fix animated scene s058

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s058" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s058), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s057.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:mumbai-gpo-building`: The General Post Office building in Mumbai, front view of the domed stone facade, daytime (Mumbai General Post Office), 1920×1455. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s058.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The Hindi lines on card 1 are under the kit's 32 px minimum: "दूसरे लोग" and "बिना पंजीकरण पैकेट" are about 28–30 px, and the photo caption "बड़ा शहर" is about 20 px. Set every Hindi line to 32 px with line height 1.3 and the caption to 32 px. There is free space in the card between the "Authorised offices" pill and the tile, so move the lower lines down to make room. Don't shrink anything. Use the same sizes in s059–s062, which redraw this card.
2. "Authorised offices" (7.14) has no Hindi translation, though the kit wants postal terms in English with the translation beneath. Add "अधिकृत डाकघर" at 32 px under the pill, inside the same group.
3. The photo cut-out is about 140 px wide and reads as a thumbnail on a phone. Make it about 200 px wide, tilted 1°, with a white border and a soft shadow. Keep the credit under card 1, at least 22 px, and keep it inside the frame.

The scene lasts 8.70 s: every time in it is between 0 and 8.70. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s058.html`: one `<section class="vs-scene" id="s058" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
