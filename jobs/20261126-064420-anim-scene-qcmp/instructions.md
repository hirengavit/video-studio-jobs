# Fix animated scene s083

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s083" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s083), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s082.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s083.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s082 matches. The cross and "ज़रूरी नहीं" land on "नहीं चाहिए" (3.6 s). The `#req` sub-shot and the person pop are on time, and the highlight on "authority" lands on its word.

1. At 2.08 s the strip "Addressee की सहमति" (y 900–990) is drawn over the bottom of both cards and covers their labels "booking receipt" and "delivery पर signature". Two texts share a spot. Before the strip arrives (1.6–2.0 s), `move` the two-card group up and scale it to 0.85, anchored at the top, so the cards end by y 860. Or shorten the cards to y 380–860 from the start. The strip must sit on clear canvas with 30 px of space above it.
2. In `#req`, the heading "Request कैसे?" is centred over the empty right half while the only content is the person card at the left. Left-align the heading to x 200 at y 180, so the eye goes to the person and the right half is left for the request sheet that arrives in s084 (change s084's first frame to match).
3. Scale the person card up so it fills x 200–700 and y 260–900 as planned (it is about 640 px tall now). Its label, "या ज़रूरी authority वाला व्यक्ति", should then be at least 44 px.

The scene lasts 10.67 s: every time in it is between 0 and 10.67.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s083.html`: one `<section class="vs-scene" id="s083" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
