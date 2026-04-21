---
id: NAV-004
topic: navigation
order: 4
slug: true-magnetic-compass-headings
title: "True, Magnetic, and Compass Headings"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E
  - AIM GEN 1.1
questions:
  - id: q1
    prompt: "An aircraft has a true heading of 360°, a magnetic variation of 20°W, and a compass deviation of −3°W. What is the compass heading?"
    choices:
      A: "343°"
      B: "377°"
      C: "017°"
      D: "020°"
    answer: C
    explanation: "Step 1: True (360°) + westerly variation (20°W → add 20°) = Magnetic 380° = 020°. Step 2: Magnetic (020°) + deviation (−3°W → subtract 3°) = Compass 017°. Using TVMDC: West variation adds; west deviation subtracts. Source: TP 12880E Chapter 9."
  - id: q2
    prompt: "Using the TVMDC mnemonic, which step converts a Magnetic heading to a Compass heading?"
    choices:
      A: "Applying variation"
      B: "Applying wind correction"
      C: "Applying compass deviation"
      D: "Converting from degrees true to degrees magnetic"
    answer: C
    explanation: "TVMDC stands for True → Variation → Magnetic → Deviation → Compass. The step from Magnetic to Compass requires applying compass deviation, which is the error caused by the aircraft's own magnetic interference. Source: TP 12880E Chapter 9."
  - id: q3
    prompt: "An aircraft deviation card shows a correction of E2 on a heading of 270° magnetic. The pilot wants to fly 270° magnetic. What compass heading should be steered?"
    choices:
      A: "268°"
      B: "270°"
      C: "272°"
      D: "274°"
    answer: C
    explanation: "Easterly deviation is added: 270° + 2° = 272°. The compass reads 2° lower than the actual magnetic direction, so the pilot must aim the compass needle at 272° to actually track 270° magnetic. Source: TP 12880E Chapter 9."
  - id: q4
    prompt: "A pilot measures a true track of 135° on a VNC. The variation at that location is 14°W. What is the magnetic heading to fly (ignoring deviation)?"
    choices:
      A: "121°"
      B: "135°"
      C: "149°"
      D: "155°"
    answer: C
    explanation: "West variation is added: True (135°) + 14° = Magnetic 149°. 'West is Best — add.' The compass heading would also need deviation applied, but this question asks for magnetic only. Source: TP 12880E Chapter 9, AIM GEN 1.1."
---

# Lesson NAV-004: True, Magnetic, and Compass Headings

**Section:** Navigation  
**Lesson number:** 004  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 9, AIM GEN 1.1

---

## Narration Script

Welcome to Lesson NAV-004. In the previous lesson we introduced magnetic variation and compass deviation as separate concepts. Now we're going to put them together into one complete conversion chain and work through it step by step. By the end of this lesson you should be able to take any true heading from a chart and calculate the exact compass heading to steer — which is a core skill both on the PPL written exam and in actual cross-country flying.

---

**The Three Types of Heading**

Before we go through the conversion, let's be precise about what each heading type means:

**True Heading** is the direction of your flight path measured in degrees clockwise from True North — the geographic North Pole. When you lay a plotter on a VNC chart and measure the angle of a route, you're measuring the true heading (or more precisely, the true track). True North is the reference on all aeronautical charts.

**Magnetic Heading** is the direction of your flight measured from Magnetic North — the point in the Canadian Arctic toward which the compass needle actually points. Magnetic North and True North are not in the same place, and the difference between them varies depending on where in Canada you are.

**Compass Heading** is what the cockpit compass actually shows when you're flying in a specific aircraft on a specific heading. Even after you've corrected for variation (the difference between True and Magnetic North), your compass may still be slightly off due to interference from the aircraft's own electrical and metal components. This additional error is compass deviation.

So the complete chain is:

**True → (variation) → Magnetic → (deviation) → Compass**

---

**The TVMDC Mnemonic**

The sequence of steps is remembered with the mnemonic **TVMDC**:

- **T** — True heading
- **V** — Variation (apply it here)
- **M** — Magnetic heading (the result after applying variation)
- **D** — Deviation (apply it here)
- **C** — Compass heading (the result after applying deviation)

A common memory phrase is **"True Virgins Make Dull Companions"** or **"Timid Virgins Make Dull Companions."** Whatever works for you — just remember the order T, V, M, D, C.

---

**The Direction Rules**

Both variation and deviation can be either East or West, and the rule for which way to apply them is:

For **variation** (converting True → Magnetic):
- **Westerly variation: ADD** to True to get Magnetic
- **Easterly variation: SUBTRACT** from True to get Magnetic

Memory aid: **"West is Best, East is Least"** — West adds (bigger number = best?), East subtracts (smaller = least).

For **deviation** (converting Magnetic → Compass):
- **Easterly deviation: ADD** to Magnetic to get Compass
- **Westerly deviation: SUBTRACT** from Magnetic to get Compass

The same "East is least, West is best" mnemonic does NOT work consistently for deviation — the direction is actually reversed from variation. For deviation, easterly means the compass reads too low, so you add. Westerly means the compass reads too high, so you subtract.

The safest approach: understand what the correction is doing physically, then you won't need to memorize two different rules.

---

**Understanding Deviation Physically**

Here is the physical picture for deviation: The compass card in your aircraft has its 0° mark pointing to magnetic north — ideally. But local magnetic interference pushes the needle slightly off. If the interference pushes the needle clockwise (toward higher numbers), the compass reads a higher number than the true magnetic direction. To actually point the compass at the correct magnetic heading, you would steer a slightly lower compass number. That is westerly deviation — the compass reads too high, so you subtract.

Conversely, if interference pushes the needle counterclockwise, the compass reads a lower number than true magnetic. You must steer a higher compass number to achieve the correct magnetic heading. That is easterly deviation — the compass reads too low, so you add.

---

**The Compass Card**

The compass in small aircraft is a wet compass (also called a magnetic compass or B-type compass) — a card floating in liquid with a magnet attached, free to rotate to align with the magnetic field. It has several known errors:

- **Variation** — addressed by applying the variation correction
- **Deviation** — addressed by the deviation card
- **Oscillation** — the card swings in turbulence
- **Magnetic dip errors** — the compass is unreliable in steep turns and during acceleration/deceleration (these are separate topics for the instruments lesson)

For navigation planning, only variation and deviation are relevant.

---

**The Deviation Card**

Every aircraft legally must have a compass deviation card mounted in the cockpit. It is usually a small laminated card located near the compass. It shows how much correction to apply at various magnetic headings — for example:

| Steer (Compass) | To Fly (Magnetic) |
|-----------------|-------------------|
| 002 | 360 |
| 033 | 030 |
| 062 | 060 |
| 092 | 090 |

You read the card backwards for our purposes: we know the magnetic heading we want, and we look up what compass heading to steer. The deviation card is produced by a compass swing — a calibration process where a technician positions the aircraft on known magnetic headings and records the compass error.

---

**Worked Example 1 — Straightforward West Variation**

Route: Toronto (CYYZ) to Kingston (CYGK), Ontario  
True track from VNC: 075°  
Magnetic variation (from isogonic line): 12°W  
Compass deviation (from card): +2°E (for this heading)

Step 1 — True to Magnetic:  
075° + 12° (west variation, add) = **087° Magnetic**

Step 2 — Magnetic to Compass:  
087° + 2° (east deviation, add) = **089° Compass**

The pilot sets the directional gyro (DI) to 089° and keeps the compass needle aligned to 089°.

---

**Worked Example 2 — East Variation (Western Canada)**

Route: Calgary (CYYC) to Kelowna (CYLW), British Columbia  
True track: 265°  
Magnetic variation: 18°E  
Compass deviation: −1°W

Step 1 — True to Magnetic:  
265° − 18° (east variation, subtract) = **247° Magnetic**

Step 2 — Magnetic to Compass:  
247° − 1° (west deviation, subtract) = **246° Compass**

---

**Worked Example 3 — Northerly Heading, High Variation**

Route: Whitehorse (CYXY), Yukon, flying due north  
True track: 360°  
Magnetic variation: 25°W  
Compass deviation: +3°E

Step 1:  
360° + 25° = 385° → wrap around = **025° Magnetic**

Step 2:  
025° + 3° = **028° Compass**

Note the wrap-around: if your calculation exceeds 360°, subtract 360° to get back into the 0–359° range.

---

**Exam Tips**

On the Transport Canada PPL written exam, heading conversion questions typically give you a true heading, a variation, and sometimes a deviation, and ask you to find the compass heading (or work backwards from compass to true). Always:

1. Write out the TVMDC chain
2. Note whether each correction is E or W
3. Apply the correct add/subtract rule
4. Check your answer is in the 0–359° range

Most exam questions will use variations you'd realistically encounter in Canada — between 5°W and 25°W for most of southern Canada.

---

## Quick Reference: TVMDC Conversion Chain

| Step | From → To | Rule |
|------|-----------|------|
| Variation | True → Magnetic | West: add; East: subtract |
| Deviation | Magnetic → Compass | East: add; West: subtract |

**Memory:** "True Virgins Make Dull Companions" for the order T→V→M→D→C

**Wrap-around rule:** If result > 360°, subtract 360°. If result < 0°, add 360°.

| Typical Canadian Variation | Region |
|---------------------------|--------|
| 15°W – 20°W | Atlantic Canada |
| 10°W – 15°W | Ontario / Quebec |
| 5°E – 10°E | Prairies |
| 15°E – 20°E | BC Interior |
| 20°E – 25°E+ | Yukon / NWT |

---

*End of Lesson NAV-004.*
