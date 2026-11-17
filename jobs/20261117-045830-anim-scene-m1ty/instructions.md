# Fix animated scene s094

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s094" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s094), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s093.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s094.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Each barred envelope is drawn on its own words: border at about 1 s ("काले या रंगीन border वाला envelope", 0–1.9), the transparent panel at about 3.8 s ("transparent panel", 1.9–4.2), and the sender's label at about 8 s. Each gets a slate cross, so the kit's wrong colour is used correctly. The seam with s093 is exact. Two things need fixing. The Hindi translations under each term are about 24 px. And the three items sit as a small row at the top of the card, leaving the lower half empty for the whole scene.

1. Raise the translations "काला / रंगीन किनारा" and "पारदर्शी खिड़की" to 32 px (line height 1.3, warm grey #6f6a63), and the English terms to 40 px.
2. Make the three icons bigger and centre them in the space below the card's header: icon scale ×1.4, icons centred at y 560, term labels at y 690 and translations at y 735. Fill the slots from the s093 fix if it is applied. Leave y 790–920 free for s095's green chip and booking panel.
3. Bring the "Sender के labels" item in at 7.0 s, not 7.82 (the voice says "Sender" at 6.8), and keep its slate cross at 8.76 s.

The scene lasts 9.52 s: every time in it is between 0 and 9.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s094.html`: one `<section class="vs-scene" id="s094" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
