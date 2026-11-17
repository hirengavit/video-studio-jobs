# Fix animated scene s089

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s089" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s089), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s088.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s089.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The carry-over seam is clean, and the strike lands well on "अकेला authorised sealing system" (narration 4.9–7.3, chip by 7.1, strike by 8.8). The two stills (2.45–5.63 and 6.12–8.81) are reading holds and are intended. The problem is the new "wax वाला तरीका" group, which is the idea of the scene's first half. It sits squeezed under the regulations book at about 1/3 scale, and "पुराना तरीका" is too small to read on a phone.

1. Enlarge the `old-book-stack` group: scale the piece 0.5 → 0.75 and place it at x 110–300, y 830–980, so it rests on its own baseline with about 30 px of clear space under the book (the book's bottom is at about y 805).
2. Set "wax वाला तरीका" to 40 px Noto Sans Devanagari at weight 700, to the right of the stack (x 320, baseline y 900). Put the amber `stamp` pill "पुराना तरीका" under it at 34 px (pill height 52, baseline y 960). Keep the stamp at 2.24 s.
3. Make the chip text "wax = अकेला authorised sealing system" 36 px (about 30 px now) and the chip 64 px tall, kept inside the card at y 860–924. Keep the slate `strike` at 7.71 s.

The scene lasts 9.21 s: every time in it is between 0 and 9.21.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s089.html`: one `<section class="vs-scene" id="s089" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
