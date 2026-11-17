# Fix animated scene s126

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s126" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s126), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s125.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s126.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Row 3 "पास की डाक फाड़ती है" pops on "फाड़" (1.4 s), and the cut to the "मना है · NOT ALLOWED" card lands on "Letter" (2.9 s). The clips and staples chips follow "clips" and "staples", and the slate crosses use slate, never red, as the kit asks. "बिना ढका धारदार औज़ार" comes on its words (6.6–8.7 s) and its cross follows on "मना है". The stills are reading holds, which is intended. The text is small: the Hindi translation "पत्र लिफ़ाफ़ा" under "Letter envelope" is about 22 px. The row icons are also small, and two empty rows sit below, the last of which is never used in s127 either.

1. "पत्र लिफ़ाफ़ा": raise to 34 px (#6f6a63), about 42 px under "Letter envelope" (raise that to 48 px). Make each row about 140 px tall so both lines fit without touching the band.
2. Scale the row icons (envelope, blade) up about 1.5×, so they read at about 90 px wide at x 220.
3. Draw only 3 row bands, spread evenly over y 330–900, since the card only ever holds 3 items (row 3 arrives in s127). Show row 3's band with its text in s127, not as an empty band now.

The scene lasts 10.00 s: every time in it is between 0 and 10.00.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s126.html`: one `<section class="vs-scene" id="s126" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
