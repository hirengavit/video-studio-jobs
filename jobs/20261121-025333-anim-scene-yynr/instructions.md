# Fix animated scene s066

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s066" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s066), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s065.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s066.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The band beat (0–4.6 s) works: "हिस्सा" turns highlighted on its word. The #closed shot is the problem. The calendars and office sit low and small: everything is in a strip at about y 640–780, the top half of the frame is empty and the right third is bare. The key fact, the grey "बंद" plate, is about 30 px on the door and can't be read on a phone.

1. In #closed, move the whole row (calendars, office, ground line) up so it is centred vertically under the header (row centre about y 560 instead of about y 720), and scale it about 1.3× from the left so it fills more of the frame. s067 adds the van and Night office to the right, so leave about 40% of the width free for them and keep the same layout in s067.
2. Make the "बंद" plate readable: draw it as its own plate across the door, at least 64 px tall with 44 px+ Devanagari text in white on slate #4b4f58. Pop it at 9.50 as planned, with the door behind it.
3. Make "Sunday" and "Holiday" on the calendar sheets at least 44 px (they are about 32 px now). Fill the empty lower part of each sheet rather than enlarging the sheet beyond one scale number.
4. Shorten the empty white half of the band at 0–1.8 s: write "clearance duty का हिस्सा" in at 1.8 (on "clearance") rather than letting it arrive late. Keep the "हिस्सा" highlight at 3.48.

The scene lasts 10.68 s: every time in it is between 0 and 10.68.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s066.html`: one `<section class="vs-scene" id="s066" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
