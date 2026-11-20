# Fix animated scene s082

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s082" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s082), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s081.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s082.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. "दो अलग काम" under the "≠" is squeezed into the ~120 px gutter and wraps to three tiny lines (~24 px), under the kit's 32 px minimum for Hindi. Take it out of the gutter: make it a single-line grey pill "दो अलग काम", Hindi 40, centred at (960, 900) below the two cards, and `fade` it at 3.07 s as planned. Shorten both cards to y 200–840 so the pill sits clear. Keep the cards at y 200–840 in s083 too, so the seam holds.
2. Both cards are mostly empty below y 600 for the whole scene. Raise the wax-seal from scale 1.2 to 1.8, centred at y 520 in the right card. Move the left job line ("handling में article को एक साथ रखे") to y 640 and set it in Hindi 46 as the storyboard asks (it renders at ~36 px).
3. The "Closure" highlight sweeps at ~5.2 s, but "Ordinary closure" is said at ~4.4–5.0 s. Move the `highlight` to 4.50 s so it lands on "closure".

The scene lasts 10.31 s: every time in it is between 0 and 10.31.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s082.html`: one `<section class="vs-scene" id="s082" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
