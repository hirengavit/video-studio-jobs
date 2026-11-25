# Fix animated scene s061

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s061" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s061), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s060.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s061.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Line 2 is not what the storyboard or the voice gives. The voice says "इसमें Snowball System का सामान नहीं है"; the screen shows a two-line sentence ("Snowball System से सामान बेचने के लिए बने कूपन, टिकट, प्रमाणपत्र या परिचय-पत्र नहीं") at about 38 px. It is pressed against the card's bottom edge and is too much to read in the 3.4 s it is on screen. The planned slate cross at 2.30 s is missing, so the "नहीं" has no mark. After the cut to #docs the screen holds only a small heading at the very top from 3.4 s to 6.6 s, which reads as nearly blank. The parcel then sits small at the left with the right half empty.

Fixes:
1. Replace line 2 with the storyboard text "Snowball System का सामान नहीं" ("Snowball System" in Inter 700, the rest in Noto Sans Devanagari), 56 px, one line at y 820, inside the card with at least 40 px margin from its bottom edge. Keep the `fade` at 0.00.
2. Add the slate (#4b4f58) cross icon at the end of line 2 at 2.30 s (about 56 px, `pop` or `draw`), as the voice finishes "सामान नहीं है".
3. Make the #docs heading "कम लोग जानते हैं" a proper anchor: 72 px red at y 220, centred (the storyboard's y 220, not tucked under the header at about y 190). Have it `pop` at 3.4 s on "अब एक बात".
4. Raise the parcel to parcel-icon scale 2 at (480, 760) so it fills its half. Keep "बिकने वाला सामान" (52 px) and the 9.55 s grey "सिर्फ इसी पर नहीं" (48 px) under it, so s062's document at the right balances it.

The scene lasts 10.79 s: every time in it is between 0 and 10.79.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s061.html`: one `<section class="vs-scene" id="s061" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
