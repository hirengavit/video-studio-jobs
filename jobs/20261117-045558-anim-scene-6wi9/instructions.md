# Fix animated scene s081

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s081" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s081), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s080.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s081.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The opening card (0.0–1.34 s) is a big white panel holding only the heading "चेतावनी के labels", and even after the tag pops it uses only the top third. Scale the warning tag group up about 1.6x and centre it in the card's lower area (about y 560–760). Bring the tag in at 0.3 s with `pop` instead of 1.34 s, so the card isn't empty while the voice says "लाल अक्षरों में चेतावनी".
2. The typed label shows only "लाल" / "लाल अक्षर" and the planned "Labels:" prefix is missing. Type the full "Labels: लाल अक्षर" at 2.32 s, at least 48 px, placed under the enlarged tag rather than floating to its right.
3. In shot #new (from 5.92 s) the right column stops at the "मनाहियाँ" chip (y about 620), leaving the lower 40 % of the card empty. Move the date to y 330, "Regulation 25" to y 480 and the chip to y 640, and scale the pill and chip about 1.15x, so the column fills the card evenly next to the book.

The scene lasts 10.98 s: every time in it is between 0 and 10.98.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s081.html`: one `<section class="vs-scene" id="s081" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
