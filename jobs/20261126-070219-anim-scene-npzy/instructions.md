# Fix animated scene s148

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s148" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s148), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s147.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `quote-card` (Quote card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: quote-card: the source label, the Georgia lines (2 to 5, one optional italic lead line), the postmark text (rule/section number and year), the highlighted phrase, the Hindi gist (always labelled as gist unless it is the official Hindi text); drop the postmark for a long quote.

## What to change

The current file is `inputs/current/s148.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The chips build on their words: Postage at 1.8 s, Special fees at 2.64 s, Air surcharges at 4.52 s. The admin line comes at 6.08 s and "may be refunded" at 8.66 s, on "वापस हो सकते हैं". The timing is right. The problem is the key phrase. "may be refunded", the word the next scene highlights, is the smallest text on the card, squeezed above the admin line. The card fills only y ≈ 256–724, leaving the lower third of the screen empty. The postmark's "Regs. 126–127" can't be read.

1. Set "may be refunded" in Georgia at 64 px on its own line, centred at y ≈ 640. Move "administrative instructions के हिसाब से" (48 px) beneath it at y ≈ 730, with at least 30 px between the lines.
2. Grow the card to x 140–1780, y 220–800 to hold the bigger lines, and keep the chip row at y ≈ 420. Leave y 820–990 free for the two strips s149 adds, so the layout doesn't change at the seam.
3. Enlarge the postmark to scale 1.0 (220 px ring) at the card's lower right (centre ≈ 1580, 650). Letter "Regs. 126–127" in its band at at least 32 px so the source reads. It `stamp`s at about 9.4 s, after the type finishes, not on the same 8.66 s beat.
4. The card frame sits empty for 1.8 s. Pop "Postage" at 1.2 s, on "देखिए। Postage", so the card arrives close to its first item.

The scene lasts 10.38 s: every time in it is between 0 and 10.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s148.html`: one `<section class="vs-scene" id="s148" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
