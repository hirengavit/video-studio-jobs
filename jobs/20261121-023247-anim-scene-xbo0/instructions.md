# Fix animated scene s006

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s006" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s006), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s005.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s006.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. #lines strip 1: "box में क्या डाला जा सकता है" is set at about 36 px, noticeably smaller than "Posting के नियम" (about 56 px) and below the storyboard's 48–56 px Hindi. Set it to 50 px Noto Sans Devanagari, ink, vertically centred on the strip's middle (y≈445).
2. #same: the "=" that should join the two names is a tiny amber dot under the badge (about 30 px), so the "same person" idea doesn't read. Make "=" an amber (#8a5d00) 72 px glyph in a #fde9a6 circle about 90 px across. Place it between the badge and the "एक ही कर्मचारी" line at (960, 560), and `pop` it at 0.52 as planned.
3. #same: the "Letter-box attendant" chip is filled with the highlight yellow, but the kit reserves that colour for highlights and added material. Give it the same chip style as the peon chip (postal-red fill, white Inter bold), so the two names look like equals.
4. #lines: strip 2 sits completely empty from 2.96 to the end (about 7 s). Keep it, but fade it to opacity 0.5 until s007 writes into it. s007 should then start at full opacity, or fade it up at 0.0. That way an empty card doesn't look like something missing.

The scene lasts 10.26 s: every time in it is between 0 and 10.26.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s006.html`: one `<section class="vs-scene" id="s006" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
