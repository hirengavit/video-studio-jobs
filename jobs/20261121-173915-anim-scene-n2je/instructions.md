# Fix animated scene s162

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s162" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s162), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s161.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s162.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The labels "बंद", "मुड़ा" and "खुला" under the mini icons in step 1 are about 22 px, below the kit's 32 px minimum for Hindi, and can't be read on a phone. Scale the `three-forms-icons` mini row from 0.3 to about 0.5, set the labels to 34 px ('Noto Sans Devanagari', weight 700, ink #2b2622), and place each one under its icon with at least 8 px of clear space. If the row then doesn't fit beside "Product पहचानिए", move it to a second line inside the step-1 row and grow that row's height.
2. The storyboard says the named icon is "lit", but all three icons stay as grey outlines. On "बंद letter" (0.0 s), "मुड़ा letter card" (~1.3 s) and "खुला postcard" (~3.4 s), fill each icon with the envelope colour #f3ead6 and a 3 px ink #2b2622 outline (`fade` 0.3 s), and fade the icons not yet named to the warm grey #6f6a63.
3. When step 1 dims at 4.8 s, keep the three labels at full ink with the icons filled, so the product idea stays readable as the list grows. Only the step-1 title goes to the supporting colour.

The scene lasts 10.74 s: every time in it is between 0 and 10.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s162.html`: one `<section class="vs-scene" id="s162" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
