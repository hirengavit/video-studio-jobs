# Fix animated scene s020

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s020" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s020), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s019.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s020.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The TERM card, the meaning and the myth each land on their words, and the cut to #myth at about 7.3 s is the planned jump (intended). The holds are reading holds. The weak spots: the scene opens on a tiny chip in an almost empty frame for 2 s, and everything sits in the top half of the frame.

1. The opening chip "दूसरा article · अलग class" is about 30 px and is alone in a blank frame from 0 to 2.3 s. Make it the anchor: scale it ×1.8 (Hindi 52 px) and centre it at y 560 at 0.00. At 2.30, as the TERM pops, `move` it up to its current place above the TERM (y ~220, scale 1) over 0.4 s.
2. The gloss "रोका जा सकता है" under "Liable to detention" is about 36 px, and the kit asks for 52 px #fde9a6. Set it to 52 px, growing the stamp card's height by about 30 px.
3. Spread the #term shot over the content area: TERM at y 280–580, meaning WHITE CARD at y 640–900, meaning text at 56 px. The frame below y 560 is empty right now.
4. In #myth, size the card to its content and centre it vertically (about y 400–720) so it isn't a big, mostly empty card high on the screen. Set the myth line to 56 px.

The scene lasts 11.74 s: every time in it is between 0 and 11.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s020.html`: one `<section class="vs-scene" id="s020" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
