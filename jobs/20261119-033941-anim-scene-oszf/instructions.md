# Fix animated scene s130

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s130" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s130), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s129.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s130.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s129 matches and the cut to #kerala (the "jump" at 8.38 s) is the planned sub-shot. The Kerala Circle card and its rows land on their words and read well. The first 8 s keep s129's over-shrunk diagram: the slot Hindi is about 20 px. Rule 1's answer also shows and greys out too fast. "→ Tamil Nadu Circle" pops at 1.22 s, before "Tamil Nadu" is heard (~1.9 s), and goes grey at 2.80 s, so it holds about 1 s. The slot 3 yellow highlight planned for 1.22 s doesn't show on the sheet, so the strip and the diagram never visibly link.

1. Start from the corrected s129 layout: diagram at scale ≥ 0.8, x ~220–1700, y 150–760, with no kicker and no "3 Circles" label. Rule strip at 790–1000. Every Hindi line in the diagram should be 32 px or more.
2. Move the strip arrow and "→ Tamil Nadu Circle" `pop` from 1.22 to 1.85. At the same time, `highlight` slot 3 (Tamil Nadu Circle) with #f2b705 at opacity 0.35, so it plainly shows.
3. Hold strip line 1 in ink until 3.45 (on "Mahe"); move its `color` grey there from 2.80. Line 2 `words` "Mahe / Yanam अलग से" then starts at 3.5.
4. Keep "→ अपना Circle" on 6.3 and the slots 1–2 `highlight` on 6.7. Leave everything after the 8.11 shot change as it is.

The scene lasts 14.83 s: every time in it is between 0 and 14.83.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s130.html`: one `<section class="vs-scene" id="s130" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
