# Fix animated scene s149

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s149" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s149), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s148.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s149.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s148 matches (envelope on the ledge, counter, term card), and the counter frame is highlighted on "window" as planned. But the point of the scene is the verdict panel. It sits as a thin strip at the very bottom, with 42 px two-line text squeezed into halves about 840 px wide, and the "बहुत बड़ा" label nearly touches its top edge. On a phone this, the scene's whole lesson, is the smallest text on screen. The slate half also says the same thing twice ("≠" and a strike through ACCOUNTABLE), which turns into a double negative ("handing at the window ≠ not-accountable").

1. Make room and enlarge the verdict: at 0.0 `fade` out the orphan width bracket (and move "बहुत बड़ा" up 40 px, or under the box at x 270). Then `slide` the verdict panel up to y 790–1010 (220 px tall, not 130) and set both halves to 50 px Hindi / English, line height 1.3, each line centred in its half.
2. Remove the double negative in the slate half: keep "window पर देना ≠ ACCOUNTABLE" and the slate cross at 2.58 on "नहीं बनता". Drop the `strike` on "ACCOUNTABLE", because the ≠ already says it.
3. The green half fills in word by word as late as 6.7–8.5. Start its `words` at 3.96 as planned but finish by 6.9, where the voice says "जिसमें वो book हुआ". Bring the green tick in at 7.0 rather than 7.82 so it sits a beat after "book हुआ" and holds before the cut.

The scene lasts 8.52 s: every time in it is between 0 and 8.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s149.html`: one `<section class="vs-scene" id="s149" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
