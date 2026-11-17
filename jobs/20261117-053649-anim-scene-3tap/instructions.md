# Fix animated scene s179

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s179" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s179), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s178.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s179.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The term card "LIABLE TO DETENTION / रोके जा सकते हैं" lands on "detention" (3.7 s) with its underline. The strike on "हर गलत article ज़ब्त" comes after "ज़ब्त होगा", which is right. But the storyboard's slate-tinted parcel going into the AIRMAIL box never shows in any frame; it is the picture for "दूसरे articles ऐसे box में मिलें". The first 3 s show nothing new after the shift left, so the voice's first idea has no picture.
1. Add the planned small `parcel-with-tag`: scale about 0.45, slate-tinted #4b4f58 outline, base on the AIRMAIL box's mouth anchor. Bring it in with `slide` (from up, dist 160) at 0.8 s, after the boxes' `move` has settled. Place it after the box in the SVG so it isn't hidden behind the box group.
2. Enlarge the "हर गलत article ज़ब्त" pill to the term card's width (about 520×80), with 38 px text in ink #2b2622; it is light grey on grey now and hard to read. Keep the slate strike at 10.22 s, drawn over the full text.
3. Apply the same plate-size fix as s178 so the boxes and plates stay continuous across the cut (bigger plates, Hindi ≥ 32 px). The boxes' start positions must match s178's end exactly before the `move`.

The scene lasts 11.12 s: every time in it is between 0 and 11.12.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s179.html`: one `<section class="vs-scene" id="s179" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
