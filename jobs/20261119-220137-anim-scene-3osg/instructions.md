# Fix animated scene s199

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s199" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s199), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s198.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s199.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam matches s198. The wrong card ("valid postage भूलकर / पूरे rate × 2", a slate strike and a cross) lands on "भूलकर … मत लगाइए", and `#held` reads well. The problem is the right answer, which is the point of the trap. "फिर कमी × 2" and the green tick (6.14 / 6.84) get only about 1–1.6 s before the cut at 7.80. The question "ऐसे items कहाँ…" then starts at 7.86, before the voice says "ऐसे" at about 8.2. That shows it before the voice reaches it.
1. Bring the right card's lines in sooner: "पहले कमी" `fade` at 4.90 and "फिर कमी × 2" at 6.00 (on "फिर उसका दोगुना"). Draw the green tick at 6.50.
2. Move the cut to `#held` from 7.80 to 8.15, so the correct method holds about 2 s with its tick.
3. Start the question `words` at 8.20, on "ऐसे items". Leave POSTAGE DUE (10.34) and the chip (12.86) as they are.

The scene lasts 13.36 s: every time in it is between 0 and 13.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s199.html`: one `<section class="vs-scene" id="s199" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
