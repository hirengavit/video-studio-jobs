# Fix animated scene s144

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s144" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s144), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s143.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s144.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The "ink" and "digital" beats are missing: from 0.5 to 4.17 s nothing moves, and step 3 shows only the slip, while the voice says "signature, ink से या digital". In the step 3 card, under the slip, `pop` a pen icon with "ink" (36 px) at 2.4 and a tablet icon with "digital" (36 px) at 3.9, side by side, at about y 760–840 inside the card (x 1340–1760).
2. Card 3 in #examples has no Hindi line under ACCOUNTABLE VALUE-ADDED SERVICES (10.5 s), unlike cards 1 and 2. Type "जवाबदेह value-added सेवाएँ" at 34 px beneath it at about 10.2, the way the kit pairs each term with its translation.
3. After the cut at 4.36, shot C shows only "जैसे:" for 1.2 s. Bring card 1 (SPEED POST) in at 5.0 instead of 5.54, closer to where "Speed Post" starts after "जैसे" (about 4.4 to 5.5).
4. The Hindi lines under the example cards ("स्पीड पोस्ट", "इंडिया पोस्ट पार्सल") are pale and about 28 px. Raise them to 34 px, in #6f6a63 at full opacity.

The scene lasts 10.60 s: every time in it is between 0 and 10.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s144.html`: one `<section class="vs-scene" id="s144" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
