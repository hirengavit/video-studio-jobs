# Fix animated scene s188

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s188" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s188), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s187.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s188.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The grey chip "booking की जगह नहीं" pops at 3.34 s and is cut away at 4.60 s, so it is on screen for only about 1.2 s and is missing from every frame. It's the point of the line. Pop it at 3.0 s, on "booking की जगह", and move the cut to shot J to 5.4 s. The "पुराना Guide" label can land with the cut, and the stamps stay at 5.88 s.
2. The tag "पुराना Guide" runs into the right edge of its pill, because the pill kept the width it had for "Guide". Widen the pill drawn in the scene by about 40 px (or rebuild it for the new text) so there's an even 16 px margin.
3. The three "ऊँची value stamps" are thin, empty outlines about 25 px wide, too small to read as stamps on a phone. Scale the `postage-stamp` pieces up to about 1.6 so each one is about 60 px, and keep them inside the envelope's top-right corner.
4. Shot J leaves the right half empty until 10.42 s. Show the counter dimmed at the start of shot J (opacity 0.35, label hidden), then bring it to full with its label at 10.42 s. Or move the envelope and label to the centre (x ≈ 960) and slide them left as the counter pops.

The scene lasts 11.64 s: every time in it is between 0 and 11.64.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s188.html`: one `<section class="vs-scene" id="s188" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
