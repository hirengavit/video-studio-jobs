# Fix animated scene s090

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s090" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s090), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s089.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s090.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The MIS card fills in on its words and the seam from s089 matches. But the TRAP BANNER that slides down at about 4.4 s sits right on top of the three card headings, so GPS, GPRS and MIS vanish just as the voice says "Exam में यहीं confusion" and starts contrasting them. The banner line "GPS → location" is a small amber chip about 28 px high, which won't read on a phone.

1. Stop the banner covering the headings: at 4.36 s, as the banner starts to slide, `move` the three-card group down by about 150 px (0.5 s ease; scale the group to 0.88 if its bottom would pass y 1000), so the banner (y 200–330) sits above the card headings. Every heading must stay fully visible from 4.4 s on.
2. Make the banner line chip readable: "GPS → location" Inter bold 44 px (amber #f2b705 on a #7d1414 pill at least 64 px tall), set to the right of "Exam में यहीं confusion". Leave room for the "GPRS → data" chip that s091 adds next to it.
3. Land "GPS → location" on "GPS से location" (≈5.6–6.0 s) instead of 7.16 s. It is still fading in at 7.2 s, after the voice has moved on to GPRS.
4. Use s089's enlarged card content (pin, sheet and text sizes) so the cut from s089 stays identical.

The scene lasts 9.00 s: every time in it is between 0 and 9.00.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s090.html`: one `<section class="vs-scene" id="s090" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
