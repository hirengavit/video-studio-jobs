# Fix animated scene s004

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s004" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s004), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s003.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s004.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s003 is exact, and the arrow and tier 2 card arrive at 0.44 s. The ticks land on their words: "इनसे मेल खाते हों" at ~3.7 s and "बदले न गए हों" at ~5.5 s. The long still stretches are the planned reading holds, which is right. The problem is inside the white tier 2 card. Five lines (Other Instructions / बाकी निर्देश / तभी लागू, जब: / two ticks) are stacked in its left 600 px with about 56 px between lines. The Devanagari lines nearly touch each other, "बाकी निर्देश" is light grey at about 30 px, and the right two-thirds of the card is empty.

1. Split tier 2 into two columns. Left (x 300–860): badge "2", "Other Instructions" Inter bold 52 px at y 660, "बाकी निर्देश" 38 px at y 720. Right (x 920–1620): "तभी लागू, जब:" 46 px at y 650, ✓ "इनसे मेल खाते हों" 48 px at y 760, ✓ "बदले न गए हों" 48 px at y 870.
2. Draw a thin #ead9a8 divider at x 890 from y 620 to 920, so the condition column reads as one block.
3. Carry s003's tier 1 fix (text centred in the card, Hindi "बाद के आदेश" 38 px) so the first frame matches s003's last.

The scene lasts 9.71 s: every time in it is between 0 and 9.71.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s004.html`: one `<section class="vs-scene" id="s004" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
