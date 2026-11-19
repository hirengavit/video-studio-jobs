# Fix animated scene s157

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s157" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s157), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s156.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s157.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s156 is exact. The sand bar and the "हमेशा अलग" underline land on the words. The `#breach` row is a clear cause → effect, and the slip sticks out of the card's top, so it reads as "something inside".

1. The postmark's Hindi "माना जाता है" is about 22 px, so it can't be read on a phone, and the ring covers most of the envelope. Scale the postmark ring up so "Letter" is 40 px and "माना जाता है" is 32 px. Set it overlapping only the envelope's top-right corner (about a third of the ring off the envelope), tilted about −8°.
2. From 5.0 to 7.9 s the screen is only the small question at the top-left, over an empty canvas. Bring the letter card with its slip in at 5.6 s, on "शर्त टूटी", instead of 7.89 s. Keep the arrow and envelope on their words (8.85 s).
3. The envelope is smaller than the folded letter card beside it, so the scale looks off. Set `envelope-article` to scale 1.1, centred at (1400, 420), so it is at least the letter card's size. Keep "Letter · पत्र" 40 px beneath it, inside y170–560.

The scene lasts 10.73 s: every time in it is between 0 and 10.73.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s157.html`: one `<section class="vs-scene" id="s157" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
