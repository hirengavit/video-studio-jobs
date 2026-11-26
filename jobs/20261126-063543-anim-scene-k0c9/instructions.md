# Fix animated scene s051

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s051" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s051), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s050.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Not found:** post-office-counter-window (A post office counter window in India with its grille or glass and counter ledge, front view, no identifiable faces). Show these another way (drawn, or with words), never with a made-up photo.

## What to change

The current file is `inputs/current/s051.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
A good opener for a new part: the counter set, the envelope with the POSTE RESTANTE postmark and a waiting person. Each beat lands on its words ("delivery staff" 2.76 s, "अनजान" 4.14 s, "पहचान की जाँच" 5.7 s, "सही व्यक्ति" 7.98 s), and the push to `medium` at 5.7 s has a clear purpose. The problems are physics and crowding after the push-in.
1. Physics: the `id-card` hangs in mid-air beside the person (about x 1360–1600, y 770–890 after the zoom) and rests on nothing. Rest it on the counter instead with `[5.70, 'place', '#idcard', {spot: 'counter-right'}]` (1220, 730) at scale 0.6, so the customer has handed it over. Then draw the green tick between the card and the envelope on counter-centre.
2. "पहचान की जाँच" (48 px label) sits across the counter-top edge and the red front, touching the id-card. Once the card rests on the counter, put the label above it at y ≈ 640, at least 20 px clear of the counter-top line.
3. The "सही व्यक्ति" pill touches the envelope's right edge. Shift it 40 px right and 30 px up so it clears the envelope and the rack.
4. Move the `person-icon` about 120 px left of `customer-side` (to x ≈ 1520). After the `medium` push it is cramped against the right edge, with "?" and "अनजान" squeezed above it. Keep "अनजान" at 48 px or more; in the wide frame it reads tiny and grey.

The scene lasts 10.47 s: every time in it is between 0 and 10.47.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s051.html`: one `<section class="vs-scene" id="s051" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
