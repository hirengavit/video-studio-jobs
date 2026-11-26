# Fix animated scene s140

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s140" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s140), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s139.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-cards` (Compare cards): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-cards: question (English + Hindi), the two names, full names and Hindi names, two labelled facts per card (dates, who, limit, rule), the takeaway; which band is red or yellow; no right/wrong colours unless one is actually wrong (then slate strike, green tick).

## What to change

The current file is `inputs/current/s140.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea is right. Domestic (red) and International (yellow) appear side by side, the shared chips "Recall · Redirection" pop near "recall और redirection" (2.1–4.3 s), a VS disc lands at about 6.5 s on "पर", and the band "request के नियम अलग" lands on "नियम, अलग हैं" (7.4). The stills are reading holds. The problem is that the cards are mostly empty, and the takeaway lands late in a short scene.

1. Use the frame. The two cards fill only about y 340–800, so the white space inside them is mostly empty and y 800–1000 stays empty until 7.8 s. Make each card about 740×540 (y 300–840). Keep the band at y 880–960.
2. Enlarge the icons so they read on a phone. `house-icon` is about 100 px: set it to scale 0.9 (about 200 px). `icon-globe` at scale 0.4 is pale and nearly invisible on white: set it to scale 0.8 (about 200 px), at full opacity with its 3 px ink outline. Centre each icon above its Hindi line, with even gaps.
3. Takeaway band "request के नियम अलग": set the text to 52 px as the storyboard says (it reads about 40 px now) and make the band about 110 px tall. `reveal` it at 7.4 s, on "नियम", rather than 7.84 s, so it holds at least 2 s before the cut.
4. Make the chips "Recall" and "Redirection" 44 px (they read about 36 px) so they read as the shared words of the scene.

The scene lasts 9.29 s: every time in it is between 0 and 9.29.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s140.html`: one `<section class="vs-scene" id="s140" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
