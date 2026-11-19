# Fix animated scene s181

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s181" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s181), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s180.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s181.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam matches s180, the beats land on their words (the date stamps at 2.38 against "2 September" at about 2.6; the tag at 4.42 against "ये नया"), and the still stretches are reading holds. What needs fixing is mainly text size:
1. ", Madhya Pradesh" is about 36 px and "मध्य प्रदेश" beneath it is under 32 px. Raise the English to 44 px bold and the Hindi to 36 px. If the line overflows the card, put Madhya Pradesh on its own line under Shivpuri at x ≈ 1240.
2. The postmark's "September 2026" is about 32 px. Grow the postmark to its planned size (1380–1740 × 560–860, about 360 px across), set "2" to 64 px and "September 2026" to 44 px, and keep it clear of the "Foundation stone" highlight band (at least 24 px gap).
3. The yellow tag "नया केंद्र बन रहा है" is about 32 px and sits under the stone rather than on it. Set it to 40 px and place it on the stone's front face (the storyboard says "on the stone"), as part of the stone's group.
4. The stone is small and floating, as in s180. Use the same larger scale and ground line so the two scenes match.

The scene lasts 9.24 s: every time in it is between 0 and 9.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s181.html`: one `<section class="vs-scene" id="s181" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
