# Fix animated scene s108

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s108" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s108), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s107.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s108.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Shillong, Karnataka → Bengaluru and the grey envelope note for Mysuru all land on their words, and the envelope card (no pin, no strip change) separates "training centres" from "headquarters" well. Three problems: the strip needs to carry over, row 2 disappears completely from 3.15 to 6.87 and leaves a hole in the board, and the Mysuru note line is small.

1. Use the s104-style board and the 23-pin strip carried from s107 (pins 1–6 filled). Pin 7 fills at 2.26 and pin 8 at 5.53.
2. In the 3.15 sub-shot, keep an empty row-2 card outline (same white card as row 1) on screen. `out` it at 6.75 (dur 0.25), just before the envelope card fades in at 6.87, so the board never shows a bare gap.
3. Set "postal training और technology centres" to 44 px (it's ≈36 px now). Keep it in the grey ink and start its `write` at 7.75. Widen its text area to x 1060–1800 so it stays on one line clear of the envelope flap lines at the card's right edge.

The scene lasts 11.41 s: every time in it is between 0 and 11.41.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s108.html`: one `<section class="vs-scene" id="s108" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
