# Fix animated scene s064

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s064" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s064), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s063.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s064.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. Row 4's value "≥ 60 mm × 10 mm" is typed at about 28 px and squeezed into its pill: in the widened pill (about 300 px), set it at 44 px Inter bold, on two lines ("≥ 60 mm" / "× 10 mm") with a taller row if needed, so the key numbers read on a phone.
2. The three chips "Window size", "QR size" and "Code की जगह" sit at the very bottom edge (y ≈ 1000–1050, outside the 160–1000 content area) and nearly touch the "साफ़ दिखे" tag: lift the card and QR group 60 px, centre the chip row at y ≈ 950 with 40 px gaps and chip text at 44 px, so nothing sits below y 1000.
3. "साफ़ दिखे" is a small tag (about 32 px) jammed directly under the "2D barcode / QR code" tag: set it at 44 px in deep amber #8a5d00 on the soft band #fde9a6, and leave 24 px clear between it and the QR tag (or place it next to row 4, since it belongs to "Window में code … साफ़ दिखना चाहिए").
4. All four rows still have yellow outlines: keep only row 4 outlined while its value types, then clear it when the chips start at 7.72 s, so the eye moves to the chips.

The scene lasts 12.56 s: every time in it is between 0 and 12.56.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s064.html`: one `<section class="vs-scene" id="s064" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
