# Fix animated scene s049

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s049" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s049), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s048.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s049.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The swap from the s048 checklist to the result is clean and the seam holds (same book, same card, same place). "Postage नहीं" lands on its word, and so do both scales. The four still stretches are reading holds after each beat, which is intended. The problem is size: the two `postal-scale` icons at 0.45 and their "200 g", "2 kg" and "₹0" text are tiny on a phone, and the card stays mostly empty from 0.8 s to 3.1 s.

1. Raise both `postal-scale` icons from 0.45 to about 0.8 and spread them across the card's width (centres about x 1150 and x 1570, y 640). The card has the room below "Postage नहीं".
2. Make the scale displays ("200 g", "2 kg") at least 44 px, and the "₹0" tags 52 px bold in the correct green on a pill beside each scale. They read at about 20 px now.
3. Make the caption "वज़न से postage नहीं बनता" 40 px (Devanagari minimum 32 px, aim 40) and place it at about y 860 inside the card, so the bottom margin matches the top. It's a small strip on the card's bottom edge now.
4. Move the "Postage नहीं" band down a little (centre about y 420) so that while it is alone (0.8–3.1 s) it sits nearer the card's middle, not against the header.

The scene lasts 9.96 s: every time in it is between 0 and 9.96.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s049.html`: one `<section class="vs-scene" id="s049" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
