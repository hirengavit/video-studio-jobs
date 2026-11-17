# Fix animated scene s099

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s099" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s099), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s098.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s099.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Swapping the parcel for the case drawing works, and the cloth band that reveals over the case at 8.06 s is a clear picture of "covering". But the important picture starts tiny, row 4 sits empty for six seconds, and its second line is crammed.

1. The bars + coins icon (0.46 s) is about 60 px wide beside the header, and the drawing panel below it stays empty until 4.78 s while the voice is on "सिल्लियाँ या सिक्के". Pop the icon at scale ≈2.5, centred in the drawing area (≈ x 530, y 560). At 4.78 s, `move` it (0.5 s) up to its header spot as the `wooden-case` pops.
2. The row 4 badge pops at 0.00 s with an empty row that waits until about 6.6 s for its words. Pop the badge together with the row's first words at about 5.4 s ("लकड़ी"), or write "सिल्लियाँ / सिक्के" in the row at 0.46 s and add the case text on its word.
3. Row 4's second line "कपड़े या मोटे कागज़ का covering" (8.06 s) is squeezed under line 1 at about 22–24 px, touching it. Make row 4 a two-line row like row 2 (about 110 px tall, Hindi 32 px+, line height 1.3). If the card gets too full, fade rows 1 and 3 to the supporting colour rather than shrinking the text.
4. In the panel, "लकड़ी" is a yellow chip and "/ metal case" is plain text, which reads as wood being the 'highlighted' answer. Give both the same treatment: plain ink text, or both in the soft highlight band on their words (5.4 s and 6.04 s).

The scene lasts 10.82 s: every time in it is between 0 and 10.82.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s099.html`: one `<section class="vs-scene" id="s099" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
