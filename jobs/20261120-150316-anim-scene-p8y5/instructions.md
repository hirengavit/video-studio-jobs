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

1. The string never appears. At 5.2 s and 8.5 s the cover has no #string and no #knot, so "डोरी या tape बँधी है" has nothing to show. Make the piece's #string and #knot visible and `draw` them from 3.86 s over about 0.8 s, on "डोरी". The string runs crosswise with the knot at the centre, as the piece is built.
2. The two "string end" seals land on the flap diagonals (lower left and lower right of the centre), where nothing ends, so they look like random extra seals. Place them on the piece's string-end seal spots, at the free ends of the drawn string.
3. Timing: those two seals pop at about 8.47 s, more than a second after "सिरों" (about 7.3 s), and are held for only a moment before the cut. Pop them at 7.26 s with stagger 0.1.
4. The seam seals are already in before 1.0 s, during the zoom-out (still from 1.0 s), not on "seam" (1.9 s). Start their `pop` at 1.95 s with stagger 0.1, after the camera settles at 0.8 s.
5. The flap-seal `pulse` at 0.48 s is lost inside the zoom-out. Move it to 0.9 s, after the camera is wide, with stagger 0.08.

The scene lasts 8.52 s: every time in it is between 0 and 8.52.

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
