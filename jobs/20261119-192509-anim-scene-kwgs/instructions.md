# Fix animated scene s051

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s051" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s051), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s050.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s051.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The cut from s050 is clean. Row 2 lands with "Mail services", and the chips arrive on cash / digital / stamps / franking / Regulations, with the tick at about 8 s. The chips are too small to read on a phone. The check calls the scene frozen because the chips only `pop` at that small size.
1. The five chips are about 28 px, and the "Regulations / में बताए दूसरे" chip is about 20 px. Rebuild them as two rows inside the pill area (x 700–1700). Row A (y 445–505), 40 px Inter bold on #f3ead6 chips: "cash", "digital", "stamps", "franking". Row B (y 515–575): one wider chip "Regulations में बताए दूसरे", with "Regulations" at 40 px Inter and the Hindi at 40 px Noto Sans Devanagari on one line.
2. Make the row as tall as it needs to be for the two chip lines (about 150 px, as the recap plan has it), and move row 3's slot down to match. Do not shrink the text.
3. Keep the `pop` per chip on its word (2.33, 3.17, 4.23, 5.25, 6.59) with scale from 0.85 and 0.25 s duration, so each arrival is visible.

The scene lasts 9.38 s: every time in it is between 0 and 9.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s051.html`: one `<section class="vs-scene" id="s051" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
