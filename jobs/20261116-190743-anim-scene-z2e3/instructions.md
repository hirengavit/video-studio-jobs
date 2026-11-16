# Fix animated scene s041

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s041" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s041), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s040.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s041.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. #formula: the second rule line ("कम भुगतान" … "→ कमी × 2") is about 40 px, squeezed under the first line, and much smaller than "पूरा prepaid rate × 2". Make it a second row the same size as the first: Hindi at 48 px, a 64 px tall row, "→ कमी × 2" in the same highlight pill as "× 2". Grow the right card down (to about y 860) so both rows fit with even padding.
2. #formula: the cream "न्यूनतम charge ₹1" box hangs below the card and touches its bottom edge. Put it inside the card's group as the third row (y about 720–820), with "न्यूनतम charge" at 48 px and "₹1" at 64 px, so nothing touches the card edge. Keep the pop at 4.82.
3. #who: row 2's label pill sits empty from 8.88 to 10.78. Write "लौटे तो: sender से" at 9.9 (when "लौटे" is said) instead of 10.78, so the pill never waits empty for two seconds.
4. Set `data-section="PART 3 · REGULATION 22"` (the storyboard's label for this section). The section label changes on almost every cut in s041–s048 (POSTING OF POSTAL ARTICLES, PART 3 · POSTING OF ITEMS, POSTING OF MAIL, POSTING ARTICLES), and the kit says it changes only with the section.

The scene lasts 12.92 s: every time in it is between 0 and 12.92. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s041.html`: one `<section class="vs-scene" id="s041" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
