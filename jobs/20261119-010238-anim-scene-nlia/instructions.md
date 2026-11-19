# Fix animated scene s109

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s109" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s109), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s108.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s109.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The reveals follow the voice: Kerala at 0, Thiruvananthapuram at 1.7, J&K at 3.9, Srinagar at 6.2, and the highlight on "Srinagar" at 11.0 matches "यही नाम". But this scene cuts to a third board design: "Circle परिमंडल / Headquarters मुख्यालय" headers, beige Circle cards with a red side bar, and an "अब तक" strip of 10 pins. Mid-list, a viewer sees the board change for no reason. The storyboard says "board as before".

1. Rebuild on the same board as s104–s108 (after their fix): the "23 civil Circles" title, white Circle cards at x 100–760, HQ cards at x 980–1820 (rows y 320–520 / 576–776), and the 23-pin strip with the red count. Drop the "Circle / Headquarters" column headers and the "अब तक" strip.
2. Strip: pins 1–8 are filled at 0.00; pin 9 fills at 2.16 and pin 10 at 6.68.
3. Set "Circle directory और matching questions" to 40 px (it's ≈32 px grey now) at y≈812, between row 2 and the strip, keeping its fade at 7.88.

The scene lasts 12.60 s: every time in it is between 0 and 12.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s109.html`: one `<section class="vs-scene" id="s109" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
