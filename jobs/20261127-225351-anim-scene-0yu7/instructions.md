# Fix animated scene s146

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s146" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s146), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s145.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s146.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is clean, but because s145 already shows all five rows the scene only recolours badges 3–5 and adds "Pension Payment Order" beside PPO (8.6 s). The motion check calls it frozen for 14 s. A viewer sees a static list while the voice reads it. Once s145 hides rows 3–5 this scene works as planned.

Fixes:
1. Reveal each row on its word, as the storyboard says. At 0.00 s, `type` #d3 "Disbursing agency" and at 0.60 s `fade` #d3-hi. At 3.78 s, `type` #d4 "PPO number". At 5.92 s, `type` #d4-full "Pension Payment Order" and at 8.00 s `fade` #d4-hi "पेंशन भुगतान आदेश". At 8.82 s, `type` #d5 "Pension account number" and at 10.86 s `fade` #d5-hi. Before that, rows 3–5 hold only grey badges.
2. Make #d4-full 40 px #6f6a63 at x = end of "PPO number" + 40 px, on the English baseline. It currently looks about 30 px, too small for a phone.
3. Apply the larger s145 row layout (140 px rows, card y 260–990) here too, so the seam matches.

The scene lasts 14.10 s: every time in it is between 0 and 14.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s146.html`: one `<section class="vs-scene" id="s146" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
