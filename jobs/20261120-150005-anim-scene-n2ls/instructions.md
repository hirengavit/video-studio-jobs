# Fix animated scene s085

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s085" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s085), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s084.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s085.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The green chip "article बचाने को ज़रूरी हो — ठीक" pops at 2.32 s and the shot cuts away at 4.38 s, so it holds ~2 s and never shows on the sheet. That is under the kit's 3 s minimum, and it is this scene's main exception. Pop it at 0.80 s on "article", so it reads for ~3.5 s before the cut.
2. The wax blob sits on the face of the second envelope, so it reads as that envelope's own seal, not as wax sticking two pieces of mail together. Place it on the overlap seam: on the first envelope's right edge, half under the second envelope's left edge (around x 940, y 560), so it visibly touches both. Point the "चिपक" leader line at it.
3. The "चिपक" pill overlaps the top flap of the left envelope. Move it up to y 330, clear of both envelopes, with the leader line down to the blob.
4. The envelopes fill only the top half of the panel, with the panel empty below until the caption at ~10 s. Scale both envelope-articles from 1.6 to 2.0, centred at y 560, keeping the caption at y 880.

The scene lasts 10.60 s: every time in it is between 0 and 10.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s085.html`: one `<section class="vs-scene" id="s085" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
