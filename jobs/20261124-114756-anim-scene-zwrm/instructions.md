# Fix animated scene s153

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s153" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s153), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s152.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-cards` (Compare cards): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-cards: question (English + Hindi), the two names, full names and Hindi names, two labelled facts per card (dates, who, limit, rule), the takeaway; which band is red or yellow; no right/wrong colours unless one is actually wrong (then slate strike, green tick).

## What to change

The current file is `inputs/current/s153.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is a clean cut to a new screen that fits the cut. Heading and both coloured bands are there from the first frame, and the two rule lines land on their words ("संबंधित postal item" 7.0, "postage का दोगुना" 9.4). The still stretches are intended reading holds. The problem is that both card bodies (about y 400–840) sit completely empty for 6.6 s, and the right card stays empty for the whole scene. The one line that does arrive is small for the space it has.

1. Card body text is too small for a phone: set "संबंधित postal item के" to font-size 48 (now about 36 px) and the yellow "postage का दोगुना" pill text to 56, with the pill widened to about 640 px to match. Centre the two lines in the card body (y ≈ 520 and 640) instead of crowding them under the band.
2. Fill the empty bodies while the voice says "दोनों services के breach के नियम": put each card's icon (`braille-book-icon` / `gyan-post-book-icon`) at scale 0.8 in the lower half of its body (centre y ≈ 740) from 0.0. When the left text lands at 6.66, `fade` the left icon to opacity 0.35 so it doesn't compete. This is the Part 8 "both books side by side" picture the notes ask for, and at 0.3 inside the bands it isn't readable.
3. Bring "postage का दोगुना" in at 9.4 (the word time), not 9.94. Use `pop` on the pill group with its text inside.

The scene lasts 11.76 s: every time in it is between 0 and 11.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s153.html`: one `<section class="vs-scene" id="s153" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
