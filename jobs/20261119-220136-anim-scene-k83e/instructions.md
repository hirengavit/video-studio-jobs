# Fix animated scene s098

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s098" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s098), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s097.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s098.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s097 is clean and the cut to `#exam` at 7.91 lands on "Exam angle". The problems are the verdict and the row 1 icon.

1. Verdict oval (right card, y 860): it shows as an empty grey ellipse from about 4.0 s, and its words only come in later. Put the text inside the oval's group and `pop` the whole verdict at 6.0 s ("deliver नहीं होगा" starts at 6.1). Make the text 44 px instead of ~32 px, and widen the oval to about 560 × 110 so the text has padding. Move it up to y 830 so it doesn't touch the card's bottom border.
2. Row 1 icon (x 200): the `postage-stamp` shows as a blank outlined square. Next to the green tick it reads as an empty checkbox. Draw it at ~130 px with its red perforated edge and inner picture visible (the same look as the s097 stamps) so it reads as a stamp. Fix the same icon in s099 and s100.
3. "≠" disc at (960, 600): make it 140 px instead of 100 px, and pop it at 0.0. At 100 px it's a small grey dot between two big cards, but it is the idea of this line ("अलग मामला है").
4. Row 4 `address-envelope` icon (built here, shown in s100): scale it up to ~130 px wide, with the stamp clearly drawn at its top right (see s100).

The scene lasts 12.85 s: every time in it is between 0 and 12.85.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s098.html`: one `<section class="vs-scene" id="s098" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
