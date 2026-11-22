# Fix animated scene s174

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s174" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s174), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s173.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-table` (Compare table): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-table: two or three columns (re-space the centres), three to five rows, which row gets the outline, the source line; interest rates must name the quarter and the source.

## What to change

The current file is `inputs/current/s174.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The table shows all three breach calculations side by side, which the screen notes ask for, with the source line beneath. The column 1 highlights land on their words: header around 4.2–5 s ("Letter की size या envelope") and the "हिसाब" cell around 9–10 s ("letter postage का दोगुना"). Two real problems:
1. At 2.34 s every cell of all three columns appears at once, so viewers read the Letter Card and Postcard rules long before the voice reaches them (kit: "Do not show anything before the voice reaches it"), and the screen holds 12 text cells at once, against the kit's five-item limit. Fade in only the headers, the row labels and column 1's cells at 2.34 s, and leave column 2's and column 3's body cells empty (keep the cells, hide their text). In column 1, `type` "Letter" on "letter" (about 9.0 s) and the "हिसाब" cell on "letter postage का दोगुना … credit" (9.0–11.4 s), so they aren't already on screen at 2.34 s. s175 and s176 then type their own columns.
2. The cell text is too small for a phone: cells are about 38–40 px and the row labels ("क्या माना जाता है", "Minimum / paise") and the "इस नियम में अलग शर्त नहीं" cells are about 32–34 px. The table stops around y 900 with free space under it. Stretch the table over y 200–940 (source line at y 980), set the body cells to 44 px and the row labels to 40 px, and allow two lines per cell with line-height ×1.3. Don't shrink the Hindi to fit (kit rule); give the rows the height instead.
3. After the column 1 header highlight (about 4.5 s) nothing moves until about 8.7 s, and nothing new arrives during "Letter की size या envelope की शर्त टूटी". With fix 1, type column 1 row 1 "Letter" on "तो letter" (about 9.0 s) and the "हिसाब" cell from about 9.3 s, which fills that gap.

The scene lasts 13.16 s: every time in it is between 0 and 13.16.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s174.html`: one `<section class="vs-scene" id="s174" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
