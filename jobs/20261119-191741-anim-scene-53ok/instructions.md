# Fix animated scene s027

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s027" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s027), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s026.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s027.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The timing is right: Cash, Digital Payment and Postage Stamps each fade in on their spoken number. But the row icons are too small to read on a phone, and the stationery point (the scene's second idea, "Valid postal stationery पर छपा postage भी इसी में आता है") is too small to read.

1. The stationery sub-line in row 3 ("+ valid postal stationery पर छपा postage") renders at about 28 px over three cramped lines, below the kit's 32 px floor for Hindi. Set it as two lines to the right of "Postage Stamps", inside row 3 (x ~720–1180): "+ valid postal stationery" in Inter 34 px, then "पर छपा postage" in Noto Sans Devanagari 36 px, grey #6f6a63. Keep the yellow highlight on "valid" at 6.3 s.
2. The small `postcard-blank` beside that line is an unreadable beige blob. Scale it up to about 120 px wide, put it at the left of the sub-line, and pop it on "postal stationery" (6.3 s).
3. The `postage-stamp` icon in row 3 is an empty thin rectangle that doesn't read as a stamp. Use the piece with its red perforated border and scale it to about 90 px tall, centred at x 260 in the row.
4. Scale the `rupee-cash` and `smartphone-blank` icons up to about 90–100 px tall (they are now about 60–80 px), centred at x 260 with the same left edge in every row, so the icons can be read as cash and phone.

The scene lasts 11.08 s: every time in it is between 0 and 11.08.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s027.html`: one `<section class="vs-scene" id="s027" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
