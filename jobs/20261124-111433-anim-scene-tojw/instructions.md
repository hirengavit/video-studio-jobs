# Fix animated scene s038

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s038" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s038), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s037.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `formula-card` (Formula card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: formula-card: the formula, its name and the letter key; the question (English + Hindi) and 2 to 3 working lines; the answer; the cream follow-on box or drop it. Keep the working in Georgia and the numbers right..

## What to change

The current file is `inputs/current/s038.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The roll shrinks to the left at 0–0.6 s, but the working card only arrives at 7.22 s. For about 6.5 s the right half of the screen is empty, and the roll is small while the voice is still talking about it ("diameter 160 mm", "लंबाई 800 के अंदर है, ठीक"). Move the roll's `move`/`grow` to 6.9 s (dur 0.5), just before the card appears, so the roll stays big through 0–6.9 s.
2. After the shrink, the roll's labels scale with it to about 16–20 px: "700 mm", "एक किनारे से दूसरे तक" and "बीच से होकर दूरी" can't be read on a phone. Take the two captions `out` at 6.8 s (they've done their job). Keep "700 mm" outside the scaled group, at 36 px, above the small roll's length line.
3. The shrunk roll is smaller than planned (about x 200–720 against the storyboard's x 120–860). Scale it to fill x 120–860, centred vertically against the working card (y 260–940), so the left column isn't mostly empty.
4. Put the "Diameter · 160 mm" pill under the big roll at 1.10 s, on "160", and let it travel with the roll when the roll shrinks.

The scene lasts 12.16 s: every time in it is between 0 and 12.16.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s038.html`: one `<section class="vs-scene" id="s038" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
