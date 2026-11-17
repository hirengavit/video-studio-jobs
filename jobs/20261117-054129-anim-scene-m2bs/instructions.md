# Fix animated scene s198

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s198" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s198), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s197.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s198.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s197 is clean, and the beats land on their words ("accept से पहले" pill at 1.0 s, counter row at 3.9 s, "उसी दिन" at 6.16 s, the cancellation request at 7.32 s). But at about 3.7–4.2 s the whole card re-flows to make room. The Notification and Gazette rows collapse into one line at about 24–28 px, and the green "Accept से पहले cancel ✓" pill shrinks from readable to about 30 px. That breaks the kit ("don't shrink Hindi to make a card fit", "Hindi never under 32 px", "don't change the layout during a point's reading hold") and leaves 7+ items on one card.
1. Don't shrink to fit. Make room by resizing the column: at s198 0.0, scale the `23A` badge to about 0.65 and move it to the top-left (x 80–330, y 160–520), and widen the right card to x 380–1840, y 150–1040. Then keep every row at Hindi ≥ 36 px and English terms ≥ 44 px.
2. Move the condensing out of the reading hold. If earlier rows must compact, do it once at 3.6 s (just before "Counter booking"), and fade the already-explained rows (Notification, Gazette) to the supporting grey #6f6a63 instead of shrinking them below 36 px.
3. Keep the green pill at its 2.0 s size (about 40 px text) for the rest of the scene. Place it on its own line under "खुद book किया item" rather than squeezing it beside the phone.
4. Place "उसी दिन" (yellow pill) directly after "Counter booking" with a 24 px gap. Make "Cancellation · रद्द करने की माँग — sender" a full-width row at ≥ 40 px so it doesn't touch the card's bottom edge.

The scene lasts 9.02 s: every time in it is between 0 and 9.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s198.html`: one `<section class="vs-scene" id="s198" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
