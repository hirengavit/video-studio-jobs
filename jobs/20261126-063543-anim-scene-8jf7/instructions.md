# Fix animated scene s053

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s053" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s053), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s052.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s053.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam with s052 matches. The left gist strip reveals at 0 s and the right label "कुछ accountable items" arrives at 2.58 s. The "shall" text types from 4.38 s, and the chips arrive on "passport, PAN card … driving licence" (8.8–10.7 s). The idea is right, but the right card is too crowded and its text too small to read on a phone.
1. Text size: "shall be delivered only after identification is sought" renders at about 40 px. The chips are about 30 px, with icons too small to see. Make both document cards taller, y 270–860 (was 290–760), and set the "shall" text in Georgia 52 px, three lines at the top of the card. Give the chips their own 2×2 grid below it: chips 360×80, labels Inter bold 40 px, a tiny `id-card` icon at scale 0.18 left of each label. Leave at least 24 px between the text block and the chips.
2. Use the freed space: move the `postmark-ring` out of the bottom row to the right of the heading (scale 0.6, x ≈1300–1720, y 150–270). The gist strips can then sit at y 860–920 under each card with even margins (s054 and s055 need this too).
3. Chip timing: pop "Passport" at 8.8 s, "PAN card" at 9.4 s and "Driving licence" at 10.7 s, each on its spoken word and none before the voice.
4. Keep the left card's contents level with the right card's (label at top, Georgia line, grey line) so the two cards still read as a pair at the new height.

The scene lasts 11.90 s: every time in it is between 0 and 11.90.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s053.html`: one `<section class="vs-scene" id="s053" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
