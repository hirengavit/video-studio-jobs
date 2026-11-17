# Fix animated scene s077

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s077" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s077), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s076.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s077.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The "गलाने वाले पदार्थ" gloss lands well, and the strong-box shot with the slate "मनाही ✗ खत्म नहीं" stamp is a clear picture. Two problems. First, the shot switches to #two at 6.46, while the voice is still saying "मनाही खत्म नहीं होती" (5.9–7.0), so the stamp gets only about 1.3 s. Second, the two compare cards then sit completely empty from 6.46 to the end of the scene, and the right one stays empty until s078 4.68. That's about 8 s of blank cards, which CRAFT rules out.

1. Move the shot change to 7.55, on "दो बातों": shots [[0,'#dg'],[2.62,'#box'],[7.55,'#two']]. Move `type` "दो बातें · फ़र्क़" to 7.6, so the stamp holds for about 2.4 s.
2. Bring the two compare cards in with the header on their words: `pop` the left card at 7.6 and the right card at 8.2, not both already present at the cut.
3. Give each card a first item so it isn't blank: a big grey numeral "1" and "2" (supporting colour #6f6a63, 120 px, Inter 700) centred in the card, fading in with the card. s078 can then `out` them at 0.92 and 4.68 as each card fills.
4. Make the wooden case bigger, to scale 2.0 (base y 860). This keeps the slate stamp inside the case's width instead of spilling past both sides.

The scene lasts 9.86 s: every time in it is between 0 and 9.86.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s077.html`: one `<section class="vs-scene" id="s077" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
