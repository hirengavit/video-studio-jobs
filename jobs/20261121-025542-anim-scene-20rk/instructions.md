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

Row 5 ("आखिरी box के बाद") lands on its words, and "बिना देर लौटना" with its tick follows at about 2.1 s. But the second step crowds the envelope. The pill grows to two lines, and its text touches the pill's top edge and the envelope's bottom edge. The second tick (about 4.6 s) is drawn almost on top of the first, so it reads as a smudged double tick. Viewers will see this, because it is the last thing on the recap.

1. Row 5 ticks: use one tick. Either drop the 4.59 s tick, or place it on the second line (about 40 px below the first, at the same x). Never stack two ticks in the same spot.
2. Row 5 pill: make the pill about 110–120 px tall with 14 px of padding top and bottom, and give the two lines (Hindi 46 px at 1.3 line height, then "defect report → Postmaster") enough space that neither touches the pill edge. Left-align both lines at the same x. At the moment the first line is at the left and the second is centred.
3. To make room, move rows 1–5 up by about 20 px, or tighten the row pitch from about 120 to about 112 px, so that row 5's pill ends at least 30 px above the envelope's bottom edge. Don't shrink the text.
4. Carry the spacing and Custody-pill alignment fixes from s075/s076 into this file with the same values, so the seams don't jump.

The scene lasts 6.33 s: every time in it is between 0 and 6.33.

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
