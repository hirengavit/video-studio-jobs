# Fix animated scene s206

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s206" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s206), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s205.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s206.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s205 matches. The row-2 tick lands on "accountable नहीं बनता" (≈1.5 s). Row 3 builds "Letter:" (2.5 s), then "दोगुना postage" (≈4.4 s), then "− credit". Row 4 "Letter Card / Postcard" arrives on its words (≈7.8 s). Problems:

1. Card D has the same problems as in s205: the bare "D" in the stamp, a stamp panel instead of the kit's envelope recap card, and right-edge ticks. Apply the same card-D redraw as s205 so the cut still matches: envelope card, envelope-icon seal, `three-forms-icons` mini on the flap, 52 px labels, ticks in the left column.
2. "− credit" arrives late. The check shows nothing moving until 7.84 s, but the voice says "credit के साथ" at ≈6.6–7.4 s. Bring "− credit" in at 6.6 s and the row-3 tick at 7.5 s, as the storyboard says.
3. Close the wide gap between "दोगुना postage" and "− credit", which makes them read as two separate items. Set it as one phrase, "Letter: दोगुना postage − credit", or put "दोगुना postage − credit" in the right-hand pill column as a sand pill like the other values.

The scene lasts 11.32 s: every time in it is between 0 and 11.32.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s206.html`: one `<section class="vs-scene" id="s206" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
