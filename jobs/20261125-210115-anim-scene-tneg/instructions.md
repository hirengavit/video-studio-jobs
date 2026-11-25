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

The seam with s194 is exact, and the grey line "अपने records और शर्तों के साथ" lands at 0.78 just before the voice says it (about 0.8–1.6). The only motion is the record icons popping, then a hold to the cut, which is fine for a 2.5 s beat. The problem is where the four record icons sit. They don't line up with their chips: one sits under the item line next to step 2, and two crowd together between the money line and the Remittance chip (x ≈ 1170–1330, y ≈ 700–870), almost touching each other and the money line. A viewer can't tell that each event has its own record, which is the whole point of the line.

Fixes:
1. Put each invoice-sheet icon (scale 0.25) directly to the right of its own chip, centred on the chip's y, with a 30 px gap: Delivery chip → about (1150, 363); वसूली chip → to its left, about (1140, 547), between the two lines; Remittance chip → about (1180, 794); Compensation chip → about (1330, 939). No icon may touch #line-item, #line-money or another icon.
2. Keep the `pop` stagger at 0.15 s, in the order Delivery, वसूली, Remittance, Compensation (the order of the events), so each pop reads as "this one, this one…".
3. Line under the heading: raise it from about 40 px to 48 px as the storyboard asks, and keep it grey and left-aligned under "चार अलग घटनाएँ" (or centred, if s194's heading is centred).

The scene lasts 3.00 s: every time in it is between 0 and 3.00.

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
