# Fix animated scene s068

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s068" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s068), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s067.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s068.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The strike on the trap chip and the double-postage point land near their words. Point 4's Cecogrammes detail doesn't read, though: "सामने / ऊपर दाहिने" is set as tiny stacked text (about 20 px) wedged beside "Cecogrammes". The label sketch's lettering, "Envois pour les aveugles", is microscopic, and it's French wording the screen notes don't give (they say the label reads "Cecogrammes"). In point 3 ("देश में / शर्त टूटी: / संबंधित item…") the stacked lines touch.

1. Point 4: write "label सामने, ऊपर दाहिने" as one 34 px line under "Cecogrammes" (36 px Inter bold), at 9.1 on "label सामने". Grow row 4 to fit both lines with at least 12 px between them.
2. The label sketch on the right: change its lettering to "Cecogrammes" (at least 28 px Inter bold on the yellow #fde9a6 strip), and place the strip in the sketch's top-right corner so the picture itself shows "ऊपर दाहिने". `pop` it at 11.0 on "ऊपर दाहिने कोने में". Remove "Envois pour les aveugles".
3. Point 3: put it on one line, "देश में · शर्त टूटी: संबंधित item के postage का दोगुना" (36 px, "का दोगुना" in amber #8a5d00), or give the two lines 1.3× line height and grow the row. "शर्त टूटी:" at 1.8 and the rest at 4.3 is right.
4. The strike on the trap chip lands at ~2 s, but "तो गलत" is at 0.0–1.8. Move the `strike` (and the slate cross) to 0.5, as the storyboard says.

The scene lasts 12.50 s: every time in it is between 0 and 12.50.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s068.html`: one `<section class="vs-scene" id="s068" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
