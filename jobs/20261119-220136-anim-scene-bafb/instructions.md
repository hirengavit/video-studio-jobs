# Fix animated scene s077

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s077" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s077), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s076.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `chapter-title` (Chapter title stamp): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: chapter-title: part number and total; English and Hindi title; subtitle; the icon in the stamp (post box, envelope, parcel, scales, building) and the small word beside the value.

## What to change

The current file is `inputs/current/s077.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The wipe and the chapter title make a clean start to Part 4. In #paid, the subject of the line ("Stamp पर value छपी है") is the stamp's printed value, but the stamp is small. At about 280 px tall it fills barely a third of the left column, and the "₹" value box is about 30 px, so on a phone the pulse at 6.18 hits something you can hardly see. The slate cross also lands before the voice says it doesn't pay.

1. Enlarge `postage-stamp` in #paid from scale 1.4 to scale 2.3, still centred at (480, 560), and move the grey "छपी value" label down to y 960 at 44 px, so the stamp and its value box fill the left column (about x 200–760, y 220–900).
2. Letter the value box bigger, at a 64 px "₹" or as large as the box allows, so the 6.18 `pulse` on the value box reads. Raise its pulse to scale 1.15 with a yellow (#f2b705) outline flash.
3. Move the slate cross `draw` from 3.94 to 4.7, so it lands on "नहीं हो जाता" (4.6) and not before the negative is spoken.
4. Keep the "authorised" row (8.42) as it is, but make its Hindi "उस काम के लिए अधिकृत" at least 38 px with 1.3 line height, so it doesn't sit tight under the English term.

The scene lasts 9.74 s: every time in it is between 0 and 9.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s077.html`: one `<section class="vs-scene" id="s077" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
