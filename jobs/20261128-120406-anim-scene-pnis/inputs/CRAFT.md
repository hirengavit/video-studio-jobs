# Scene craft: the rules every animated scene follows

These hold for every channel. A channel's kit adds its own style rules on top (palette, textures, how it
likes to move); where a kit rule is more specific, follow the kit.

## Physics: the world behaves
- Everything rests on something or is held. Nothing floats unless the idea is floating (a thought, a
  symbol), and then it should read clearly as a symbol, not a mistake.
- Gravity pulls down. Things fall, land and settle. Use `fall` and `place`.
- A hand moves first, then the object: pick up, then move; tilt, then the liquid flows. Use `hold`.
- Liquid leaves through an opening (a spout, a rim), never through a wall or a bottom. Use `pour`.
- Causes come before effects, by a beat: the push, then the door moves; the click, then the screen changes.
- Scale stays consistent: the same pitcher is the same size next to the same man in every scene.
- Characters stand on the floor or sit on a seat. Seated behind a table: the table hides the legs, the chair
  is behind them, and they face us.

## Continuity: one world across scenes
- The same place keeps the same layout, props, light and camera side from scene to scene.
- Props keep their state: a pitcher that was emptied stays empty; use a shared `state` for anything that
  changes over several scenes.
- Same place, next moment: cut (or a camera move). Save fades and wipes for a change of place or time.
- Keep screen direction: if he faces left toward the table in one scene, he still does in the next.
- The first frame of a scene should agree with the last frame of the previous one (who is where, doing what).

## Acting: decide per moment
- Decide how much this moment should move from what the words mean and feel. Most lines want one clear
  pose that holds while the words land; add a gesture only where the words carry energy or a turn. A quiet
  or heavy line may want almost no movement. Stillness is a choice.
- Characters look at what they react to (eye line), and react after the thing happens.
- One clear action at a time; don't stack a pose change, a camera move and three pops on the same word.

## Clarity: the idea reads in one second
- Show the idea as literally as the words allow first; use a metaphor only when the narration makes it
  obvious (and then keep it consistent).
- One idea per scene, with the fewest elements that make it clear. Important things are big, central and
  high-contrast; supporting things stay quiet.
- Use the frame: size the main element for a phone screen, so it fills most of the space it has, with even
  margins around it rather than a small card floating in a big empty canvas (unless the emptiness is the point).
- Words on screen only when they add something the picture can't; big enough to read (at least 44 px), never
  overlapping, and on the word that says them.
- Never invent numbers, quotes, prices or results that aren't in the script.

## Text and containers: nothing ever overlaps

- Text enters after its container has started to appear, and leaves before the container changes or the
  next text arrives in the same place. Two texts never share a spot, not even for a frame.
- A replaced word uses `swap`; a corrected idea uses `strike` and then the new text elsewhere.
- Library cards, slides and documents are empty; the scene writes its words on them. Check the piece's
  "has lettering" note before placing text on it.
- Text that sits on a container (a pill, a card, a tag) lives inside the container's group, so the two move
  as one; a container that slides in never arrives after its own words.
- Library pieces keep their proportions: one scale number, never `scale(a b)`. A pill or a card that needs
  another shape is drawn in the scene.
- Fix a crowded screen by moving or resizing, never by deleting what the storyboard planned to show.
- A card arrives with its first items and is sized for what it holds; it doesn't sit mostly empty for long
  while its items wait for later words (bring them in sooner, or grow the card as they arrive).

## Never a blank screen
- While the voice speaks, the screen always shows something about it. A scene's first frame already has
  its anchor (the title, the card, the main object, or what carries over from the scene before); the rest
  lands on its words. Waiting for the spoken word is right for each reveal, not for the whole screen.
- A scene doesn't clear itself before it ends: its content stays until the cut or the next scene's
  transition takes it away.
- The video's first second is the hook: something striking is already readable (the question, the
  surprising fact, a bold image), not a slow build from nothing.

## Camera and timing
- The camera moves slowly and with purpose (a push-in toward what matters, a pan to what comes next).
- A zoom keeps what it frames inside the picture: aim it at the element (`{on: '#id', zoom}`) and check that
  the card's edges stay in frame at the zoom's end.
- Big moves land on the words that matter (use the word times); leave a beat of calm after them.
