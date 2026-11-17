# Fix animated scene s072

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s072" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s072), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s071.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s072.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The note on bullion and coins pops on its words, but it's squeezed into a strip about 30 px tall along the bottom of row 2, sitting right on the row line. Its text ("Insured सोना-चाँदी की सिल्लियाँ + सिक्के", "→ और सख्त · Part 4: Sealing") comes out around 24 px, so it can't be read on a phone and is below the kit's 32 px Hindi minimum. The screen then holds still from 1.2 s to 8.9 s with nothing readable to show for the main point.
1. Redraw the note as a proper yellow pill (fill #fde9a6, text #8a5d00) at least 72 px tall, with "Insured सोना-चाँदी की सिल्लियाँ + सिक्के" at 38px. Place it right-aligned under row 2's chips with at least 16 px clear of the chips and the row line. This uses the extra row 2 height from s071's fix; grow row 2 by about 90 px more by tightening rows 3 and 4 if needed.
2. Put "→ और सख्त · Part 4: Sealing" on its own second line inside the same pill group (36px), fading in at 4.9 s on "अलग और ज़्यादा सख्त". Then fade "Part 4: Sealing" to full strength on "sealing वाले part" (6.4 s), instead of running both phrases into one line.
3. At 9.0 s, when row 3's name is highlighted, remove the highlights from row 1 and row 2's names over 0.3 s, so only the current row is highlighted.

The scene lasts 10.72 s: every time in it is between 0 and 10.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s072.html`: one `<section class="vs-scene" id="s072" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
