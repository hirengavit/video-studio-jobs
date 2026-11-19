# Fix animated scene s161

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s161" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s161), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s160.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s161.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The worked sum holds well over the seam, and the cut to `#foreign` at 4.90 lands just before "विदेश की डाक" (5.4). The "still" stretches (1.47–3.19, 6.61–8.81) are reading holds on the words, so they're intended. The problems are in `#foreign`: both cards are mostly empty, and the right card has two marks on one chip.

1. `#foreign` left card: scale the `letter-card` from 0.9 up to about 1.5, centred at (520, 640), with the green tick at its lower-right corner. The card runs y240–960, but the icon fills only about a quarter of it, so the card reads as empty on a phone.
2. `#foreign` right card: scale the drawn globe + airmail arrow group to about 1.6×, centred at (1400, 620), so it matches the left icon in size and weight.
3. Chip "ये rate नहीं": take out the strike line through "rate" and keep only the slate ×. The kit allows one annotation per screen, and a struck word inside a "नहीं" chip says the negative twice.
4. Move both bottom chips ("rate" and "ये rate नहीं") down to y≈880 and set the text to 44 px, so they sit under the bigger icons with even margins.

The scene lasts 9.35 s: every time in it is between 0 and 9.35.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s161.html`: one `<section class="vs-scene" id="s161" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
