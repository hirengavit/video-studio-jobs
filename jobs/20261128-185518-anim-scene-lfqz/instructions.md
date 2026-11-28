# Fix animated scene s054

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s054" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s054), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s053.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s054.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Line 2 "जमा रहकर compound होता रहे" completes the myth, and it is struck before the cut. The #where build ends well: passbook with coin, phone "ब्याज", Post Office Savings Account card, Bank account card. Three problems remain. The red title "ब्याज जाता कहाँ है?" is centred at y 210, which jams it against the red POSB pill (about 40 px gap) and crowds the header. From 3.0 s to 7.3 s the screen holds only the title and the date pill, about 4 s of near-empty canvas while the voice already says "TD का ब्याज". And the phone's small arrow points up and away from the account cards, so the flow passbook → phone → account doesn't read.

1. Move the title "ब्याज जाता कहाँ है?" down and left so it no longer crowds the series pill. Left-align it at x 160, y 250, and move the date pill "1 April 2022 से" to sit right of the title on the same baseline (x 900–1300, y 220–290).
2. Pop the TD passbook at 5.7 s ("1 April 2022 से", with the date pill) instead of 7.31, and place the coin on it at "TD का ब्याज" (≈8.1 s). The screen then builds while the voice talks about TD interest.
3. Replace the small ↗ arrow by the phone with a clear ink arrow (3 px, rounded) from the phone's right edge (x 1010, y 640) to the left edge of the Post Office Savings Account card (x 1190, y 520). Draw it at 9.88 s on "linked". When the bank card pops at 12.84 s, add a second arrow branch to it (x 1190, y 800).
4. Scale the passbook up so it matches the phone's visual weight: x 140–420, y 420–790.

The scene lasts 13.89 s: every time in it is between 0 and 13.89.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s054.html`: one `<section class="vs-scene" id="s054" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
