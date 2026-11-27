# Fix animated scene s195

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s195" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s195), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s194.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s195.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s194 is exact and the beats land on their words: Documents, then "दोबारा बनाने का खर्च तक", then the sender strip at 8.2 s with "असली value" highlighted. The problem is that every highlight from s192 to s195 is still on. By 4.9 s, all four row labels, three values and two Hindi phrases are yellow, plus the strip, so the row being spoken about looks no different from the rest. The highlight colour stops meaning "this one".

Fixes:
1. At 0.55 s, before row 4 is highlighted, clear the row 1–3 highlights. Redraw them in this scene as plain rects behind the same texts (fill #ffd54a, opacity 0.35, same pad, so frame 0 still matches s194's end), then `out` each one (dur 0.35) at 0.55 s. Only the row 4 label and "दोबारा बनाने का खर्च तक" then carry yellow.
2. At 8.0 s, just before the strip slides in, `out` the row 4 highlights the same way, so the only highlight left is "असली value" in the strip (10.64 s).
3. `receipt-slip` at scale 0.4 reads as a blank grey box. Use scale 0.6 (x 115–215, centred on the strip's y 935) so it looks like a slip.
4. Strip text "Sender, booking पर असली value लिखता है": raise it from 40 to 44 px, which still fits within x 260–1320.

The scene lasts 12.14 s: every time in it is between 0 and 12.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s195.html`: one `<section class="vs-scene" id="s195" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
