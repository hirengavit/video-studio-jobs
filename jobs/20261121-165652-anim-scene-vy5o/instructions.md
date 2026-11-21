# Fix animated scene s017

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s017" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s017), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s016.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s017.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The flow reads in the right order and every beat lands on its word: barcode at 0.16, "APT 2.0" at 1.4, the tag on "unaccountable", the arrow and "Induction" at 6, "Invoicing" at 7.3, the meaning at 10. The still stretches in the check notes are the reading holds between words, so they are intended. The problem is size. The whole flow sits in x 120–1500 and leaves the right quarter of the frame empty. The two result boxes are only about 450 px wide, and their Hindi lines ("system में article की entry", "बीजक बनाना") are about 32 px and wrap, so they won't read on a phone.

1. Spread the flow across the content area. Move the envelope group to centre x 420 at scale 1.15. Move the arrow fork and both boxes right so the boxes sit at x 1150–1780, and make each box 630 × 210 (Induction centred y 470, Invoicing y 760).
2. Set the Hindi lines inside the boxes to 'Noto Sans Devanagari' 42 px, line height 1.3. Write "system में article की entry" as one line (it fits in 630 px). Keep the `words` reveal at 10.18 so it still lands on its words.
3. Set the box titles "Induction" / "Invoicing" to 60 px Inter bold. This keeps the English term clearly bigger than the 42 px Hindi beneath it, as the kit asks.

The scene lasts 13.16 s: every time in it is between 0 and 13.16.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s017.html`: one `<section class="vs-scene" id="s017" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
