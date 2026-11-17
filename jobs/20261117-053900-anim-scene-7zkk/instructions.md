# Fix animated scene s191

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s191" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s191), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s190.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s191.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam holds: the parcel, the chips row and the heading stay. Each row arrives on its word: "ज़रूरी", "Letter item" with a cross, and "MERCHANDISE · माल" with a green tick. Problems:

1. The footer "Administrative instructions / से तय form" is about 36 px and squeezed against the card's bottom edge. Set it at 40 px or more (Hindi 36 px or more, with a 1.3 line height), and make the card 60 px taller (to y 960), or move the rows up 20 px, so there's a 24 px margin at the bottom.
2. "Letter item" is a postal term with no translation. Add "पत्र वस्तु" beneath it, smaller and lighter, as MERCHANDISE has "माल". Make that row the same height as the MERCHANDISE row.
3. From 0.5 s to 3.28 s the white card is mostly empty under its header. Bring the "ज़रूरी" pill in at 1.62 s as planned, and start the card 140 px shorter, growing it (or revealing its lower part) as the rows arrive at 3.28 s and 6.02 s.
4. The counter is cut away at 0.00 s without the planned parcel shift. The parcel is fine where it is, but the "Window" label goes too. Either keep it, or let the card's `pop` cover the counter, so the change doesn't read as a jump.

The scene lasts 13.24 s: every time in it is between 0 and 13.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s191.html`: one `<section class="vs-scene" id="s191" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
