# Fix animated scene s058

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s058" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s058), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s057.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s058.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
All six rows from the screen notes are there, complete and correct (IV A 1 Oct 2025; IV 1 Aug 2026; IV B, IV C 1 Aug 2026; IV D 17 Mar 2026; IV E, IV F 1 Aug 2026), with the source line. Rows land on "छह rows की list" and the row 1 band on "सबसे ज़रूरी". The stills are reading holds and are fine. The problem is the small text.

1. The Hindi glosses under each product ("साधारण दस्तावेज", "पार्सल", "24 स्पीड पोस्ट दस्तावेज़ (खुदरा)" …) render well under the kit's 32 px minimum (they look about 26–28 px). Set them to 36 px as the storyboard says. To fit, shrink the English product lines to 42 px and use the full 100 px row pitch (English baseline +38, Hindi baseline +80 from the row top) rather than shrinking the Hindi.
2. Header row "PRODUCT · उत्पाद / TABLE / से लागू" is tiny grey (about 24 px). Raise it to 32 px, keeping the supporting colour #6f6a63, and keep the Devanagari un-letter-spaced (letter-spacing 0 on "उत्पाद" and "से लागू").
3. Source line (y 955) is at most 28 px and pale: set it to 30 px, #6f6a63, full opacity, so it reads on a phone.

The scene lasts 12.03 s: every time in it is between 0 and 12.03.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s058.html`: one `<section class="vs-scene" id="s058" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
