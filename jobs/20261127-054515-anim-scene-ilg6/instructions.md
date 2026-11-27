# Fix animated scene s200

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s200" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s200), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s199.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s200.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s199 is exact, and "= ₹12" pops on the spoken ₹12 at 0 s. "₹4 + ₹12" is typed by about 2.2 s. The problem is the answer. "= ₹16" and the green "insurance fee ₹16" pill only come in at 4.28 s, and the scene cuts to #risks at 6.01 s. The answer of the worked example is on screen for about 1.7 s, and for barely half a second after the voice says ₹16 (6.3 s is "Acts"). The sheet has no frame that shows it. After the cut, the risks panel follows the voice: row 1 on "Acts of God", row 2 on "युद्ध और दंगों", and rows 3–4 by 10 s. The four rows cover all six risks in the screen notes (acts of God, war, riots, civil commotion, arrest/restraint/seizure under legal process, Government orders). The row text is about 36–38 px, small for a phone.

Fixes:
1. Pop "= ₹16" and the green pill "insurance fee ₹16" at 3.3 s, on "insurance fee", instead of 4.28 s.
2. Move the cut to #risks from 6.01 s to 6.3 s, on "Acts". Shift the row 1 fade to 6.3 s, keep row 2 at 7.21 s, and keep rows 3–4 at 9.51 s. That gives the result about 3 s on screen.
3. Raise the risk row text from 38 to 44 px, keeping the panel at x 540–1380 for s201. Row 3 already wraps to two lines and the rows are about 190 tall, so 44 px fits. Keep the slate cross icons at their size, centred on each row's first line.

The scene lasts 10.19 s: every time in it is between 0 and 10.19.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s200.html`: one `<section class="vs-scene" id="s200" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
