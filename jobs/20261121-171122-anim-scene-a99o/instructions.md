# Fix animated scene s072

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s072" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s072), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s071.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `chapter-title` (Chapter title stamp): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: chapter-title: part number and total; English and Hindi title; subtitle; the icon in the stamp (post box, envelope, parcel, scales, building) and the small word beside the value.

## What to change

The current file is `inputs/current/s072.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The opener (Part 5 stamp, "Inland Letter Card", Hindi "अंतर्देशीय पत्र कार्ड") is a strong section change after the 0.5 s fade. The doc card follows the kit: Georgia, white card, source beneath, Hindi gist. "ILC" lands big under the folded card at about 12–14 s on "ILC कहते हैं" (12.2 s). The problems are in the #def beat.

1. The highlights run ahead of the voice. At 5.7 s "sheet", "folded" and "gummed" are all already highlighted, but "मुड़ी" is said at 5.0–6.7 s and "गोंद लगी" at 6.7–8.3 s. Stagger them: `highlight` "sheet" at 4.75, "folded" at 5.4, "gummed" at 6.9 (each sweep 0.4 s).
2. The right half of the screen is empty from 4.7 s to about 10 s. Bring `letter-card-folded` (x 1080, y 420, scale 1.1) in with `place` at 5.2 s on "मुड़ी". Keep "ILC" + "Inland Letter Card" under it at 12.2 s as now.
3. The quote fills only about half the card's width. Raise the Georgia quote to 60 px (the house doc card is 54–64), so it fills the card from x 160 to 960. Keep the source at 30 px and the gist at 40 px or more, and grow the card's height to fit rather than shrinking anything.
4. Label the gist line "सार (gist):" instead of "सार:", as the kit asks for a non-official Hindi gist.

The scene lasts 14.24 s: every time in it is between 0 and 14.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s072.html`: one `<section class="vs-scene" id="s072" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
