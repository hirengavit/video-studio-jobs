# Fix animated scene s122

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s122" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s122), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s121.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s122.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The #depositor beat works: arrow, signature-slip card and "authorised पढ़े-लिखे व्यक्ति के ज़रिए" arrive on their words. The #rule beat reads in the right order (passbook on "Security", arrow, slip, strike and "cancel" on "cancel हो जाता है"). Its parts are small for a phone, though, and cluster in a band with empty space below and to the right.
1. #rule: the "security" tag text renders at about 32 px. Make it 44 px Inter 600, and widen the tag to fit (about 200×64, centred under the passbook at y 760).
2. #rule: "नामांकन" under the slip is about 32 px. Make it 48 px #6f6a63 at y 820 so it clears the slip's bottom edge by 20 px or more.
3. #rule: scale the passbook to ×1.3 (about x 200–510, y 380–790). Enlarge the nomination slip to x 960–1600, y 340–800, header "Nomination" 64. Re-aim the arrow between them, so the beat fills the space under the heading. Keep the slate cross at x 1660 and "cancel" at y 930.
4. The "TD · SB-5A" label on the passbook is unreadable at this size (under 20 px). Either enlarge it to 32 px, or leave it off and let the "security" tag carry the meaning.

The scene lasts 11.51 s: every time in it is between 0 and 11.51.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s122.html`: one `<section class="vs-scene" id="s122" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
