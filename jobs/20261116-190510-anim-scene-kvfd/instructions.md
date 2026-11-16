# Fix animated scene s034

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s034" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s034), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s033.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s034.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam matches s033 exactly, and the outer layer wrapping over the inner one reads, with "बाहर: मज़बूत कागज़" landing on its words. But the scene's point is that stamps and the date stamp go on this outer paper, and both are tiny: the stamp is a ≈ 20 px red outline square and the postmark a ≈ 40 px circle. On a phone they don't read as a stamp and a postmark. The caption "इसी कागज़ पर" is squeezed under the item, against the card's bottom edge.

1. Make the stamp a real postage stamp: about 110×130 px, postal red #9e1b1b with a perforated white edge. `place` it on the outer paper's lower-right face (inside the paper, not on its edge) at 4.82 s.
2. Draw the postmark (`postal-date-stamp`) at about 150 px as an ink impression overlapping the stamp's corner, at 6.3 s on "date stamps".
3. Move "इसी कागज़ पर" (≥ 40 px, heading red) into the free space left of the stamp, on the outer paper or just above it, ≥ 24 px clear of the card edge, with its leader line pointing at the stamp.
4. To make room, lift the whole layer diagram about 40 px and enlarge it about 1.2× (same as s033's final size), so the outer paper's face is tall enough to carry the stamp and postmark.

The scene lasts 8.81 s: every time in it is between 0 and 8.81. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s034.html`: one `<section class="vs-scene" id="s034" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
