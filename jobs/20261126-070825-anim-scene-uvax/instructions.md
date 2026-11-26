# Fix animated scene s170

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s170" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s170), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s169.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s170.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. Series pill reads "PRODUCTS". It must read "DELIVERY RULES" like every other screen (kit: the series pill stays still and changes only with the subject; s169 and s171 both show DELIVERY RULES, so the pill jumps at both seams). Set the frame's series tag to "DELIVERY RULES".
2. From 0.0 to 4.68 s the screen is almost blank: only a 52 px heading at top left on an empty cream canvas while the voice says "अब पूरे topic की ज़रूरी बातें, एक साथ". Bring the five tile frames (x 120–1800, y 320–960) on at 0.00 with `pop` {stagger: 0.1}, not at 4.68. Leave the heading `swap` to "पाँच काम, अलग-अलग" at 4.68 as planned. Alternatively, make the opening heading 96 px, centred at (960, 560), and `fade` it out before the tiles pop at 4.68.
3. Tile 1's Hindi line "लेने आने तक रोकना" first shows between 10.3 s and 12.8 s, but the voice says "डाक को लेने आने तक रोकना है" from 10.1 s. Start its `fade` at 10.1 s, and no later than 10.36 s.
4. Tile 1's Hindi job line renders at about 40 px, and the bottom 40% of every tile is empty. Set the Hindi line to 48 px and the English term to 56 px, and move the Hindi line down to about y 640 so it fills the tile. Use the same sizes and positions for tiles 2–5 in s171 and s172.

The scene lasts 12.80 s: every time in it is between 0 and 12.80.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s170.html`: one `<section class="vs-scene" id="s170" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
