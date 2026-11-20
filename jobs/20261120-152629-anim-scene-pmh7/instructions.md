# Fix animated scene s166

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s166" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s166), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s165.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s166.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The red perforated term card with "Registration" typed in is a strong anchor; the two chips land near their words (value-added ~2.4 s, addressee-specific ~5.5 s) and the cut to #cover at 7.96 s matches "आखिर में, cover पर लिखे शब्द". "Registered" is written on the envelope on its word (~10.4 s). Stills are reading holds. Two readability problems and one small one:

1. #cover: the envelope (scale 1.5, ≈540×340 px) is small, and the handwritten words on it will be hard to read on a phone. Raise `piece:registration-envelope` to scale 1.8 at x 140–860, y 360–770 and the Caveat writing to 76 px (lines 100 px apart), keeping the right column (x 900–1780) free for s167. s167 must use the same values so the seam holds.
2. #reg chips: the Hindi lines "मूल्य-वर्धित सेवा" and "पाने वाले के लिए विशेष" render ≈28 px; set them to 36 px with 1.3 line-height and grow the chips (y 540–800) rather than shrinking the text.
3. #reg: "Speed Post की" above the term is small red text that reads as decoration; make it 36 px ink (#2b2622) so it reads as part of the phrase "Speed Post की value-added service".

The scene lasts 11.52 s: every time in it is between 0 and 11.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s166.html`: one `<section class="vs-scene" id="s166" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
