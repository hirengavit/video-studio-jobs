# Fix animated scene s128

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s128" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s128), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s127.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s128.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s127 is exact. The cut to #open is right for the new topic, and the yellow outline around all four envelope edges with "लगातार बंद" highlighted is the clearest moment of the stretch. Two timing issues:

1. The #notify bar slides up at 1.34, yet the voice says "आगे की कार्रवाई, उनके निर्देश पर" from 0.0 to 2.1, and the cut comes at 3.44. The bar is half late and gets only about 2 s on screen, below the kit's 3 s hold. Move `slide` up the bar to 0.15 so it lands with "आगे की कार्रवाई" and holds about 3.3 s.
2. After the cut, the frame at 3.7 is only the heading and a speck where the envelope starts drawing. `draw` the envelope with dur 0.6 starting at 3.44 (on the cut), so the new shot opens with its main object forming at once.
3. "पत्र लिफ़ाफ़ा" on the term card renders small (it looks under 38 px). Set it to 38 px with 1.3 line height and keep it clear of the card's perforated bottom edge.

The scene lasts 9.18 s: every time in it is between 0 and 9.18.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s128.html`: one `<section class="vs-scene" id="s128" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
