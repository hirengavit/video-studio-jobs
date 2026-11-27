# Fix animated scene s038

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s038" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s038), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s037.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s038.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The new fact (UTI funds only at designated post offices, NISM/EUIN-certified staff) arrives on its words: "designated post offices" at 2.02, the NISM/EUIN pill and highlights, "certified staff" at 8.76. But it lives in a thin strip at the very bottom of an already full screen: the credit-card card, three green rows, the UTI chip, then three more pills. That makes nine or more items against the kit's limit of five, and the eye stays on the big rows above.

Fixes:
1. At 1.10, when the strip pops, `color` the rows not being explained to the supporting grey (#6f6a63, dur 0.4): the whole left "नहीं देता" card, the Jan Suraksha row and the ECS row. Keep the Mutual funds row and its "सिर्फ UTI" chip at full colour, so the strip clearly belongs to Mutual funds. This follows the kit's "fade earlier points when a screen gets busy". Don't move anything.
2. Make the strip's words 44 px (from ~40): "Mutual funds:" lead and the pill texts "designated post offices", "NISM / EUIN", "certified staff". Make the strip y 890–1000 and the pills 64 tall. The three pills plus the lead fit across x 120–1800.
3. Move the pop of the "NISM / EUIN" pill from 4.06 to 4.6, on "NISM", which the voice says after "offices पर". As it stands the pill is up before the word.

The scene lasts 10.98 s: every time in it is between 0 and 10.98.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s038.html`: one `<section class="vs-scene" id="s038" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
