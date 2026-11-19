# Fix animated scene s166

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s166" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s166), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s165.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s166.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade fits a new screen, and the headers come in on "तीन payment, वज़न और size" (3.2) and "तीन card की बनावट" (5.5–7.3). The Size row lands on "Size ठीक 140 by 90" and Weight on "अधिकतम 5 grams". The long stills are reading holds. The issue is size: both panels are about 70% empty for the whole scene, the rows are small, and the Hindi sub-labels fall below the kit's 32 px. (Keep the same sizes in s167, which continues this screen.)

1. Left panel rows: make each row about 270 px tall (row 1 y 420–690, row 2 y 710–980) so they fill the panel. Scale the small `postcard-blank` and `letter-scale` icons about 1.6× to roughly 200 px wide.
2. Set the row text to term "Size" / "Weight" 52 px, Hindi "आकार" / "वज़न" 36 px, and values "ठीक 140 × 90 mm" / "अधिकतम 5 grams" 56 px bold. The value is the exam fact and should be the biggest text in the row.
3. Raise the panel header Hindi lines ("भुगतान · वज़न · आकार") from about 28 px to 36 px, with 1.3 line height under the English header.
4. Right panel: until its rows arrive in s167, draw it in the envelope surface colour #f3ead6 with the header "card की बनावट" at 52 px. That way it reads as "coming next" rather than an empty white box.

The scene lasts 14.88 s: every time in it is between 0 and 14.88.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s166.html`: one `<section class="vs-scene" id="s166" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
