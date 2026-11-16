# Fix animated scene s089

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s089" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s089), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s088.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s089.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The "के अंदर" pill straddles the bottom perforated edge of the stamp card (it overlaps the card): move its group down so its top sits about 24 px below the card's bottom perforation (or inside the card under "दिन"), and raise its text to at least 40 px so it reads on a phone.
2. The stamp card sits empty and red from 0.2 s to about 3.9 s: either `pop` the card at 1.30 with "Bill मिलने के" instead of showing it from 0.0, or keep the frame from 0.0 in the envelope colour (#f3ead6) and fill it red on the `stamp` of "7" at 3.65, so the first 3.5 s isn't a blank red block.
3. The bill icon left of "Bill मिलने के" is a tiny blank square that reads like a checkbox: scale it about 1.8× (to the text's height, ≈ 64 px) and give it 3–4 ink rule lines like the Bill in s088, so it matches the previous scene.
4. Bring the "7" in with `stamp` (from 2.4, rot -6) at 3.65 so the key fact lands; aim the slow push 1.0 → 1.05 with `{on: '#stamp-card'}` so the card and the pill stay inside the frame at the end.

The scene lasts 8.58 s: every time in it is between 0 and 8.58. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s089.html`: one `<section class="vs-scene" id="s089" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
