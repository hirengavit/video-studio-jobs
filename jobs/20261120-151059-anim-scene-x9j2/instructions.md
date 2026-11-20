# Fix animated scene s119

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s119" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s119), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s118.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s119.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Same text sizes as s118, since the card carries over: Hindi translations ("बीमित bullion और सिक्के", "बीमित स्पीड पोस्ट") at 34 px, and the pill text at 36 px. The row 3 pill "मज़बूत लकड़ी या metal का case" is two lines, so give it 1.3 line-height and grow the pill's height to fit, not the reverse.
2. Row 4: the "max" and "notes" labels in the stamps are about 16 px and unreadable. Write each as one line at 32 px: "max ₹5,00,000" and "notes ₹20,000". Widen the two stamps to fit (about 300 px each), still inside the row.
3. Timing: "notes ₹20,000" lands at 12.0 s and its tick at 12.4 s, under half a second before the cut. Stamp it at 11.2 s, on the spoken "notes ₹20,000", and draw the tick at 11.7 s.
4. Icons: scale `valuables-case` to 0.4 (about 150 px), and scale the row 4 icon and the ticks to match rows 1–2 after the s118 fix (44 px ticks).

The scene lasts 13.30 s: every time in it is between 0 and 13.30.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s119.html`: one `<section class="vs-scene" id="s119" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
