# Fix animated scene s022

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s022" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s022), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s021.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s022.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s021 matches. The "छूट" chip arrives with its words, and "सिर्फ" is highlighted on the word. Row 1 greys out as the unpaid-item row arrives on "कोई unpaid item डाक में मिले". "Postage Due" lands on its words, and "वसूली के नियम" on "वसूलने के नियम". The still stretches are reading holds.

The problem is row 3, which is undersized and crowded into the card's lower left:
- The postage-due-mark at scale 0.6 reads as an empty grey rectangle, not a handstamp.
- "देय डाक महसूल" sits at about 30 px, below the kit's 32 px Hindi minimum.
- "वसूली के नियम", the point of the line, is a small line at about 40 px.

Fixes:
1. Scale `postage-due-mark` from 0.6 to 1.0 and place it at x 680–960, centred vertically in row 3 (y 680–940), so it reads as a handstamp.
2. Set "देय डाक महसूल" (under "Postage Due") to 40 px grey #6f6a63, at least 12 px below the English.
3. Set "वसूली के नियम" to 52 px, bold, ink, on its own line under the Postage Due pair. Keep its `fade` at 9.30.
4. If s021's card is shortened (see s021), draw the card at s021's end height (y 180–560) and `grow` it (axis y, origin top, dur 0.4) at 0.0, before the chip's fade (move the chip to 0.15).

The scene lasts 10.60 s: every time in it is between 0 and 10.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s022.html`: one `<section class="vs-scene" id="s022" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
