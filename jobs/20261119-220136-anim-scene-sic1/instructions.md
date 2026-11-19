# Fix animated scene s080

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s080" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s080), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s079.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s080.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam holds s079's push and card. Disc 3 and the band move to row 3, and the row text lands on "posting से पहले". The underline on "किसी और ने" lands on "किसी और ने कुछ छापा". There are two problems. The three mini icons are only about 80 px on screen: the stamp reads as an empty square, the franking impression as a blank "○=□" and the receipt as a thin strip, so on a phone a viewer can't tell them apart while the voice names them. The "Director General" chip is also cramped: its Hindi "महानिदेशक · सिर्फ वही छाप सकते" breaks across two lines with no line spacing and nearly touches the English line and the chip's bottom edge.

1. Enlarge the row 3 mini icons to about 150 px tall, centred at x 1330, 1500 and 1670 on row 3's centre line. Make the row band tall enough to hold them (about 170 px) and keep the row text left of x 1240. Use `postage-stamp` with its value box lettered "₹", `franking-impression`, and `counter-receipt`.
2. Rebuild the chip: make it x 120–580, y 820–1000, with "Director General" 48 px bold at y 870, "महानिदेशक" 38 px at y 925, and "सिर्फ वही छाप सकते" 38 px at y 975 (1.3 line height). The text stays at least 16 px from the chip edges, with no "·" join.
3. Bring the Hindi lines in at 10.4, on "सिर्फ Director General" (10.5), rather than 10.1, so the meaning lands with the voice. Keep the chip's slide at 9.62.

The scene lasts 12.30 s: every time in it is between 0 and 12.30.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s080.html`: one `<section class="vs-scene" id="s080" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
