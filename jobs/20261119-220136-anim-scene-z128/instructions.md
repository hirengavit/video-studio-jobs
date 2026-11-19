# Fix animated scene s126

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s126" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s126), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s125.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s126.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s125 is clean. Card 2 builds on "Letter card", and its meaning lines land on "एक sheet" (2.10) and "मोड़ी … गोंद" (3.64). Card 3 lands on "Embossed envelope". The timing is good.

Fixes:
1. Card 3 (x 973–1373): "छपे टिकट वाला लिफ़ाफ़ा" is shrunk below the kit's 32 px Hindi minimum and runs edge to edge in the card. Set it to 34 px and break it onto two lines ("छपे टिकट वाला" / "लिफ़ाफ़ा", line height about 44 px), centred at x 1173 with at least 24 px from each card edge.
2. "Embossed envelope" on card 3 is set smaller than "Postcard" and "Letter card". Keep it at the same 56 px as the other terms on two lines ("Embossed" / "envelope"), and push the Hindi and meaning lines down to suit. If space is short, scale the envelope piece from 0.7 to 0.62 rather than shrinking the text.
3. Leave room under card 3's meaning "postage छपा हुआ" for the second meaning line that s127 adds. Place line 1 so that two 36 px lines fit above the card's bottom edge (y 830) with at least 24 px to spare.

The scene lasts 9.60 s: every time in it is between 0 and 9.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s126.html`: one `<section class="vs-scene" id="s126" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
