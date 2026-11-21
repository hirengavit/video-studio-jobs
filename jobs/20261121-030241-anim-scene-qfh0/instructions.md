# Fix animated scene s102

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s102" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s102), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s101.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s102.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s101 is identical. The bracket from the note and coin into "Unclassified receipts" makes the idea clear, the cut to the postcard/envelope → Error Book → receipt → Treasurer chain follows the voice (book 7.94 vs "Error Book" ~8.5, Treasurer 10.18 vs ~11), and the flow runs left to right.

Fixes:
1. The TERM "Unclassified receipts" lands at 1.08, about a second before "unclassified" is said (~2.0–2.8). Move its `pop` (and the bracket draw) to 2.00 and its gloss to 2.50.
2. The Hindi gloss "अवर्गीकृत प्राप्तियाँ" renders about 36 px on the red chip, hard to read on a phone. Set it to 48 px #fde9a6 ('Noto Sans Devanagari'), and grow the chip height to fit (≥150 px) so the gloss doesn't touch the bottom edge.
3. At the cut around 5.16, the stamp booklet, stamp sheet and the receipts chip vanish in one frame while the bracket appears. Give the outgoing row and chip a 0.3 s `fade` out ending at 5.16 instead of a hard removal, so the change reads as "now the other group" and not as a glitch.

The scene lasts 12.77 s: every time in it is between 0 and 12.77.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s102.html`: one `<section class="vs-scene" id="s102" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
