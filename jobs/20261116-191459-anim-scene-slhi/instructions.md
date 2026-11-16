# Fix animated scene s072

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s072" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s072), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s071.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s072.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The build follows the voice: the postmark, Registration on 2.2, Speed Post documents on 3.8, Parcels on 5.5, the "Value-added service" pill on 6.8, and the envelope's "जिसके नाम item है" line highlighted yellow on "उसी addressee को" (9.2). The layout is clear. Two problems a viewer would notice. The postmark is small (about 220 px), and its date "01.10.2025" runs into the ring, so it is clipped and hard to read. The date is the first thing on screen and the anchor of the scene. Also, the section label changes to "BULK CASH PREPAYMENT" in mid-section: s071 and s073 continue the same bulk-cash topic under "PART 4 · BULK CASH (OLD GUIDE)".

Fixes:
1. Scale the `postal-date-stamp` to about 1.5× (about 330 px). Set the date text so it fits inside the blank date bar with margin: Inter bold about 40 px at that scale, centred, never touching the ring.
2. Section label: use the same label as s071 and s073 ("PART 4 · BULK CASH (OLD GUIDE)"). Change it only where the storyboard actually starts a new section, and then arrive with a wipe.
3. Chip translations (पंजीकरण, स्पीड पोस्ट दस्तावेज़, पार्सल): raise them to 36 px in Noto Sans Devanagari, with line height 1.3. Grow each chip's height to about 120 px so the Hindi doesn't touch the chip edge.

The scene lasts 11.88 s: every time in it is between 0 and 11.88. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s072.html`: one `<section class="vs-scene" id="s072" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
