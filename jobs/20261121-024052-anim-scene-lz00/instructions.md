# Fix animated scene s029

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s029" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s029), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s028.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s029.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

All three shots cut on their words: "letter box में नहीं", the two services on "domestic service … international registered letter", and the parcel and postmark on "Parcels … 16 December 2024". The postmark `stamp` at 9.47 hits the date exactly. The still stretches are reading holds and are intended.

1. Shot #mix: the two chips are small (about 650×260 px) with a wide empty gap and nothing between them until the "≠" at 5.98. Size each chip to about 760×300 (x 160–920 and x 1000–1760, centred at y ≈ 600), with text at 60 px. Put the amber "≠" at 120 px in the gap at x ≈ 960, so it reads at a glance. Move it to 5.6, on "मत मिलाइए", and make sure it is fully on screen before the 7.29 cut.
2. The opening card is a mid-size card on an empty canvas. Scale the whole opener group about 1.3× and centre it in the content area (y ≈ 595). Keep "letter box में नहीं" at 56 px or more.
3. Shot #date: the parcel and the postmark both sit high (centre y ≈ 470), leaving the bottom third empty. Move both down to centre y ≈ 590, scale the parcel 1.3×, and put "Regulations लागू" right under the postmark at 52 px.

The scene lasts 13.43 s: every time in it is between 0 and 13.43.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s029.html`: one `<section class="vs-scene" id="s029" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
