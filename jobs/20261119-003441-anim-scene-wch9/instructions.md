# Fix animated scene s024

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s024" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s024), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s023.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `cause-chain` (Chain of stages): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: cause-chain: 3 to 4 stages; swap the icons (envelope, sorting rack, van, house) for any flat ink icon; the bottom note in English plus Hindi; which card is the outcome.

## What to change

The current file is `inputs/current/s024.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Chip 1 "postal services के लिए ज़रूरी गतिविधियाँ" pops at 7.58 s, after its words are already said ("postal services" at 5.9, "ज़रूरी" at 7.6). The panel sits empty for 3 s. Move the chip `pop` to 5.9 s and the panel `slide` up to 4.0 s so the panel arrives with its label and is filled on the spoken words.
2. "बनाने की शक्ति" is a tiny (~24 px) yellow pill at y ~180, almost under the series pill, far from arrow 2. Set it to 36 px and place it centred over arrow 2 (x 1230). Move the chain down to y 260–640 so the label sits at y ~225 with clear space above the cards and below the frame's header.
3. The act card's "Post Office Act 2023" runs edge to edge in the 520 px card. Set it on two lines ("Post Office Act" / "2023") at 48 px, or drop it to 42 px, so there is at least 24 px margin on each side.
4. Panel label "ये Regulations बनते हैं:" is ~30 px in the fold corner. Raise it to 40 px (Hindi at 1.3 line height) and centre it vertically in the panel's left part. Grow chip 1 to 48 px so it fills more of the panel's right part.
5. The card icons barely read: the act card's document icon is pale grey lines and the DG card's plate is a thin sliver. Scale both to ~160 px with full-ink 3 px outlines so the three cards balance the 200 px regulations book.

The scene lasts 9.31 s: every time in it is between 0 and 9.31.

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
