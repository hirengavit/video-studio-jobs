# Fix animated scene s070

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s070" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s070), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s069.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s070.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The chain finishes on its words: #c3 on "design और denomination", the Central Government pill, then the tick plus "approve" on "approve". The cut to the rule card at 4.68 (the jump at 4.93) comes as the voice says "एक नियम". The rule writes on "किसी जीवित व्यक्ति…" and the slate postmark "नहीं" lands on "जारी नहीं होगा". No person is drawn. The stills at 2.47–4.69 and 5.18–7.15 are holds; the second is the "सीधा याद रखिए" beat with the card and "नियम" already up.

1. In #c3, "मूल्यवर्ग" is about 28 px, under the 32 px floor. Set it to 34 px, and set "Design + Denomination" to 40 px. If it doesn't fit, break it into two lines: "Design +" / "Denomination".
2. In the rule card, the two lines sit in the upper half (y≈430–560) and the bottom 40% of the card is empty. Move the text block down so line 1's baseline is at y≈520 and line 2's at y≈620, which centres it vertically in y220–900.
3. Scale the empty-faced postage-stamp from 0.5 to 0.7 and centre it on the same vertical middle (≈y560) at x≈1450. The postmark then lands on a stamp a viewer can see, not on what reads as a white tile.
4. Start the "जीवित व्यक्ति" highlight at 7.80 instead of 7.56, so the band sweeps as the word is said, not before it.

The scene lasts 11.40 s: every time in it is between 0 and 11.40.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s070.html`: one `<section class="vs-scene" id="s070" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
