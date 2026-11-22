# Fix animated scene s022

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s022" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s022), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s021.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s022.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s021 is clean, the printed "50 p" is highlighted, and the sum card "ज़रूरी − छपी value = फ़र्क → extra stamps" lands on "फ़र्क". But the key action, extra stamps topping up the printed value, is almost invisible: the adhesive stamps are about 60 px and land beside the letter card's stamp, not the postcard's. The cut to `#sum` at 7.62 also comes while the voice is still on "extra stamps लगाकर पूरा कीजिए" (until about 9.0), so the stamps are on screen for only about 2.5 s. The summary screen then shows one row and leaves the lower half empty for 5 s.

1. In `#stamps`, scale the stationery up so the postcard is the main object: postcard at scale 1.6 centred x 1300, y 600, with the letter card behind it reduced and greyed to 40 %. The storyboard asks for the postcard big.
2. Make the two `adhesive-stamp`s fall onto the postcard, just left of its printed "50 p" stamp, at scale so each is about 130 px tall. Use `fall` `by: 200` with stagger 0.2, starting at 6.2 on "extra stamps".
3. Move the `#sum` shot change from 7.62 to 8.7, so the topped-up postcard holds for at least 2.5 s and the summary opens just before "Letter" (9.0).
4. On `#sum`, raise `three-forms-icons` from scale 0.6 to 0.8 and move the heading and rows down so row 1 sits at y 520. The four rows (rows 2–4 arrive in s023) then fill y 520–940 evenly instead of crowding the top.

The scene lasts 12.70 s: every time in it is between 0 and 12.70.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s022.html`: one `<section class="vs-scene" id="s022" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
