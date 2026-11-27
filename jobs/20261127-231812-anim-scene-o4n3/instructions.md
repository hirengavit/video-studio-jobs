# Fix animated scene s210

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s210" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s210), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s209.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:india-post-delivery-van` (and `photo:india-post-delivery-van-cutout`, its subject cut out): a red India Post mail or delivery van on a street or outside a post office, whole van visible, side or three-quarter view (Mail Van) (shown in the scene before; use it where this scene continues that frame), 1920×1440. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s210.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s209 is exact. The postmark `stamp` lands at 0.72 s, "14 October" is spoken at 0.0–2.7 s, the ring text follows on "Navrangpura … Ahmedabad", and the route draws on "तय जगहों". The still stretch from 0.99 s to 6.44 s is the reveal plus a hold while the voice reads the place name, which is intended. The problem is size: the postmark, the route and their label are too small to read on a phone.

1. #postmark: the ring text "Navrangpura HPO, Ahmedabad" is 32 px on a curve, so it can't be read on a phone. Grow the postmark to a diameter of 380 (x 1000–1380, y 540–920), set the ring text to 40 px bold and "14 Oct 2026" to 54 px bold, and keep the double ring and the wavy cancel lines in proportion (one scale number).
2. #route: the three pins (40 tall) and the dashed line are tiny. Move the route to x 1420–1760, y 690, make the pins 60 tall at x 1450 / 1590 / 1730, and make the dashes 4 px.
3. "Circle की तय जगहें" is 36 px. Set it to 44 px on two lines, "Circle की" / "तय जगहें", centred at x 1590, y 770 and 822. This leaves y 860–990 free for s211's pill.

The scene lasts 9.22 s: every time in it is between 0 and 9.22.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s210.html`: one `<section class="vs-scene" id="s210" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
