# Fix animated scene s139

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s139" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s139), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s138.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s139.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The working-lines card is a clear new picture and the order matches the voice. Two problems: some lines arrive a beat before their words, and the Credit chip's Hindi is too small again. The empty card for the first second is fine because the voice is still finishing s138's sentence ("service है").

1. Line 1 "असली booking का postage": move its `words` from 1.04 to 1.7, so it arrives on "असली booking" (the voice reaches "असली" at about 1.7 s). The kit says nothing shows before the voice reaches it.
2. Line 2 "+ चुनी services का charge": move its `words` from 3.60 to 4.0, on "चुनी". Move the rule draw from 5.14 to 5.6.
3. Credit chip at the right of line 3: "जमा" renders under 32 px. Set it to 36 px and make the chip about 260 × 110 px so both lines fit (the same fix as s137, so the chip looks the same in both scenes).
4. Line 3 "− envelope के ₹22": close the gap between "के" and the ₹22 highlight pill (pill x right after the text, gap about 16 px) so it reads as one phrase, not two separate items.

The scene lasts 10.11 s: every time in it is between 0 and 10.11.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s139.html`: one `<section class="vs-scene" id="s139" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
