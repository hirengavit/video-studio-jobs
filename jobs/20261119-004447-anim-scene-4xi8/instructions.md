# Fix animated scene s052

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s052" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s052), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s051.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s052.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The cut to shot 2 at 3.40 (the jump the check flagged) is intended: it lands on "अब Board के Secretary", a new idea. The Directorate card, "senior staff officer" pill and arrow land on their words. Fixes:
1. The grey "listed · सूची में" label planned for 2.34 doesn't show: no frame or motion shows it, and the check finds nothing moving from 0.25 s to 3.21 s. Bring it in at 1.6 (`fade`, 0.3 s), just as "नाम से listed" is said (≈1.9–3.0). Put it under the "JS and FA" stamp in the document card at about x 1240, y 720, with "listed" in Inter at 32 px and "सूची में" in Noto Sans Devanagari at 32 px, supporting grey #6f6a63.
2. The "मदद करता है" label over the arrow is about 28 px and crammed into the 200 px gap, touching the PSB card's dotted edge. Set it to 34 px and centre it above the arrow at x 960, y 500, with at least 16 px clear of both cards. Lengthen the arrow `draw` to span x 850–1080 so the label sits over its middle.

The scene lasts 10.16 s: every time in it is between 0 and 10.16.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s052.html`: one `<section class="vs-scene" id="s052" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
