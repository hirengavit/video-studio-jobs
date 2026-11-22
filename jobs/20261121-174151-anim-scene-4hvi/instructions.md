# Fix animated scene s172

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s172" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s172), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s171.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s172.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The sum lands on its words: "₹5" around 2.0 s, "₹3" around 4.0 s, "कमी = ₹2" around 5.0 s, and the green "₹4" pill around 7.9 s on "उसका दोगुना ₹4". The problems are layout and the stamp:
1. The working card sits left (about x 100–1130) with the right half of the frame empty, and the storyboard asks for it centred. Either centre the card (x 460–1460) and put the due mark to its right at x ~1520–1820, or keep the card left and give the right column a real job (see 2). In both cases the main card should fill the content area with even margins (kit rule "main card fills most of the space").
2. The postage-due mark is tiny (about 340 × 190 px) and its "DUE ₹4" is about 40 px, squeezed into the left box with an empty value line beside it. Scale the piece to about 1.8 (around 500 × 360 px), letter "DUE ₹4" in Inter bold 64 px centred in the value box, and `stamp` it at 8.4 s on the ₹4 as planned, after the green pill.
3. Align all four lines on "=" as the storyboard says: "चाहिए = ₹5", "लगे = ₹3", "कमी = ₹2", "कमी × 2 = ₹4", with the "=" signs in one column (same x as the current "=", about x 760) and the values right-aligned after it. Right now the first two lines have no "=" and their amounts sit right after the word.
4. Raise the line text from about 56 px to 64 px (the storyboard says Georgia/Inter 64) and spread the lines down the card (line gap about 100 px) so the card isn't empty under line 4.

The scene lasts 9.24 s: every time in it is between 0 and 9.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s172.html`: one `<section class="vs-scene" id="s172" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
