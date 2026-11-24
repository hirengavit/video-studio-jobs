# Fix animated scene s011

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s011" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s011), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s010.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:braille-book-open` (and `photo:braille-book-open-cutout`, its subject cut out): An open Braille book or page, raised Braille dots clearly visible, close view, no person's face (Health, Inclusivity (Braille, Unesco Review) - UNESCO - PHOTO0000000840 0001), 330×245. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s011.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The #dots sub-shot shows from 0.0 s instead of 5.54 s. The framed Braille photo with its "Braille" caption, credit and empty cell card sits on top of the #form tiles and heading for the first 5.5 s, covering the heading, the कागज़ and पत्रिकाएँ tiles, and half of the किताबें tile ("किताब" shows cut off). Keep the whole #dots group (photo frame, caption, credit, cell card) at opacity 0 until the cut at 5.54. Until then show only the s010 #form layout (heading y 210, three tiles y 340–860) exactly as s010 ended.
2. The term chip "Braille / ब्रेल लिपि" (at 0.00 and 0.50) overlaps the photo's own "Braille" caption and the credit line at the bottom left, so "Braille" is printed twice on top of itself. Once fix 1 is done, put the chip in its own space under the tiles, centred at y 900–980 between x 160 and 1760. Make "Braille" 56 px bold and "ब्रेल लिपि" 40 px. Put the second chip "या नेत्रहीनों की कोई और खास लिपि" (40 px) to its right at 1.92 s, with no overlap.
3. The tiles shift and change at 0.0 (a white card appears at x ~1300 in front of the tiles). Hold the tiles at exactly the positions and sizes of s010's last frame so the cut is invisible.
4. At the cut to #dots (5.54 s), take the #form tiles, heading and both term chips out with the cut. Only the photo, its "Braille" caption, the credit and the dot cell stay.

The scene lasts 8.62 s: every time in it is between 0 and 8.62.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s011.html`: one `<section class="vs-scene" id="s011" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
