# Fix animated scene s024

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s024" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s024), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s023.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s024.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The first half works: `value-paper` is in slot 3 at 0.0, and the label and slate cross come on "value रखता हो". After the cut to #reply at 4.40, though, the screen is only the green heading "छूट: वापसी डाक" for about 5 s (4.5–9.5). When the three items do arrive, they sit small in the top half with y 560–1000 empty.
1. Fill the 4.4–9.5 wait. At 7.1 ("जवाब के लिए"), write a line under the heading: "जवाब के लिए prepaid चीज़ें रख सकते हैं" (≥ 40 px, ink). Pop the items' three empty white cards together with that line rather than showing nothing.
2. Make the three item cards fill the content area: about x 160–1760 and y 330–900, each card about 480 × 520. Show `postcard-blank`, `address-envelope` and `open-ended-wrapper` at scale ~1.0, not ~0.6. The wrapper is now too small to read as a wrapper.
3. The `address-envelope` is white on a white card and almost disappears. Give its card the envelope tone #f3ead6, or give the envelope a 3 px ink outline, so it reads.
4. Set the "prepaid card / envelope / wrapper" tags at ≥ 40 px, inside each card's group, 24 px above the card's bottom edge.

The scene lasts 14.24 s: every time in it is between 0 and 14.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s024.html`: one `<section class="vs-scene" id="s024" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
