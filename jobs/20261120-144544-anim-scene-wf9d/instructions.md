# Fix animated scene s038

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s038" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s038), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s037.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s038.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s037 matches and the barcode shows inside the window. The shot #dims envelope is big and clean, but the length label comes late and the slipped-address inset is hard to read:

1. Length comes about 3 s after it is said. The voice says "लंबाई 80" at about 9.4 s, but the label "लंबाई 80–125 mm" only fades in at 13.05, after "125 mm" is over. Move the horizontal dimension line `draw` to 9.40 and the label `fade` to 10.00, so the label then holds for about 4.8 s.
2. Slate inset (2.72 s, x 1300 y 760): the big cross covers the half-hidden address, so you can't see what went wrong. Shrink the slate cross to about 60 px and put it in the inset's top-right corner. Draw the shifted address block so that its lower half clearly sits behind the window's bottom edge, with a 3 px ink window outline. Scale the inset from 360×200 up to 440×240 (keep its centre) so it reads on a phone.
3. Give the inset's label "खिसककर address न छिपे" ink #2b2622 instead of grey. It is the point of the beat, not a supporting line.

The scene lasts 14.81 s: every time in it is between 0 and 14.81.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s038.html`: one `<section class="vs-scene" id="s038" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
