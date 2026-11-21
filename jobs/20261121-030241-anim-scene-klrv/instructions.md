# Fix animated scene s101

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s101" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s101), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s100.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s101.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s100 is fine (the TERM fades as the pair shrinks up), and the new row's timing matches the voice: booklet 1.20, sheet 2.76, currency note 3.56 (spoken 3.9), coin 5.24 (spoken 6.1), and the Postmaster arrow at 7.06 (spoken 7.3).

Fixes:
1. The shrunk postcard and envelope labels ("Departmental postcard", "Embossed envelope") end up about 26–28 px after the move at 0.00, too small for a phone and under the kit's floor. Shrink the pair less: move it to scale ~0.75 instead of ~0.55, keeping it centred at y ~330. Or keep the scale and set the two labels to Inter bold 40 px, with the labels' gap to the icon row at least 24 px.
2. The four icon cards and the Postmaster chip sit in the top two-thirds, leaving y ~880–1000 empty. After fix 1, move the icon row down ~40 px (to centre y ~560) and the arrow + Postmaster chip to y ~760, so the whole stack centres in the content area (y 190–1000).

The scene lasts 9.80 s: every time in it is between 0 and 9.80.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s101.html`: one `<section class="vs-scene" id="s101" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
