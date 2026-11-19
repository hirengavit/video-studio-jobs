# Fix animated scene s003

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s003" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s003), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s002.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `hierarchy` (Hierarchy): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: hierarchy: the levels (up to 4 per column; one column if there are 4 or fewer); the officer pills; the postmark figure (circles, offices) or drop it.

## What to change

The current file is `inputs/current/s003.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s002 is exact, and the Department card and red arrow land on "आज का Department उसी से निकला". The cut to #structure is on "पूरा ढाँचा". The two empty rows wait about 4 s for Ministry, but they show the "two lines" being promised, so that is acceptable.

1. icon-dak-bhawan renders at about 120 px inside a small white card. Scale it to the planned 300 px (box 760–1080 × 260–560), with "Dak Bhawan" (Inter bold 48) and "डाक भवन" (40, supporting grey) under its base, so the building reads as the second big element of row 1 rather than a thumbnail.
2. On the red Ministry card, "संचार मंत्रालय" is coloured yellow/amber. Yellow is only for highlights in this kit, so set it to #f3ead6 (light, smaller than the English, at least 40 px).
3. The Ministry card is shorter and narrower than its slot. Let it fill 100–700 × 270–550 so row 1's first item is big and fills its slot evenly.

The scene lasts 10.24 s: every time in it is between 0 and 10.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s003.html`: one `<section class="vs-scene" id="s003" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
