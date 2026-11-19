# Fix animated scene s100

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s100" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s100), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s099.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s100.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The words land on time ("Stamp की जगह:" at 0, the second line at ~1.2, the highlight on "top right-hand corner" at ~2.3–2.9). The problem is that the one picture that would show the idea literally is tiny.

1. Row 4 `address-envelope` icon: it's a tiny white rectangle with a red speck, so you can't see a stamp in a corner. Draw the envelope at ~160 × 110 px (one scale number), with the stamp clearly in its top right corner. `pop` a small highlight ring (soft yellow #fde9a6 outline) round that corner at 2.3 s, together with the text highlight. Use it as the screen's one annotation.
2. Row 4 band and text: the two-line row runs down to the card's bottom border. Either make the card 30 px taller (to y 1020) or set the four rows to 165 px tall so row 4's band ends at least 20 px inside the border.
3. Row 1 icon: still the blank outlined square that reads as a checkbox. Use the full `postage-stamp` look (same fix as s098/s099).

The scene lasts 4.27 s: every time in it is between 0 and 4.27.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s100.html`: one `<section class="vs-scene" id="s100" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
