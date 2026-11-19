# Fix animated scene s232

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s232" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s232), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s231.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s232.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is clean: rows 1–2 carry over by a cut and turn grey at once. Row 3 builds on "ऐसा stamp post हुए item पर मिले", "Non-delivery" is highlighted at about 3.4 s on its word, and row 4 builds on "Reproduction, administrative instructions के form में ही", with "form में ही" highlighted at the end. There are four rows and the card is full and balanced. The holds are fine. One visible fault:

1. Row 3 icon tile: the `address-envelope` at scale 0.2 is almost invisible (a pale cream shape on the cream tile), so the tile looks empty from 0.4 s to the end. Raise it to scale 0.28 so it fills the tile (about 64 px wide), and put it on a white (#ffffff) tile with the #ead9a8 border, like the other rows' tiles. Its ink outline then shows.
2. "Non-delivery" highlight: the band sweeps in while the word is still writing on (at 3.5 s only "Non-de" is covered). Start the highlight after the word's last letter is on, at about 3.6 s, with the sweep taking 0.4 s.

The scene lasts 9.07 s: every time in it is between 0 and 9.07.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s232.html`: one `<section class="vs-scene" id="s232" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
