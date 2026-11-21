# Fix animated scene s095

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s095" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s095), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s094.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s095.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The arrow goes left to right from the box to "Postmaster", "Disposal" arrives on its word, and "मिला क्या है" is highlighted as it is said. But the TERM chip is tiny. "Disposal" is about 30 px, and its gloss "निपटारा" is about 20 px, below the kit's 32 px floor for Hindi and unreadable on a phone. The storyboard's TERM is English 96–110 px with the Hindi gloss at 52 px. The "आगे क्या? → मिला क्या है" line is also jammed into the strip above the DOC CARD, just under the header.

1. Rebuild the Disposal TERM chip at a readable size: a postal-red stamp card about 420×200 px, "Disposal" Inter bold 72 px white, "निपटारा" Noto Sans Devanagari 48 px #fde9a6 beneath it, fading in 0.5 s after "Disposal". Place it to the right of the Postmaster chip, below the DOC CARD, with even margins.
2. Raise "Postmaster" in its chip to Inter bold 48 px, making the chip about 300×96 px, so the arrow's end and the chip read as one step.
3. Move the line "आगे क्या? → मिला क्या है" off the header strip to the bottom of the content area (centred, y ≈ 930), Noto Sans Devanagari 52 px. Keep the highlight on "मिला क्या है" at about 8.7 s. To make room, scale the DOC CARD to 0.85 rather than dropping anything.

The scene lasts 9.80 s: every time in it is between 0 and 9.80.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s095.html`: one `<section class="vs-scene" id="s095" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
