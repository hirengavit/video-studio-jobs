# Fix animated scene s068

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s068" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s068), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s067.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s068.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The timing is right: tags "size" and "envelope" at about 3.7 s (the voice says "size" at 1.4–3.4 s and "envelope" at 3.4–5.2 s), the slate cross at about 5.7 s, "letter postage × 2" types in at about 7 s on "दोगुना", then the highlight on "× 2". The red/slate colour roles are correct. The problem is the frame: the whole group sits small in the upper two thirds. The red card is about 60 % empty, and an empty sand row sits in it from 0.2 s, waiting 7 s for its words.

1. Hide the empty sand row until its text arrives. Bring the row and "letter postage × 2" in together at 6.9 s (`fade` the row 0.3 s, then `type` the text), so no blank slot shows from 0 to 7 s.
2. Size the card for its two rows (this line plus s069's credit line). Card height ≈ 520 instead of ≈ 700, with the rows at 64 px Inter bold. Then centre the envelope and card group vertically in the content area (y 160–1000), so the bottom margin matches the top.
3. Scale the `domestic-envelope` up to fill its column (≈ ×1.25, width ≈ 960 → keep 100 px side margins), and put the "size" / "envelope" tags under it at 52 px.
4. Add the planned "शर्त टूटी →" in front of "letter postage × 2" (Hindi 48 px, supporting grey #6f6a63), or start the line with it. That ties the cross on the left to the × 2 on the right.

The scene lasts 9.24 s: every time in it is between 0 and 9.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s068.html`: one `<section class="vs-scene" id="s068" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
