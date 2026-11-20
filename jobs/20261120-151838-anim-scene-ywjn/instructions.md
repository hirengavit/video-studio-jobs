# Fix animated scene s141

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s141" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s141), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s140.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s141.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. From 8.5 s the screen is crowded: the green tag under chip 4 (y ≈ 670–712), the SMALL PACKETS chip (y ≈ 732–808) and the prepaid bar (from y ≈ 824) almost touch. Shrink #small to 64 px tall at y 728–792 and move #prepaid down to y 840–1000, leaving at least 20 px between each of them.
2. The screen holds more than five items once #small arrives. Following the kit's rule, at 8.18 `color` chips 1–3 (LETTERS, STATIONERY, PRINTED MATERIAL) to the supporting colour #6f6a63 over 0.4 s, so the eye goes to chip 4 and the new SMALL PACKETS row.
3. The date tag "1 January 2026 से" reads only about 28 px on the dark slate pill. Raise it to 36 px and widen the pill to fit, keeping it right-aligned in #small before the cross.
4. "छोटे पैकेट" sits beside SMALL PACKETS in light grey at about 30 px. Make it 34 px in ink #2b2622 so it is still readable when the strike-through goes over it at 12.86.

The scene lasts 14.02 s: every time in it is between 0 and 14.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s141.html`: one `<section class="vs-scene" id="s141" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
