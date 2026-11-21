# Fix animated scene s108

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s108" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s108), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s107.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s108.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Continues s107 with the layout identical at the seam. Rows 3 to 5 and their ticks land on their words ("location" 0 to 2.8 s, "data" about 3 s, "Currency" 4.4 s, "custody" 9.7 s, "Circle Head orders" 12.2 to 13.7 s). The still stretches are reading holds, which is right for a recap. The problem is again text size.

1. Apply the same sizes as the s107 fix to every row, so the card matches across the cut: glosses 34 px, pill text 44 px, pills about 64 px tall, starting at about x 640.
2. Row 5's pill "Postmaster custody → Circle Head orders" is about 36 px, the smallest text on screen. At 44 px it needs about 950 px, so let this pill run to about x 1600 and keep its tick at about x 1660, inside the envelope's right edge with at least 40 px to spare.
3. In row 5, "Circle" starts fading in at about 11.6 s, before the voice says it (12.2 s). Start the words of "Circle Head orders" at 12.15 s.
4. With taller pills, check that row 5 still clears the envelope's bottom edge by at least 30 px. If it doesn't, start the rows about 20 px higher, under the flap seal "5", without touching the seal.

The scene lasts 14.71 s: every time in it is between 0 and 14.71.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s108.html`: one `<section class="vs-scene" id="s108" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
