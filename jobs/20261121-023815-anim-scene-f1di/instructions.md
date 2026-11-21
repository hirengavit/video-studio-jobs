# Fix animated scene s021

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s021" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s021), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s020.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s021.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The #pin shot is good. The QMS envelope fills the frame, "destination town" writes on its word, the six PIN boxes pop in a stagger, and "पूरा PIN" is highlighted on "पूरा PIN" (~5.2–6.8). The holds are reading holds. The problem is the opening: the myth never visibly gets "या ज़ब्त होगा" and is never struck where a viewer can see it. At 0.2 s the card is unchanged, and the cut to the envelope comes at about 1.3–1.5 s, but the voice only reaches "QMS" at 2.1 s. The scene's first point (the myth is wrong) is lost.

1. Add "या ज़ब्त होगा" to the myth line with `words` at 0.30 (on the spoken words), on the same line or wrapped beneath at 56 px.
2. `strike` the whole myth line in slate #4b4f58 at 1.00 (dim 0.45). Add a slate cross in a circle beside the "MYTH · भ्रम" pill with `draw` at 1.20. That is the one annotation for this screen.
3. Move the cut to #pin from 1.30 to 2.05, just before "QMS" at 2.1, so the struck myth holds for about 0.8 s. Shift the "QMS article" tag to land at 2.10.
4. Set the caption "तो एक line में" at 8.6 to 44 px (it is about 36 px now).

The scene lasts 9.03 s: every time in it is between 0 and 9.03.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s021.html`: one `<section class="vs-scene" id="s021" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
