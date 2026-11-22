# Fix animated scene s152

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s152" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s152), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s151.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s152.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea is right: the label is lettered exactly, with dotted blanks and no place names, "दो जगहें" points at the arc's ends, and the slate strike lands on "पूरे सफ़र". The execution has three problems. The scene opens by shrinking the whole s151 diagram while the empty label slides up over the "मुश्किल हिस्सा" tag (overlap at ≈0.2 s). After the shrink, the diagram's Hindi ("सीमित हवाई ढुलाई", "मुश्किल हिस्सा", "कम air fee") falls to about 28–32 px. And the label, which is the point of the scene, is small.

1. Order the move: rescale the s151 group first (0.00–0.50), and only then `slide` the label up (start ≥ 0.50), so it never covers "मुश्किल हिस्सा" in any frame.
2. Shrink the diagram less (scale ≈ 0.8 instead of ≈ 0.6) so no Hindi drops below 32 px. Free room by moving "कम air fee" and "बाकी: surface" up beside the road ends rather than below them.
3. Make the label card the biggest thing on screen: scale it to ≈ 1.5× (Georgia text ≥ 44 px, dotted blanks ≥ 120 px long), centred at y ≈ 800.
4. Keep "पूरे सफ़र का airmail नहीं" below the label with ≥ 24 px clearance, at ≥ 40 px text. Shift it to y ≈ 990 if the larger label needs the room.

The scene lasts 10.88 s: every time in it is between 0 and 10.88.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s152.html`: one `<section class="vs-scene" id="s152" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
