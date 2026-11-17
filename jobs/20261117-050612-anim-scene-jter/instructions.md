# Fix animated scene s113

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s113" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s113), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s112.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s113.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Seam with s112 is clean (same 2×2 glossary grid, same card 1). The reveals land on their words: "सिक्के नहीं" at 0.42, plated at 1.74, Coins at 5.30 and the cut-coins line at 6.24. The "frozen" note isn't a real problem; the changes are just small text lines. The problem is size. The two slate exclusion lines in card 1 ("× सिक्के नहीं", "× Electro-plated / plated नहीं"), the slate line in card 2 and the grey "(currency department / mints से)" render at about 22–26 px. That is below the kit's 32 px minimum for Hindi, and the lines won't read on a phone.

1. Card 1: set the two slate exclusion lines to 32 px Noto Sans Devanagari (line-height 1.3) and put them on their own rows: "× सिक्के नहीं" on one row and "× Electro-plated / plated नहीं" on the row below. Don't keep them side by side squeezed between the Hindi subtitle and the yellow "पूरी या कुछ हिस्से में" band, and move that band down so nothing touches.
2. Card 2: set "× कटे नकली सिक्के नहीं" to 32 px and the grey "(currency department / mints से)" to 32 px #6f6a63, each on its own row with 1.3 line spacing inside the card.
3. To make room in every card, shrink each card's icon tile from about 150 px to about 110 px and start the text block 24 px higher. If the cards are still tight, reduce the gap under the subtitle "मतलब रोज़ से थोड़ा अलग". Grow the cards' height; don't shrink the Hindi.

The scene lasts 11.26 s: every time in it is between 0 and 11.26.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s113.html`: one `<section class="vs-scene" id="s113" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
