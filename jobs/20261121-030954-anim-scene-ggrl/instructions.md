# Fix animated scene s121

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s121" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s121), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s120.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s121.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s120 is right: the TERM card stays and the flow dims. The idea reads, but the old flow is only half cleared and the agreement sheet is small for the space it has.

1. At 0.00 the ₹ note, the arrows and the envelope disappear, but the house stays as a faint ghost on the left, partly under the sheet. Fade the house group out with the rest (`fade` 0.00 → 0.40, to opacity 0) so nothing ghostly sits behind the new card.
2. Once the flow is gone, give the agreement sheet the room: centre it under the TERM card (x 560–1360, y 300–820, one scale number) so its lines and signature read on a phone.
3. The blank sheet holds still from 0.75 s to 4.7 s while the voice says "Retail और दूसरे customers को, concerned postal authority के साथ". Have the sheet `draw` its blank lines over 0.3–3.0 s (one line about every 0.6 s) so the screen builds with the sentence instead of sitting frozen.
4. Move the red "COD = Accountable" pill 20 px lower, leaving an even gap of about 40 px between it and the bottom edge of the sheet.

The scene lasts 10.22 s: every time in it is between 0 and 10.22.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s121.html`: one `<section class="vs-scene" id="s121" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
