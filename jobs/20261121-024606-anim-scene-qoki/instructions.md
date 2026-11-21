# Fix animated scene s042

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s042" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s042), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s041.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `recap-card` (Recap envelope): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: recap-card: title and seal number; 3 or 4 rows (English term, Hindi term, fact pill); pills can hold a date, a number or a short Hindi phrase.

## What to change

The current file is `inputs/current/s042.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade into the recap envelope fits a change of section. Rows build on their words: "Letter box" at about 2.7 s, its pill at about 5 s, the "small packets ✗" chip at about 7 s, and row 2 at about 9.9 s, with its pill and tick by about 12 s. The still stretches are reading holds, which is intended.

Fixes:
1. The series pill reads "POST OFFICE RULES". The storyboard gives LETTER BOXES for every scene, and s041 and s044 show LETTER BOXES, so the pill visibly flips at each seam. Set this scene's series slot to "LETTER BOXES".
2. The pill text inside the envelope ("list वाली prepaid डाक", "letters + postcards", the slate "small packets ✗" chip) is about 28–30 px, which is under the kit's 32 px floor for Hindi and the 44 px readability floor. Raise the pill text to 40–44 px, with pills about 64 px tall. To make room, start the pill column at x≈900 instead of ≈1060 (the row labels end around x 880), and keep the tick column at x≈1560. If row 1 can't fit both its pill and the chip on one line, put "small packets ✗" under the pill at 36 px in slate rather than shrinking anything.
3. The row labels ("Letter box", "For letters only") are about 44 px. Raise them to 50 px bold so they read as the keywords and the pills read as their meaning.

The scene lasts 12.38 s: every time in it is between 0 and 12.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s042.html`: one `<section class="vs-scene" id="s042" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
