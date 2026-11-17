# Fix animated scene s111

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s111" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s111), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s110.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `glossary-list` (Glossary list): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: glossary-list: the four terms, their Hindi and meanings (about 4 words; Hindi line under the English); the icons (envelope, rupee note, seal, parcel; draw new simple ink icons for other terms); 3 terms in a row or 4 in the grid..

## What to change

The current file is `inputs/current/s111.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is exact, and the cut to the glossary grid on "पुराने Guide के चार शब्द" is clean. The risk beat is the weak part. The amber note "बिना insurance: खोने का खतरा" is small and sits over the top edge of the old-Guide panel, half on and half off it, as if pinned to the book. "हर हाथ के लिए लालच" arrives at 5.52 s and is cut away at 6.26 s, so it's on screen for under a second.

1. Give the risk note a clear place and size. Scale the `old-book-stack` panel's book to about 0.6× and drop it to the panel's bottom half. Put the amber note as a card filling the panel's top half (about x 160–800, y 230–560), with "बिना insurance:" at 48 px and each point at 44 px or more. It must sit fully inside the panel, never across its border.
2. Pop "हर हाथ के लिए लालच" at 3.6 s, on "हाथ लगाने", instead of 5.52 s, so it holds for about 2.6 s before shot B.
3. Pop the risk note at 0.36 s with "खोने का खतरा" at 1.9 s as now. Also `color` the list rows to #6f6a63 at 0.3 s so the new note is the one strong thing on the busy screen.
4. Make "मतलब रोज़ से थोड़ा अलग" under the kicker 44 px rather than its current small grey size. It is the point of the sentence, and it's said at 8.3–9.8 s.

The scene lasts 11.70 s: every time in it is between 0 and 11.70.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s111.html`: one `<section class="vs-scene" id="s111" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
