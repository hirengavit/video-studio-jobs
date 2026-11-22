# Fix animated scene s102

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s102" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s102), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s101.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:franking-machine-photo` (and `photo:franking-machine-photo-cutout`, its subject cut out): A real desktop postage franking machine (postage meter), whole machine visible, side or three-quarter view, plain background if possible (Machine à affranchir Pitney Bowes DM400c à Lyon, France), 1920×1436. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s102.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s101 is clean (same card, same tint). The beats follow the voice: badge "3", the highlighted address box, the adhesive stamp, the franking impression on "stamping machine की impression", and tag 3 on "postal directions". But the layout contradicts the point. The voice says the right-hand half holds these three things, yet all three tags and the machine photo are placed on the left (message) half of the card. The photo sits on the card itself, as if it were printed there.

1. Take the `franking-machine-photo-cutout` off the card. Shrink the postcard group from scale 2.2 to about 1.9 and move it left (x ≈ 120), which frees a column at about x 1500–1880. `slide` the photo in from the right there at 6.70 (h 220, tilted 1–2°), with its caption and credit below it, as the storyboard says ("beside the card").
2. Tie each tag to its item on the right half. Put a small numbered disc (1, 2, 3; #9e1b1b, 34 px digits) on the address box at 2.62, on the adhesive stamp at 4.72 and beside the franking impression at 7.90, so the left-half tags read as a legend rather than as contents of the left half. Alternatively, move the tags into the freed right column under the photo.
3. The keyword chip "Right-hand half: address, postage" is about 32 px and overlaps the card's bottom edge. After the shrink in fix 1, place it below the card with a gap of at least 20 px (about y 1000), at 44 px or more. Keep the `pop` at 10.24.
4. Tag 3 "Postal directions" has nothing on the card to point to. At 9.30, `highlight` the empty strip of the right half above the address box (between "POST CARD" and the address lines), or the lowest address line, with the soft #fde9a6 band, and put disc 3 there.

The scene lasts 11.38 s: every time in it is between 0 and 11.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s102.html`: one `<section class="vs-scene" id="s102" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
