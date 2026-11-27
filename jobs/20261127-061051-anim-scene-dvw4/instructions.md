# Fix animated scene s229

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s229" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s229), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s228.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s229.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam holds #card1, the row-2 panel finishes ("या ₹1,000 / जो कम, / असली नुकसान तक") and the cut goes to card 2 "समय-सीमाएँ" with the non-receipt row on its words. The values match the notes (after 15 days, within 60 days of booking). What breaks is the line spacing: the stacked lines touch, which goes against the kit's rule that Hindi gets about 1.3× line height and never touches the line above.
1. Row-1 term on #card2: "Non-receipt" / "complaint" sit with no leading and "न मिलने की complaint" touches "complaint". Set the English line height to 1.15 (52 px font → 60 px step: "Non-receipt" y 430, "complaint" y 490) and put the Hindi line at y 540 (36 px), all inside the row band y 380–560.
2. Row-1 value panel on #card2: "booking के 15 दिन बाद" and "60 दिन के अंदर" touch. Use a 44 px font with a 58 px line step (line 1 y 450, line 2 y 508) and grow the panel to y 400–545 so neither line touches the panel edge.
3. Row-2 value panel on #card1: "या ₹1,000", "जो कम," and "असली नुकसान तक" are smaller than "2 × postage" and packed together. Set all four lines to 40 px with a 52 px step (y 670, 722, 774, 826) so they fill the panel (y 630–930) evenly.

The scene lasts 8.96 s: every time in it is between 0 and 8.96.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s229.html`: one `<section class="vs-scene" id="s229" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
