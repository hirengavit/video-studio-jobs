# Fix animated scene s042

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s042" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s042), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s041.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Not found:** aadhaar-enrolment-kit (An Aadhaar enrolment station or counter: laptop, fingerprint slap scanner, iris scanner and camera on a desk, the equipment clearly visible, no identifiable faces). Show these another way (drawn, or with words), never with a made-up photo.

## What to change

The current file is `inputs/current/s042.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Part 2 opens well: the fade from the recap, the AADHAAR sign typing at the counter, the ID card resting in the window (on the sill, not floating), and the 2017 postmark stamping on "2017". The stills from 3.4–7.8 s and 8.3–10.5 s are reading holds after the government line and the agencies card. Both are intended.

1. #agencies-card: in the medium view its right edge sits at about x 1890, outside the safe area and much closer to the frame edge than the 2017 postmark is on the left. Move it left to centre x ≈ 1470 so its right edge is ≤ 1780, and scale the card group up about 1.2× (about 400×260), so "private agencies" is ~60 px and "Aadhaar services वाली" ~46 px. That matches the weight of the 2017 postmark on the left.
2. #slate-cross: it's tiny (about 48 px) and tucked under the text. Draw it at r 34, stroke 5, centred beside "private agencies" (30 px past the struck word) so the rejection reads on a phone.
3. Push the strike to 9.6 s (the cross to 9.9 s) so it lands on "हटाई जाएँगी" rather than just before it.

The scene lasts 11.00 s: every time in it is between 0 and 11.00.

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
