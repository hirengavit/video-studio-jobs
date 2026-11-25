# Fix animated scene s036

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s036" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s036), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s035.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s036.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats land on the voice: COD✓ on "भी COD मिलता है", the fee chip on "fee वही", and the cut to #prohib with the cross on "नहीं जा सकता". There are two problems: the COD✓ chip overlaps the Last Mile card and its parcel icon, and the Hindi under "Prohibited" is in the highlight yellow.

1. Move the "COD ✓" chip so it doesn't cover the Last Mile card's top edge and parcel icon. Place it inside the card's top-right corner (about 24 px in from both edges), or just above the card in the gap below the band, with no overlap with either the card or the band.
2. In the "Prohibited" stamp card, make "निषिद्ध सामान" white at 80 % opacity, 48 px, instead of yellow. The kit keeps yellow #f2b705 for highlights only, and the translation is just lighter, not highlighted.
3. In #prohib, the lower right is empty below "COD item में नहीं". Move the Prohibited card and the slate line down by about 120 px (card y 380–600, line y 720), so the right column centres against the parcel at (420, 760).
4. Make the fee chip "fee = India Post Parcel वाली" 44 px and centre it under the Last Mile card, with at least 24 px clear of "अपनी शर्तों पर", so it reads as belonging to Last Mile only.

The scene lasts 10.70 s: every time in it is between 0 and 10.70.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s036.html`: one `<section class="vs-scene" id="s036" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
