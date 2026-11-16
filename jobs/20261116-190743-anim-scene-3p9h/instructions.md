# Fix animated scene s043

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s043" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s043), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s042.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s043.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. #counter, 3.54–6.82: only the header bar is on screen for over 3 s while the voice says "ऐसी डाक को accountable item कहते हैं", and the body is empty. Do what the storyboard planned: a big term bar in the body (centred, about y 300–560) with "Accountable item" at 96 px in Inter bold and "हिसाब वाली डाक" at 48 px beneath it 0.5 s later. At 6.82, when the counter comes in, move the term bar up (`move`, 0.6 s) so the counter card fits below it.
2. #three: "स्याही" under the signature line is about 32 px and sits against the card's bottom edge. Raise it to 40 px and lift the pen icon and label about 30 px so they are clear of the edge. Give the "digital" phone and label (2.46) the same size, side by side with "स्याही".
3. #counter: the post-counter-icon fills only the left half of its card, and "Counter पर ही" floats on the right. Scale the counter about 1.3× and centre the counter and caption as one group in the card, with the caption at 56 px.
4. Set `data-section="PART 3 · REGULATION 22"` so the section label stays the same across this section (it varies from scene to scene in s041–s048).

The scene lasts 10.69 s: every time in it is between 0 and 10.69. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s043.html`: one `<section class="vs-scene" id="s043" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
