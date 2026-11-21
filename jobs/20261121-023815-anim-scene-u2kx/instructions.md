# Fix animated scene s019

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s019" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s019), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s018.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s019.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s018 is exact: the outlines sit in the same places and fill in as red boxes. The timing follows the voice (AIRMAIL ~1.0, Quick Mail Service ~3.5, QMS plate + highlight ~6.0, bottom band ~8). The holds between are reading holds. The problems are readability and the bottom band.

1. The "AIRMAIL" plate lettering is about 20 px and won't read on a phone. Put a label "Airmail" under box 1 that matches "Quick Mail Service" under box 2 (Inter bold 48 px, same y), `fade` at 1.02. Then both boxes carry a readable name, and the plates stay as the box notice.
2. The bottom band "सिर्फ वही class जो box पर लिखी है" sits at about y 1025, outside the content area (y ≤ 1000), and nearly touches the "Quick Mail Service" label. Its Devanagari is about 36 px. Move the band up to y 880–960, centred, as a #f3ead6 panel 1200 px wide, with the text at 52 px. To make room, move both boxes up 60 px and scale them from 1.5 to 1.35. The labels move with their boxes.
3. Set the "Quick Mail Service" label to 48 px (it is about 40 px now) and keep it at least 24 px above the band.

The scene lasts 12.10 s: every time in it is between 0 and 12.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s019.html`: one `<section class="vs-scene" id="s019" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
