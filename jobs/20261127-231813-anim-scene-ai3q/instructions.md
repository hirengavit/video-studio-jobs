# Fix animated scene s216

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s216" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s216), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s215.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `recap-card` (Recap envelope): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: recap-card: title and seal number; 3 or 4 rows (English term, Hindi term, fact pill); pills can hold a date, a number or a short Hindi phrase.

## What to change

The current file is `inputs/current/s216.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

All four rows land on their spoken words. Forms 1 · 3 · 5 build on "1, 3 और 5", "5 साल से कम" is followed by "fingerprints और iris नहीं" at 4.8 s, "MBU" / "5 और 15 साल" lands at about 7–8 s, and "Free MBU" / "अकेला transaction" at 9.7–11 s. The ticks follow each one. The cut from s215 matches, but both scenes use an envelope that differs from the one in s212–s214.

1. #env: use the KEY POINTS envelope from s212 (identical in s212–s229). Put the id-card icon at the top-left (x 180–330, y 180–330, about 150 px) instead of beside the title. Add the grey 36 px "ज़रूरी बातें" right-aligned at x 1720, y 220. Use the same envelope box (x 140–1780, y 160–990), the same flap V and the same title sizes (56 px title at y 210, 40 px Hindi at y 262).
2. #r1-pill: "Form 1  · 3 · 5" has a wide gap after "Form 1" because the three parts are separate pieces placed at fixed spots. Place "· 3" and "· 5" directly after the measured width of "Form 1", with one space each, so the final line reads "Form 1 · 3 · 5", centred in the pill.
3. #r3-hi "अनिवार्य बायोमेट्रिक अद्यतन" and the other Hindi glosses here look smaller than in s212–s214. Use 40 px Hindi beneath each term, as the shared envelope spec says.

The scene lasts 12.96 s: every time in it is between 0 and 12.96.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s216.html`: one `<section class="vs-scene" id="s216" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
