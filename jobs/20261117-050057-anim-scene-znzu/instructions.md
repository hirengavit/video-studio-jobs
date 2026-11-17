# Fix animated scene s103

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s103" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s103), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s102.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s103.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is clean. The same device draws onto all three seals on "private device" (about 2 s), "साफ़ छाप" with its green tick lands on 2.7 s, and the slate row "चालू सिक्का" with its cross arrives on "सिक्के" and "नहीं हो सकता". The still stretches are reading holds. The weak part is the second "not" row, which is the point of the last seven seconds.

1. The straight, curved and crossing line icons in row 2 are about 40–60 px wide, and at 8.3 s only a "⋮" stub shows. They won't read on a phone. Draw each icon about 110 × 60 px with a 4 px ink stroke, spaced 40 px apart, and make the row about 110 px tall (the coin row should match). If space is tight, shrink the gap between the cards and rows rather than the icons.
2. The verdict on the lines (slate cross + "सिर्फ़ lines नहीं" at 13.02 s) is on screen for under a second before the cut to s104. Write "सिर्फ़ lines" in the row as the straight-lines icon draws (≈ 8.3 s). Add the slate cross and "नहीं" at ≈ 12.6 s ("काटती lines भी नहीं" spans 12.0–13.8 s).
3. The slate cross is drawn twice on the lines row: an X through the icons and a ⊗ at the row's end. The kit allows one annotation per screen, so keep the row-end ⊗ (it matches the coin row) and drop the X across the icons.
4. The "साफ़ छाप" pill sits on the lower edge of the red key-term card, almost touching it. Move it up 16 px so it has an even margin inside the card.

The scene lasts 13.80 s: every time in it is between 0 and 13.80.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s103.html`: one `<section class="vs-scene" id="s103" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
