# Fix animated scene s088

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s088" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s088), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s087.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s088.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam with s087 is right. The band line "“तक” में 6,500 शामिल" arrives at about 5.2 s, and "शामिल" is highlighted soon after the voice says it. But the answer to example 1 never appears, and example 2 moves the layout.

1. The green answer pill "₹80" is missing. The voice says "Fee, ₹80" from 0.0 s, but the frames at 0.2 s and 2.0 s show no pill and the cut to #ex2 comes first. Add the `pop` of the green (#2e7d4f) pill "₹80" (white text, about 64 px) at 0.10 s, at y 790 in the right card, as the board asks. Hold it until the 1.85 s cut; if the cut comes before about 1.6 s, push it to 1.85 s.
2. #ex2 moves the heading up by about 30 px compared with #ex1, and the band line almost touches the heading's descenders. Keep "दूसरा · ठीक ₹6,500" at the same y as the #ex1 heading (about y 420) so the cut reads as the same card, and put the band line in the first working-line slot (y 540, the slot below the chip row from the s087 fix), with at least 24 px clear above it.
3. While the voice explains "तक" (4.1–9 s) the band sits at the top of a mostly empty card. Make the band text 60 px Hindi with a 1.3 line height, as the working lines are, so it fills its slot and reads as the point of the beat.

The scene lasts 9.30 s: every time in it is between 0 and 9.30.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s088.html`: one `<section class="vs-scene" id="s088" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
