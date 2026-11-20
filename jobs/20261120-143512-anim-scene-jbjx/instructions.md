# Fix animated scene s008

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s008" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s008), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s007.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `mail-flow` (Mail flow): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: mail-flow: 3 to 5 stops with their icons, English and Hindi labels; which stop is highlighted; the bottom note or drop it..

## What to change

The current file is `inputs/current/s008.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The wipe opens Part 1 correctly. The Packing term card is on screen from the first frame, the definition writes on with "article को ढककर बचाना" (~1.4 s), and "सुरक्षित" is highlighted on its word. The route label lands on "सफ़र के चार पड़ाव" (~8.4 s), and stops 1–3 land on their words. Two things a viewer would notice. Stop 4 arrives late: the voice says "delivery" at ~13.0 s, but the stop pops at 14.08 s (the still from 12.6–14.08 s is the gap). And the Hindi stop labels (संग्रहण, छँटाई, परिवहन, वितरण) are grey at about 26–28 px, below the kit's 32 px minimum and unreadable on a phone.

1. Move the arrow draw plus stop 4 "Delivery / वितरण" from 14.08 s to 12.95 s, on the word "delivery".
2. Set the four Hindi stop labels to 36 px Noto Sans Devanagari in #6f6a63, 1.3 line height below the English. Raise the English labels to 40 px, as the storyboard asks; they currently render ~32 px.
3. Scale the four stop circles 1.2× about their centres (x 330/750/1170/1590). This uses the empty band at y 880–980 and keeps the arrows between the circles.

The scene lasts 15.12 s: every time in it is between 0 and 15.12.

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
