# Fix animated scene s110

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s110" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s110), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s109.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s110.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea is staged well and on its words: Jammu at 2.1, the outline "एक ही Circle · दो offices" at 4.8, the chip "दो अलग Circles" at 7.66, and the slate strike + cross at 8.86. But the Jammu card is unreadable on a phone. Four lines ("Jammu", "जम्मू", "official", "communications भी") are packed into a 400 px card at about 28–34 px, with "Jammu" touching the card's top. The red label pill sits on the outline's top edge and overlaps the bottom of the Thiruvananthapuram card. This scene also has to follow s109's board fix.

1. Open on s109's fixed last frame (the s104-style board with 10 of 23 pins filled). #r1 and the note fade to grey at 0.00 as planned.
2. Re-split the HQ slot: Srinagar card x 980–1300, Jammu card x 1340–1820. In the Jammu card, put "Jammu" at 48 px (baseline about 60 px below the card top) and "जम्मू" at 34 px beneath it. Put "official communications भी" on one line at 32 px under "जम्मू", inside the card (it fits in 480 px), writing at 2.86.
3. Move the red label pill "एक ही Circle · दो offices" from the outline's top edge to its bottom edge, centred, at 36 px. Keep it inside the outline's group so the two grow in together at 4.8. At 4.6 `out` the grey "Circle directory और matching questions" note (dur 0.3) so the label never sits on it.
4. Make the outline 16 px clear of both cards on every side, so its top edge stays below #r1's HQ card (gap ≥ 20 px).

The scene lasts 9.73 s: every time in it is between 0 and 9.73.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s110.html`: one `<section class="vs-scene" id="s110" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
