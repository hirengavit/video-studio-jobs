# Fix animated scene s020

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s020" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s020), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s019.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s020.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Point 4 and its highlight follow "charges और चलाने की शर्तें … administrative instructions" well. Fading points 1, 2 and 4 to grey before the definition is a good move, and the panel pulse on "Circle Head कौन है?" (6.8 s) is right. Both still stretches are reading holds. The problem is the Rule 2(1)(c) definition, which is the point of the second half: it sits in a narrow inset at about 22–24 px Georgia across five lines and can't be read on a phone. Its source line also crowds the last line ("in the Circle.").

1. Make the definition readable: Georgia 36 px minimum (the floor for document text). To make room, shrink the panel head (icon 0.35, "Circle Head" 52 px, Hindi 36 px) into y 430–620 and give the inset y 640–960 across the full panel width (x 1290–1800, 24 px padding). Wrap the definition to about 6 lines at 36 px with 1.25 line height.
2. If it still doesn't fit at 36 px, widen the right panel to x 1250–1840 and the reg-105 card's right edge to x 1210. Don't cut words from the rule text.
3. Put the source "Post Office Rules, 2024 · Rule 2(1)(c)" outside the inset, grey 26 px, at y 985 under the panel, so it never touches the definition's last line.
4. Time the highlight on "Chief Postmaster General" to the spoken words at 8.3–10.7 s (start at 8.6 s). Keep everything else still after it.

The scene lasts 11.42 s: every time in it is between 0 and 11.42.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s020.html`: one `<section class="vs-scene" id="s020" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
