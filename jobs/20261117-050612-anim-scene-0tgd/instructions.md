# Fix animated scene s115

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s115" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s115), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s114.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s115.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Jewellery types on its word (0.28), and the metal pills stagger onto "सोने, चाँदी या platinum" (4.78–6.0). The cut to shot B on "अब insurance की limit" (7.99) is the intended section turn, so the "jump at 8.06" note is fine, and so is the still after it (the voice is speaking the title). The jewellery card's lines are the problem. "घड़ियाँ भी:   case   पूरा या ज़्यादातर" breaks into three loose fragments with wide gaps, and those fragments plus the सोना / चाँदी / platinum pills render at about 22 px.

1. Jewellery card: replace the three spaced fragments with one line, "घड़ियाँ भी: case पूरा या ज़्यादातर", at 32 px Noto Sans Devanagari with normal word spacing. Keep the `words` reveal from 1.22 so "case पूरा या ज़्यादातर" still lands around 3.1–4.8.
2. Jewellery card: enlarge the metal pills so their text is 32 px (pill height about 52 px, 16 px gap between pills), on a row below the watch line with at least 16 px clearance from the card's bottom edge.
3. Keep the 32 px sizes from the s113/s114 fixes in cards 1–3 so the full grid still reads at the 7.6 s hold before the cut.

The scene lasts 9.57 s: every time in it is between 0 and 9.57.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s115.html`: one `<section class="vs-scene" id="s115" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
