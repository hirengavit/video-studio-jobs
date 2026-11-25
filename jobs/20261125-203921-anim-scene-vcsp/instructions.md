# Fix animated scene s124

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s124" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s124), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s123.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s124.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The section label doesn't fit: "PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT" runs under the PRODUCTS pill and shows as "…THE AMOU". It also differs from s123's "PART 7 · SENDER PAYMENT AND AMOUNT CHANGES" within the same Part, and the kit says the label changes only with the section. Set data-section="PART 7 · SENDER PAYMENT AND AMOUNT CHANGES" (same as s123) so it fits and stays the same.
2. Fix the coin's path and where it stops. At 6.8 s the coin moves at step 3's height (between the two lines), not along the money line, and at 8.8 s it ends on the sender's shoulder. Make it a two-part `move`: first down onto the money line (y of #line-money, about 0.3 s), then left along it by about [-1000, 0] over 1.2 s. It should stop just right of the line's arrowhead, beside the sender (about 40 px clear of the person-icon), not over the body.
3. The coin is too small for the moment the scene is about (about 50 px across at 1920 width). Scale the rupee-coin to about 1.0 (120 px) for this scene, so "sender को पैसा भेजता है" (7.3 s) is easy to see on a phone.
4. The cash bag's string touches the money line at (1500, ~690). Move the cash-bag down about 40 px (base y about 900) and keep "हिसाब" under it, so the bag rests clear of the line.
5. Time the step-4 colour to the voice: start the yellow `color` on #step-4 at about 5.9 s ("booking के लागू तरीके से"), not 3.7 s. At 3.7 s the voice is still on "फिर office". Bring the grey "booking के लागू तरीके से" label in on the same beat.

The scene lasts 8.85 s: every time in it is between 0 and 8.85.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s124.html`: one `<section class="vs-scene" id="s124" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
