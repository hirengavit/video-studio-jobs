# Fix animated scene s207

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s207" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s207), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s206.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s207.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade from the recap envelope to the counter-and-door close works, and the counter with its "₹" slip is there from frame one. The underline lands near 1.7 s, on "सही लिखी"; the door fades in on "दरवाज़े" (3.3 s); and the connecting line draws between the two "₹" chips across 5.4–7.7 s. Problems: the parcel and coin at the door are tiny (parcel-icon at 0.6, about 60 px), so the "honestly taken at the door" half of the idea doesn't read on a phone. The stamp band "यही COD पर भरोसा बनाता है" reveals at about 9.2 s instead of on "भरोसा" (8.1 s), leaving it almost no hold before the cut. The two elements hug the left and right edges with a large empty middle, and the push-in to 1.04 is barely visible.

1. Reveal the stamp band (y 860–980) at 8.08 s, as planned, so it lands on "लोगों का भरोसा" and holds about 1.5 s.
2. Raise the parcel-icon at the door from scale 0.6 to 1.0, and the rupee coin from 0.7 to 1.0. Keep both resting on the door's floor line (base on y 760), with the parcel on the left and the coin on the right of the door's base, not overlapping the door's lower panel edge.
3. Pull the two sides toward the centre: move the counter to x 560 and the door to x 1360. Keep the connecting line at y 800, running between the two "₹" chips, so the middle is no longer empty.
4. Aim the push-in at the line's centre ({on: the connecting line, zoom: 1.06}) over 0–9.44 s, so the slow move is felt. Check that the counter, the door and the band stay inside the frame at the end.

The scene lasts 9.44 s: every time in it is between 0 and 9.44.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s207.html`: one `<section class="vs-scene" id="s207" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
