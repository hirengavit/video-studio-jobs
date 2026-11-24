# Fix animated scene s081

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s081" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s081), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s080.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s081.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The scale with the Gyan Post book on its pan is a good literal anchor; the book rests on the pan and "300 g" and "5 kg" land on their spoken words (4.7 s, 6.8 s). What a viewer will notice:

1. Card x 800–1800: all four empty row slots are drawn from 0.0 s. Rows 2–4 sit as blank boxes for the whole scene, and row 4 stays empty until s083 at 0.68 s. Draw each row's background only when its row arrives (pop the row box together with its text). At 0.0 s show only the heading and row 1's box, or size the card to the rows it holds.
2. `postal-scale`: the dial needle stays at the same angle while the display goes from "300 g" to "5 kg". Draw the needle as a `<path>` pointing low on the dial for "300 g" at 4.40 s, then use `morph` (dur 1.2) at 7.22 s into a second path pointing near full scale, timed with the count to "5 kg", so the dial agrees with the display.
3. Row 1 values: "300 g" and "से 5 kg" are about 40 px under a 48 px label. They are the facts of the scene, so set both to 52–56 px bold. Keep "300 g" on the soft yellow band and leave "से 5 kg" plain.
4. The scale and book fill only y 400–900 on the left, with empty space above and below. Scale the group about 1.15× around its base so it fills more of the left column, keeping the base on y 900.

The scene lasts 8.56 s: every time in it is between 0 and 8.56.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s081.html`: one `<section class="vs-scene" id="s081" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
