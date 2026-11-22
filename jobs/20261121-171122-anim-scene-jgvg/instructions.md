# Fix animated scene s065

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s065" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s065), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s064.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s065.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats land on their words: the tick on chip 1 at about 2.5 s ("Window सही size"), the "?" on chips 2–3 at about 4.6 s, and "अपने आप पूरी नहीं" said word by word up to about 7.6 s. The still stretches are reading holds, which is intended. The problem is layout: after the QR card clears (by 2.0 s), the heading, chips and line all sit in the top half (y ≈ 330–620) and the bottom 40 % of the content area stays empty. The chips are thin pills with small type on a phone.

1. Centre the group in the content area and enlarge it: heading "तीन अलग जाँच" at y ≈ 340 (keep its size), the chip row at y ≈ 560 scaled ×1.5 (chips ≈ 480 × 90, label text 52 px Inter bold or 'Noto Sans Devanagari' for "Code की जगह"), and the "अपने आप पूरी नहीं" box at y ≈ 800, 64 px text.
2. Chip 1's green tick touches the "W" of "Window size". Give the tick its own 40 px slot left of the label, as chips 2–3 already have for "?", so the three chips line up.
3. Keep the chips at the same x as in s064 (move them only vertically, over 0.6 s `move` with easing) so the seam reads as the same chips rising, not a new layout. Start the move at 0.6 s so the QR card's `fade` out is done first.

The scene lasts 9.10 s: every time in it is between 0 and 9.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s065.html`: one `<section class="vs-scene" id="s065" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
