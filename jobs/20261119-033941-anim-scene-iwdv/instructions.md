# Fix animated scene s142

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s142" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s142), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s141.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s142.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

"और 1856 में बना था" (0–1.8 s) is never shown. The planned "1856" chip doesn't appear: the frames at 0.2 s show only the s141 layout, nothing moves until the cut at 2.74, and the year is lost. The cut to #cadre (the "jump at 2.74") is the planned sub-shot and is fine. The #cadre build is good: "Defence Minister" lands on its words, "APS officer cadre" then "civil postal service" follow the voice, and the arrow with the yellow "deputation" label lands on "deputation".

1. Add the "1856" chip on the band in the #head shot: a small round postmark or perforated chip at x 560–900, y 860–960 (below "एपीएस निदेशालय", clear of the location pill), "1856" Inter 56 px bold ink. `stamp` at 0.26, then Hindi "में बना" 34 px grey beside it `fade` at 1.48. It stays until the cut at 2.48.
2. If the band is too tight there, shrink the location pill's left edge from 960 to 1000 rather than dropping anything. The chip must not overlap "APS Directorate" or the pill.

The scene lasts 12.25 s: every time in it is between 0 and 12.25.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s142.html`: one `<section class="vs-scene" id="s142" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
