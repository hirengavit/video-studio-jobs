# Fix animated scene s168

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s168" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s168), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s167.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s168.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Clear and on time: Charges, Declarations and Booking receipt pop as the voice lists them, the "Insured article" band arrives on its words, and "भी पूरी" is highlighted as it is said. The cut from s167 to a new layout keeping the same "Acceptance procedure" term is fine. Stills are reading holds. Size problems on a phone:

1. The Hindi glosses under the card terms ("शुल्क", "घोषणाएँ", "बुकिंग रसीद") render ≈26 px, below the kit's 32 px floor; set them to 36 px as the storyboard asks, with 1.3 line-height.
2. The icons are small (≈80 px) in 500×370 cards and the booking receipt is faint. Scale the drawn ₹ coin and document icons, and `piece:booking-receipt` (0.45 → 0.7), so each icon is ≈130 px tall in the top area y 350–500; move the terms to y 560 and the Hindi to y 610.
3. The wax seal (scale 0.8) is a small red dot at the far right of the band with nothing tying it to the words. Raise it to scale 1.3 and place it right after "insured packing की शर्तें भी पूरी" (≈ x 1500, y 870) so it reads as the insured packing.

The scene lasts 8.83 s: every time in it is between 0 and 8.83.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s168.html`: one `<section class="vs-scene" id="s168" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
