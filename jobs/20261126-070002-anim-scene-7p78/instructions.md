# Fix animated scene s138

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s138" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s138), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s137.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s138.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The timing is good: "counter: उसी दिन" lands on "उसी दिन" (0.0), the row 1 tick at about 0.9 s, row 2 "सिर्फ request fee" on "Request पूरी न हो" (1.2), and row 3 "free · नहीं तो ₹6" at about 5.7 s on "Same post office का delivery area". The stills at 1.5–5.7 s and 6–11.9 s are reading holds for each row, so they are intended. The problem is row 1's pill.

1. Row 1 pill: the pill stays one line tall while it holds two lines ("self-booking: स्वीकार से पहले" / "counter: उसी दिन"). The text is squeezed to about 28–30 px and touches the pill's top and bottom edges, below the kit's 32 px floor for Hindi. Grow the pill downward to fit two lines: about 104 px tall, both lines at 34 px with a line height of 1.3 and 10 px padding. Rows are about 128 px apart, so it still clears row 2's divider.
2. Keep line 1 "self-booking: स्वीकार से पहले" at the y where s137 left it. At 0.0 it jumps up by about 12 px to make room for line 2, which shows at the cut. Grow the pill downward (animate its height from the top edge) and `fade` line 2 into the new space below.
3. Make every recap pill 34–36 px, the same as row 1, so the four rows match. Rows 2 and 3 now look about 32 px, which is borderline on a phone.

The scene lasts 11.94 s: every time in it is between 0 and 11.94.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s138.html`: one `<section class="vs-scene" id="s138" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
