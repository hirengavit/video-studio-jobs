# Fix animated scene s170

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s170" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s170), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s169.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s170.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut to the two-card layout is clear: the front card shrinks, the back card arrives, and the sender areas fill on "Left-hand half" and "पीछे की side". The tiles land on "संदेश" (about 4.0) and "advertisement" (about 7.3–10). The stills at 4.2–11.2 are reading holds. The problems are readability: the small Hindi lines and a chip squeezed between the cards.

Fixes:
1. "पते वाली ओर" under "Address side" (y 758) renders at about 24–26 px, under the kit's 32 px minimum. Set it to 34 px. This label carries over through s176, so the same size holds there.
2. Chip "sender के लिए" (3.18): it fills the whole gap and almost touches both card borders (about 12 px each side). Set the text to 36 px with 20 px side padding (about 260 px wide), centred at x 970, so there are 40 px or more of clear space on each side.
3. Tile 2 "छपा advertisement · एक या कई रंग": the text is about 32 px and the grey "एक या कई रंग" is lighter still. Widen the tiles to 330 × 210 (x 1140 and x 1490). Set "छपा advertisement" to 36 px bold and "एक या कई रंग" to 34 px, with 16 px padding inside the tile.

The scene lasts 11.24 s: every time in it is between 0 and 11.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s170.html`: one `<section class="vs-scene" id="s170" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
