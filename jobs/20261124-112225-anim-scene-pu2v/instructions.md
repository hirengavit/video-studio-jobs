# Fix animated scene s066

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s066" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s066), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s065.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `step-list` (Step list): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: step-list: 3 to 4 steps (bilingual screens hold fewer); the closing chip (a rate with its quarter, a fee, a time limit) or drop it; move the highlight to the key word, written as its own text so the band fits.

## What to change

The current file is `inputs/current/s066.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The #fees half inherits s065's gap: row 4 still has only "आगे नहीं भेजा जाता", and at 3.2 the green line "शर्तें पूरी करके फिर से post कर सकते हैं" is squeezed onto the bottom edge of row 4 at about 24 px, touching the panel border. The cut to #exam at 6.07 is right. But the Exam angle card shows four numbered rows with 2–4 empty for the rest of the scene and through s067/s068. Point 1's right column also adds a small extra line, "SAL / air: जहाँ लागू हो, अलग शुल्क", that the voice doesn't say and the storyboard doesn't plan; at about 26 px it's unreadable on a phone.

1. Row 4 of #fees: once s065 adds "→ sender को वापस" and the delivery sub-line, put "शर्तें पूरी करके फिर से post" as a third line (green #2e7d4f, 34 px, at 3.23, `reveal` from the left). Grow the row 4 panel so this line sits at least 16 px inside its bottom edge.
2. #exam point 1: delete the "SAL / air: जहाँ लागू हो, अलग शुल्क" sub-line, and set "· सफ़र surface से" (as the storyboard writes it) at 36 px on one line, appearing at 9.78.
3. #exam: don't show the empty numbered rows 2–4 from 6.07. Start the card with only the header and row 1, and `pop` each numbered row in with its own point in s067/s068. At the least, dim the empty rows to 30 % opacity until their point arrives.
4. Point 1, "योग्य item: postage नहीं", lands at ~9.0 s, but its words are at 8.0–9.8. Move it to 8.1 so it lands on "योग्य item".

The scene lasts 11.52 s: every time in it is between 0 and 11.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s066.html`: one `<section class="vs-scene" id="s066" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
