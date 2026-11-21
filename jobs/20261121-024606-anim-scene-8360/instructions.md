# Fix animated scene s048

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s048" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s048), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s047.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s048.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The flagged "jump at 4.74 s" is the planned hard cut to the #flow shot, so it is intended. In the flow shot, the box and bag come in at about 4.9 s on "Box से निकली डाक", the arrow draws, "समय पर" lands at about 7 s on "समय पर", and the office arrives on "office पहुँचनी". The flow runs left→right as the continuity rules say. The link arrows between the clocks come in on "आपस में जुड़े".

Fixes:
1. At the seam, the clock cards' text spacing and height differ from s047's last frame: the gloss lines spread apart and the cards get taller, so the layout visibly jumps on a "Continues" cut. Copy s047's exact card geometry and text positions (or use the shared sizes from the s046 fix). Make "(डाक कब आती)" a second line inside card 3 at 40 px, with 16 px clear of the card edges; it currently touches both sides.
2. In the first beat, the "तीन समय" pill touches the bottom of the taller clock cards. Keep at least 24 px between them by moving the pill to y≈1000, matching s047.
3. The link arrows between the clocks are about 40 px long, squeezed into the narrow gutters, and touch the card edges. Draw them 3 px ink in the highlight amber (#8a5d00) with the gutters widened to about 70 px (shift the cards by 30 px each), or draw one longer arrow running under the three cards from clock 1 to clock 3.
4. The #flow shot is weighted to the left: the box starts at x≈120 and the office ends at x≈1500, leaving about 300 px empty on the right. Its top band (y 190–420) is empty apart from the small clock. Scale the flow group to 1.15 around its centre and shift it right about 120 px so the margins are even. Lift the office clock so it sits about 40 px above the roof at a 240 px size.
5. Set the series slot to "LETTER BOXES". It is correct here; keep it the same in every scene once s042, s043, s046 and s047 are fixed.

The scene lasts 8.79 s: every time in it is between 0 and 8.79.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s048.html`: one `<section class="vs-scene" id="s048" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
