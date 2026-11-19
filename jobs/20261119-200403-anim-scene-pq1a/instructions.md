# Fix animated scene s175

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s175" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s175), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s174.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s175.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea reads well: tiles 2 and 3 tint, then an arrow carries them up to the back card, where two labels appear (on "पीछे की side", about 4.4). The front left half then lights up, and ghost labels appear there on "left-hand half" (about 7.6). The stills are reading holds. What a viewer will notice is tile 4, now crammed with four lines.

Fixes:
1. Tile 4 now holds "बहुत पतले कागज़ पर", "चित्र · drawing · photo" and "पूरे चिपके". The second line still runs under the icon, and "पूरे चिपके" touches the tile's bottom edge. Use the fixed 70 px icon column (text from x 1512). Set the lines to 34 px with a line height of 1.3, and drop "बहुत" so line 1 fits on one line, keeping 14 px or more of bottom padding. Or grow tile 4 to 240 px tall, with all tiles matching.
2. The two labels on the back card (4.44): they pop at the same size and y as each other, close under the sender box. Leave 30 px between them and the sender box, and give them a 2 px ink outline with grey address lines, so they read as stuck-on labels, not empty input boxes.
3. Front left-half outline (7.20): the red outline overlaps the card's own ink border and reads as an error. Draw it in highlight #f2b705, 4 px, inset 6 px inside the half (red is the brand, not a signal).

The scene lasts 9.66 s: every time in it is between 0 and 9.66.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s175.html`: one `<section class="vs-scene" id="s175" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
