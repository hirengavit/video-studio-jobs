# Fix animated scene s164

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s164" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s164), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s163.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s164.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The third sub-line "Postcard: सिर्फ allowed बदलाव / चीज़ें" is about 24 px and squeezed under the step-3 row, nearly at its bottom edge. Follow the s163 layout fix: three stacked lines at 36 px under the step-3 title, with row 3 grown and rows 4 and 5 shifted down. If the column runs out of height, collapse rows 1–2 to title-only height (60 px) once they are dimmed.
2. The step-4 sub-line "ज़रूरी postage = छपा + extra valid stamps" is about 26 px across two cramped lines. Set it at 36 px on one line under the step-4 title, as "ज़रूरी postage = छपा + extra valid stamps". Enter it with `words` from 8.3 s ("ज़रूरी postage को"), so "छपा" lands at ~10.6 s and "extra valid stamps" at ~12.0 s.
3. The tiny `adhesive-stamp` at 11.3 s renders as a small checkbox-like square (about 30 px) and reads as a tick, not a stamp. Scale it up to about 90 px tall. Place it right after "extra valid stamps" and `pop` it on "stamps" (~12.4 s), so it shows its perforated edge.
4. Step 4's title appears at ~4.6 s on "चार", which is right. Hold step 3's sub-lines in #6f6a63 rather than pale red once they dim.

The scene lasts 13.37 s: every time in it is between 0 and 13.37.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s164.html`: one `<section class="vs-scene" id="s164" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
