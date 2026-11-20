# Fix animated scene s077

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s077" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s077), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s076.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s077.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The vial with its diamond label, the struck chips on "accept नहीं" and the highlight on "नियम" all land well and stay physically sound (the vial rests on its shadow line). The problem is the right-hand panel: its text is too small for a phone.

1. Chips "खास packing" and "warning labels" (y 240 / 360): the text renders at about 30–32 px in chips about 60 px tall. Make each chip 90 px tall and the full panel width (x 1030–1750), with text at 46 px (Noto Sans Devanagari / Inter), at y 230 and y 350. Keep the slate strike at 6.42.
2. Check card (y 520–900): the line "पहले: dangerous और toxic सामान के नियम" is about 40 px and fills only the top third of the card. Set it to 52 px with 1.3 line height, wrapped over three lines and vertically centred in the card, with the checkbox scaled to match (about 56 px). Keep the word-by-word reveal on the voice and the highlight on "नियम" at 12.02.
3. The empty beige panel waits 2.8 s for its first chip. Bring "खास packing" in at 2.60 (on "खास") so the panel isn't empty while the vial is drawn.

The scene lasts 14.16 s: every time in it is between 0 and 14.16.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s077.html`: one `<section class="vs-scene" id="s077" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
