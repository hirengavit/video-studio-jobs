# Fix animated scene s106

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s106" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s106), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s105.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s106.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut to the full Reg. 91 table is right, and the card fills the frame well. The four rows match the screen notes (4 permitted attachments) and the storyboard, all present and correct. The yellow band on "सिर्फ address side" lands at about 6.5 s, on its words, and the row 2 outline at about 9 s is also timed right. But every row's text is already fully on screen at 0.2 s, before the voice reaches it. The storyboard says only numbers and icons show at 0.00 and the text lands on its words, and the kit says nothing may show before the voice gets to it. The text is also small for a phone: the sub-lines ("पूरा चिपका", "सिर्फ address side") look about 26 px, under the kit's 32 px minimum for Hindi, while the right third of every row is empty.

Fixes:
1. At 0.00 show only the card, the header, badges 1–4 and the four icons. Row text stays hidden. Row 1 text `fade` at 1.74 (on "एक"). Row 2's first line `fade` at 9.00 (on "पाने वाले के"). Rows 3 and 4 text stay hidden to the end of this scene; s107 and s108 bring them in.
2. Make the row text bigger to use the empty right side of the rows. Main line: 40px. Sub-line: 34px Noto Sans Devanagari in ink #2b2622, line height about 1.3. Grow the row height so neither line touches the row border. Row 4's main line may wrap to two lines, and the card must still fit inside y 190–980.
3. Keep the "सिर्फ address side" highlight at 6.54 and the row 2 outline at 9.00 as they are. The hold between 1.97 s and 8.84 s is fine once row 1 builds on its words.

The scene lasts 11.10 s: every time in it is between 0 and 11.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s106.html`: one `<section class="vs-scene" id="s106" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
