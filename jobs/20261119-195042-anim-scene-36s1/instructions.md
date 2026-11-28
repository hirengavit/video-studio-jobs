# Fix animated scene s131

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s131" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s131), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s130.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s131.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Row 2's breakdown builds on its words (₹22 at about 1.1 s, ₹1 at about 3.9 s). Both stationery-charge panels highlight together on "Stationery charge" at about 6.4 s, which reads well. The weak part is the scene's key line, "Stationery charge = लिफ़ाफ़े की कीमत". It is small amber text squeezed onto the same line as "छोटा रजिस्ट्री लिफ़ाफ़ा" and tight against the ₹22.50 chip above and the strip below, so on a phone it reads as clutter.

1. Move the amber line into the free space to the right of the ₹22.50 chip in row 1, inside the row 1 card group, as two lines at x 1400: "Stationery charge =" (Inter 44 px, #8a5d00) at y 270 and "लिफ़ाफ़े की कीमत" (Noto Sans Devanagari 44 px, #8a5d00) at y 330. Keep it fading in at 8.97 s.
2. In row 2's right panel, close the gap between "₹1" and "· Stationery charge". Place the label about 16 px after the end of "₹1", about 50 px further left than now, so it matches row 1's "50 paise · Stationery charge".

The scene lasts 9.89 s: every time in it is between 0 and 9.89.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s131.html`: one `<section class="vs-scene" id="s131" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
