# Fix animated scene s047

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s047" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s047), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s046.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s047.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s046 is clean, and the beats follow the voice. Clock 1 is drawn from the start ("एक … clearance") with "Clearance / box कब खाली" by about 5 s. Clock 2 draws at about 5 s ("दो … post office से"), with "Dispatch" by about 7 s. Clock 3 draws at about 8.5 s ("तीन"), with "Delivery" at about 11 s on "deliver". The long holds are reading time.

Fixes:
1. The series pill reads "POST OFFICE RULES". Set it to "LETTER BOXES", which is the storyboard's value and what s048 shows.
2. All three clocks show the same hand positions, which suggests the three times are identical. Set #hand-h and #hand-m differently on each clock (for example clock 1 at 10:00, clock 2 at 11:00, clock 3 at 12:30, as generic illustrations with no time printed). Even better, turn each clock's hands a little while it draws.
3. The clocks are small, about 200 px in a narrow card. Scale each clock to about 230 px. Make the Hindi glosses ("box कब खाली", "office से कब जाती") 40 px with a line height of 1.3, centred, with at least 16 px clear of the card edges. Use the card size from the s046 fix so nothing has to grow in s048.

The scene lasts 12.32 s: every time in it is between 0 and 12.32.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s047.html`: one `<section class="vs-scene" id="s047" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
