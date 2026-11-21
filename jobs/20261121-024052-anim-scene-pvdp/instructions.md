# Fix animated scene s025

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s025" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s025), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s024.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s025.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The receipt beat lands on "receipt दी जाती है" and the cut to #wrong at 4.26 matches "Envelope पर Registered". The still stretches are holds on spoken points and are intended. Two things a viewer will notice:

1. Cards 2 and 3 sit empty from 4.26 s to the end (card 2 for about 3 s, card 3 the whole shot and into s026). Don't pop all three frames at 4.26. Pop card 1 alone at 4.26 with its envelope. Pop card 2 at 7.04 together with its envelope, then the extra stamps (stagger 0.08) and the "ज़्यादा stamps" label. Leave card 3 out of s025 entirely; s026 brings it in with its box at 0.0.
2. The receipt overlaps the left end of the "Counter" sign (3.7 s frame). Slide `booking-receipt` up from the counter top about 140 px further left (counter-top left end, x ≈ counter.x + 40). Put the "Receipt" label directly above it, so the receipt, the sign and the tick each have their own place.
3. The envelopes are small inside their cards, with about 40 % of the card left as white space. Scale the envelope in card 1 (and the matching one in card 2) up about 1.25× so each fills about 85 % of the card's width. Keep the "ज़्यादा stamps" label at 48 px under it.

The scene lasts 8.72 s: every time in it is between 0 and 8.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s025.html`: one `<section class="vs-scene" id="s025" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
