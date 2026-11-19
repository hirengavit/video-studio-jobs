# Fix animated scene s070

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s070" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s070), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s069.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `mind-map` (Mind map): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: mind-map: up to 4 branches (bilingual screens hold fewer); the grey example lines or drop them; the centre words.

## What to change

The current file is `inputs/current/s070.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The umbrella card is a good new form for "the widest definition". "सबसे चौड़ी" arrives on its word, chip A's lines build on "Postal Division", "RMS Division" and "Foreign Post", and "Director" is stamped on "Director" (8.7). The right column stays empty by plan, to be filled in s071. The Hindi is too small for the kit, though: the header Hindi and the chip sub-lines are about 22–26 px, below the 32 px minimum.
1. Raise the header's Hindi "मंडल प्रमुख" to 36 px (Noto Sans Devanagari, line height 1.3), and grow the red header from y 170–310 to y 160–320 if needed so the text doesn't touch the bar's edge.
2. Raise chip A's Hindi sub-lines ("निदेशक", "डाक मंडल", "रेल डाक सेवा मंडल", "विदेश डाक") to 34 px. Set the English lines to 48 px and space the rows about 140 px apart within chip A's 370–960 height.
3. If "रेल डाक सेवा मंडल" at 34 px doesn't fit, widen chip A to x 140–780 rather than shrinking the text. s071's right column starts at 800.

The scene lasts 10.36 s: every time in it is between 0 and 10.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s070.html`: one `<section class="vs-scene" id="s070" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
