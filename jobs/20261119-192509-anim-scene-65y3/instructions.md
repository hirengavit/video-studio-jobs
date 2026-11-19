# Fix animated scene s052

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s052" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s052), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s051.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s052.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Rows 3 and 4 land on their words and complete the recap envelope. But row 4's green tick is still only a dot when the scene cuts: s053's "previous scene ends" frame shows it unfinished. And the row 3 term is shrunk.
1. Row 4 tick: start it at 4.90 with a `draw` of 0.35 s, so it is complete by 5.25 and holds before the wipe. It currently starts at 5.45 and never finishes.
2. Row 3 tick: start it at 2.10 (`draw` 0.35 s), so it is fully drawn by 2.45 rather than still a dot at 2.4 s.
3. "Machine-franked article" is set at about 40 px to fit, while the other terms are 56 px. Bring it to 56 px bold Inter, breaking it over two lines ("Machine-franked" / "article") if needed, with "मशीन-फ्रैंक वस्तु" 40 px beneath. Widen the term column to x 220–700 and start the pill at x 720. Don't shrink the term.
4. With rows 1–4 the bottom row sits on the envelope's lower edge. Keep 30 px between "थोक नकद" and the envelope bottom (y ≤ 960) by trimming the row pitch, not the text size.

The scene lasts 6.19 s: every time in it is between 0 and 6.19.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s052.html`: one `<section class="vs-scene" id="s052" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
