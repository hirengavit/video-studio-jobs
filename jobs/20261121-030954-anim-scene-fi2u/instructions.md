# Fix animated scene s128

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s128" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s128), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s127.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s128.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s127 matches: stamp 2 and an empty card. Row 1 builds on Accountable, COD and India Post Parcels. The counter-receipt pill and its tick land on "counter पर receipt के साथ", and row 2 builds on Franked · registered newspaper · periodical post. The pill is small and wraps, and the spacing needs fixing.

1. The "counter + receipt" pill wraps onto two lines with text of about 40 px. Draw it wider (about 300 px) so it fits on one line with 44 px text. Keep the highlight-soft fill and amber text, and sit it at the right of the row with a 16 px gap before the tick.
2. "Accountable   · COD" has a wide gap before the dot, but "Franked · Reg. newspaper" doesn't. Use one separator style everywhere: single space, "·", single space.
3. Row 1's two lines and the pill crowd the first row strip. Make row 1 two strips tall by moving the divider line and row 2 down 44 px, so "सारे India Post Parcels" no longer sits on the divider.
4. Row 2 writes "Franked · Reg. newspaper" and then "Periodical post" on a second line. Keep both lines and make the row two strips tall like row 1, so the card's empty divider lines don't cut through the text.

The scene lasts 14.02 s: every time in it is between 0 and 14.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s128.html`: one `<section class="vs-scene" id="s128" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
