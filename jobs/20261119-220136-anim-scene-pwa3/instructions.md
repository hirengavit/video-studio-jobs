# Fix animated scene s102

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s102" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s102), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s101.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s102.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s101 is clean, and rows 3 and 4 land on "Private letter" (0.0) and "address side" (3.8–5.9). The ticks come in on time.

1. The highlight on the row 4 term "top right-hand corner", planned for 6.16 s, never shows. No yellow band can be seen on it at 7.5 s or 9.2 s. Add a highlight sweep (#fde9a6 band behind the text, deep amber #8a5d00 text) on "top right-hand corner" at 6.0 s ("top right-hand corner" is said at 5.9).
2. Row 4 pill "address side · पूरा चिपका": same crammed two-line text as row 2, touching the pill edges with ~28 px Hindi. Make the pill ~110 px tall, with "address side" at 40 px and "· पूरा चिपका" at 36 px, padded ~12 px. Apply the same fix to the row 2 pill carried over from s101 so they match.
3. Row 3 pill "valid postage stamp": the text is ~30 px in a pill made for 40. Set it to 40 px bold, centred.
4. Row 4's Hindi line "ऊपर दायाँ कोना" sits within ~15 px of the card's bottom border. Make the card 30 px taller (y 170–1020) or tighten the row pitch so it has the same margin as the other rows.

The scene lasts 9.89 s: every time in it is between 0 and 9.89.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s102.html`: one `<section class="vs-scene" id="s102" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
