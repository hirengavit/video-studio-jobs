# Fix animated scene s080

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s080" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s080), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s079.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s080.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. `#noflap`: the flapless card fills only ~930 × 520 px in the upper left, with the lower half of the frame empty. Scale the card up to ~1100 × 640, centred at x ~700, y ~600. Put the two tags in a column at x 1300–1820, y ~400 and ~620, with Hindi at ≥48 px.
2. The amber gum line runs round three sides right at the card edge and reads as a decorative border, not gum. Draw it as a 10 px band of soft yellow #fde9a6 with a thin #f2b705 edge along the closing edges, inset ~12 px. Add a small label "गोंद" (34 px, supporting grey #6f6a63) beside it, on the same `draw` at 0.66.
3. `#private`: the card is small (~900 × 420) and the "भेज सकते हैं" pill floats alone at the top right. Enlarge the card to ~1100 × 560 centred at x ~760, y ~600, with "Private letter card" at 64 px and "निजी तौर पर बना" at 44 px. `pop` the green pill beside the card's right edge (x ~1500, y ~600) at ~70 px tall with 44 px text.
4. Move the green pill `pop` from 8.76 to 9.0 so it lands on "भेजा जा सकता है" (said ~8.8–9.6), not just before it.

The scene lasts 10.26 s: every time in it is between 0 and 10.26.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s080.html`: one `<section class="vs-scene" id="s080" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
