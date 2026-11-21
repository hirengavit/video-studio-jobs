# Fix animated scene s041

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s041" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s041), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s040.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s041.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s040 is clean: the same three-card layout, card 1 dimmed, card 2 as it was. Beats land on their words: the postmark at about 4.1 s on "9 October 2023", the phone at about 7 s on "तीन", "authorised" and "Web portal" at about 9 s, and "Mobile app" at about 11 s. The still stretches the check flagged are reading holds between beats, which is intended. The weak spot is the date tag, which is small and the wrong shape for the kit.

Fixes:
1. The "World Post Day · 9 Oct 2023" tag on card 2 is a small red rectangle with text of about 30 px. Make it the kit's round red postmark, about 190 px across, with "World Post Day" at 34 px or more and "9 Oct 2023" at 44 px bold in white or cream. Tilt it −6° and place it over the top-right corner of card 2, overlapping the card edge so it doesn't cover the kiosk icon. Keep `stamp` at 4.08 s.
2. Raise the in-card English labels ("Self-booking kiosk", "Web portal", "Mobile app") to at least 44 px. "Web portal" and "Mobile app" are the new information here, so make them 52 px bold. Make the "authorised" chip text at least 40 px. Cards 2 and 3 have room below their icons.
3. Set the series pill slot to "LETTER BOXES". This one already reads correctly; just keep it as the value that every scene sets the same way (see s042).

The scene lasts 11.51 s: every time in it is between 0 and 11.51.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s041.html`: one `<section class="vs-scene" id="s041" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
