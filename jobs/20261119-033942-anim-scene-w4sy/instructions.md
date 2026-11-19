# Fix animated scene s171

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s171" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s171), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s170.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-cards` (Compare cards): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-cards: question (English + Hindi), the two names, full names and Hindi names, two labelled facts per card (dates, who, limit, rule), the takeaway; which band is red or yellow; no right/wrong colours unless one is actually wrong (then slate strike, green tick).

## What to change

The current file is `inputs/current/s171.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam from s170 is good: the same cards are in place, and the left card turns grey on the cut. The new content is cramped into the bottom strip of the right card in small type. The designation plate shows only as a thin white sliver poking out under "Controller of Foreign Mails", which looks like a rendering glitch.
1. Designation plate (plate row, right card, about x 1060–1110, y 840): scale the plate piece so it is the full row height (about 90 px tall) and place it whole to the left of the label, with the label starting about 20 px after it. As it stands it is clipped and half hidden behind the text.
2. Plate row text: raise "Controller of Foreign Mails" from about 44 px to 52 px and "विदेश डाक नियंत्रक" to at least 36 px with 1.3 line height. Grow the plate row's box to fit (y 720–870), and shrink the globe icon panel slightly (y 260–460) to make room.
3. Pin row (y 880–970): make "Mumbai" and "दूसरी जगहों पर भी" at least 40 px. Give the two grey pins the same size as the Mumbai pin, and leave a 30 px gap between them and the Hindi text.

The scene lasts 8.59 s: every time in it is between 0 and 8.59.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s171.html`: one `<section class="vs-scene" id="s171" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
