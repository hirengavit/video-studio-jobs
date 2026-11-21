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

The seam with s079 is clean. "Nanyatha" lands with `tracking` right away and gets its highlight around 6.3 s, and the chips arrive in step with "Barcode" (about 2.1 s) and "location" (about 3.5 s). The long still from 4.9 s is the closing hold. Problems: the series pill still reads "POST OFFICE RULES", the chip row is jammed against the card's bottom edge, and "Letter count" lands about 1 s after it is said.

1. Series pill: set the series slot to "LETTER BOXES", the same as s079 after its fix and the rest of the video.
2. Chips: there is about 0–10 px between them and the DOC card's bottom border. Either grow the DOC card about 70 px taller (and move it up 20 px if needed), or move the name plate and chips up about 40 px, so the chips sit at least 30 px inside the card's bottom edge with even spacing between the plate and the chips. Raise the chip text from about 44 px to 48 px.
3. Timing: bring the "Letter count" chip in at 4.9 s (on "letter count", right after "location और"), not about 6 s.
4. "software का नाम" tag: bring it in at 0.6 s as planned (it now appears around 2 s), so the plate is labelled while "Nanyatha बताया गया है" is said.

The scene lasts 10.12 s: every time in it is between 0 and 10.12.

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
