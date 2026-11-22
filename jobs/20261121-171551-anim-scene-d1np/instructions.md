# Fix animated scene s088

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s088" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s088), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s087.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s088.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The postmark stamp "DELIVERY पर ₹5" at 0.0 on "Delivery पर ₹5 वसूले" lands the total well and holds. #abroad reads clearly: the "Inland Letter Card" with "देश के अंदर का product" on its words, the printed stamp circled on "छपे postage" (8.70) and the arrow to the globe at 10.16. Two problems. The globe and "विदेश की service" are on screen from 3.24, about 6 s before the voice says "विदेश" (9.1), which breaks "nothing before the voice reaches it". The closing line "विदेश के लिए काफ़ी नहीं" arrives at about 12.06, a little under 1.5 s before the cut, and it's small and pale.
1. Hold the globe and its label "विदेश की service" back until 9.10 (`fade`), so that before then the right half is the arrow's empty destination. Keep the card group where it is.
2. Bring the slate cross and "विदेश के लिए काफ़ी नहीं" in at 11.20 (on "काफ़ी") instead of 12.06, so the verdict gets about 2.4 s.
3. Raise "विदेश के लिए काफ़ी नहीं" to 48 px and give it a stronger pill: slate #4b4f58 text on #f3ead6 with a 2 px slate outline, centred under the globe with at least 24 px clear of the label above.

The scene lasts 13.62 s: every time in it is between 0 and 13.62.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s088.html`: one `<section class="vs-scene" id="s088" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
