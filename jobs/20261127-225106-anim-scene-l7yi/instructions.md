# Fix animated scene s141

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s141" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s141), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s140.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:postman-delivering-parcel` (and `photo:postman-delivering-parcel-cutout`, its subject cut out): an Indian postman delivering a parcel or letters at a door or in a street, no identifiable face prominent (Sikh postman 01), 1920×1952. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s141.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s140 is seamless. The Postmen/GDS card and then the NIC card build on their words, and the NIC stamp (7.2 s) lands just after "NIC" is said. The postman cut-out is a good real-photo touch. Two kit problems a viewer will notice:

1. The photo #photo-postman has no credit. Add a small grey (#6f6a63) credit line under the cut-out inside #post-card (for example "Photo: <source/licence>", 24 px, Inter, y just below the photo's bottom edge). Also check that the cut-out has the white border, the soft shadow and the 2° tilt (rotate 2) the storyboard asks for. On the sheet it reads as a plain rectangle.
2. The Hindi translations under "Postmen" ("डाकिया") and "Gramin Dak Sevaks" ("ग्रामीण डाक सेवक") look under 32 px on the sheet. Set "डाकिया" to 36 px and "ग्रामीण डाक सेवक" to 36 px (Noto Sans Devanagari, #6f6a63), with about 1.3× line height below their English term. Don't shrink anything else to make room: move "घर जाकर भी" and the photo down about 10 px instead.
3. In #nic-card, the body text "Jeevan Pramaan application" / "बनाता और चलाता" sits low with a big empty band under the header from 5.1 to 7.2 s. Keep it, because s142 fills that band, but raise "बनाता और चलाता" to 40 px #2b2622 so it reads as part of the point and not as a faint footnote.

The scene lasts 10.52 s: every time in it is between 0 and 10.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s141.html`: one `<section class="vs-scene" id="s141" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
