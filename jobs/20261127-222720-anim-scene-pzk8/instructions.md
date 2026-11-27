# Fix animated scene s069

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s069" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s069), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s068.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `quote-card` (Quote card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: quote-card: the source label, the Georgia lines (2 to 5, one optional italic lead line), the postmark text (rule/section number and year), the highlighted phrase, the Hindi gist (always labelled as gist unless it is the official Hindi text); drop the postmark for a long quote.

## What to change

The current file is `inputs/current/s069.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The strike and slate cross on the myth line work, and so does the white Georgia document card with its tick. Two timing problems hurt the reading:
- The green FACT card ("Branch Post Office: mobile number · email ID", six words) is on screen for only about 1.5 s before the cut at 3.08. The kit says never under 3 s.
- L1 and its "authentication" highlight arrive at 7.64. That is after the voice has said "Authentication" (about 6.0–7.5), and the card sits empty under its heading until then.

1. Bring the fact card forward: `strike` #myth-line at 0.3, `draw` #myth-cross at 0.7, and `fade` #fact-card at 1.1.
2. Move the cut to #doc from 3.08 to 3.6, on "Aadhaar क्या साबित" (voice 3.6). The fact card then holds about 2.5 s, through "आख़िरी बात".
3. `type` #doc-heading at 3.8. `fade` #L1 at 6.0, with `highlight` #L1 words "authentication" at 6.4. Move `highlight` "offline verification" to 8.4 (voice about 8.0–9.2).
4. Keep `fade` #L1-gist and `draw` #tick-L1 at 12.16, on "पहचान साबित कर सकता है".

The scene lasts 14.40 s: every time in it is between 0 and 14.40.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s069.html`: one `<section class="vs-scene" id="s069" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
