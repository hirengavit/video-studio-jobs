# Fix animated scene s142

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s142" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s142), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s141.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s142.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Each part lands on its words: "किसी भी कारण से" at 0, the chip at about 2.5 s on "administrative instructions", the request sheet at about 5.2 s on "Sender, addressee", and "लिखित request" at about 11.4 s on "लिखित". But each addition is dropped onto the s141 layout without making room. By 5.4 s the screen holds 10 or more items with several collisions, against the kit's limit of four or five and its no-overlap rule.

1. `written-request`: it slides up over the lower right of the globe and covers the envelope and the "Reg. 119A(1)" chip. Move it clear of the globe, at scale 0.4, at about x 1560–1730, y 720–950. At the same moment, `fade` the small envelope from the return arrow to the supporting colour, or move it to x 1300.
2. Chip "administrative instructions के हिसाब से": it sits on the outward arrow, and the plane's tail overlaps its text. Before 2.5 s, `fade` the plane out (its trip is done). Then place the chip at least 24 px above the arrow, or put it directly under "किसी भी कारण से" as a second line at about y 520. Don't put it on the arrow.
3. Label "Sender · Addressee · Authorised person": it is squeezed between the "Accountable outward item / भेजने वाला (Sender)" panel and the "Recall" pill, and it nudges "Recall" down by about 6 px. Put it next to the request sheet, left-aligned at about x 1100–1540, y 880, at 44 px, so it reads as who signs the request. "Recall" doesn't move.
4. "लिखित request": it lands over the bottom of the sheet and on the "Reg. 119A(1)" chip. Put it just above the sheet (y about 690) at 44 px with its highlight band, and move the Reg chip to the bottom left under the office (x 160, y 960).
5. From about 5.2 s, fade earlier, secondary items to the supporting grey (#6f6a63): the arrow and the "Accountable outward item" panel. That way the request, its signers and "लिखित request" stand out, as the kit says to do when a screen gets busy.

The scene lasts 13.36 s: every time in it is between 0 and 13.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s142.html`: one `<section class="vs-scene" id="s142" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
