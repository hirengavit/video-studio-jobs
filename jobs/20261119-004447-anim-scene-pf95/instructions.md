# Fix animated scene s049

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s049" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s049), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s048.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s049.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Continues cleanly from s048 (same layout, nothing jumps at the seam). The highlight on "Financial Adviser" at 3.18 and the IFW card at 5.26 land on their words. Two things a viewer would notice:
1. The "permanent invitee" pill `pulse` at 1.08 doesn't show: the automatic check finds nothing moving from 0.25 s to 3.22 s, and the motion strip is flat there. Make it a visible `pulse` (scale 1.08, about 0.6 s) on the pill group, starting at 1.0 so it lands on "permanent invitee" (said 0.0–2.4). Otherwise the first three seconds are a still, carried frame.
2. The "head भी" label and its ink line are squeezed into the 50 px gap between the invitee card (ends y 640) and the IFW card (starts y 690). The label touches the IFW card's top edge and reads at about 28 px. Place the IFW card group at y 720–1000 instead of 690–980, draw the ink line from y 645 to 715 at x 1180, and put "head भी" at 36 px (Noto Sans Devanagari, ink) to the right of the line at x 1200, y 690, clear of both card edges.
3. Keep the 8.64 line `draw` and fade the label in 0.2 s after the line finishes (about 8.9), so the cause comes before the text.

The scene lasts 9.96 s: every time in it is between 0 and 9.96.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s049.html`: one `<section class="vs-scene" id="s049" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
