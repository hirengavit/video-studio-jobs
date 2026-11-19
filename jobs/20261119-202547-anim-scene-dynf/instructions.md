# Fix animated scene s244

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s244" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s244), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s243.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s244.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The round postmark is too small for its words. "Non-delivery" runs into the ring, and "डिलीवरी नहीं" is about 26 px, below the kit's 32 px minimum for Hindi. Make the postmark about 300 px across (centre near x 1560, y 840, inside the card's bottom row). Set "Non-delivery" in Inter bold 40 px and "डिलीवरी नहीं" in Noto Sans Devanagari 34 px under it, both centred, leaving at least 24 px between the text and the ring. Keep it slate (#4b4f58), and stamp it in at 5.44 as planned.
2. You can't see that the stamp on the envelope is used. At 0.1 it's a tiny red square with no cancel marks. Scale the cancelled-stamp up to about 0.2 so it fills the envelope's stamp box, and the grey part-postmark ring and wavy cancel lines can be seen. The envelope could also grow from 0.35 to about 0.45 while staying in its 720–960 row. The point of the line is "a reused stamp is found", and right now nothing shows that.
3. The arrow's draw starts as two loose dots (frame at 4.0 s: dots at its tail and head) before the line appears. Start the stroke draw from the tail only, with the dash offset beginning at the full length, and add the arrowhead only after the shaft finishes, about 0.3 s later. Move the draw to 4.2–4.8 s so it runs into "तो delivery नहीं होती" (4.8).

The seam with s243 is clean, and the beats fall on the right words: the envelope on "post किए item", the postmark on "delivery नहीं".

The scene lasts 7.08 s: every time in it is between 0 and 7.08.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s244.html`: one `<section class="vs-scene" id="s244" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
