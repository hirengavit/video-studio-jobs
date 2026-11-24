# Fix animated scene s116

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s116" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s116), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s115.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s116.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats are on time: the green "300 g ✓" chip at 0.36, the band on row 1 by the "₹20" line, and "Slab कैसे लगाएँ" at 6.66 on "Slab लगाने का तरीका". But the "₹20 + taxes" note inside row 1 is about 16 px. "Taxes अलग" is the point of this line, and it is unreadable. The "300 g ✓" chip is also tiny, and its top edge touches the "बीच के slabs" bracket line.

Fixes:
1. Set "₹20 + taxes" at 36 px Inter (≥32 px). Place it in row 1's empty right part, after ₹20 (x about 1380–1550), or as a chip in the right margin beside row 1. Make it appear at 4.2 on "लगते हैं, taxes अलग".
2. Make the "300 g ✓" chip 44 px Inter with a green tick, about 200 × 70, under the enlarged 299 chip (see s115). Move the "बीच के slabs" bracket down, or shorten its top, so the chip doesn't touch it.
3. Set the "Slab कैसे लगाएँ" sub-title to at least 40 px. It is fine where it is; check that it doesn't touch the Trap tag.

The scene lasts 9.20 s: every time in it is between 0 and 9.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s116.html`: one `<section class="vs-scene" id="s116" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
