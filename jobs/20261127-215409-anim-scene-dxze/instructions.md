# Fix animated scene s018

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s018" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s018), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s017.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `quote-card` (Quote card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: quote-card: the source label, the Georgia lines (2 to 5, one optional italic lead line), the postmark text (rule/section number and year), the highlighted phrase, the Hindi gist (always labelled as gist unless it is the official Hindi text); drop the postmark for a long quote.

## What to change

The current file is `inputs/current/s018.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Showing all four points straight away matches "इसके चार नियम screen पर हैं", and the highlight on "administrative instructions" lands with the voice at 4.8 s. The still stretch from 1.23 to 8.83 s is reading time and is fine. The problem is size: the point text is about 34–36 px Georgia in a 1120-wide card, which is under the 44 px floor and won't read on a phone. Each row also leaves a big empty gap below its text.

1. Raise the Georgia text of all four points from 36 px to 44 px (keep the 1.25 line height, wrap at the card's inner width of about 1000 px). Grow the row pitch from 150 to 165 so a two-line point plus its Hindi keyword still fits: rows at y 300 / 465 / 630 / 795, and the card bottom moves to y 960, with the source at y 990.
2. Raise the Hindi keyword lines from 34 px to 36 px and put them a clear 12 px below the last line of their point (Hindi line height 1.3). They must never touch the English line above. Do the same in s019–s021, which hold this card.
3. Raise the card label "Post Office Regulations, 2024 · Reg. 105 Retail Post" from 34 px to 38 px so it reads as the card's title.
4. Scale `regulations-book` up from 0.5 to 0.7 and centre it in the right column (x 1270–1820). The column then isn't a small book above a big empty area for 20 s; keep the book above y 400 so the Circle Head panel area (y 420–960) stays free.

The scene lasts 8.88 s: every time in it is between 0 and 8.88.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s018.html`: one `<section class="vs-scene" id="s018" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
