# Fix animated scene s078

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s078" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s078), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s077.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s078.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s077 matches. Rows 2–3 slide in with their ticks, the cut to #reg7 lands on "Regulation 7", and the four discs pop on "चार वजहें". The heading highlight "मान्य नहीं" lands on "भुगतान मान्य नहीं होता". There are two problems. Row 3 "इस्तेमाल की शर्तें पूरी" is on screen only about 1.8 s before the cut, which breaks the kit's minimum hold of 3 s. The small stamp in #paid also has to match whatever s077 is changed to.

1. Bring row 3 in earlier: slide it in at 2.0 (on "इस्तेमाल की शर्तें", which starts at 1.9) instead of 2.88, and draw its tick at 3.0 instead of 3.84. It then holds about 2.6 s before the 4.64 cut. Move row 2's slide to 0.2 and its tick to 0.6 to keep the stagger.
2. Match #paid to the fixed s077: `postage-stamp` at scale 2.3 centred (480, 560), with the "छपी value" label at y 960 and 44 px, so the first frame agrees with s077's last.
3. In #reg7, scale `regulations-book` from 0.8 to 1.0 centred (350, 400), so the left column isn't a small book in empty space. Keep "Regulation 7" at y 660–740 and leave room for the s080 chip at y 850–970.

The scene lasts 9.76 s: every time in it is between 0 and 9.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s078.html`: one `<section class="vs-scene" id="s078" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
