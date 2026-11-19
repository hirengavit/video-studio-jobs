# Fix animated scene s083

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s083" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s083), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s082.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `hierarchy` (Hierarchy): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: hierarchy: the levels (up to 4 per column; one column if there are 4 or fewer); the officer pills; the postmark figure (circles, offices) or drop it.

## What to change

The current file is `inputs/current/s083.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The timing is right ("1" on "हर Region", Head of Region on its words, PMG then "या Director level" on 8.1 s), and the stills are reading holds. The problem is size. The Region card sits in the left 40% with its contents packed into the top third, its lower 55% is empty, and the right half of the screen is empty for the whole scene. The Hindi in the band ("क्षेत्र") is roughly 16–18 px, well under the kit's 32 px minimum, and the pills are about 28 px text.
1. #region band: make the band 110 px tall with "Region" at 48 px and "क्षेत्र" at 34 px (Noto Sans Devanagari, line-height 1.3) beneath it. Neither should touch the band edge.
2. Head-of-Region white card: "Head of Region" at 64 px, "क्षेत्र प्रमुख" at 38 px, and the card height grown to about 200 px so it fills the card's width with 30 px margins.
3. Pills: put "PMG level" on its own row (y ≈ 640, 44 px text, pill about 300×72), then the grey "या" (36 px), then "Director level" on a second row (y ≈ 760, same size), centred in #region. The card then fills to about 880 instead of leaving its lower half empty. Keep the pop timings at 5.14 s and 8.12 s.
4. Pill colour: use envelope #f3ead6 with an ink outline for the level pills instead of soft yellow. In the kit, yellow is only for highlights and added material, and here it should stay free for the "नया पद" stamp in s084.

The scene lasts 9.76 s: every time in it is between 0 and 9.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s083.html`: one `<section class="vs-scene" id="s083" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
