# Fix animated scene s127

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s127" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s127), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s126.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s127.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The West Bengal Circle list is clear and Sikkim is rightly highlighted as the trap item. The jump at 6.66 s is the planned cut to the #pdy shot, so it's intended. The stills are reading holds.
1. Kicker "चौथा group": it's centred and grey above the card. In s122 and s124 the kicker is a postal-red label at top left, x 120, y 190, with a small bar before it. Match that style and place so that the four groups read as one series.
2. The Puducherry card is too crowded: "पुडुचेरी" and the "Union Territory · केंद्र शासित प्रदेश" chip are squeezed against the card's bottom edge, and the chip's Hindi is about 24 px. Grow the red card to 240–520, set the chip text at 30 px EN / 32 px Hindi, keep 16 px of padding to the card edge, and move the connector lines and part tiles down to start at y 580.
3. From 8.1 to 12.5 s the lower 60% of the #pdy screen is empty. Show the three blank part tiles (with the connector lines) at 9.98 with the UT chip, or scale the UT card up 1.2×, so that the screen isn't one small card for 5 s.

The scene lasts 13.36 s: every time in it is between 0 and 13.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s127.html`: one `<section class="vs-scene" id="s127" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
