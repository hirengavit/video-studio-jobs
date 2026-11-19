# Fix animated scene s200

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s200" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s200), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s199.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `recap-card` (Recap envelope): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: recap-card: title and seal number; 3 or 4 rows (English term, Hindi term, fact pill); pills can hold a date, a number or a short Hindi phrase.

## What to change

The current file is `inputs/current/s200.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Row 4 completes point 3: "Major General rank" lands on its words and "ADG" is stamped on "ADG", which stays readable about 3 s. The change to point 4 works: postmark 3 turns green, 4/6 is stamped, #env3 leaves and #env4 slides up with its title on "Headquarters की जोड़ियाँ". The Gujarat–Ahmedabad and Haryana–Ambala Cantt pairs land on their words. The still stretches are reading holds.
1. In #env4 the pair rows are under-sized. The state and city names render near 44 px, not the planned 56 px bold. The Hindi beneath (गुजरात, अहमदाबाद, हरियाणा, अंबाला कैंट) is below the kit's 32 px minimum and will not read on a phone. Set the EN names to 56 px bold and the Hindi to 36 px #6f6a63 with 1.3 line height. Grow each pair row to about 125 px tall (rows y 470/600/730 left, 450/575/700/825 right as planned), and use the column width 180–880 for the state at left and the pin + city at right.
2. Pill colour: "Major General rank" is yellow (#fde9a6) and "ADG" beside it is beige, so the two read as different kinds of fact. Set both to #f3ead6 (2 px #ead9a8 edge), matching the other envelopes. Keep yellow only for highlights.
3. The small green tick sits up and to the left of the pin, crowding the city name. Move it to the right end of each pair row (about x 860 in the left column), the same tick column position as in the earlier envelopes.

The scene lasts 10.34 s: every time in it is between 0 and 10.34.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s200.html`: one `<section class="vs-scene" id="s200" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
