# Fix animated scene s034

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s034" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s034), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s033.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s034.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The content and timing match the voice ("Roll" at 4.1; 800 at about 6; 1000 at about 9). Two things hurt. In the `#warn` shot the ruler is small inside a big, mostly empty white card. In the `#rule` shot the "Roll" stamp and its two rows fill only the top third of the frame, leaving the lower 60% empty, which breaks the kit's "main element fills most of the space below the header" rule. The struck "पास" can't be seen in any sampled frame, so check that the strike actually lands.

Fixes:
1. `#rule`: centre the block vertically (rows' midline around y 560 instead of about y 380) and scale the whole group about 1.4× (stamp about 300 px wide; row text at least 56 px), keeping it in one group so s035's Non-roll pair can sit under it. s035 then has to move its pair to match.
2. `#warn`: scale the ruler icon about 1.8× and centre it in the card's upper half, with the line "सिर्फ लंबाई देखकर पास नहीं" at about 64 px under it, so the card isn't mostly empty.
3. Make sure the slate `strike` on "पास" runs at 2.50 and stays until the cut at 4.10. Bring the full line in by 2.2 (it is still fading in at 2.2 s), so the strike has a full word to cross.

The scene lasts 10.32 s: every time in it is between 0 and 10.32.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s034.html`: one `<section class="vs-scene" id="s034" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
