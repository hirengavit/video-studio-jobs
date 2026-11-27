# Fix animated scene s164

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s164" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s164), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s163.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s164.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
This scene's whole point is "only for that period". But the grey postmark #pm-only ended up as a ~135 px ring squeezed between "Gujarat Govt" and the date pill, with three lines of text ("सिर्फ उस / समय की / व्यवस्था") at about 18–20 px. You can't read that on a phone. The camera ease-back and timing are fine.
1. #pm-only: use the storyboard text "सिर्फ उस समय" only, on two lines ("सिर्फ उस" / "समय"), 34 px Noto Sans Devanagari, weight 700, fill #4b4f58 (or #6f6a63). Grow the ring to ~180 px diameter with a 4 px stroke, centred in the gap between the end of "Gujarat Govt" and the date pill (about x 620, y 860), keeping clear of both.
2. Keep the `stamp` at 0.76 s, but hold it at full size from ~1.2 s to the cut; nothing else should move after it lands.
3. #guj-free underline at 4.36 s ("हमेशा की free service नहीं"): make it clearly visible, a 4 px #6f6a63 hand-drawn `underline` under the green "free" chip in row 3 line A, drawn over 0.5 s. In the current frames it can't be seen.
4. Optional, if the ring still crowds the row: from 0.2 s, while the camera eases back, fade rows 1–2 to 60 % opacity so the row-3 verdict stands out (no layout change).

The scene lasts 7.04 s: every time in it is between 0 and 7.04.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s164.html`: one `<section class="vs-scene" id="s164" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
