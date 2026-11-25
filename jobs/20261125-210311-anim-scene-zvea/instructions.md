# Fix animated scene s202

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s202" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s202), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s201.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `recap-card` (Recap envelope): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: recap-card: title and seal number; 3 or 4 rows (English term, Hindi term, fact pill); pills can hold a date, a number or a short Hindi phrase.

## What to change

The current file is `inputs/current/s202.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut to envelope C reads well, with the new title "याद रखने वाली बातें · 3" and seal "4". APO and its slate "VP articles / money orders नहीं" pill arrive by 3.2 s, on the voice (0–4.3 s). The COD fee pills land on "6,500 तक 1.6%" (8.1 s), "ऊपर ₹100" (12.0 s) and "1%" (13.3 s). Problems: the second fee pill squeezes "₹6,500 से ऊपर: ₹100 / + अतिरिक्त रकम का 1%" onto two tiny lines (about 28–30 px at 1080p). That is the key rule of this card and can't be read on a phone. Also, the card holds two rows in a frame sized for four, so the lower half of the envelope sits empty for the whole scene.

1. Row 2 ("COD fee"): make the "₹6,500 से ऊपर" pill one line at least 40 px ("₹6,500 से ऊपर: ₹100 + बढ़ी रकम का 1%"). Shorten the label column to about 220 px and let the two pills share the remaining width, or stack them as two full-width pills inside a 120 px-tall row 2.
2. Raise every row's height from about 70 px to 96 px, with labels at 52 px and pill text at 40–44 px. Card C holds only four rows and has the room; this also fills the empty lower half of the envelope.
3. Match the "₹6,500 तक: 1.6%" pill to the same 40 px size, so both halves of the rule read alike.

The scene lasts 15.36 s: every time in it is between 0 and 15.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s202.html`: one `<section class="vs-scene" id="s202" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
