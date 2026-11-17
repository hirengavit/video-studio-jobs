# Fix animated scene s021

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s021" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s021), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s020.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s021.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The date stamps land on "Office of posting" and "Office of destination" on their words, and the "सीख" band builds well, with "+ मुहर का दबाव" highlighted on its word. Three problems remain. The office labels are small pills pasted over the bottom of the parcel. Their Hindi lines ("भेजने वाला डाकघर", "पहुँचने वाला डाकघर") are well under the kit's 32 px. The "Office of destination" pill covers the parcel's tag. The opening layout doesn't match s020's last frame; that is fixed in s020, so keep this scene's card positions as they are. The 6.0–11.7 s still is the closing hold with the lesson band, which is fine.
1. Move the two office labels off the parcel and below it, centred under each date-stamp spot, with a short leader line from each. Set the English at 36 px bold and the Hindi beneath at 32 px or more with 1.3 line height, and keep them clear of the tag and the "सीख" band (shrink the parcel by about 10% if needed; don't shrink the Hindi).
2. Make the two date stamps on the parcel darker and larger (about 120 px, ink #2b2622) so the `stamp` at 1.66 and 3.40 reads as a postmark landing, not a pale disc.
3. Raise "post offices की date stamps" to 40 px or more, and keep it on the same baseline as "कम से कम 2".
4. Remove the three small dots at the bottom-left of the "सीख" band (they look like a stray loader), or move them up to the kicker area as the progress dots from s019/s020.

The scene lasts 11.74 s: every time in it is between 0 and 11.74.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s021.html`: one `<section class="vs-scene" id="s021" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
