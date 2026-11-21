# Fix animated scene s058

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s058" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s058), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s057.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s058.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The idea is clear: the slate cross "पास नहीं" lands on its words, then the key and plate leave the attendant's side and move left → right into the cabinet, so cause and effect read in order. The cut from s057 is as planned. A viewer will notice two things: the Custody chip crowds the header, and the hour plate is blank.
1. Custody chip (~9.0 s): it sits across the right card's top border, just under the series pill. Move both cards down so their tops are at y ≈ 340 (bottoms ≈ 990). Put the chip fully above the right card, centred on it, at y ≈ 210–320. Set "Custody" in Inter bold 56 px white and "अभिरक्षा" beneath it in 36 px #fde9a6 (now ~24 px). Bring it in on "custody" (~7.6–8.0 s), not later.
2. The hour plate (beside the badge at 0.0 s and inside the cabinet after the move) is an empty red-rimmed rectangle. Write "14:00" in it (Inter bold, ink, ~28 px at the icon's size) so it reads as the same plate as in s057.
3. Bring "या responsible Assistant" in under "Postmaster" by ~6.0 s. It is said at 6.0 s but now appears at ~7.6 s.

The scene lasts 9.80 s: every time in it is between 0 and 9.80.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s058.html`: one `<section class="vs-scene" id="s058" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
