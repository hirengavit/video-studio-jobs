# Fix animated scene s028

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s028" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s028), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s027.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `exam-trap` (Exam trap): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: exam-trap: the banner sentence, the two cards' labels, names, Hindi lines and stamp numbers or short codes (up to about 4 characters), which card is the trap, the underlined words, the remember bar.

## What to change

The current file is `inputs/current/s028.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Row 3 answer card (1220–1820 × 800–1010): "Director General Postal Services" is set at about 44 px, and "महानिदेशक डाक सेवाएँ" at about 26 px, under the kit's 32 px Hindi minimum and pressed against the card's bottom edge. They are visibly smaller than rows 1–2. Set the English to 52 px on two lines ("Director General" / "Postal Services", line height 60) and the Hindi to 38 px, and centre the block vertically in the card (first baseline y ≈ 868, second ≈ 928, Hindi ≈ 980), leaving room for the green tick at x ≈ 1780.
2. At 9.0 s the row 3 answer card shows only "Director General" at its top for about a second. Pop the full two-line English as one group at 8.50 s, then fade the Hindi in at 9.60 s as planned, so the card never looks half-written.
3. Row 2 answer (4.28 s): bring the Hindi "सचिव (डाक)" in at 4.60 s and not later, so it lands while "तब भी Secretary (Posts)" is still being said (3.9–5.6 s).

The scene lasts 11.28 s: every time in it is between 0 and 11.28.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s028.html`: one `<section class="vs-scene" id="s028" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
