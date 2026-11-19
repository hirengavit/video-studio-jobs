# Fix animated scene s148

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s148" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s148), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s147.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s148.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade from s147 is right for a new idea, and the timing follows the voice: the slip and its cross on "अंदर कुछ नहीं", the tag on "उस पर कुछ जोड़ा", and the right panel at 5.74 on "Private". The problem is that the two "forbidden" things can't be read as things.

1. The tag on the right edge (x 800, y 640) is about 80 px, and its slate cross sits right on top of it, so at 5.6 s it reads as a scribble on the card's corner. Draw it as a clear paper tag about 150×90 px (cream fill, ink 3 px outline, a punched hole and a short string looped to the card edge). It should hang outside the card's right edge (around x 790–940, y 600–690). Keep the cross at 4.40, drawn 20 px larger than the tag and only after the tag has fully landed.
2. The slip on the top edge reads as a box with an X (it looks like a checkbox) rather than a paper slip tucked inside. Make it a cream slip about 170×120 px with two short grey ink lines on it. Put its lower half behind the card (put the slip under the card's group) so it visibly pokes out of the top. Then draw the cross over the visible half only.
3. The left card is small for its half (at scale 1.4 the left half is mostly empty below y 700). Raise it to scale 1.7 centred at (500, 560), and keep the captions at y 880 clear of it.

The scene lasts 9.60 s: every time in it is between 0 and 9.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s148.html`: one `<section class="vs-scene" id="s148" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
