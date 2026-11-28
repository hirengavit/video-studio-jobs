# Fix animated scene s095

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s095" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s095), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s094.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s095.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut to #q, the quarterly compounding block on "quarterly compounding" (1.4–3.5), "बचे अधूरे साल" on its words (~4.1) and the Savings Account card on "पूरे हुए महीनों पर Savings Account" (7.0–9.0) are timed well. The still stretches are reading holds.

1. In the right card (x 1260–1760), "बचत खाता" and "का ब्याज" render at about 34 px and look cramped. Make the card y 560–840, set "पूरे हुए महीनों पर" to 48 px, "Savings Account" to 56 px bold, "बचत खाता" to 44 px supporting #6f6a63 and "का ब्याज" to 48 px ink, with about 1.3× line spacing for the Hindi lines.
2. Carry the fixed s093 chip ("− 2 percentage points" on one line, 48 px, #8a5d00 on #fde9a6). Don't keep the tiny two-line chip; this scene should start on the same frame as the fixed s094.
3. The calendar-quarters piece at scale 0.7 makes the quarter names small (40 px grey). Raise it to scale 0.8 (x 160–1240) and set the quarter labels to 44 px ink #2b2622, so "Apr–Jun · Jul–Sep · Oct–Dec · Jan–Mar" reads on a phone. Then move "Quarterly compounding" down to y 930 and the Hindi to y 990.

The scene lasts 10.06 s: every time in it is between 0 and 10.06.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s095.html`: one `<section class="vs-scene" id="s095" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
