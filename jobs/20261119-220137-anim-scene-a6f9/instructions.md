# Fix animated scene s195

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s195" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s195), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s194.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s195.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Sum 1's answer barely appears. The green "= ₹10" pill pops at 0.64 and is gone at the 1.80 cut. That is about 1 s for the result of the first sum, against the kit's minimum hold of 3 s. The "हिसाब 2" heading also starts at 1.83, before the voice says "दूसरा" (about 2.6–3.1), and the kit says nothing shows before the voice reaches it. The stamp and the two lines of sum 2 land well.
1. Pop the "= ₹10" green pill at 0.20, on "यानी ₹10", so it is the first thing that happens.
2. Move the cut to `#sum2` from 1.80 to 2.90, so ₹10 holds for about 2.7 s.
3. Start the heading "हिसाब 2 · कम postage" `words` at 2.95, on "दूसरा, कम postage" (it runs to about 3.9).
4. Leave "Rate = ₹5" (4.69), the ₹3 stamp (6.57) and "Valid postage = ₹3" (7.85) as they are.

The scene lasts 9.55 s: every time in it is between 0 and 9.55.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s195.html`: one `<section class="vs-scene" id="s195" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
