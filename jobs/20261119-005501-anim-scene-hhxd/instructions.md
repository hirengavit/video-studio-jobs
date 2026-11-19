# Fix animated scene s086

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s086" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s086), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s085.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s086.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

This is a good new layout after a wipe (a change of view). The five cards pop on their spoken words (mail 1.7 s, parcels 2.6 s, international mail 3.8 s, processing 5.2 s, transportation 6.3 s), and the connectors and "समन्वय करते हैं" come on "coordinate". The still at 0.25–1.73 s is the header on screen before "mail" is said, which is intended. The issues are small Hindi and a cramped bottom.
1. The Hindi under each card (डाक, पार्सल, अंतरराष्ट्रीय डाक, प्रोसेसिंग, परिवहन) is about 24 px. Make it 34 px, with the card labels at 48 px. Use a single line for "international mail" at 40 px if it doesn't fit, but don't go below 32 px for the Hindi.
2. Use the empty band below the cards: grow the five cards to y 440–900 and the icons to about 140 px, so the row fills the screen with even margins (the cards currently end near 810 and leave 270 px empty).
3. The "समन्वय करते हैं" pill sits right on the horizontal connector line, so the line runs through its lower edge. Move the pill up to y ≈ 352 (just under the header card) and start the connector trunk below the pill at y ≈ 400.
4. The header's Hindi "लॉजिस्टिक्स प्रमुख" is about 28 px. Make it 36 px and grow the header card to about 150 px tall so it doesn't touch the card's bottom edge.

The scene lasts 8.92 s: every time in it is between 0 and 8.92.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s086.html`: one `<section class="vs-scene" id="s086" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
