# Fix animated scene s022

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s022" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s022), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s021.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s022.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The three nodes are on at 0 s, which suits "ये records, booking, delivery…". The planned link line never appears: the check finds nothing moving from 0.25 s to 6.95 s, and the 5.2 s frame has no line. So the voice says "आपस में जोड़ते हैं" (4.5–6.0 s) over three unconnected boxes. The #noins half works: parcel and shield arrive on the cut at 7.11 s, the statement fades in at 10.47 s, and the slate cross draws at 11.57 s on "insure नहीं होता". The statement pill sits very close under the shield's tip.

Fixes:
1. Make the link line actually draw. Put an ink line (stroke #2b2622, 4 px, round caps) through the node centres, x 180–1740, y 550, behind the nodes so it shows in the gaps. `draw` it at 4.6 s (dur 1.0) on "आपस में जोड़ते", not at 5.54 s. If the line is already in the file, check that its dash offset actually animates and that it isn't drawn under an opaque backdrop.
2. Enlarge the #records nodes so the screen isn't a thin strip in its top half. Use 480×300 at x 160 / 720 / 1280, y 400, with icons at 2× (about 120 px) and labels at 56 px; the receipt and signature icons are too small to read now.
3. In #noins, move the statement pill down 30 px (centre y 910), or lift the parcel and shield 30 px, to leave a clear gap of about 40 px between the shield's tip and the pill.

The scene lasts 12.95 s: every time in it is between 0 and 12.95.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s022.html`: one `<section class="vs-scene" id="s022" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
