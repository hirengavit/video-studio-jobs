# Fix animated scene s048

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s048" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s048), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s047.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s048.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. Same problem as s047: the working is too small, and the motion check sees nothing from 0.25 s to 9.15 s even though "= 1.875%" pops, L3 fades and L4 types. Scale every line to match s047's fix. "= 1.875%" goes on L2 at 88 px with a yellow highlight (it is a result). L3 "एक साल · चार quarters" goes at 52 px grey, y 560. L4 "10,000 × [(1 + 7.5/400)⁴ − 1]" goes at 64 px, y 660, and must fit inside x 820–1760. L5 "≈ ₹771.36" goes at 96 px, y 770, so the right card is used down to about y 800 and doesn't stay 40% empty. Leave y 790–880 clear for s049's green pill: put L5's baseline at 760 or move the pill down to y 810–900.
2. The "⁴" exponent is barely visible. Write it as its own small raised text (about 44 px, raised 26 px) after the closing bracket, so the power of 4 (four quarters) can be read.
3. L4 types from 6.76 s, but the voice reaches "compounding से ब्याज बनता है" only at about 6.4–8.1 s. Keep the 6.76 s start, but set cps to about 18 so it finishes by 8.4 s, just before "लगभग ₹771.36". Then pop L5 at 8.6 s, on "लगभग", instead of 9.24 s, and hold it with its highlight to the end (more than 1 s, as the screen notes ask).

The scene lasts 12.42 s: every time in it is between 0 and 12.42.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s048.html`: one `<section class="vs-scene" id="s048" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
