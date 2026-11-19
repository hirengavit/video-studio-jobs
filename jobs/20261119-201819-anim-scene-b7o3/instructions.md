# Fix animated scene s222

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s222" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s222), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s221.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s222.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The "मिटाना" highlight starts at 8.36 s, but the voice says "मिटाना" at about 9.6–9.9 s ("[7.6] … निशान धोखे [9.3] से मिटाना"). The kit says a word turns highlighted when it is said, not before. Move the `highlight` with `words: 'मिटाना'` to 9.65.
2. In the row-1 सज़ा cell, "अधिकतम" and "कैद" around the big "2 साल" are about 24–28 px, below the kit's 32 px Hindi minimum. Set "अधिकतम" and "कैद" to 34 px, keep "2 साल" bigger (about 48 px), and set "या जुर्माना, या दोनों" to at least 34 px. Wrap to two lines inside the 420 px cell (line 1 "अधिकतम 2 साल कैद", line 2 "या जुर्माना, या दोनों") rather than shrinking.
3. Row number circles 1 and 2: align their cy with each row's first text line (row top + about 48), not the row's middle. At 8.1 s, "2" sits below "पहले इस्तेमाल का".
4. Keep the table's title, header and type sizes the same as the fixed s221, so the cut doesn't jump.

The scene lasts 10.14 s: every time in it is between 0 and 10.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s222.html`: one `<section class="vs-scene" id="s222" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
