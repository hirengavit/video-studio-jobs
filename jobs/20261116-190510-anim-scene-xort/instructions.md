# Fix animated scene s038

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s038" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s038), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s037.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s038.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The old/new split reads well. On the left are the old list and the "Small packets" chip, and on the right the 01.01.2026 postmark and "Sixth Amendment Regulations 2025", with the slate strike and the yellow "list से हटा दिए" at the end. Colours follow the kit (old is cream until it is struck). But the section label changes at the cut from "PART 3 · REGULATION 22" to "POSTING OF POSTAL ARTICLES", although we are still inside Regulation 22, and the kit says the label changes only with the section. Inside the panels, the list card and the chip use only the top half, leaving both panels half empty.

1. Set the section label back to "PART 3 · REGULATION 22" (`data-section`). Do the same in s039 and s040.
2. Enlarge the left list card and the "Small packets / छोटे पैकेट" chip about 1.3× and centre them vertically in the left panel (chip text ≥ 48 px, Hindi ≥ 32 px).
3. Enlarge the right postmark to ≈ 220 px, and centre the postmark + "Sixth Amendment Regulations 2025" + note stack vertically in the right panel.
4. Draw the slate strike as a straight horizontal line through the middle of "Small packets" (not a diagonal across both lines), and add a slate cross beside the chip, per the kit's marking for removed items.

The scene lasts 16.54 s: every time in it is between 0 and 16.54. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s038.html`: one `<section class="vs-scene" id="s038" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
