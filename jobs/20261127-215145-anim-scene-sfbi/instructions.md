# Fix animated scene s015

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s015" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s015), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s014.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `key-term` (Key term): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: key-term: the term, its translation and abbreviation; the meaning line; the chips; replace the chain with an example or a rule line; drop the exam pill.

## What to change

The current file is `inputs/current/s015.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The wipe into a new card is right. "Retail Post / खुदरा डाक" types on its word, the "REG. 105" postmark stamps on "regulation 105", the heading comes on "लोगों की सुविधा", and row 1 and the "अपने" highlight follow the voice. The still stretches are reading holds. The problem is that the white meaning card sits completely empty from 0 to 4.6 s, so a viewer sees a blank card for four and a half seconds.

1. Hide the white meaning card (frame and fill) at the start and `fade` it in at 4.4 s together with the heading "लोगों की सुविधा के लिए" (the heading stays at 4.56 s), so the card arrives with its first item.
2. Make the kicker "Post Office Regulations, 2024" 36 px (about 28 px now). It's the term card's only text until "Retail Post" types at 0.18 s.
3. Make row 1 "अपने products और services" 48 px (Noto Sans Devanagari, line-height 1.3), and scale the post-box icon to match, so the row fills more of the card's width.

The scene lasts 9.72 s: every time in it is between 0 and 9.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s015.html`: one `<section class="vs-scene" id="s015" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
