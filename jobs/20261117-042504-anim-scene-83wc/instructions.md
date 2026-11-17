# Fix animated scene s040

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s040" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s040), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s039.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s040.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

A new idea gets a fresh layout, and the window envelope fills the frame as planned (x 360–1560), leaving room for s041–s047. Every beat lands on its words: title typed 0.14, Hindi 0.70, window red + pulse 2.42, पारदर्शी खिड़की 3.20, address lines 5.66 on "कागज़ का पता", yellow outline at 11.74 on "address block". The 3.5–11.7 still is a hold while the voice explains; the address appears inside it at 5.66.

1. The Hindi `पता` under ADDRESS BLOCK renders at about 24 px, below the kit's 32 px minimum. Set it to 36 px (class `hi`, fill #6f6a63) with its baseline 46 px under the ADDRESS BLOCK baseline.
2. The address lines inside the window are thin and pale (~2 px light grey) and barely read as an address on a phone. Draw the three lines in ink #2b2622 at 5 px with rounded caps, first line 70% of the block width and the next two 85% / 55%, so it reads as a written address.

The scene lasts 13.54 s: every time in it is between 0 and 13.54.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s040.html`: one `<section class="vs-scene" id="s040" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
