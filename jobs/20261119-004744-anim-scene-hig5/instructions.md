# Fix animated scene s062

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s062" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s062), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s061.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s062.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Shot 2 works: the staircase draws, Dak Bhawan stands on the top step and the order slides out beside it on "Dak Bhawan से निकला एक order". Shot 1 crams its new clause into the band.

1. Band, 0.00–4.62: "offices का काम" and "संभालने लायक इलाके में" are squeezed into two tiny lines at the band's right end, and the second line touches the band's bottom edge. Grow the band down to y 890–1060 (two rows). Line 1 keeps "फायदा: राष्ट्रीय निर्देश नीचे तक लागू". Write line 2 below it from the left at the same 40 px: "और offices का काम संभालने लायक इलाके में", with about 1.3× line height. Then `highlight` "संभालने लायक" on 1.86 (only one highlight on screen, so set "नीचे तक" back to ink at 1.86).
2. At the cut (4.62) the screen is empty except for the first strokes of the ladder for about 0.5 s. Shorten the ladder `draw` to start at 4.62 with dur 0.7, or start it 0.1 s before the cut, so the staircase reads at once while "इसे ऐसे सोचिए" is said.

The scene lasts 8.60 s: every time in it is between 0 and 8.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s062.html`: one `<section class="vs-scene" id="s062" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
