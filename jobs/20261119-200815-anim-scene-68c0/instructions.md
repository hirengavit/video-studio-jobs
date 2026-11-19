# Fix animated scene s190

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s190" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s190), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s189.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s190.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The DEFICIENCY card builds well on its words: "लगने वाला charge" at about 4.7 s, "− पहले दिया valid amount" at about 6.7 s, the underline on "फर्क", then the green pill with "valid" highlighted at 11 s. But the opening beat is missing. The voice ends the previous sentence with "पर ज़रूरत से कम" (0–2.3 s), while the #terms screen sits completely still from 0.25 s to 2.0 s with no "पर ज़रूरत से कम" on the right card.

1. On #terms, add "पर ज़रूरत से कम" (Hindi, about 36 px, ink) on the right card, directly under "कुछ valid payment है", with words timing from 0.60 s. Then sweep a soft #fde9a6 highlight behind "कम" at 1.40 s, with the word in amber #8a5d00, as planned.
2. On #def, raise "कमी" under "DEFICIENCY" to the storyboard's 48 px (it renders at roughly 30 px). Push the subtraction strip down by the extra height so nothing touches.
3. Raise the small "सार" label on the subtraction strip to at least 32 px in grey #6f6a63, so it reads on a phone (the kit's minimum for Hindi).

The scene lasts 11.78 s: every time in it is between 0 and 11.78.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s190.html`: one `<section class="vs-scene" id="s190" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
