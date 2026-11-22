# Fix animated scene s032

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s032" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s032), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s031.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s032.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

"= 1,000 mm" in green with a tick, then the green PASS postmark, then the grey working and the diameter `swap` 125 → 130 on "130 mm": all good. The second sum is the problem. It sits in a small side box at about 28–32 px, much smaller than the first working (about 56 px), so the key number 1,010 is the hardest thing on screen to read.
1. Make the second working as big as the first. Widen the side box to x 1100–1630, y 590–950. Set "जोड़ = 750 + 260" to Georgia 52 px, and put "= 1,010 mm" on its own line beneath it at Georgia 60 px bold, both lines aligned on "=". If they don't fit, scale the dimmed first working to 0.8 towards the left of the card. Don't shrink the new lines.
2. Fix the uneven token spacing carried from s031 ("750   + 2 ×   125"): keep one space width between tokens, the same as the s031 fix.
3. The PASS postmark is stamped before "दोनों जाँच पास" (3.0–5.0 s). Move the `stamp` to about 4.3 s, so it lands on "पास" and the tick holds alone after "1000 mm".
4. Land the "1,010 mm" `count` so it ends on "1010" (about 12.5 s), then hold it to the end with no other change. That gives the beat the notes ask for after a worked total.

The scene lasts 14.52 s: every time in it is between 0 and 14.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s032.html`: one `<section class="vs-scene" id="s032" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
