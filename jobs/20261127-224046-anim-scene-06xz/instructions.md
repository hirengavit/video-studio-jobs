# Fix animated scene s105

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s105" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s105), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s104.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:passport-seva-kendra-sign` (and `photo:passport-seva-kendra-sign-cutout`, its subject cut out): The signboard or front of a Post Office Passport Seva Kendra (or a Passport Seva Kendra) in India, sign readable, no identifiable faces (Post Office Passport Seva Kendra) (shown in the scene before; use it where this scene continues that frame), 1920×1440. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s105.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Timing is good: "Dec 2024" grows on "December 2024", "PCC · देश भर के POPSKs" lands on "देश भर के POPSKs", the green card types on "Police Clearance Certificate" (7.8 s) and the slate card on "Passport Clearance Certificate" (9.9 s), then gets struck. The cut to `#pcc` at 6.68 s is the planned sub-shot. The stills the check found are reading holds. What a viewer would notice: the small text on the returning timeline.

1. `#timeline`: the yellow chips "दूरी ↓ / समय ↓ / खर्च ↓" and the "pilot centres" label render at about 24–28 px. That is under the kit's 32 px minimum for Hindi. Set the chip text to 36 px (chips grow to fit) and "pilot centres" to 36 px `class="supporting"`.
2. `#timeline`: the whole timeline sits in the top half (y 140–700) and leaves y 720–1000 empty. Shift the group down about 80 px (`transform="translate(0 80)"`) so the margins above and below are even, and keep the cards inside x 140–1780.
3. `#timeline`: set "PCC · देश भर के POPSKs" to 44 px (it reads at about 36 px now). It is the new fact this scene adds.

The scene lasts 12.10 s: every time in it is between 0 and 12.10.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s105.html`: one `<section class="vs-scene" id="s105" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
