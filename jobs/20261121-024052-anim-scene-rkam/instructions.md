# Fix animated scene s027

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s027" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s027), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s026.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s027.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats are clean and on their words: the TERM card on "Domestic registration", the envelope on "Speed Post documents", the parcel on "parcels", and the chip on "value-added service". The still stretches are holds while the kicker is read and are intended.

1. Composition: everything sits in the top half (y ≈ 190–620) and leaves the lower 40 % of the content area empty. Lay out to fill y 230–900:
   - TERM card x 140–700, y 260–860, with the English term at 104 px and the gloss at 56 px.
   - Envelope card x 760–1250, y 260–600, and parcel card x 1290–1780, y 260–600, with icons scaled about 1.4×. Keep the "Speed Post" pills and the Hindi labels at 48 px or more.
   - "Value-added service" chip x 760–1780, y 630–720.
   That leaves y 760–900 free for s028's addressee card.
2. The "Registration" kicker sits alone on an empty screen from 0 to 2.78 s, while the voice already says "Domestic registration" at about 1.9. Bring the TERM card in at 1.9 instead of 2.78, with the gloss at 2.4.

The scene lasts 9.48 s: every time in it is between 0 and 9.48.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s027.html`: one `<section class="vs-scene" id="s027" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
