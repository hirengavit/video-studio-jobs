# Fix animated scene s161

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s161" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s161), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s160.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:franking-machine-photo` (and `photo:franking-machine-photo-cutout`, its subject cut out): A real desktop postage franking machine (postage meter), whole machine visible, side or three-quarter view, plain background if possible (Machine à affranchir Pitney Bowes DM400c à Lyon, France), 1920×1436. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s161.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Seam with s160 is clean (same table, row 5 lands on "franked item"); the cuts at 2.47 s and 7.45 s are the planned sub-shots, so the "jump at 2.72 s" is intended, and the stills are reading holds on their words. The real photo is styled correctly with its credit. The problem is size: both later sub-shots use only a small part of the frame.

1. #frank: the franking impression is a tiny mark in the middle of a big empty white card. Raise `piece:franking-impression` from scale 0.9 to about 2.0 and centre it in the card (≈ x 1000–1760, y 250–660) so the red stamp fills it with even margins; keep the `stamp` at 3.29 s.
2. #licence: everything sits in the top-left two thirds and the bottom ~35% is empty. Scale the licence → arrow → office row by about 1.35 and centre it lower: licence x 200–690, y 360–980; arrow x 760–1180, y 670; office icon x 1240–1680 with "तय office" (Hindi 56) under it at y ≈ 960. Keep "Franked mail" + Hindi at the top (x 760, y 260).
3. #frank: the cream chip "posting की शर्त अलग" is cream on cream and reads as faded, though it is the turn of the scene. Give it a 3 px #f2b705 edge and #8a5d00 text (the "changed" colour), and `highlight` the word "अलग" as it pops at 6.25 s.

The scene lasts 10.93 s: every time in it is between 0 and 10.93.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s161.html`: one `<section class="vs-scene" id="s161" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
