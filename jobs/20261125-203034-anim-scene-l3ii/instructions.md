# Fix animated scene s092

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s092" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s092), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s091.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s092.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is clean, and "20,000 − 6,500" and "= 13,500" type on their words (13,500 is there by 4.2 s, spoken at 3.8 s). There are two problems. "₹135" is still missing at 8.1 s although the voice says "यानी ₹135" at 7.1 s. The working lines also switch fonts: line 1 is in small Georgia, while "2 · 1% = ₹135" is in a larger Inter. That makes them look like two different cards, against the mould's "Georgia working lines (60 px)". The automatic check calls the scene "frozen", but the frames show the typing, so that note is a false alarm.

1. Make "₹135" land on its word: type "2 · 1%" from 4.9 s, then type "= ₹135" starting at 7.0 s (or raise cps to about 18 so the whole line is done by 7.2 s). Keep the `highlight` on "₹135" at about 8.3 s.
2. Set both working lines in the same document-text style (Georgia, 60 px, ink #2b2622). Keep only the step numbers "1 ·" / "2 ·" in heading red, as on the step label. Line 1 ("20,000 − 6,500 = 13,500") is currently smaller than 60 px; bring it up to 60 px.
3. Close the gap inside line 1: put "= 13,500" one space after "6,500" (it now sits after a wide gap that reads as a separate column).

The scene lasts 10.14 s: every time in it is between 0 and 10.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s092.html`: one `<section class="vs-scene" id="s092" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
