# Fix animated scene s213

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s213" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s213), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s212.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s213.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s212 matches exactly. Rows 2–4 fade in on their words ("कमी × 2" at 1.32, "₹1" at 4.20, CHARGING ERRORS at 5.26), and the ticks follow, a calm build that suits a recap. One real problem:

1. Row 4 pill "Postmaster · officer in charge": its text has been shrunk to about 32 px to fit, clearly smaller than the other pills, and hard to read on a phone. Widen the pill leftward to about x 1000–1700 (the term "CHARGING ERRORS" ends near x 720) and set the text to the same size as the other pills (at least 40 px bold Inter). Don't shrink it.
2. Row 4 pill: pop it at 7.00 with "Postmaster" alone, and reveal "· officer in charge" at 7.80 (word reveal inside the same pill group), so "officer in charge" isn't shown before it is spoken. Keep the tick at 9.54.
3. Keep every pill size and row position the same as in s212 and s214, so nothing jumps at the cuts.

The scene lasts 10.66 s: every time in it is between 0 and 10.66.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s213.html`: one `<section class="vs-scene" id="s213" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
