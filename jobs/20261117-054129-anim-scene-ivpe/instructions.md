# Fix animated scene s200

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s200" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s200), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s199.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s200.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut at 4.9 s (the "jump" at 5 s) is the planned move to the two-card comparison, and that shot reads well. The left card shows "Accept से पहले cancel" on its words, the right card pops at 7.74 s just ahead of "transmission", and "वापस मँगाना" fades in at 10.12 s.
1. "Refund रकम: —" (typed at 2.68 s) is the point of the first half of the scene ("कोई तय refund रकम नहीं बताता"), but it is about 24 px of grey text squeezed under the footer at the very bottom edge of the frame, partly cut off. Place it inside the Refund footer row (or, if s199 is split as asked, as its own row), at ≥ 44 px, in the ink colour with the "—" in slate. Start the `type` at 2.9 s on "refund रकम".
2. On the left card, the red vertical bar through the envelope reads as a broken shape, not as "cancel before acceptance", and red isn't a signal colour in this kit. Remove it. Instead `place` a small ink counter tray or an un-stamped envelope, so the left card's picture says "not yet accepted" (an envelope still at the counter, versus the right card's envelope on the dotted route).
3. Bring the right card in at 8.3 s (on "transmission") rather than 7.74 s, so it doesn't arrive while the voice is still on the left card's words.

The scene lasts 11.04 s: every time in it is between 0 and 11.04.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s200.html`: one `<section class="vs-scene" id="s200" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
