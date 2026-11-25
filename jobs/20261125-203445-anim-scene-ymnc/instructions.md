# Fix animated scene s107

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s107" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s107), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s106.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:postman-delivering-parcel` (and `photo:postman-delivering-parcel-cutout`, its subject cut out): an Indian postman delivering a parcel or letters at a door or in a street, no identifiable face prominent (Sikh postman 01), 1920×1952. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s107.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s106 matches exactly (same photo, rows and crosses), and the slip slides up at 0.3 s on "notice of arrival", so it works as a continuation. But the slip, the one thing this scene adds, is small and tucked into the bottom-right corner. From 3.4 to 9.3 s the voice says the whole "Addressee खुद, या authorised person के ज़रिए, post office से" sentence while nothing changes but a faint pulse.

Fixes:
1. The "Notice of arrival" lettering on the slip's strip renders at about 36 px. Raise it to 44 px white bold, and scale the intimation-slip from 1.2 to 1.5, keeping its right edge at x 1820. Keep a gap of at least 20 px below row 3.
2. The `pulse` on the slip at 6.9 s barely shows on the motion strip. Make it one clear pulse (scale 1.06, 0.5 s) at 7.5 s on "post office", so the "collect it from the post office" idea lands on its word.
3. The caption "post office से ले सकते हैं" fades in at 3.26 s, while the voice is still on "Addressee खुद". Move its `fade` to 7.5 s, on "post office", together with the pulse.

The scene lasts 9.36 s: every time in it is between 0 and 9.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s107.html`: one `<section class="vs-scene" id="s107" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
