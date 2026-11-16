# Fix animated scene s025

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s025" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s025), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s024.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s025.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The push-in on the stamp box lands well and the "74 mm" dimension appears on its word (2.1 s) and holds through the still stretch from 2.2 to 5.9 s, which is the reading time it needs. The 7.2 to 10.4 s hold under "40 mm पते तक का gap" is also intended. Two things a viewer will notice:

1. Do not remove the 74 mm dimension line and its "74 mm" pill at about 6.0 s. In the 6.4 s frame it is already gone while the camera is still zoomed in, so the screen clears itself before the zoom-out. Keep both on the envelope (inside the envelope group, along #stamp-box) until the scene ends. They are a measure that persists, like the other arrows in this diagram.
2. Start the zoom-out at 6.4 s ("याद रखिए"), not 6.08, and end it by 7.4 s. Then pulse the 40 mm arrow at 7.6 s and show the band "40 mm = पते तक का gap" at 8.4 s, on "पते तक का gap". That puts one action on each beat instead of the pulse and the band landing during the camera move.
3. Move the bottom band "40 mm = पते तक का gap" down to y 975–1035 (centre it on the envelope, x 120–1260), so there is a clear 15–20 px gap below the envelope's bottom border. Right now it touches the border.

The scene lasts 10.44 s: every time in it is between 0 and 10.44. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s025.html`: one `<section class="vs-scene" id="s025" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
