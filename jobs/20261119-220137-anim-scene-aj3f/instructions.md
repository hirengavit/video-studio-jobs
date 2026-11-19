# Fix animated scene s233

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s233" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s233), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s232.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s233.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The opener (badge "7 ज़रूरी बातें", then a swap to "1 पहली" on "पहली") lands on its words, and the timing follows the narration. The problem is the right card: it is 1300×780, but the three rows sit in its top half and the lower 45% or so stays empty for the whole scene. On a phone the rows look small inside a big white box. In s234, the rows that follow are pushed against the card's bottom edge.

1. Spread the point-1 rows down the card: row "Postage stamps जारी करना → सिर्फ़ Post Office" at y 340, the term "Exclusive privilege" at y 470 with "अनन्य विशेषाधिकार" at y 525, and "Stamp: physical या digital" at y 650. This leaves y 760–900 for s234's "Prepayment ज़रूरी" row.
2. Raise the body rows from about 44 px to 52 px (Hindi line height 1.3). Raise the term "Exclusive privilege" to the planned 64 px and its Hindi gloss to the planned 44 px. Today the gloss renders at about 34 px in grey.
3. Move "→ सिर्फ़ Post Office" so it starts 40 px after the end of row 1's text. It should not sit pinned to the card's right edge with a wide gap before it, so it reads as one line.

The scene lasts 13.06 s: every time in it is between 0 and 13.06.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s233.html`: one `<section class="vs-scene" id="s233" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
