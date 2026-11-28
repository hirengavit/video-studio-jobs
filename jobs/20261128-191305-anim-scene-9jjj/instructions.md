# Fix animated scene s105

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s105" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s105), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s104.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s105.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Seam with s104 is clean (वसूली + bundle carried) and every reveal lands on its words (line 2 at 6.46 on "जो सालाना ब्याज", "लौटने वाली रकम" at 10.02, chip at 11.52 on "वसूल"). The stills in check-notes are holds while the voice reads the line on screen: intended. What a viewer would notice:

1. The three rupee-coins beside "पहले दिया सालाना ब्याज" (x 900–1150, y ~700) render as blank pale discs from 7.14 on: no gold fill, no ₹. They already look greyed before the 11.52 `color` to grey, so the recovery cue is lost. Use piece:rupee-coin at scale 0.8 (≈96 px, ₹ readable) with its gold-sand fill untouched at pop; keep the `color` → grey at 11.52 as the only change.
2. Everything sits in the top half: content ends at y ~720 and the bundle is small, leaving y 760–1000 empty. Move line 1 to y 620 and line 2 + coins to y 780; scale the bundle to 1.6 (≈512×320) at x 1340–1852, y 560–880, with "लौटने वाली रकम" 52 px at y 940, so the payout reads as the main object.
3. Put the amber chip "− पहले दिया ब्याज" on the bundle's lower half (y ~800) at 48 px instead of across the band, so the ₹ seal on the band stays visible.

The scene lasts 13.18 s: every time in it is between 0 and 13.18.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s105.html`: one `<section class="vs-scene" id="s105" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
