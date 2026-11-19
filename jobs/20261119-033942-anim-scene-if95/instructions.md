# Fix animated scene s202

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s202" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s202), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s201.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `recap-card` (Recap envelope): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: recap-card: title and seal number; 3 or 4 rows (English term, Hindi term, fact pill); pills can hold a date, a number or a short Hindi phrase.

## What to change

The current file is `inputs/current/s202.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. From 2.60 to 7.41, #env5 is a big empty envelope, and the point's sentence "हर Circle अपनी तय सीमा में सेवा देता है"
   sits small on the flap while the voice says it (the check's still at 2.98–7.44). Write the title `words` at 3.07
   centred in the empty body instead (Hindi 64 px bold, heading red, x 960, y 640), keep the `highlight` on "तय सीमा"
   at 4.75, then at 6.90 `move` it (0.4 s, ease) to its flap position and size, so it lands before "Goa" arrives at 7.41.
2. The completed "North East → Shillong" row is on screen for only about 1.1 s before #env4 goes `out` at 2.47 (kit:
   hold never under 3 s if you can). Bring the pin `pop` + "Shillong" forward from 0.88 to 0.55 and "शिलांग" to
   1.00, and move postmark 4 green, postmark 5 `stamp` and #env4 `out` from 2.47 to 2.70, with #env5 `slide` at 2.80.
   The title still starts on its words at 3.07.

The scene lasts 12.95 s: every time in it is between 0 and 12.95.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s202.html`: one `<section class="vs-scene" id="s202" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
