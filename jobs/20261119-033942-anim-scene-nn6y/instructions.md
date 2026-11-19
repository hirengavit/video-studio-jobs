# Fix animated scene s187

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s187" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s187), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s186.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-table` (Compare table): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-table: two or three columns (re-space the centres), three to five rows, which row gets the outline, the source line; interest rates must name the quarter and the source.

## What to change

The current file is `inputs/current/s187.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is clean (warning out, header moves up, row 1 writes on "Postal Services Board"), and each cell lands on its words. Highlighting "Secretary (Posts)" on its word is right. The problem is size: the Hindi lines under the terms, especially "सर्वोच्च नीति-निर्माण निकाय" in the काम cell, render at about 26–28 px, below the kit's 32 px minimum for Hindi. The row is also squeezed to about 200 px, while the table leaves the bottom 40 % of the screen empty for now.

1. Set every Hindi translation line in the table to 34 px ('Noto Sans Devanagari', line-height 1.3, #6f6a63): "डाक सेवा बोर्ड", "सर्वोच्च नीति-निर्माण निकाय", "सचिव (डाक)". Don't shrink it to fit. Let the काम cell wrap to two Hindi lines instead.
2. Make row 1 the planned 240 px tall (y 280–520) so the bigger Hindi has room and doesn't touch the cell edge. Keep rows 2 and 3 at 520–760 and 760–1000, as the storyboard says.
3. Set the English cell lines to at least 40 px bold ("apex policy-making body" now wraps at about 36 px). This style carries to s188–s191, so set it once in the shared table style.

The scene lasts 9.93 s: every time in it is between 0 and 9.93.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s187.html`: one `<section class="vs-scene" id="s187" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
