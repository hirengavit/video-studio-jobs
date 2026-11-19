# Fix animated scene s039

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s039" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s039), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s038.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s039.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The comparison that carries the idea (a stamp in the left envelope's box, a franking impression in the same place on the right) is too small to read on a phone. The two envelopes sit in the top third of the screen with the lower half empty.
1. Envelopes: scale both address-envelope pieces to 1.0 (about 640 px wide). Place them at left x 160–800 and right x 1120–1760, y 280–680, and keep the "= वही नियम" pill centred between them at x 960. The stamp and the impression in the boxes then read at about 110 px.
2. Make the franking-impression in the right envelope's stamp box fill the box (same footprint as the stamp on the left). Place it on "franking" (about 3.9 s), with the right envelope popping a beat before at 3.6 s, so it is fully visible before "पर भी लागू हैं" (4.5).
3. Grey line "कहाँ और कैसे लगें": raise it to at least 40 px and move it to y 760, just under the envelopes, so it reads as their caption.
4. #parcel cut (5.94): draw the parcel icon and term together with the card, or within 0.3 s of it, so the card doesn't sit empty for about a second.

The scene lasts 9.74 s: every time in it is between 0 and 9.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s039.html`: one `<section class="vs-scene" id="s039" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
