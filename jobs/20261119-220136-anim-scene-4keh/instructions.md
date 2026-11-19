# Fix animated scene s124

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s124" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s124), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s123.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `chapter-title` (Chapter title stamp): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: chapter-title: part number and total; English and Hindi title; subtitle; the icon in the stamp (post box, envelope, parcel, scales, building) and the small word beside the value.

## What to change

The current file is `inputs/current/s124.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The wipe into Part 6 suits a change of section, the chapter title is already built at frame 0, and the underline draws under "डाक स्टेशनरी". The yellow rings on the printed stamps land on "stamp छपा होता है" (5.5), and the highlight on "पहले से दी हुई value" lands on its words. The timing is good.

Fixes:
1. `#items` sits too low and too small for a phone: from about y 140 to 400 the frame is empty above the row. Scale the three pieces from 0.95 to 1.25 and raise their bases from y 640 to y 600. Move the English terms to y 690 (keep 56 px) and the Hindi to y 750 at 42 px. The row then fills the space between the header and the band at y 880–980.
2. Spread the pieces' x positions to 400 / 960 / 1520 (from 420 / 960 / 1500) so the larger pieces keep about 160 px gaps and "Embossed envelope" doesn't crowd the letter card's label.

The scene lasts 12.42 s: every time in it is between 0 and 12.42.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s124.html`: one `<section class="vs-scene" id="s124" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
