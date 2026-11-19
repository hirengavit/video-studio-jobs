# Fix animated scene s129

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s129" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s129), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s128.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s129.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Mahe → Kerala and "बाकी Puducherry" → Tamil Nadu land on their words, and the seam with s128 matches. The problem comes at 6.76 s: the whole diagram shrinks to about 0.6 to make room for the rule strip. The Hindi under the Circle slots (आंध्र प्रदेश परिमंडल, केरल परिमंडल, तमिलनाडु परिमंडल) drops to about 20 px, and the tiles to about 30 px. Neither would read on a phone. The diagram then sits as a narrow column with empty space on both sides, and the same frame carries on for 8 s into s130.

1. At 6.76 shrink the diagram to no less than scale 0.8 (not ~0.6). Keep it centred and let it span about x 220–1700, y 150–760, so the slot Hindi stays at 32 px or more.
2. In the same beat, `fade` out the kicker "चौथा group" and the grey "3 Circles" label (their job is done). This frees about 60 px of height, so the 0.8 diagram fits above the strip.
3. Make the rule strip 120–1800 × 790–1000 (about 210 px tall, not 230). Put "Question में सिर्फ" at 48 px at y 840 and the chips row at y 930. Chip EN 48, and the grey "पुराना नाम" at 36.
4. Leave the "Puducherry" chip pop (7.96) and the "Pondicherry" chip pop (10.78) on their words, as they are now.

The scene lasts 11.70 s: every time in it is between 0 and 11.70.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s129.html`: one `<section class="vs-scene" id="s129" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
