# Fix animated scene s080

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s080" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s080), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s079.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s080.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The scene continues s079 cleanly. "Owner / publisher" is there from 0.0 and "एक बार में 500 से ज़्यादा copies" lands at 2.92 (said 2.4–3.7). The problem is the trap, the exam point of this scene: "ठीक 500 copies" is the smallest thing on screen, a ~30 px grey pill squeezed against the card's bottom border with a ~20 px cross. Viewers will miss the very line the narration stresses.
1. Tighten the right card's rows: move the "शर्त" block and the "Owner / publisher" row up by ~40 px (redraw at the new y) so the trap strip has ~150 px of room above the card's bottom edge.
2. Redraw the trap strip "ठीक 500 copies" as a full-width row inside the card (about 640×80 px), text 46 px bold in the wrong colour #4b4f58 on a light grey fill, with the cross icon at 44 px. Leave space on its right for s081's green "501 copies".
3. Move the strip's entrance from 6.12 to 6.6 so it lands on "ठीक 500" (said just before 7.1), not before the voice gets there. Keep the slate cross at 9.5.
4. Raise the gloss "मालिक / प्रकाशक" from ~28 px to 36 px so it isn't a smudge on a phone.

The scene lasts 10.26 s: every time in it is between 0 and 10.26. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s080.html`: one `<section class="vs-scene" id="s080" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
