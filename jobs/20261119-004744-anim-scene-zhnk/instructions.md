# Fix animated scene s060

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s060" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s060), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s059.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `hierarchy` (Hierarchy): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: hierarchy: the levels (up to 4 per column; one column if there are 4 or fewer); the officer pills; the postmark figure (circles, offices) or drop it.

## What to change

The current file is `inputs/current/s060.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The column builds on its words (Circle, CPMG, the stamp on "CPMG", Region and field units on "Regions और field units"). The empty lower half is right, because s061 fills it. The type inside the cards is too small and pushed to the top.

1. Officer pill: "मुख्य पोस्टमास्टर जनरल" is about 24 px and "Chief Postmaster General" about 32 px. That breaks the kit's 32 px floor for Hindi and won't read on a phone. Set the English to 40 px bold and the Hindi to 34 px, two lines centred in the pill. Make the pill taller (rows are 150 px tall), not the text smaller.
2. Level cards (Circle, Region) and the field-units chip: the term and its Hindi sit at the top-left with the lower half of each 150 px card empty. Centre the two lines vertically in the card, term 56 px and Hindi 36 px with about 1.3× line height. Use the same sizes for every level card so s061's Division and Sub-division match.

The scene lasts 10.20 s: every time in it is between 0 and 10.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s060.html`: one `<section class="vs-scene" id="s060" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
