# Fix animated scene s037

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s037" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s037), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s036.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s037.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from the rule card to the attendant badge marks a new point. Both strikes land on "न charge तय करता है" and "न वसूलता है", and the cut to #big comes at 6.0 on "बड़ा ordinary article". The problem is physics in the #big shot: the oversized envelope is pasted over the front of the pillar box. It covers the slot and the box's right half (x ≈ 416–1128, y ≈ 472–912), so it reads as stuck to the box rather than "won't fit in the slot".

1. In #big, move the envelope clear of the box. Translate it about +140 px in x so its left edge is at about x 540, just right of the pillar, with its upper-left corner level with the slot (y ≈ 485). Reduce its tilt to about −3°. It then reads as offered at the slot and clearly wider than the slot. Bring it in with `slide` {from: 'right', dist: 200} at 6.1 so it arrives toward the slot.
2. Put the slate cross on the slot itself (centre ≈ x 400, y 488, over the dark slot bar) instead of on the box's left edge, still at 8.42 with `pop`. The cross must not sit over the envelope.
3. Move the "बड़ा ordinary article" label up and right so it doesn't touch the box cap: x 600, y 380, 52 px. It stays on 6.52.
4. In #not, the badge (about 260 px) and the two lines leave the bottom third empty. Scale the badge to 1.35 around (420, 560), set both lines to 56 px with 40 px more between them, and set the strike `dim` to 0.6 so the struck words stay readable. The struck words are the point.

The scene lasts 9.10 s: every time in it is between 0 and 9.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s037.html`: one `<section class="vs-scene" id="s037" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
