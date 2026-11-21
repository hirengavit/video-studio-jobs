# Fix animated scene s032

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s032" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s032), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s031.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s032.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from the table to the envelope opens the new idea cleanly, and the cross with "छूट नहीं" lands near the voice (10.8). The still stretches are reading holds, but the main idea is too faint to read.

1. The franking impression, the subject of the scene, is a tiny pale-pink outline inside a big blank envelope. Scale `franking-impression` from 0.5 to about 0.9 so it fills the frank zone, in ink red #9e1b1b at full opacity, and `stamp` it at 1.3. Add the one annotation (an ink circle round it, drawn at 1.8 with the TERM chip), so the eye goes there.
2. The TERM chip's Hindi gloss "फ्रैंकिंग छाप" touches the chip's bottom edge and the English is cramped. Make the chip about 420×200, with the English at 52 px and the gloss at 40 px, keeping at least 16 px padding under the gloss.
3. The letter-box panel appears at 6.34, on "पर ये impression", three seconds before "साधारण letter box" (≈ 9.4). Move its `pop` to 9.2.
4. The slate cross sits on the pillar's bottom-left corner, small and half off the pillar. Centre the cross on the pillar body (on its collection plate) at about 64 px, and put "छूट नहीं" beside it at 48 px. Keep the `stamp` or `draw` at 10.32.
5. The envelope (x 160–1300) is mostly empty paper. Scale it to about 0.85 of its current size and centre it vertically (y ≈ 600). Give the right column (TERM chip, "postage चुका है" note, letter-box panel) the freed width, about x 1240–1760, so its texts reach 48 px or more.

The scene lasts 11.82 s: every time in it is between 0 and 11.82.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s032.html`: one `<section class="vs-scene" id="s032" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
