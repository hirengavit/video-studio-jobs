# Fix animated scene s017

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s017" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s017), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s016.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s017.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s016 is clean: same box, same card, the plate fills in. The ✓/✗ rows land on their words (Letters 2.1, Postcards ~2.9, Book packets 5.3, बाकी classes 6.5) and hold, so the still stretches in the notes are the planned reading holds. The problem: "FOR LETTERS ONLY" is the idea of the scene, and it exists only as ~28 px lettering on the small plate, so it won't read on a phone. The card is headed with the generic "Box पर लिखा निर्देश".

1. At 0.00, `swap` the card heading "Box पर लिखा निर्देश" to "FOR LETTERS ONLY" (Inter bold 64 px, ink) with the Hindi gloss "सिर्फ letters के लिए" beneath at 40 px #6f6a63, fading in 0.5 s later. Do the swap in sync with the plate `reveal`, so the screen says the rule in big type as the voice says it. Grow the card's header area by about 50 px to fit the two lines; keep the rows below as they are.
2. Push the camera in slightly, as the storyboard asked ("holds push"): `camera: [[0, {zoom: 1}], [2.0, {zoom: 1.08, x: 60}]]`. Keep both the box and the card's right edge inside the frame at the end of the move.
3. Set the row text to at least 48 px. Letters, Postcards, Book packets and बाकी classes currently read at about 40 px, and the Devanagari "बाकी" needs ≥ 44 px under the kit rule.

The scene lasts 9.18 s: every time in it is between 0 and 9.18.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s017.html`: one `<section class="vs-scene" id="s017" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
