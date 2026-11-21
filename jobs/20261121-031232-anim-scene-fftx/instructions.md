# Fix animated scene s133

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s133" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s133), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s132.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s133.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam matches s132. "तीनों वापस" with its tick (0.2–2.0 s), "Defect" around 3.5 s and "→ Postmaster को" around 5.5 s all land on their words. But the card gets crowded and rearranges itself, and after the cut the new stamp is blank.

1. The stamp after the cut at 6.68 is empty: the circle has no number and there's no title until 7.54. At 7.5 s the viewer sees a plain red card while the voice says "चौथी, electronic record". Bring the "4" on at 6.72 (stamp, right after the cut) and "Electronic record" at 7.10 (fade 0.3 s), so the stamp reads from the cut onwards.
2. When row 5 arrives (about 3.5 s), row 4 ("आखिरी box … तीनों वापस") jumps up about 30 px. That is a layout change during a reading hold. Keep row 4 exactly where s132 left it, and place row 5 below it instead.
3. Row 5 "Defect → Postmaster को" is squeezed under the last rule line, about 20 px above the card's bottom edge. Grow the card's bottom edge down by about 36 px (to about y 1000) at 2.20, before row 5 arrives (a 0.3 s ease), and add a matching rule line, so row 5 has the same margins as rows 1–4. If the frame has no room for that, place row 5 on the same pitch and grow the card to fit it, but don't shrink the Hindi text.

The scene lasts 9.26 s: every time in it is between 0 and 9.26.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s133.html`: one `<section class="vs-scene" id="s133" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
