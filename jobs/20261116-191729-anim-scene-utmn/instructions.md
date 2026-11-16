# Fix animated scene s078

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s078" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s078), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s077.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s078.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The #licence sub-shot works: the cut at ~5.5 s is planned (that is the "jump" the check found), "Postal registration" lands at 7.19 (said 7.0) and the red "अलग licence" at 9.99 (said 8.8–11.5). The #track half is the problem. The scene's idea is "Bulk cash is the reverse", but the second track is a thin one-line strip under two big cards. Its "पैसा पहले → posting" has no icons and the "उल्टा" tag is ~28 px at the far right, so the reversal doesn't read against the big first track.
1. At 0.0, `move` the existing two-card track up by [0, -40] and scale its group to 0.85 so the Bulk cash row can be ~220 px tall (y ≈ 760–980) instead of a ~45 px strip.
2. Build the Bulk cash row as a mirror of the first track: a "Bulk cash" label at 44 px on the left, then a `rupee-cash` icon with "पैसा पहले" (pop at 1.64), a red arrow (draw at 4.14), and the office icon with "posting" (4.14), each in the same positions as the cards above, so the reversed order shows by position.
3. Make the "उल्टा" tag a highlight-yellow pill with 48 px bold text, placed between the two tracks on the left edge (x ≈ 120), and `stamp` it at 1.64 on "उल्टा है" instead of at 4.14, so the key word lands on its word.
4. In #licence, show the "डाक पंजीकरण" gloss together with "Postal registration" at 7.19 rather than later, so the chip doesn't change after it has arrived.

The scene lasts 12.33 s: every time in it is between 0 and 12.33. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s078.html`: one `<section class="vs-scene" id="s078" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
