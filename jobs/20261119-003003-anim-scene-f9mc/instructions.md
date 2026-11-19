# Fix animated scene s007

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s007" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s007), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s006.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s007.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s006 is exact. Card 5 and the mailbag land on "पाँचवाँ, Base Circle और Army Postal Service", card 6 lands on "छठा", and the whole map goes back to ink at the end.

1. The grey sub-line in card 6 ("training · Post Office Guide · दूसरे Boards") renders at about 26–28 px and the items crowd together ("Guide· दूसरे"). Raise it to 36 px (Devanagari part at least 34 px), put an even " · " with spaces on both sides between the items, and if it doesn't fit in the card width, grow card 6 down by 40 px or put the line on two rows. Keep it below "विशेष कार्यालय" with a gap of 1.3× the line height so it doesn't touch.
2. Bring each item in on its spoken word: "training" at about 8.6, "Post Office Guide" at about 9.6 and "दूसरे Boards" at about 11.0 (the narration says "training, Post [9.0] Office Guide और दूसरे [11.4] Boards"), so no item arrives before it is said.

The scene lasts 12.49 s: every time in it is between 0 and 12.49.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s007.html`: one `<section class="vs-scene" id="s007" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
