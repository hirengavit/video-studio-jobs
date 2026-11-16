# Fix animated scene s129

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s129" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s129), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s128.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s129.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s128 is clean (same two cards; the message side swaps its label for the thin-paper frame). The chips arrive on their words and "पूरा चिपकाइए" lands on 8.2 s with the frame turning green, so the idea reads. The pauses the check flagged are reading holds and are intended. The one real problem is size: the chip text is too small for a phone.

1. Chip text: "नक्काशी की छाप" renders at about 24 px and "चित्र" at about 28 px. Set every chip label in the thin-paper frame to font-size 34 (Noto Sans Devanagari) and "Drawing"/"Photo" to 34 (Inter). Make each chip 64 px tall and widen it to fit, two chips per row, keeping 16 px between chips and the frame edge.
2. If the chips don't fit at that size, grow the message-side panel (scale the whole message-side group by 1.15 about its centre, so the gap to the address side stays even) rather than shrinking the text.
3. "बहुत पतला कागज़" starts in a faded pink at 0–2 s and turns red at about 2.2 s. Show it in full heading red from 0 s, because it is spoken from 0.0 s.

The scene lasts 10.68 s: every time in it is between 0 and 10.68. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s129.html`: one `<section class="vs-scene" id="s129" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
