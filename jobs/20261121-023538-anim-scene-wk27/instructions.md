# Fix animated scene s011

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s011" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s011), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s010.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s011.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The Part 1 fade-in works. The pillar and the "Posting के authorised तरीके" card anchor the first frame, and the highlight lands on "authorised". The five place tiles pop on their words (Post offices, Mail offices, Public जगहें, Mobile Post Offices, Steamers), and the still stretches are reading holds. The problem is the Hindi glosses: they are well under the kit's 32 px minimum.

1. Raise the Hindi glosses under every tile ("डाकघर", "डाक कार्यालय", "सार्वजनिक जगहें", "चलते डाकघर", "भाप-पोत") from ~26 px to 36–40 px in Noto Sans Devanagari, colour #6f6a63. Make the tiles taller (about 340 → 420 px; the row can run y 330–860, since the space below the row is empty) so the glosses keep a margin of 16 px or more above the tile edge.
2. Raise the "पत्र पेटी" gloss under the "Letter box" row in the #way card from ~26 px to 40 px. Grow the yellow row pill so the gloss sits inside it with padding, and keep "Letter box" in Inter bold.
3. Make sure the "एक तरीका" chip lands at 3.40 s, inside the white card's group, under the "Letter box" row. It isn't visible in any sampled frame, and the card has room for it. It gives the 3.4–4.4 s hold something to read on "एक है".

The scene lasts 13.93 s: every time in it is between 0 and 13.93.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s011.html`: one `<section class="vs-scene" id="s011" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
