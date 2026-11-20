# Fix animated scene s122

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s122" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s122), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s121.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s122.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The opening node, the question and the first branch arrive on their words, and the layout leaves room for s123–s125 to fill the lower half. (The check note "frozen" is wrong: the frames show fades, typing and arrows.) Two things a viewer notices:

1. The question pill appears empty at 2.0 and stays an empty cream lozenge until the text types at ~5.0, which breaks "a card doesn't sit empty". `fade` the pill at 4.6 and `type` "कहाँ पकड़ा गया?" at 4.8 ("कि वो कहाँ"), so container and words arrive together.
2. The top-node icon (envelope-article 0.3 + pin 0.4) is about 70 px and the pin can't be seen on a phone. Raise `piece:envelope-article` to scale 0.5 and `piece:pin-icon` to 0.6, keep the Hindi line 46 px to its right, and nudge the node up to y 150–300 so it doesn't crowd the pill.
3. Make the two branch arrows thicker (stroke 3 px ink, as in kit css .ink-line) and give the arrowheads about 14 px. At the current width they almost vanish next to the cards.

The scene lasts 8.76 s: every time in it is between 0 and 8.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s122.html`: one `<section class="vs-scene" id="s122" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
