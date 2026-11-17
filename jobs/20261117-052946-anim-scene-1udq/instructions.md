# Fix animated scene s154

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s154" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s154), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s153.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-table` (Compare table): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-table: two or three columns (re-space the centres), three to five rows, which row gets the outline, the source line; interest rates must name the quarter and the source.

## What to change

The current file is `inputs/current/s154.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The slate panel sits over the bottom of the tiles, and the "not allowed" beat lasts barely a second before the cut to the table.

1. Panel "Online entry + सड़क का letter box": don't let it cover the tiles. The tile chips ("Regional Head तय करते", "अनुमत items और तय procedure", "administrative instructions…") disappear under it at 0.2 s. Either move the panel to y 900–990 and shorten the tiles to end at y 870, or `fade` the tile chips to the supporting colour and put the panel below them. Don't delete the chips.
2. Slate cross + "allowed नहीं": start it at 8.05 s ("allowed नहीं" is said at 8.1 s). Then hold it, and move shot B (table title + header) from 8.92 s to 9.85 s, on "अब वो items". Right now the cross is gone in about 1 s, before anyone reads it.
3. Table title bar "LETTER BOX से बाहर · Kept out": make the bar at least 72px tall (now about 56px) and put the 40px title in its centre, so the Devanagari matras don't touch the top of the bar. Do the same for the header row "ITEM · वस्तु | WHERE · कहाँ" (at least 60px tall).

The scene lasts 12.70 s: every time in it is between 0 and 12.70.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s154.html`: one `<section class="vs-scene" id="s154" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
