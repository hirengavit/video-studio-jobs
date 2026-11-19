# Fix animated scene s146

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s146" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s146), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s145.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s146.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The check calls this scene "frozen", but the sheets show the second pill (0.2), "₹22 postage" (1.9), "बाकी stationery charge" (3.6) and tick 4 (4.5) all arriving on their words. They register as frozen only because the text is so small, and that is the real problem.

1. The second pill's text ("Registration envelope: ₹22 postage · बाकी stationery charge") renders at about 22–24 px. That can't be read on a phone and is under the kit's 36 px floor. Make it a two-line pill at x 740–1700, y 895–990. Line 1 is "Registration envelope: ₹22 postage" and line 2 is "बाकी stationery charge", both 36–38 px with a 42 px line pitch. Do not shrink the Devanagari.
2. Match the widened pill 4 from s145 (x 740–1700, 38 px) so the two pills line up as one stack and the seam with s145 stays identical.
3. Keep the "₹22 postage" highlight at 1.48 and the fade of "बाकी stationery charge" at 3.06. Re-measure the highlight to the new text size.
4. Tick 4 at 4.24: once the pill is two lines, centre the tick on row 4's new vertical middle (about y 900).

The scene lasts 5.18 s: every time in it is between 0 and 5.18.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s146.html`: one `<section class="vs-scene" id="s146" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
