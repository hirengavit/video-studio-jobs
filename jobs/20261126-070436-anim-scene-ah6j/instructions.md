# Fix animated scene s160

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s160" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s160), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s159.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s160.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s159 is clean, and each beat lands on its words: the row label is highlighted at 0 s, "7 दिन" comes in around 2.3–4.4 s, "पहली बार delivery के लिए पेश करने से" at 5 s, "या" at 8.3 s and "arrival intimation" at 11.9 s. The bottom row is underused, though. Its content is small and bunched on the left, and the "envelope at the door" doesn't read.
1. The envelope next to `house-icon` renders as a blank white box at ground level with no outline. Draw it as an ink-outlined envelope (3 px ink stroke, #f3ead6 fill, flap line), about 90 × 60 px, held at the door's middle height (in the doorway, not lying beside the house).
2. Enlarge the bottom row's content to fill the row (x 200–1720). Set `house-icon` to about 1.6× its current size, and make "पहली बार delivery के लिए पेश करने से" 44 px (now about 36 px). Put the "या" disc (64 px) centred between the 2 options, and the "arrival intimation" notice card with "intimation देने से" on the right half.
3. Add a small ink notice or letter glyph inside the "arrival intimation" card so it reads as a slip, and set "intimation देने से" to 44 px.

The scene lasts 14.64 s: every time in it is between 0 and 14.64.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s160.html`: one `<section class="vs-scene" id="s160" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
