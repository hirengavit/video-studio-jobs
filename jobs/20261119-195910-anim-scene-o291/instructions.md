# Fix animated scene s156

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s156" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s156), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s155.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s156.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s155 is exact. The flaps turning grey at 3.7 s, as the voice says they may be left out, is a good literal touch. The `#mix` cut at 5.8 s lands just before "Option". The tiles are big and clear, and the slate strike and cross on tile 3's "खुला" are on the right colours.

1. The green chip is cramped: its two lines of Hindi at about 30 px nearly touch the chip edges, and its top almost touches the "बायाँ / दायाँ" labels above. Make the chip x1000–1800 y860–1010. Write the text at 36 px with 1.3 line height and 16 px inner padding: line 1 "कोई और असरदार तरीका बंद करे", line 2 "→ flaps छोड़ सकते हैं". If it still meets the labels, scale the sheet down slightly (2.0 → 1.85) and move it up 30 px.
2. The chip text types word by word from 1.42 s, but the second line only arrives near 4 s. Start the words at 1.42 s at about 0.25 s a word so both lines are in by 4.0 s, before the 4.30 s highlight.
3. `#mix` leaves the bottom third (y760–1080) empty until s157's sand bar. Move the tiles down to y420–800 and the heading to y280 for even margins; s157 has to start from the same positions.

The scene lasts 10.32 s: every time in it is between 0 and 10.32.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s156.html`: one `<section class="vs-scene" id="s156" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
