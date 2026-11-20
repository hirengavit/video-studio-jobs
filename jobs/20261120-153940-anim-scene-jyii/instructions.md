# Fix animated scene s216

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s216" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s216), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s215.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s216.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The four service names come in on their words, and the closing deadline is the point of the scene. But row 3 is cramped, and the payoff line is the hardest thing on screen to read:

1. The pill's popped "कम से कम 30 मिनट पहले" (7.86 s) sits on the pill's bottom edge and almost spills out, in small text. Make the pill the full row height (row top + 12 to row bottom − 12, about 156 px). Put "mail closing से" at 34 px on the upper line, at about 35% of the pill's height. Put "कम से कम 30 मिनट पहले" at 44 px bold on the lower line, at about 75%, centred with even padding, so the deadline is the biggest text in the row.
2. The Hindi line "पंजीकरण · बीमा · COD · डाक-प्रेषण प्रमाणपत्र" (4.60 s) touches the row's bottom divider. Move the two term lines and the Hindi line up about 14 px as one group, or move the divider down to the row's full 180 px height, so the Devanagari has at least 12 px clear below it (kit: Hindi never touching a line).
3. The clock (scale 0.25) is a faint 75 px circle that reads as a stray mark. Scale it to 0.4 (120 px) and centre it vertically at the row's left. On "30 मिनट" at 7.86 s, use `#hand-m` to set the clock back from 17:00 to 16:30 (half a turn back, 0.8 s, as the library piece intends), so the picture says "before closing".

The scene lasts 9.86 s: every time in it is between 0 and 9.86.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s216.html`: one `<section class="vs-scene" id="s216" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
