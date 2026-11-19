# Fix animated scene s073

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s073" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s073), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s072.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s073.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The green tick (2.02 s) is drawn tiny in the inner box's bottom-right corner and barely reads. Draw it about 90 px tall, stroke 8 px, #2e7d4f, just to the right of the "SPOs / SSPOs" pill inside the inner box (around x 1260, y 560–650), so it lands as a clear verdict on "answer… ही है".
2. Shot 2 (2.87 s): the "1 2 3" tiles sit small at the top (y ≈ 230–330) and leave the lower two thirds of the frame empty. Use the planned layout: heading "तीन और definitions" at y 260, tiles 200 × 200 each at y 400–600 across 560–1360 (gap 100), numerals 120 px. Keep `pop` {stagger 0.15}.
3. Bring the grey line "साधारण Postal Division" in on "साधारण" (≈1.0 s), not at ≈2 s, and make it at least 40 px so it reads beside "बड़ा शब्द".
Notes: the stills match spoken holds, and the jump at 5.61 s is the planned cut to shot 3. The seam with s072 is clean.

The scene lasts 9.81 s: every time in it is between 0 and 9.81.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s073.html`: one `<section class="vs-scene" id="s073" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
