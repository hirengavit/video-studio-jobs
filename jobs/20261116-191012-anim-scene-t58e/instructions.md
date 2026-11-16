# Fix animated scene s056

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s056" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s056), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s055.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s056.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. In the #firm shot (0–6.64), the building, the 8 envelopes and the clock fill only the top 45% of the frame, under the red banner, leaving the lower half empty for 6.6 s. Scale the content group (the building, the envelope grid and the clock with its tag) to about 1.6, and centre it vertically between the banner and the bottom margin (about y 260–960), with even side margins. Keep the banner where it is.
2. The `rupee-cash` (10.80) stops in mid-air at the arrowhead, left of the counter, covering the arrowhead. Let it finish resting on the counter's top ledge (its base on the counter's top, centred over the counter, with `place` or a `move` ending there), and let the arrowhead show again.
3. The 8 stamps (3.84, stagger 0.15) are very small at the current scale. After the scale-up in fix 1 they will read; if not, scale each stamp to 1.4.
4. The jump at 6.69 s is the planned sub-shot cut to #term on "Bulk cash prepayment" (6.6), so leave it.

The scene lasts 13.18 s: every time in it is between 0 and 13.18. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s056.html`: one `<section class="vs-scene" id="s056" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
