# Fix animated scene s144

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s144" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s144), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s143.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s144.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. Timing: from 2.0 to about 4.7 s the #person shot shows only the small heading on an empty canvas, while the voice is already on "एक व्यक्ति" (3.3 s). Move "draw adult icon" from 4.71 s to 3.30 s, and the passbook pop (stagger 0.2) with its lines from 5.45 s to 5.10 s, on "एक से ज़्यादा".
2. Framing: the group is small and sits in the top half, with the bottom ~40% of the frame empty. Enlarge and centre it: person-icons #adult at scale 2.0 (x 220–460, base y 900) and the three passbooks at scale 1.0 (240×320) at x 640 / 1000 / 1360, y 330–650, resting on a shared base line, so the group fills y 300–900.
3. Lines and label overlap: the grey connector lines run through the label "एक से ज़्यादा MIS खाते". End each line at the passbook's left edge, mid-height (about y 490). Move the label to y 720, centred under the passbooks (x 1120), at Inter bold 56 in ink, so no line crosses it.
4. Heading: "एक और सीमा: हर व्यक्ति की" is 60 px and tucked into the top left. Make it 72 px, keep x 160, set y 230, and keep the underline on "एक और सीमा" (2.33 s), so the second limit reads as a new point.
5. Seam: the yellow outline round table row 4 (0.0 s) only draws a partial line between the Guardian and Joint rows before the cut at 1.75 s. Let it complete by 0.8 s (duration 0.6) and pulse "₹15 lakh" at 0.2 s on "₹15 lakh" (0.0–2.1 s), so ₹15 lakh visibly lands before the cut.

The scene lasts 8.81 s: every time in it is between 0 and 8.81.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s144.html`: one `<section class="vs-scene" id="s144" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
