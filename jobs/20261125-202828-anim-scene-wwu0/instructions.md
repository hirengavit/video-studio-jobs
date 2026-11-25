# Fix animated scene s087

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s087" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s087), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s086.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `formula-card` (Formula card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: formula-card: the formula, its name and the letter key; the question (English + Hindi) and 2 to 3 working lines; the answer; the cream follow-on box or drop it. Keep the working in Georgia and the numbers right..

## What to change

The current file is `inputs/current/s087.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The cut to the formula card is right. The left stamp card and the grey "सिर्फ base COD fee" are there from the first frame, the heading types in on "पहला हिसाब", the chip and the rule-line highlight come on "पहले slab", and the working line types on "5,000 गुणा 1.6, भाग 100". The timing is good. The layout of the right card is the problem.

1. The chip "पहला slab" sits under the working line (heading about y 420, working line about y 510, chip about y 630), so the slab note reads after the sum it explains. Move the chip to y 500, directly under the heading, and the working line "5,000 × 1.6 ÷ 100" to y 600. The working lines then sit at the planned slots (y 420 / 540 / 660, shifted to make room for the chip), and the bottom of the card stays free for the green answer pill at y 790 in s088.
2. The working line runs "5,000×" with no space but has spaces round "÷", and the heading has a double gap in "पहला हिसाब ·  ₹5,000". Write them as "5,000 × 1.6 ÷ 100" and "पहला हिसाब · ₹5,000", with single spaces.
3. In the left stamp card, line 1 "≤ 6,500: 1.6%" is in Georgia but line 2 "> 6,500: ₹100 + 1%" falls back to sans. Set both rule lines in "Georgia, 'Noto Sans Devanagari', serif" so the two slab rules match.

The scene lasts 12.39 s: every time in it is between 0 and 12.39.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s087.html`: one `<section class="vs-scene" id="s087" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
