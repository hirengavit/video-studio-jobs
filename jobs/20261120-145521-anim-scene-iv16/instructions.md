# Fix animated scene s069

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s069" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s069), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s068.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s069.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. "और सख्त" and the `highlight` on "अलग और सख्त" come in at about 11.5 s, the scene's last frame. The voice says "अलग और सख्त" between 8.8 and 10.9 s. Fade "और सख्त" at 9.6 s and run the highlight at 10.38 s.
2. The note chip "Insured bullion · coins: नियम अलग" sits on row 2's divider line and almost touches the detail text (chip y 700–760 against a detail line at about y 690). Move the chip down to y 740–820 with 16 px of padding and Hindi at 40 px so it clears both the text and the divider. The card has plenty of empty space below for this.
3. Row 2's long detail line "metal का container, लकड़ी का case, या मोटे cardboard का case" runs to x ≈ 1840, under the case icon and close to the card's right edge. Wrap "या मोटे cardboard का case" onto a second line at the same x as the first (about 52 px lower), so the text ends before x 1560. Don't shrink the font.
4. The chip leaves a visible blank gap after "नियम अलग" while it waits for "और सख्त". Size the chip to its first text, then widen the chip rect from its left edge when "और सख्त" arrives, so the chip fits its words at each step.

The scene lasts 11.54 s: every time in it is between 0 and 11.54.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s069.html`: one `<section class="vs-scene" id="s069" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
