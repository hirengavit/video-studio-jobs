# Fix animated scene s240

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s240" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s240), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s239.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s240.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

"Exchange" is struck next to "Refund" on "न exchange", and the cut to #kp5 on "पाँचवीं" is clean. Each tile and price lands on its spoken words, and the prices are big and red as planned. Problems: the badge and dots don't match s233–s235, and the "Domestic embossed envelope" label is shrunk to about 30 px, smaller than its neighbours' labels.

1. Badge continuity: in #kp4 and #kp5, replace the squat "4 · चौथी" / "5 · पाँचवीं" pill badge with the storyboard's tall red perforated stamp card at x100–460, y200–620, with the white numeral (about 200 px) above the Hindi ordinal (44 px), as in s233–s235.
2. Progress dots: put the seven dots at y 700, x 140–420. Only the current dot is yellow #f2b705 (dot 4, then dot 5); the others use s233–s235's pale grey (no red finished dots).
3. Set the "Domestic embossed envelope" label to the same 44 px as "Postcard" and "Letter card", on two lines ("Domestic" / "embossed envelope"), and widen that tile so it fits. Don't shrink the text.
4. Make the "Exchange" pill (0.46) the same size as s239's "Refund" pill and place it next to it in row B (same y), so the two struck pills read as a pair.

The scene lasts 10.64 s: every time in it is between 0 and 10.64.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s240.html`: one `<section class="vs-scene" id="s240" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
