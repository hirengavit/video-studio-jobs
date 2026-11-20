# Fix animated scene s135

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s135" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s135), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s134.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s135.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The two bottom lines ("sender को खुला letter post करने का हक" and "LETTER ENVELOPE: सभी तरफ़ लगातार बंद") render at about 30 px, under the planned 40 px and the kit's 32 px minimum for Hindi, and they are the scene's whole point. Set both to 44 px at y 960, slate x 120–900 and green x 960–1800. If the slate line is too long at that size, put it on two lines (y 940 / 998) instead of shrinking it.
2. The heading "एक और नियम" disappears at about 4.6 in the middle of the reading hold, but nothing moves into the space it leaves. That is a needless layout change, which the kit's "don't change the layout during a point's reading hold" rule forbids. Keep the heading on screen for the whole scene.
3. Carry over the s134 size fixes so the seam matches: "बिना डाक शुल्क का पत्र" at 36 px and "डाकघर" at 34 px.
4. The slate cross before the struck line is small (about 20 px). Make it 32 px with a 3 px slate stroke and rounded caps, placed 12 px left of the line.

The scene lasts 9.03 s: every time in it is between 0 and 9.03.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s135.html`: one `<section class="vs-scene" id="s135" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
