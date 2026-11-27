# Fix animated scene s141

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s141" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s141), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s140.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:return-to-sender-envelope`: A real posted envelope with a 'Return to sender' or returned-mail stamp or label on its cover, the whole envelope visible, no readable private address (Envelope USA - Germany - Return to sender - December 2020), 1920×1279. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s141.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Part B works. The photo anchors the first frame, the question comes on "sender का पता", and the green "हाँ → sender को" and the "नहीं → Returned Letter Office" branches come on their words. Part C has a problem. The point of the line, "delivery staff पहचान माँग सकता है", is a small grey line under a small ink title, and it holds for almost 5 s with the right half of the frame empty. The photo also has no credit.

Fixes:
1. Part C (from 7.6 s): make "Recipient अनजान" a heading in red #9e1b1b at 52 px. Put "→ delivery staff पहचान माँग सकता है" in ink #2b2622 at 40 px, and place it beside the ID-card icon (x 680–1800, y 420–520) rather than as a grey subline under the title. Keep x 760–1800 at y 560 and lower free for s142's chips.
2. Photo: add a small grey credit line under the caption (for example "Photo: Wikimedia Commons", or the photo's own credit, 24 px). Raise the caption "लौटी डाक का उदाहरण" from about 28 px to 34 px.
3. Question "sender का पता बाहर साफ़?": raise it to 48 px in red #9e1b1b (heading role) so it reads as the question the branches answer.
4. Hindi "लौटी डाक का कार्यालय" under "Returned Letter Office": raise it from about 28 px to 34 px.

The scene lasts 12.34 s: every time in it is between 0 and 12.34.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s141.html`: one `<section class="vs-scene" id="s141" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
