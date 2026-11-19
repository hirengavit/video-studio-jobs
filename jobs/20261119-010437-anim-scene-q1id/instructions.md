# Fix animated scene s116

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s116" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s116), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s115.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-table` (Compare table): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-table: two or three columns (re-space the centres), three to five rows, which row gets the outline, the source line; interest rates must name the quarter and the source.

## What to change

The current file is `inputs/current/s116.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The table of the nine Circles is clear, and the group badges and the Gujarat highlight land on "groups" and "पहला group, Gujarat". The opening beat is weak, though: the "UT का हिस्सा" box that carries "या UT का हिस्सा भी आता है" is tiny (about 24 px text squeezed under "राज्य"), so the one new idea in 0–2.7 s doesn't read on a phone. The 2.71 s jump is the planned cut to the table, so it's intended.

1. Make the "UT का हिस्सा" box big enough to read: put it under "Union Territory" inside the red dashed box as a half-filled box about 1290–1720 × 680–770 (or enlarge it in place), with 36 px Hindi and the soft highlight fill #fde9a6, since it is the added material. If needed, shrink nothing else; move it instead.
2. Clear the J&K tile: the "2" badge sits on the start of "Jammu and Kashmir". Shift the tile text 30 px right (or put the badge at the tile's top-left corner at 14 px inset), and let "Jammu and Kashmir Circle" wrap so the Hindi line keeps ≥ 16 px above the tile's bottom edge.
3. Keep the tile Hindi at ≥ 32 px (some tiles look about 30 px). Where it doesn't fit, drop the EN name to 50 px instead of shrinking the Hindi.

The scene lasts 10.14 s: every time in it is between 0 and 10.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s116.html`: one `<section class="vs-scene" id="s116" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
