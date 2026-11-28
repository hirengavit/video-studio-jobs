# Fix animated scene s008

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s008" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s008), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s007.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s008.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The tiles fill on "1, 2, 3 या 5 साल" (0–3.3 s), the MIS "5 साल" tile lands on its word (about 6.5 s), and the bottom bar comes in on "दोनों में ... नहीं" (9–10.4 s). The jump at 4.68 s is the planned cut to #mis.
1. The highlight on the MIS "5 साल" tile (7.00 s) puts a soft-yellow band on red behind white text, which turns into a muddy tan block and lowers contrast. Instead, draw a yellow #f2b705 outline (6 px, rounded) around the tile, or underline "5 साल" in yellow under the tile, and keep the text white on red.
2. #mis is small and sits high, with an empty band from y 580 to 760. Scale the TD row up (passbook 0.9, tiles 150×170 at x 400–1060, y 330–600). Make the MIS passbook 0.9 at x 1180 and the "5 साल" tile x 1340–1780, y 330–600 with 120 px text. Then move the bottom bar to y 700–900 so the margins are even.
3. In the bottom bar, the "coins" are empty grey circles. Use three piece:rupee-coin at scale 0.5 (x 160, 240, 320) so they read as money, and keep the slate strike on "monthly किस्तें" (56 px) and the one slate cross.
4. The passbook labels "TD · SB-5A" and "MIS · SB-5" can't be read at scale 0.7. Write them as two lines "TD" / "SB-5A" and "MIS" / "SB-5" (Inter bold 40/30 px), or put "TD" and "MIS" (48 px) under each book.

The scene lasts 11.12 s: every time in it is between 0 and 11.12.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s008.html`: one `<section class="vs-scene" id="s008" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
