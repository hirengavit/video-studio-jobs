# Fix animated scene s106

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s106" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s106), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s105.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s106.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The carry-over seam is exact. Label strips and a green tick land on "official labels", and the "not for stamps" pill comes on its words. The stamp's path is what's untidy.

1. The stamp pops at 5.4 s half outside the parcel panel, straddling its bottom border (about y 960) and far from its "Postage stamps" label. Pop it inside the panel's free space, for example x 760, y 700, on the cream next to the parcel. Put the "Postage stamps" label directly under it instead of under the note card.
2. At 7.02 s the `move` puts the stamp on the parcel's top-right, where it covers the string and the small hanging tag. Change its `by` so it lands on the plain front face of the box, about 120 px left and 60 px down from where it lands now, with nothing under it but brown paper.
3. The green tick at 8.5 s overlaps the stamp's top-right corner. Shift it 40 px right so it sits beside the stamp. Pop the "article पर ही" pill at the same time, inside the panel's bottom margin rather than across the panel border, at 40 px or more.

The scene lasts 9.14 s: every time in it is between 0 and 9.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s106.html`: one `<section class="vs-scene" id="s106" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
