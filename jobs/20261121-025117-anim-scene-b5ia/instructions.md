# Fix animated scene s064

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s064" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s064), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s063.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s064.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam with s063 is exact (the tray holds). The cut to the pillar box on "box की हालत", with the magnifier drawing after the word, is clear and calm. But the first beat's point, who receives the items, is only a small grey pill tucked beside the title.
1. Receiver label: the pill "Postmaster / responsible attendant लेते हैं" has ~36 px text in a 40 px-tall pill. Set "Postmaster / responsible attendant" in Inter bold 44 px and "लेते हैं" in 40 px, with the pill ~76 px tall, keeping its words at 0.0 / 2.3 / 4.8 s. If it no longer fits beside the title, put it full width under the title at y ≈ 300 and move the step list down to make room. Alternatively, dim steps 4–5 to #6f6a63 so step 6, the tray and the label lead.
2. The hour-plate icons (step 4 and tray) carry over blank. Write "14:00" on them to match s063 once it is fixed there.
3. In the #check shot, the "box की हालत" card is a wide, mostly empty white bar. Size it to its text (≈ 520 × 110, label 48 px) so it doesn't look like an empty card waiting for content before s065 fills the right side.

The scene lasts 8.72 s: every time in it is between 0 and 8.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s064.html`: one `<section class="vs-scene" id="s064" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
