# Fix animated scene s210

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s210" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s210), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s209.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s210.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam works with a cut to tab 3. The phone, the "Click N Book" typing, the Speed Post and Registered articles chips and "Online booking" all come in on their words. But the scene's point (now, registration is an add-on service of Speed Post) sits in a small bottom panel. The "+ Registration · add-on service" chip is about 24–28 px, too small to read on a phone. The right half of the "अब" panel is empty, and the phone is small on the left.

1. Make the bottom "अब" panel content bigger. Make the "Speed Post" card at least 44 px bold (pill about 260×72) and the "+ Registration · add-on service" chip text 40 px (chip about 640×72). Put them next to each other in the panel, with the panel taller at y 740–990 so both fit with even margins. Keep the `highlight` on "add-on" at 11.5 s.
2. Make "अब" 44 px (it is about 32 px now), sitting at the panel's top-left inside its group.
3. Scale `phone-app` up from its current size to about 1.4 (keeping its base on the ground line at x 500), so the left side fills the space under "पुराना exam material". Use one scale number.
4. Hold the last frame: give the scene at least 1.5 s after the add-on chip lands (11.5 s) before the next scene's fade starts, so the chip can be read.

The scene lasts 13.12 s: every time in it is between 0 and 13.12.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s210.html`: one `<section class="vs-scene" id="s210" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
