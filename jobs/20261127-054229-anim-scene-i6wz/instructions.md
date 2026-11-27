# Fix animated scene s187

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s187" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s187), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s186.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `recap-card` (Recap envelope): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: recap-card: title and seal number; 3 or 4 rows (English term, Hindi term, fact pill); pills can hold a date, a number or a short Hindi phrase.

## What to change

The current file is `inputs/current/s187.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The wipe in from the PART 8 screen fits the change of section. The problem is the first 7 seconds: an empty envelope card with five blank ruled rows, and nothing moves from 0.25 s to 6.94 s.

1. The planned flap highlights are missing (the check saw no motion from 0.25 to 6.94 s). Add a highlight sweep (highlightSoft band) behind "Part 7" at 1.4 s and behind "Part 8" at 2.8 s, on the words "standards और premium services".
2. The card sits mostly empty for 7 s, against the rule that a card arrives with its first items. Bring row 1's term "Ordinary Speed Post / साधारण स्पीड पोस्ट" in at 5.4 s ("बार दोहरा लेते हैं") instead of 6.96. Keep the pills on their words.
3. The pills read small, at about 36 px with short pill heights. Make pill text 42–44 px bold and pill height about 64 px, keeping the row heights. Carry the same size into s188 and s189.
4. The row 1 tick draws at 12.78 s, but the voice reaches "4 से 5 दिन" at about 11.8–13.3. Draw the tick at 13.2 s, after the pill has settled.

The scene lasts 13.44 s: every time in it is between 0 and 13.44.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s187.html`: one `<section class="vs-scene" id="s187" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
