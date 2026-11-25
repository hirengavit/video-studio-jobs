# Fix animated scene s182

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s182" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s182), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s181.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s182.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s181 is exact, and the beats land on the words: row 2 at 0.0, the stamps at 5.02 on "postage stamps", and row 3 at 7.62 before "complaint सही निकले, तो fee वापस". The rows shrink, though: row 1 is about 48 px, row 2 about 38 px and row 3 about 36 px. This is the text being squeezed into the 600 px column, against the kit's "never shrink Hindi". The three stamps are also tiny, about 70 px each, inside a 330 px frank zone, so "fee paid by stamps" barely reads. The check marks the scene frozen because these pops are so small.

1. Make the right column wider so no row shrinks. Scale the envelope from 1.4 to 1.2 and move it to (560, 900), then run the rows from x 1080 to 1800. Set all three rows at 48 px. If row 2 still doesn't fit, break it into two lines: "हर article की" / "तय enquiry fee".
2. Make the stamps bigger: three stamps at about 110 px, staggered 0.15 s, filling the frank zone. Make the frank zone larger to match if needed (keep the stamps inside the envelope's edges).
3. Row 3 (green): keep the green tick, and write the text in the correct-green #2e7d4f at the same 48 px as rows 1–2.

The scene lasts 10.74 s: every time in it is between 0 and 10.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s182.html`: one `<section class="vs-scene" id="s182" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
