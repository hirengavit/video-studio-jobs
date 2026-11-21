# Fix animated scene s028

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s028" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s028), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s027.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s028.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The highlight on "उसी" and the line's timing match the voice. The still stretches are reading holds.

1. Continuity: the "Addressee" card takes the parcel card's place at 1.42, so "Speed Post parcels" disappears from a layout that should only gain things. Keep the parcel card where it is. Put the addressee card in the free band below the chip (x 760–1780, y 760–900, using the s027 layout fix). Draw the arrow from the envelope card's lower-left corner down the gap at x ≈ 740 into the addressee card's left edge.
2. Put the line "उसी को, जिसके नाम article है" inside the addressee card, right of the "Addressee" label, at 52 px, as part of that card's group. Drop the separate empty strip under the chip. The card then holds its own words instead of grey placeholder lines.
3. The "Accountable" pill is stacked over the bottom of the envelope, crowds the "Speed Post" pill, and its text is about 36 px. Place it on the envelope card's top-right corner, rotated −6° like a tag, with its text at 44 px or more. Keep the `pop` at 6.34, or move it to 6.0 to land just before "accountable" (≈ 6.2).
4. The addressee card currently arrives looking faded (2.0 s frame) and reads as disabled. Bring it in with `pop` at full opacity on "addressee" (≈ 2.0 s instead of 1.42), then draw the arrow just before it.

The scene lasts 9.46 s: every time in it is between 0 and 9.46.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s028.html`: one `<section class="vs-scene" id="s028" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
