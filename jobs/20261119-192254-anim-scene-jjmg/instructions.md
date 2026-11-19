# Fix animated scene s042

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s042" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s042), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s041.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s042.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The slate note "bulk facilities इस list में नहीं" carries the line "ये आम payment के तरीकों की list नहीं हैं". It fades in at 5.83 s and the cut to #auth comes at 7.24 s, so it's on screen for only about 1.4 s (the kit asks for at least 3 s). Fade it in at 5.2 s, keep the "नहीं" underline at 6.1 s, and move the cut to #auth to 7.7 s ("Circle"). Card 1 "Head of Circle" then pops at 7.8 s.
2. Card 3 of #auth is set like a term with its translation: "cash में postage" is big and black, and "लेने का" is small and grey under it. It's one Hindi phrase. Set "cash में postage लेने का" as one line at a single size: 40 px Noto Sans Devanagari in ink. Keep line 2 free for "authority" (48 px bold Inter), which s043 brings in. Size the card for both lines now so it doesn't grow later.
3. Remove the small red dash at the top-left of each #auth card (y ≈ 380). On its own it reads as a minus sign or a stray mark. If the cards need an accent, use a 4 px #b8403a line across the whole top edge.
4. On the #bulk term card, "Bulk cash facilities" pops up from a tiny size at 0.16 s, so the first frame shows a near-unreadable 20 px label. Show the term at full size from 0.0 s with a plain 0.3 s fade, so the scene's main element reads in the first second.

The scene lasts 13.62 s: every time in it is between 0 and 13.62.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s042.html`: one `<section class="vs-scene" id="s042" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
