# Fix animated scene s014

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s014" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s014), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s013.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s014.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The chips land on their words and the five slate crosses draw on "नहीं डाले" (~10.6 s), which is the right verdict colour, with no red. But the "अपनी रोक" note is placed so that it reads as belonging to Periodical post alone, and the glosses are too small.

1. "अपनी रोक" sits only on chip 4, but the voice says all four (Accountable, franked, registered newspaper, periodical post) "की अपनी रोक है". Remove it from chip 4. At ~6.5 s, draw one ink bracket (3 px #2b2622, rounded ends) along the right of chips 1–4. Put the amber "अपनी रोक" note beside the bracket's middle, outside the chips (x ~1530–1760). That is the screen's one annotation. Small packets stays outside the bracket.
2. Raise the Hindi glosses under each chip ("जवाबदेह डाक", "फ्रैंक की गई डाक", "पंजीकृत समाचार-पत्र", "आवधिक डाक", "छोटे पैकेट") from ~26 px to 36–40 px. To make room, grow the chips from ~130 to ~140 px and tighten the gap. The column fits y 250–990.
3. Chips 1–3 currently land at 0.0, 0.6 and 1.6 s, while the voice reaches "registered newspaper" only at ~2.0–2.8 s. Move chip 3 to ~2.0 s so it doesn't show before it is said.

The scene lasts 11.45 s: every time in it is between 0 and 11.45.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s014.html`: one `<section class="vs-scene" id="s014" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
