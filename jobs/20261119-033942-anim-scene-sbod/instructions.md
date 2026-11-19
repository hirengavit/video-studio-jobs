# Fix animated scene s182

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s182" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s182), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s181.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `exam-trap` (Exam trap): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: exam-trap: the banner sentence, the two cards' labels, names, Hindi lines and stamp numbers or short codes (up to about 4 characters), which card is the trap, the underlined words, the remember bar.

## What to change

The current file is `inputs/current/s182.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The green "6 चल रहे" pill at 3.02 is on screen for only about 1.1 s before the cut to #guide at 4.18, and no frame shows it. It's the answer to the trap, and the kit needs at least 3 s to read it. Move the #guide cut to 4.80 (on "Post Office Guide"), the `words` title to 4.95 and the Hindi to 5.60, and pop the green pill at 2.90.
2. The strip slides up over the white card (strip y 800–990 against card y 220–980): Shivpuri and Madhya Pradesh are hidden, and the yellow "नया केंद्र" tag disappears without leaving. Either shrink the white card's bottom to y ≈ 760 before the strip arrives (a `move`/resize at 0.0), or fade the stone, card and tag to the supporting colour and place the strip below them, so no container sits over another.
3. Make the strip's pills match the beat: the pills are small (about 40 px text) in a wide strip. Set "7 चल रहे" and "6 चल रहे" to 52 px and place them side by side (left at x 160–700, right at x 760–1300) so the struck 7 and the green 6 are seen together.
4. The row note "inland postal rules और regulations" is about 36 px. Set the row descriptions to 44 px (English) / 40 px (Hindi), starting at x ≈ 880, so they read on a phone.

The scene lasts 12.58 s: every time in it is between 0 and 12.58.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s182.html`: one `<section class="vs-scene" id="s182" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
