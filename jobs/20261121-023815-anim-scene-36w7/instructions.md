# Fix animated scene s023

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s023" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s023), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s022.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s023.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade into Part 2 is correct. The TERM is on screen at 0 s, and the three steps land on their words (Receipt ~2.2, Tracking ~4.3, Signature ~5.7). The chips ink ~8.1, digital ~9.1, सबूत ~9.7 and Speed Post ~11 are on time. The long still from 4.5 to 10.9 s is just the reading holds between those small chips, which is acceptable for a definition. The trouble is the size of the late items.

1. The "ink" and "digital" chips are about 24 px and the "सबूत" chip is about 26 px, so they won't read on a phone. Make them 40 px Inter / 44 px Devanagari, with chip heights ~64 px. To fit them, grow the step panel's third row by 40 px.
2. Set the step labels "Receipt पर accept", "Tracking" and "Signature" to 52 px (they are about 40 px now), and scale the step icons ×1.2 to match.
3. Make the "Speed Post" chip under the TERM a white chip with a #ead9a8 border and 48 px ink text. Yellow is for highlights and added material in this kit, and here it is an example. In s024 it then matches the other example chips.

The scene lasts 12.20 s: every time in it is between 0 and 12.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s023.html`: one `<section class="vs-scene" id="s023" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
