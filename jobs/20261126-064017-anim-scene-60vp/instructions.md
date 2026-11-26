# Fix animated scene s066

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s066" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s066), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s065.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s066.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The new counter set works as a place, and the timing is right: the tick and "delivery / payment आसानी से" land on "आसानी से", then "?" and "शक बचा रहे", then the Postmaster label. The cut from the card close-up is a change of shot, so a cut is right. The problems are physics and crowding.

Fixes:
1. Physics: the `id-card` (scale 0.6) floats at head height beside the person-icon at `customer-side`, held by nothing. Rest it on the counter's right edge (about x 1440, sitting on counter top y 730) beside the person, or `hold` it at the figure's chest (about 1600, 900), so it reads as the person showing the card.
2. The right-panel text pills ("delivery / payment आसानी से" and "शक बचा रहे") overlap the rack's right edge. Move the panel column to x ≥ 1460 (left edge), stacked at y 380 and y 500, and keep them off the rack.
3. "Postmaster: और पूछताछ" sits across the rack's bottom rail and the counter window, which is cluttered. Put it as the third pill in the same right column (x ≥ 1460, y 620, 48 px) so the three lines read top to bottom in the order spoken.
4. The grey "?" pops at the far left (about x 600, y 430), away from everything. Pop it just above the envelope on the counter window (about x 960, y 560, scale 1.2) so the doubt is about this delivery.

The scene lasts 10.14 s: every time in it is between 0 and 10.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s066.html`: one `<section class="vs-scene" id="s066" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
