# Fix animated scene s215

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s215" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s215), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s214.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `recap-card` (Recap envelope): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: recap-card: title and seal number; 3 or 4 rows (English term, Hindi term, fact pill); pills can hold a date, a number or a short Hindi phrase.

## What to change

The current file is `inputs/current/s215.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The two update types read clearly. "Demographic update" lands on its word, "personal details / बदलता है" follows at 2.8–4.1 s, and the biometric pill builds "photo · fingerprints · irises" item by item on the spoken words (7.2 / 8.2 / 9.4 s). The problem is continuity: this envelope is not the KEY POINTS envelope from s212–s214, which the storyboard says stays identical through s212–s229.

1. #env: the id-card icon sits beside the title in the flap instead of at the top-left (x 180–330, y 180–330, about 150 px as in s212–s214), and the grey 36 px "ज़रूरी बातें" at top right (x 1720, y 220) is missing. Rebuild the envelope from s212's spec: x 140–1780, y 160–990, the flap V from (140,160) to the tip (960,330) to (1780,160), the title at y 210 in 56 px #9e1b1b, Hindi at y 262, and the seal at the tip. Otherwise, after the wipe, the icon jumps and the label vanishes.
2. #r2-pill: "photo · fingerprints · irises" runs to the pill's right edge with no padding. Set the pill text to 40 px and centre the three parts as one line inside x 900–1600 with at least 24 px of padding each side. Fade the parts in at their places so nothing shifts when "· irises" arrives.
3. #r1-pill: "personal details" / "बदलता है" sit a little high in the 150 px pill. Centre the two lines vertically: 46 px line spacing around the pill's middle.

The scene lasts 10.20 s: every time in it is between 0 and 10.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s215.html`: one `<section class="vs-scene" id="s215" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
