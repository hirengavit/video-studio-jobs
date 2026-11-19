# Fix animated scene s042

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s042" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s042), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s041.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s042.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Shot 1 notice: the Official Gazette notice is squeezed into the top-right corner beside the Central Government card, and the "notification · अधिसूचना" pill reads at about 28–30 px. Scale the notice group up to about 1.3 (about 1400–1800 × 160–560, or as large as fits without touching the card) and set the pill text to 36 px English and 32 px Hindi (pill about 380 × 64).
2. Shot 2 Rule 5 card: the 160–1060 × 220–900 card holds two lines in its top third and stays mostly empty for 7 s. Resize the card to 160–1060 × 300–760 (centred in the content area), and raise "Board → apex body" to 64 px and "शीर्ष निकाय" to 44 px so the card is filled.
3. Chip "permanent संख्या": it is small and sits high and to the right, leaving the right half empty from 3.8 to 8.6 s. Make the chip 1120–1780 × 440–620 with 56 px text, and put the slate cross (about 90 px) and "तय नहीं" (48 px, grey) under it, centred on the chip, so the right side balances the card.

The scene lasts 10.92 s: every time in it is between 0 and 10.92.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s042.html`: one `<section class="vs-scene" id="s042" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
