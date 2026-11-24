# Fix animated scene s133

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s133" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s133), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s132.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s133.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. "Speed Post item पर", the end of line 4, is set at about 24 px beside "insurance:" and can't be read on a phone. Put it on its own line under "insurance:" at 40 px. Bring it in with `type` at 0.1 so it is on screen by "Speed Post item पर" (0.0–1.7).
2. When the "Speed Post registration" tile arrives (about 2.9–4.0 s), the source line "Post Office (Fourth Amendment) Regulations 2025 · from 1 Oct 2025" disappears from column 1. The kit says a fee must show with its source, so the source has to stay. Keep it at the column foot (32 px grey) and fit the tile above it. To make room, cut the gaps between the line tiles from about 16 px to 8 px and their inner padding to 10 px. Don't remove any planned line.
3. The tile title "Speed Post registration" is about 28 px. Make it Inter bold 40 px in amber #8a5d00, and "₹5 + GST" 56 px bold. Size the tile to hold both (about 520 × 130) so it doesn't run onto the column's bottom border.
4. Timing: "₹5" pops at about 6.7 and "+ GST" at 8.33, which matches the voice. Keep both, but use the tile's perforated stamp edge (as the kit asks for key facts) instead of a dashed outline.

The scene lasts 9.49 s: every time in it is between 0 and 9.49.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s133.html`: one `<section class="vs-scene" id="s133" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
