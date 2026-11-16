# Fix animated scene s100

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s100" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s100), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s099.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s100.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s099 is fine. The address block highlight on "permit holder का पता" (1.3–2.7 s) is clear. The stamp corner on "बिना stamp" lands exactly on its word (7.6 s). The problems are the reply card's size and where the "पता" pill sits.

1. Keep the reply card the same size after it moves back. At 4.0–6.1 s it shrinks to a tiny chip (about 90 px wide) beside the letter-box, then at about 6.1 s it is large again (about 370 px) for "आम तरीके से post". It looks like a different object. At 4.0 s, use one `move` (`spring: 'soft'`) to take it to the size and place it ends at (about x 616–988, y 392–632, left of the letter-box). Then don't scale it again.
2. Make posting read as posting: at 6.12 s, on "post करता है", `move` the card about 60 px toward the letter-box mouth (`by: [60, 0]`). Hold it there with the arrow pointing into the mouth.
3. The "Permit holder का पता" pill (2.0–4.0 s) sits on the card's bottom edge and covers the border. Move the pill fully below the card (top of the pill about 24 px under the card's bottom edge). Alternatively, put it inside the card group under the highlighted address block.

The scene lasts 9.50 s: every time in it is between 0 and 9.50. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s100.html`: one `<section class="vs-scene" id="s100" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
