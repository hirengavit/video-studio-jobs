# Fix animated scene s061

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s061" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s061), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s060.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s061.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The tick at the cap lands on "ढक्कन कसकर बंद" and badges 2 and 3 pulse on "नहीं होती", which shows the idea. Two framing faults:

1. The `underline` on step row 1 (5.56) is drawn through the grey line "bottle · flask · कोई ठीक container" under it, so a mark and text overlap. Underline only the main line: `underline` with `words: 'liquid → पहला पात्र'` (or target that `<text>` alone) and `gap: 4`, so it sits between the main line and the grey line.
2. The push-in `{on:'#bottle', zoom:1.06}` is too small to read as a move, and it shifts the left column to x ≈ 56, inside the 80 px margin, which cuts the key-term card and note band close to the edge. Use `{on:'#bottle', zoom:1.04, x: -30}` so the left edge stays at x ≥ 90. Or drop the zoom and keep the `pulse` on the bottle (then s062's zoom-back becomes a still).
3. Copy s057's enlarged "पुराना Guide · Inland parcel" pill so the carry-over matches.

The scene lasts 8.86 s: every time in it is between 0 and 8.86.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s061.html`: one `<section class="vs-scene" id="s061" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
