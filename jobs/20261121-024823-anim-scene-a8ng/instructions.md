# Fix animated scene s051

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s051" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s051), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s050.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s051.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. The "अगली clearance" pill is about 30 px tall text, and it sits on top of the box's right edge and the leader line's end (frames 8.6–14.0 s). Make it 44 px (Hindi in Noto Sans Devanagari, "clearance" in Inter) and place it in the clear gap between the box and the card, right of the plate (its left edge about 30 px right of the box's side). Point a short ink line from the pill to the plate, not across the box.
2. The bottom white card appears empty at about 8.2 s and its line types word by word until about 13 s, so the screen shows "डाक डालने वाले को पता: अगली" while the voice has moved on. Have the card arrive with its first line already in: card `pop` at 8.2 s with "डाक डालने वाले को पता:" `fade` at 8.3 s, then "अगली बार डाक कब निकलेगी" `words` from 10.8 s (on "कि अगली बार"), done by 12.8 s.
3. The "पुरानी" pill (about 3.0 s) points at the cream collection plate after the old plate has already gone, so it labels nothing. Show "पुरानी" beside the old plate at 1.4 s, before it leaves; then take the old plate `out` to the right at 2.3 s with the pill leaving with it (same group).
4. The push-in at 0–1.08 s is almost unnoticeable. Aim it at the box: camera `{on: '#box', zoom: 1.15}` over 1.0 s, then return to wide at 8.2 s as the storyboard plans, so the plate swap reads larger on a phone.

The scene lasts 14.08 s: every time in it is between 0 and 14.08.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s051.html`: one `<section class="vs-scene" id="s051" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
