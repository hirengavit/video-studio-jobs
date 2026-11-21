# Fix animated scene s063

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s063" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s063), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s062.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s063.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Step 6 builds on its words, and the post-office icon lands on "post office लौटता है", which works. But the scene's second idea, handing everything back ("चाबियाँ, plates और bag वापस सौंप देता है"), is shown with icons ~40 px tall in a thin strip under card 6. On a phone they are specks.
1. Make the cream tray a real row. Close up the gaps between step cards 4–6 by ~20 px each (the steps move up 40 px in total). Then draw the tray at y ≈ 900–1000 (≈100 px tall, same x as the cards) and pop the key, plate and bag at ~85 px tall each, evenly spaced across it, still at 5.8 / 7.0 / 7.85 s.
2. The hour plates in step 4 and in the tray are blank red rectangles. Write "14:00" on both (Inter bold, ink) to match s057 and s062.
3. The green "वापस" tick badge text is ~30 px. Raise it to 36 px and enlarge the pill to match. Land it on "वापस सौंप" (~9.0 s) rather than at 8.42 s, if it currently comes before the word.

The scene lasts 10.12 s: every time in it is between 0 and 10.12.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s063.html`: one `<section class="vs-scene" id="s063" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
