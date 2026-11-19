# Fix animated scene s245

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s245" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s245), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s244.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s245.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The "₹3" stamp is unreadable. At 0.15 the postage-stamp is about 60 px, and its "₹3" is a speck inside the yellow circle. The sum card depends on it ("लगे · ₹3"). Scale the stamp to about 0.3 in the envelope's stamp box, letter "₹3" at 44 px or more in ink #2b2622, and draw the yellow circle round the bigger stamp (radius about 80 px) at 2.94 as planned.
2. The sum builds too fast to read before the scene ends. The four lines arrive 0.6 s apart (5.68, 6.28, 7.08, and ₹4 at 7.62), and the whole sum holds only about a second. The kit asks for at least 3 s of hold. Pop the card at 3.4 with "Letter · ₹5", then "लगे · ₹3" at 4.0, "कमी · ₹2" at 4.7, the last line at 5.4, and the green "₹4" pill at 6.0. That leaves about 3 s of still hold until the end, while the voice says "एक मिनट में लगा लेंगे".
3. Make sure the envelope rests on the desk top instead of hanging over the front edge. Its bottom edge now reaches the desk's front rim, so it reads as stuck to the front face. Move it up so its bottom sits about 30 px inside the desk top (around y 480–500 at the counter's scale) and it lies on the desk. Keep the slide-in from the right at 1.98 and let it settle with `place`.

The wipe from the KEY POINTS section into CLOSE is the right transition for a section change. The counter and sum card are a new, warm closing image, and the green ₹4 pill uses the answer colour correctly.

The scene lasts 8.43 s: every time in it is between 0 and 8.43.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s245.html`: one `<section class="vs-scene" id="s245" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
