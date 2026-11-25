# Fix animated scene s108

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s108" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s108), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s107.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s108.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The #hold shot is clear and on time: the caption and calendar are there from the first frame, on "लागू holding period". The cut to #office at 3.7 s lands on "अब office का काम", and the invoice arrives on "invoice" (9.3 s). There are two real problems: the scanner floats in mid-air with nothing holding it, and #office is an almost empty screen (heading only) from 3.7 to 6.9 s.

Fixes:
1. Physics: the hand scanner hangs in the air to the right of the parcel. Either draw a simple ink hand (3 px outline, palette fill) coming in from the lower right and gripping the scanner's handle, or rest both on a thin ink counter line at y 820 (the parcel standing on it). Then draw the red beam from the scanner's nose to the parcel label at 8.17 s, as now.
2. Bring the parcel and its "Accountable item" label in at 6.3 s, just before "accountable items" (said around 6.5–7.8 s), not at 6.91 s. The label is then readable as the word is said, and the heading-only stretch is shorter.
3. The office content sits small in the lower middle of the frame. Scale the parcel from 1.3 to 1.5 and the invoice-sheet from 1.4 to 1.6, keeping their x positions and leaving the x 1700 slot free for s109, so the two fill the space under the heading with even margins.

The scene lasts 10.25 s: every time in it is between 0 and 10.25.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s108.html`: one `<section class="vs-scene" id="s108" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
