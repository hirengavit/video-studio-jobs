# Fix animated scene s117

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s117" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s117), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s116.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s117.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

This is the core rule of the part, "पूरा item → अपने वज़न का एक slab" and "rates जोड़ी नहीं जातीं". Both appear on time (0.68, 4.42, cross at 7.40). But both sit in right-margin chips at about 14–18 px Hindi, which is unreadable on a phone and well under the kit's 32 px. A viewer hears the rule and sees nothing they can read.

Fixes:
1. Rebuild the note "पूरा item → अपने वज़न का एक slab" as a card spanning the right margin (x 1580–1890). Use three lines at 34 px Noto Sans Devanagari with 1.3 line height: "पूरा item" / "↓" / "अपने वज़न का एक slab". Bring it in at 0.68 with a pop, replacing the "बीच के slabs" bracket label that is there now (fade the label out at 0.5).
2. Set the slate chip "₹20 + ₹25 + …" at 40 px Inter in a pill about 280 × 70 under the note. Make the strike and cross at 7.40 (on "जोड़ी नहीं जातीं") 5 px slate, to match.
3. If the margin is too tight at those sizes, fade the earlier chips (booking minimum, 299, 300 ✓) to grey at 0.3 and shrink them to 80 %, as s118 does, so the new rule is the brightest thing on the right. This also keeps it to one fresh annotation per screen, as the kit asks.

The scene lasts 8.96 s: every time in it is between 0 and 8.96.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s117.html`: one `<section class="vs-scene" id="s117" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
