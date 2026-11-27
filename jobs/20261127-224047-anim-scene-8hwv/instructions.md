# Fix animated scene s110

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s110" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s110), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s109.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s110.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The wipe in is right for a new screen. The phone and "SMS" pop on "SMS" (1.76 s), and "काफ़ी है ✓" lands on "काफ़ी है". The receipt pops on "Application receipt" and "print" fades on "print". The slate pill and the strike land on "ज़रूरी नहीं". The idea reads. The small text lets it down on a phone.

1. The receipt header "Application receipt" is typed at about 26 px inside the sheet, too small to read on a phone. Write it as a 48 px bold Inter label above the sheet, at the same x (1400), y ≈ 360. Keep the sheet's own header strip empty. Move "print" to 44 px beside or under that label, so the label, then "print" being struck, reads in order.
2. Set the green pill "काफ़ी है ✓" text to 44 px (now about 32 px), and size the pill to fit, centred above the phone.
3. Set the slate pill "सिर्फ appointment के लिए ज़रूरी नहीं" to 44 px. Move it out of the gap under the title to below the receipt (centre x 1400, y ≈ 980), or to the right of it inside x ≤ 1780, so it doesn't crowd the title and "print".
4. Raise `invoice-sheet` from scale 1.2 to 1.4, base still y 900, so it matches the phone's height and the two halves balance.

The scene lasts 9.84 s: every time in it is between 0 and 9.84.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s110.html`: one `<section class="vs-scene" id="s110" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
