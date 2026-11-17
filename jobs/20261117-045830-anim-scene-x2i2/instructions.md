# Fix animated scene s090

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s090" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s090), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s089.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `step-list` (Step list): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: step-list: 3 to 4 steps (bilingual screens hold fewer); the closing chip (a rate with its quarter, a fee, a time limit) or drop it; move the highlight to the key word, written as its own text so the band fits.

## What to change

The current file is `inputs/current/s090.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade in from s089 suits the change of shot. The envelope diagram with the five-row step list is clear, and step 1 and step 2 land on their words ("पहला, मज़बूत cover" 3.2–6.1, row 1 by 5.5; "दूसरा, fine wax की काफ़ी seals" 8.3–12.6, row 2 by 10.7). The stills are reading holds. The problem is that the second lines inside the rows are below the kit's 32 px minimum for Hindi.

1. Raise the row sub-lines "अच्छी तरह बंद" and the pill "सब एक जैसी" from about 24 px to 32 px, with line height 1.3. Grow each step row from about 120 to 140 px tall so the two lines don't touch each other or the row edge. Keep the list inside y 260–900 by trimming the gap between rows to 12 px.
2. Move the "सब एक जैसी" pill to sit on its own line under "fine wax की काफ़ी seals" (left-aligned with the row text, x 1090), not at the row's right edge. This leaves room for the "वही private mark" line that s091 adds there.
3. Make "पुराना तरीका: 5 कदम" 34 px and align its right edge with the step list (x 1800), so it doesn't crowd the series pill above it.

The scene lasts 13.24 s: every time in it is between 0 and 13.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s090.html`: one `<section class="vs-scene" id="s090" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
