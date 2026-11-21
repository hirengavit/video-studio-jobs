# Fix animated scene s003

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s003" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s003), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s002.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s003.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Seam with s002 (Continues: s002, a cut): at 0.0 the box jumps from x≈700 to x≈380, the badge jumps from the lower right (1450, 640) to the top middle, and "Public डाक डालती है" vanishes. Start the frame exactly as s002 ended (box base (700, 960), badge at (1450, 640) with its caption, label at the right). Then, from 0.0 to 0.4, `fade` the label out and `move` the box by [-320, 0] and the badge to its flow position (spring soft), so the bag draws on at 0.44 into the finished layout.
2. #term: remove the "TERM · शब्द" lettering at the top of the stamp card. The kit forbids English labels such as KEY TERM, and the card needs no label. The term itself is the label.
3. #term: the red stamp card sits empty for about 3 s (5.42 to 8.58) while the white line builds. Keep the card, but write "Clearance" onto it at 7.9, slightly before the planned 8.58, so it lands as the voice reaches "clearance" in "डाक निकालने को clearance" (≈8.2–8.6). Fade "निकासी" in 0.5 s after it.
4. Flow shot: "डाक व्यवस्था" is printed only on the post-office sign, at about 30 px, too small for a phone. Add a caption under `post-office-front` at about (1450, 760), 52 px, Noto Sans Devanagari, ink, `words` on 3.42. The sign can stay as decoration.

The scene lasts 10.14 s: every time in it is between 0 and 10.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s003.html`: one `<section class="vs-scene" id="s003" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
