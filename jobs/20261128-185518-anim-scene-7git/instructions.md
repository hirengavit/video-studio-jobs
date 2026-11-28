# Fix animated scene s056

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s056" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s056), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s055.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s056.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cancelled cheque lands on "cancelled cheque" and the bank-passbook chip on "bank passbook का page". The #endorse beat is strong: open passbook, green ticks on "जाँचकर", signature, red postmark, "Endorsement / पृष्ठांकन" on "signed और stamped endorsement". Two things a viewer would notice. The sand chip "या bank passbook का page" wraps to two lines and the text touches the chip's edges, so it reads cramped. The red heading "Post office details जाँचता है" is centred at y 200, sitting just under the red POSB pill, so the header looks crowded.

1. Resize the chip "या bank passbook का page" so it holds the text on one line with padding. Make it x 1330–1800, y 700–790, text Inter 40, centred, about 24 px padding each side. If it still wraps, use two lines inside a taller chip (y 690–820) with 16 px vertical padding.
2. Move the #endorse heading "Post office details जाँचता है" off the series pill. Left-align it at x 160, y 240 (or keep it centred at y 250), and shift the open passbook down to y 310–975 so the gap stays even.
3. Put the three green ticks next to written entries, not empty rows. Type short grey lines "नाम", "Account no.", "IFSC" (Inter 36) on the three left-page rows at 6.10 s, stagger 0.15, just before the ticks at 6.33. Each tick then marks a detail being checked.

The scene lasts 12.09 s: every time in it is between 0 and 12.09.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s056.html`: one `<section class="vs-scene" id="s056" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
