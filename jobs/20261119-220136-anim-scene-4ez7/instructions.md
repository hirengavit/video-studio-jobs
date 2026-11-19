# Fix animated scene s141

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s141" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s141), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s140.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s141.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The card, the kicker and the chips arrive on their words, and the "extra stamps" highlight lands on its word. The problem is the three price chips: they are squeezed into one 140 px row. The Hindi terms ("पोस्टकार्ड", "पत्र कार्ड", "उभरे टिकट वाला लिफ़ाफ़ा") render at about 24–28 px, and the "₹5" in chip 3 is jammed against its Hindi line. On a phone the prices, which are what the exam asks about, are the hardest thing to read. Rows 3–5 also sit as empty ruled lines for the whole scene.

1. Price chips (row 1): make each chip three lines high (y 280–490), with the English term at 46 px (y 330), the Hindi term at 36 px (y 380) and the price at 56 px bold red (y 455), centred in the chip. Move row 2 down to about y 560 and the later rows to match (rows 3–5 at 670/780/890 in s142–s143).
2. Price timing: keep the prices on their words as now (50 paise 2.04, ₹2.50 4.74, ₹5 6.96). They now pop on their own line, so give each price a `pop` rather than fading it in beside the term.
3. Empty rows: don't draw the ruled separators for rows 3–5 in s141. Fade each one in with its row in s142 and s143, so the card isn't mostly empty ruled lines for 11 s.
4. Row 2 "छपे postage में कमी → extra stamps": keep it at 48 px. Its `words` start at 8.42 is a little early for "छपे" (said at about 8.9), so move it to 8.9.

The scene lasts 12.30 s: every time in it is between 0 and 12.30.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s141.html`: one `<section class="vs-scene" id="s141" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
