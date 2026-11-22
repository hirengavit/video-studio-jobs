# Fix animated scene s127

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s127" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s127), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s126.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `timeline` (Timeline): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: timeline: the number of events (3 to 4 on a bilingual screen) and their spacing; which event is the key one; the caption band (English line with Hindi under it) or drop it.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:first-postcard-austria-1869`: The first Austrian postcard of 1869 (Correspondenz-Karte, Austria-Hungary), the whole card visible, front/address side (Correspondenz-Karte), 1920×1330. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s127.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Seam with s126 matches. The history half works: title "थोड़ा इतिहास", the track draws, the 1869 Austria photo cut-out and event card with "1 October", "1869" and "Austria" each land on their words. The problem is the first 6 s: the whole point (an ordinary sender can't make a reply postage-free) is a tiny footer line inside the Postcard card.
1. Make "आम sender: reply लिखकर free नहीं" a proper keyword chip at ≥ 48 px Noto Sans Devanagari (now ~36 px): a sand pill inside the Postcard card under the postcard drawing, growing the card as needed, fading in at 0.0 with the card.
2. Fix the word spacing in that line (double gap around "free" / "नहीं"): set it as one text run with "free" as an inline tspan so the strike sits exactly on it.
3. Make the slate strike on "free" at 4.70 clearly visible: 6 px #4b4f58 line, `draw` over 0.4 s, and dim the Business Reply Service card to 40 % at the same moment so the eye goes to the Postcard side.
4. In `#hist`, bring event 1's card up sooner (8.4 s, on "दुनिया का पहला postcard") so the screen isn't only a title and a bare track from 6.3 to 8.9 s.

The scene lasts 14.94 s: every time in it is between 0 and 14.94.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s127.html`: one `<section class="vs-scene" id="s127" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
