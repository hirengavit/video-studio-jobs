# Fix animated scene s086

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s086" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s086), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s085.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s086.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Seam matches s085. "= ₹75" lands at 0 s on "₹75", the Photo and Mobile chips land on their words (~4.4/5.5), and "= ₹125" lands at ~10.4 on "₹125". The sums read well. Two problems: the "₹75 + ₹75" chip is too small, and the bottom notes now read as one pair.

1. Enlarge the slate "₹75 + ₹75" chip: it renders at about 26 px, under row 1's "= ₹75" (x ≈ 1300–1500, y ≈ 560), and is unreadable once struck. Use 44 px Inter on a #f3ead6 pill about 320×70, centred under "= ₹75" (x 1560, y 575). Keep the `pop` at 1.88 s and the `strike` at 2.94 s, and make the strike line 3 px slate so the numbers stay legible under it.
2. Separate the two bottom notes. "chargeable biometric update" (y ≈ 805) sits directly on top of "Demographic fee: एक बार" (y ≈ 870), so they read as one statement, which suggests row 2 also pays a demographic fee. Move "chargeable biometric update" under row 2's "= ₹125" slot, right side (centre x 1560, y 800, 40 px #6f6a63), so it labels the ₹125. Keep "Demographic fee: एक बार" on the left, but at y 900.
3. When row 2 starts (Photo chip `pop` at 4.40 s), fade "Demographic fee: एक बार" and its underline to the supporting colour #6f6a63 at 60 % opacity, as the kit says for earlier points on a busy screen, so the eye goes to row 2.

The scene lasts 12.02 s: every time in it is between 0 and 12.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s086.html`: one `<section class="vs-scene" id="s086" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
