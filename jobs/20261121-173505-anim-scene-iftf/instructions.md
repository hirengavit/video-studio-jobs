# Fix animated scene s145

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s145" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s145), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s144.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s145.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s144 is clean: same scale, plane and heading, and the stack builds on it. But the screen ends up with about eight things on it (heading, scale, plane, a 3-block stack, the carried-over "हवा से भेजने के लिए स्वीकार" tag, "ऊपर से", the Department chip and "≠"), and the two key relations are hard to read. "ऊपर से" sits down at the left under the scale, away from the block it describes. The "≠" sits beside "ऊपर से" instead of between the airmail fee and the Department's decision.

1. At 0.00, `color` the carried-over tag "हवा से भेजने के लिए स्वीकार" to supporting #6f6a63 and shrink it (scale 0.85), or move it under the plane out of the main reading line. That leaves the stack and the chip as the two subjects.
2. Make the Postage / बाकी fees / Airmail fee stack about 1.4× bigger (block labels ≥ 44 px) and centre it between the scale and the plane. The 2.50 tag "ऊपर से" goes right beside the top block "Airmail fee" with a short ink arrow pointing to it (dx ≈ +40 from the block's right edge, same y), not below the scale.
3. Put "≠" between the "Airmail fee" block and the Department chip on one line: chip to the right of the stack at the same height as the top block, "≠" centred in the gap (keep it at 8.78). Right now it reads as "ऊपर से ≠ Department".
4. Move the Department chip's `fade` from 5.92 to about 6.9, when "department" is spoken (6.2–8.1), so it doesn't arrive before the word.

The scene lasts 11.42 s: every time in it is between 0 and 11.42.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s145.html`: one `<section class="vs-scene" id="s145" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
