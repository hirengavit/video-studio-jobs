# Fix animated scene s170

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s170" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s170), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s169.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-cards` (Compare cards): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-cards: question (English + Hindi), the two names, full names and Hindi names, two labelled facts per card (dates, who, limit, rule), the takeaway; which band is red or yellow; no right/wrong colours unless one is actually wrong (then slate strike, green tick).

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:india-post-parcel` (and `photo:india-post-parcel-cutout`, its subject cut out): an India Post or Speed Post parcel with its postal label visible, whole parcel in view (RegisteredMailBarcode), 1920×1259; `photo:gangajal-bottles-photo` (and `photo:gangajal-bottles-photo-cutout`, its subject cut out): Sealed bottles of Gangajal (Ganga water) as sold in India, labels visible, whole bottles in view (Ganga water bottle) (shown in the scene before; use it where this scene continues that frame), 1920×1079; `photo:gangotri-bhagirathi`: The Bhagirathi river at Gangotri, Uttarakhand, with the Gangotri temple or the mountain valley, landscape view (Bhagirathi River at Gangotri) (shown in the scene before; use it where this scene continues that frame), 1920×1440. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s170.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Continuity of the product: the Counter card shows a small generic water bottle (about 90 px tall in a card about 490 px tall), not the Gangajal jug viewers just saw in s168 and s169. Use the same Gangajal bottle cut-out as s169 (`photo:gangajal-bottles-photo-cutout`) in the Counter card. Make it about 300 px tall, centred in the white body of the card (x 160–900, body y about 380–760), so it fills the card like the parcel photo fills the Delivery card.
2. Scale the parcel photo in the Delivery card up to the same height (about 300 px, centred in the card body) so the two cards balance. Keep the credit line under it at grey 24 px or larger.
3. Fill the empty Delivery card sooner: from 2.46 s to 4.72 s it is a yellow band over an empty white box. Fade the parcel in at 3.3 s ("pack order") instead of 4.72 s, while the card is still the newest thing on screen.

The scene lasts 9.55 s: every time in it is between 0 and 9.55.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s170.html`: one `<section class="vs-scene" id="s170" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
