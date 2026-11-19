# Fix animated scene s236

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s236" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s236), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s235.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s236.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The content works. "QR code payment → = Digital payment" builds on its words, the packet stack and "500 / 250 packets" arrive on "500 और 250", and "सिर्फ़" is highlighted on its word. The problem is continuity: this scene is still point 2, but the badge and dots change shape against s235's last frame. Viewers will see the jump through the fade.

1. Badge continuity: this scene draws a squat "2 · दूसरी" pill badge (about x110–450, y 340–440), but s233–s235 use the storyboard key-points badge: a tall red perforated stamp card at x100–460, y200–620, with the big white numeral (about 200 px) above the Hindi ordinal (44 px, white). Redraw it as that tall stamp card with "2" over "दूसरी" so the fade from s235 shows no change.
2. Progress dots: put the seven dots at y 700, x 140–420, as in s233–s235. Only dot 2 is yellow #f2b705; every other dot uses s235's pale grey. Drop the red fill on finished dots.
3. Match the card's outline to s235's card: x520–1820, y200–980, same border. It currently starts a few pixels lower and to the right, so it shifts during the fade.

The scene lasts 10.27 s: every time in it is between 0 and 10.27.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s236.html`: one `<section class="vs-scene" id="s236" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
