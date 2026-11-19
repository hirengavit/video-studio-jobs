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

The point of the line is "Mahe and Yanam are part of Puducherry". On screen, though, "के ही हिस्से" is a tiny green pill (about 28 px) sitting on top of the connector line, which is the weakest thing on the screen. The pills under the tiles also call the Circles "केरल सर्कल / आंध्र प्रदेश सर्कल". Every earlier scene (s128–s130) used "परिमंडल", so this breaks the channel's term. The empty red card for the first 2 s is acceptable, because the tiles carry the opening.

1. Replace the small pill with its own label: "के ही हिस्से", green #2e7d4f, 48 px, bold, centred at x 960, y 455, between the tiles and below the junction. It needs a cream (#fbf7ee) backing rect 16 px wider than the text so the connector doesn't run through the letters. `fade` it on at 2.98 as planned.
2. Change the pill Hindi to "केरल परिमंडल" and "आंध्र प्रदेश परिमंडल", the same wording as s128–s130.
3. Raise the pill Hindi to 34 px and the pill EN to 44 px. Make the pills 160 px tall (y 780–940) so both lines fit with a 1.3 line height.

The scene lasts 6.98 s: every time in it is between 0 and 6.98.

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
