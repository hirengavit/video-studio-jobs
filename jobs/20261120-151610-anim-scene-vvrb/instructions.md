# Fix animated scene s131

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s131" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s131), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s130.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s131.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The slate note "ऐसे न बाँधें कि जाँच मुश्किल हो" under slot 1 renders at about 28–30 px, below the kit's 32 px minimum for Hindi, and is crammed against the bottom edge of the slot card. Set it to the planned 36 px. To make room, scale the slot-1 icon to 0.8 and raise the icon and the "बिना cover" text by about 30 px. Then set the note in two lines ("ऐसे न बाँधें कि" / "जाँच मुश्किल हो"), with line-height 1.3 and the slate cross before line 1, keeping at least 16 px clear of the card's bottom edge.
2. The underline on "जाँच मुश्किल" (10.02) is almost invisible at this size. After enlarging the note, draw the underline as a 3 px slate (#4b4f58) ink line with rounded ends, 6 px below the baseline.
3. The chips in the #check bar ("बिना seal तोड़े", "बिना कागज़ फाड़े", "बिना चिपकी सतहें अलग किए") read small on a phone. Grow the bar to y 905–1000 and set the chip text to 40 px as planned, with even 24 px gaps between the chips so the third chip doesn't run to the bar's edge.

The scene lasts 11.20 s: every time in it is between 0 and 11.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s131.html`: one `<section class="vs-scene" id="s131" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
