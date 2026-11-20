# Review and fix a script for Postal Exams

You're the careful editor. Check everything strictly, fix what is really wrong, and keep what works: a change must make the lesson more correct, more complete or clearer, not just different. Length: as long as covering the material well needs; no target.

## Inputs

- `inputs/script.md` — the draft. `inputs/angle.md` — the plan it was written for.
- `inputs/channel/checklist.md` — the channel's review checklist. `inputs/channel/long-form.md` — its rules.
- `inputs/source.md` — the source material the video is made from: check the script against it.
- `inputs/earlier/` — the channel's earlier videos in this series, in order (Department of Posts Structure, Circles and HQ | डाक विभाग का ढाँचा; Classes and Types of Post Offices | डाकघरों के वर्ग और प्रकार; Business Hours, Holidays and Night Post Offices | डाकघर का समय और अवकाश; Postage Payment, Stamps and Stationery | डाक शुल्क, टिकट और लेखन सामग्री; Stamps, Date Stamps and Bulk Cash Prepayment | डाक टिकट, तारीख की मुहर और थोक नकद भुगतान; Franking Machines and RMFM | फ्रैंकिंग मशीन के पूरे नियम; Packing, Sealing and Posting | पैक, सील और पोस्ट करने के नियम; Methods of Address, PIN Code and Defence Mail | पता लिखने के नियम; Post Box and Post Bag | पोस्ट बॉक्स और पोस्ट बैग के नियम): the viewer has seen them. Follow the channel's rules on building on them; never contradict them.

## Part 1 — Review: **`out/review.md`**

Run every check in the channel's checklist, plus these from the source:

- **Does it cover all of the source's main material?** Go through `inputs/source.md` part by part and list anything
  missing or thinned out; add it back in the final.
- **Does every fact match the source?** It is the confirmed reference given by the person making the video; use the
  corrections it lists.
- **Does the narration talk about the material instead of teaching?** Cut any line about the source, a package, a
  review, coverage or what is or isn't "confirmed", and any hedging of the source's facts.
- **Does it reuse or lightly reword any of the channel's own lines in `inputs/channel/off-limits.json`**
  (signature lines, quoted lines, catchphrase patterns)? We write in its style, never with its lines.

Sections:

- `## Problems` — every failed or partial check, as:
  ```
  ### <check name>
  > <the exact line from the script, copied>
  Why it fails, in one or two sentences.
  **Fix:** <the rewrite>
  ```
  Report only real problems; there's no minimum. Before adding narration for a missing requirement, check
  whether it belongs on screen or in Production notes instead. If nothing needs fixing, say so under Problems. Every quoted line must be copied exactly from the draft.
- `## Passed` — the checks that passed, one line each.
- `## Weakest part` — which stretch is weakest and why.

## Part 2 — Fix: **`out/script-final.md`**

Apply every fix and keep everything else as it is. Cut before adding. Same format as the draft (title, promise,
chapters, Production notes), plus `## What changed` at the very end: 3–6 short lines.

Then run `node check.mjs` and fix what it reports until it prints PASS.
