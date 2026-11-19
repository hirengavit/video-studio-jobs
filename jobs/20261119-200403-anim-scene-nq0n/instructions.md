# Fix animated scene s174

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s174" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s174), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s173.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s174.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats follow the voice: "50 × 20 mm से बड़ा नहीं" (0–2), tile 4 on "चार" (about 3.3–4.1), and "बहुत पतले कागज़ पर" then the list. The "frozen" note is only because every beat is a fade; that is fine for this calm style. The problems: the size limit, the scene's key fact, is small rather than big, and tile 4's text runs into its icon.

Fixes:
1. Tile 3 value "50 × 20 mm" (lands 1.44): the storyboard asks for a big value on a highlight band, but it renders at the same 30-odd px as the rest, squeezed on the last line beside "से बड़ा नहीं". Give it its own line in Inter bold 44 px with the #fde9a6 band behind it (from 2.70). Put "से बड़ा नहीं" at 34 px on a line below, and remove "label" from line 1 so it fits in the 210 px tile.
2. Tile 4: "चित्र · drawing · photo" starts under the picture icon (at 9.1 the "चित्र" is overlapped by the icon). Give the icon a fixed 70 px column (x 1426–1496). Start all text at x 1512, and wrap the list to two lines if needed ("चित्र · drawing" / "photo").
3. Tile 4's Hindi "बहुत पतले कागज़ पर" renders at about 30 px in two cramped lines. Set it to 34 px, line height 1.3, on one line if the tile's width allows.

The scene lasts 11.36 s: every time in it is between 0 and 11.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s174.html`: one `<section class="vs-scene" id="s174" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
