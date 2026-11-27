# Fix animated scene s208

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s208" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s208), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s207.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s208.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s207 is exact, and card 3's rest reveals as the voice continues "दूर-दराज़ और पिछड़े इलाकों तक पहुँच". #servicesA and #servicesB together show all seven services from the screen notes (Savings accounts, PLI और RPLI, IPPB, Direct Benefit Transfer, Aadhaar, e-commerce, Export facilities), with English first and Hindi beneath, and the "4 + 3 = 7 सेवाएँ" footer. The count is correct. The problem is that "IPPB" and "Direct Benefit Transfer" pop at 7.00 and the shot cuts to #servicesB at 8.14. They are on screen for only about 1.1 s, which is far below the kit's 3 s reading hold. A viewer can't read them, and they are two of the seven items the notes require.

Fixes:
1. Bring IPPB and Direct Benefit Transfer in earlier, so the 2×2 grid is complete for about 2.5 s before the cut. `pop` "IPPB" at 5.55 and "Direct Benefit Transfer" at 5.90 (`{stagger: 0.35}`), with their Hindi lines in the same pop. Keep "PLI और RPLI" at 4.98, and move its Hindi from 6.50 to 5.20 so all four cards are complete by 6.0. The voice doesn't name these two, so no word cue is lost.
2. Keep the #servicesB cut at 8.14 on "Aadhaar". Don't push it later.
3. PLI card's Hindi ("डाक जीवन बीमा · ग्रामीण डाक जीवन बीमा") reads at about 30 px on two lines. Set it to 36 px with line height 1.3; the 300 px tall card has room.

The scene lasts 11.29 s: every time in it is between 0 and 11.29.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s208.html`: one `<section class="vs-scene" id="s208" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
