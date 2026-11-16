# Fix animated scene s110

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s110" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s110), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s109.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s110.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The left card carries over correctly, and "Renewal annual fee" and ₹200 land on their words (4.9 s and 6.6 s). The real problems are the renewal chip and the change of panel at about 1.9 s.

1. The chip "Renewal: March में" is the scene's headline, but it is about 32 px. At 0.2 s it sits squeezed right beside "वित्तीय वर्ष" under the "Financial year" heading, and after 2 s it is left floating alone above the panel's top-right corner. Make it 48 px and put it over the 31 March end of the bar (as the storyboard plans), with `pop` at 0.3 s and clear of the heading. When the panel arrives, give its replacement a place inside the white panel as its title (top-left, about x 1210, y 420).
2. At about 1.9 s the year chart fades out while the new panel ("March → 1 April से 1 साल") fades in over the same spot, so for several frames two sets of text overlap (the spike in the motion strip, and the half-visible "March ·" at 2.0 s). Run `out` on the chart group at 1.55 s (dur 0.3) and bring the panel in with `fade` at 1.9 s, so nothing shares the spot.
3. The panel holds only one row from 2 s to 4.9 s, and its lower half is empty. Start the panel at its one-row height and `grow` it (axis y, origin top) at 4.94 s as the "Renewal annual fee" pill arrives.

The scene lasts 8.67 s: every time in it is between 0 and 8.67. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s110.html`: one `<section class="vs-scene" id="s110" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
