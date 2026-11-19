# Fix animated scene s160

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s160" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s160), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s159.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s160.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s159 holds. Lines 2–3 and the red answer pill land on "कमी" and "दोगुना", and the push-in on `#answer` frames the pill and returns. The sum is correct (5 − 2.50 = 2.50, × 2 = 5) and comes from the script.

1. The sand bar "extra stamps ≠ enclosure allowed" is about 26 px and all English, which breaks the kit's language rule (only postal terms stay in English; the point goes in Hindi). Write it as "extra stamps से भी अंदर रखी चीज़ allowed नहीं" at 40 px, on a sand bar x120–780 y870–990 (two lines if needed, 1.3 line height). Put the slate strike on "allowed" at 11.76 s, as planned.
2. The two `adhesive-stamp`s at scale 0.45 read as empty red boxes and hang half off the card's right edge. Place them fully on the card face, left of the printed stamp, at scale 0.7: about (560, 470) and (630, 470) in scene units, each tilted 2–3°. Use `place` at 7.14 s and 7.40 s so they settle onto the card.
3. The "₹5" highlight inside the red pill puts white text on yellow, which is weak contrast. Make the "₹5" highlight #fde9a6 with #8a5d00 text, or #f2b705 with #2b2622 text, and keep it at 4.80 s.
4. The working-card lines are about 36–40 px. Raise lines 2–3 to 56 px like line 1 (s159), aligned on the "=" column at y460/600, and move the pill to y740–840 so it stays inside the card.

The scene lasts 12.36 s: every time in it is between 0 and 12.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s160.html`: one `<section class="vs-scene" id="s160" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
