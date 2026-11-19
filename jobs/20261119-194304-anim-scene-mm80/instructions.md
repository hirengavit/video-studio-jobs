# Fix animated scene s110

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s110" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s110), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s109.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s110.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The office safe is too small for its panel: about 380 px tall in an envelope panel of about 790×790 (x1010–1800, y224–1012), so most of the panel is empty and the safe is the scene's point. Scale `office-safe` up about 1.5× (about 580–600 px tall) with base at (1400, 980), centred in the panel and below the "Safe / तिजोरी" label. Re-aim the stamp sheet's `place` on the shelf so it still lands inside the open safe. Use the same safe position and scale in s111 so the cut at the seam stays still.
2. At 6.64 the panel appears first and sits almost empty, with one stray stroke and two small feet, until the safe drawing finishes (frame 6.9 s). Start the safe's draw together with the panel, or show the panel 0.2 s before the draw. Shorten the draw to about 0.6 s so the safe reads by about 7.3, before "safe" is said at about 7.8.
3. The icons inside the two chips ("गुम होने से" dashed sheet, "खराब होने से" creased sheet) are only about 80 px and the "damaged" one reads as a document. Scale both drawn sheets to about 110 px. Give the "खराब" sheet a visible slate stain blot and a bent corner so the difference from the dashed "lost" sheet reads at a glance.

The scene lasts 8.64 s: every time in it is between 0 and 8.64.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s110.html`: one `<section class="vs-scene" id="s110" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
