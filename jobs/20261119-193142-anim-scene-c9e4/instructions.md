# Fix animated scene s067

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s067" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s067), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s066.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:mumbai-gpo-building`: The General Post Office building in Mumbai, front view of the domed stone facade, daytime (Mumbai General Post Office), 1920×1455. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s067.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The bureau card, the Bombay GPO cut-out and its caption land on their words. The still at 5.49–7.23 is the hold for reading the caption, which is fine. Problems a viewer would notice:

1. The series pill reads "POSTAL ADMINISTRATION" here, but "STAMPS & STATIONERY" in s066 and s068, and the section label doesn't change. The kit says the tag changes only with the section, so it flickers for one scene. Set the series slot on the section to "STAMPS & STATIONERY".
2. The jump at 7.48 is a blank screen: shot #items starts at 7.32, but the first tile only pops at 8.52, so for about 1.2 s only the header is on screen while the voice says "और ध्यान रखिए". Move shot #items to 8.40 so the bureau/GPO layout holds until "brochure", and pop the brochure tile at 8.45 on the cut. Keep album at 9.28 and accessory at 10.88.
3. The photo credit "Photo: Mumbai General Post Office" names the subject, not the source. Use the photo asset's own credit and licence line (author · licence · Wikimedia Commons) in the grey credit text under "Bombay GPO".
4. The globe and envelope are small (about 220 px each) in the top-left of their x100–900 area. Scale the globe up so it's about 280 px tall and the envelope to about 0.95, centred over "विदेश से orders" across x100–900.

The scene lasts 12.02 s: every time in it is between 0 and 12.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s067.html`: one `<section class="vs-scene" id="s067" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
