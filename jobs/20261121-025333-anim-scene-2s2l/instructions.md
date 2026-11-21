# Fix animated scene s069

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s069" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s069), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s068.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s069.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

For the first 6.5 s the screen is only a one-line heading, a small pill and a clock icon about 40 px across, and the remaining 80% of the frame is empty while the whole first sentence is spoken. The three cards then sit in the lower half. Cards 2 and 3 also arrive before their words: "कुछ चुने हुए offices" is said at 8.6 and "RMS mail vans" at 10.7, but the cards are up by 8.4 and 9.8. The kit says nothing shows before the voice reaches it.

1. Make the clock the anchor for 0–6.5 s: place it large (about 260 px) centred in the empty area below the heading, and turn its hands one step at 2.2 s on "तय घंटों में". At 6.3 s, slide it back to its small spot beside the heading (`move`, 0.6 s) before card 1 arrives. If moving it is too much, at least scale the clock up beside the heading to about 120 px.
2. Retime the cards to their words: card 2 ("चुने हुए offices") at 8.6 s and card 3 (mail van draws) at 10.7 s. Keep card 1 at 6.5 s.
3. Make the three cards fill the space under the heading: grow them to about y 430–940 with even side margins. That means a larger icon (one scale number) and labels of 48 px or more, instead of the short cards that leave a band of empty canvas under them.
4. Fill the mail-van body in postal red #9e1b1b instead of slate grey. Slate means wrong or rejected in this kit, and these vans are an allowed place.

The scene lasts 13.94 s: every time in it is between 0 and 13.94.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s069.html`: one `<section class="vs-scene" id="s069" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
