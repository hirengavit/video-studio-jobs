# Fix animated scene s183

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s183" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s183), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s182.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s183.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

This is a good close. The name highlight and the red link to the person land on "नाम ठीक से मिलाना" (0.6 s). The request sheet is marked on "हर request" (2.82 s), and the tick and "सही हाथ तक" come on "सही हाथ तक" (5.86 s). The envelope and request sheet rest on the counter, and the person stands on the floor line. The end framing is the problem. At 8.4 s the push has cut the top of the pigeon-hole rack off at the frame edge. The "सही हाथ तक" label sits up in the rack, just under the series pill, instead of above the counter. The person is jammed at the bottom edge. The green tick is tiny and half hidden against the request sheet's edge.

1. Camera: instead of the plain push to `medium`, aim the move at the envelope, `[5.86, {on: '#envelope', zoom: 1.25, y: 40}]` → hold until 8.2, 'inOut'. Check that the counter, the person (with about 40 px under their feet) and the request sheet all stay inside the frame at the end. The rack may crop, but not right under the series pill.
2. "सही हाथ तक": place its card on the counter's right half, above the counter top and left of the person, about 60 px above the envelope's top edge. Keep it 56 px and at least 60 px clear of the series pill at the final zoom.
3. Green tick: draw it about 3× larger (about 60 px) on the envelope's front, to the right of "Mehul Shah" and clear of the request sheet's edge, in #2e7d4f with a 4 px ink stroke, `draw` at 5.86.
4. Remove or tuck behind the envelope the small loose rectangle sticking out of the envelope's right edge. It reads as a stray piece floating beside the envelope.

The scene lasts 8.44 s: every time in it is between 0 and 8.44.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s183.html`: one `<section class="vs-scene" id="s183" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
