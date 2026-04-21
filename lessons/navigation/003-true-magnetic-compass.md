---
id: NAV-003
topic: navigation
order: 3
slug: true-magnetic-compass
title: "True vs Magnetic vs Compass Heading"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E
  - AIM GEN 1.1
  - VNC Chart Legend
questions:
  - id: q1
    prompt: "An aircraft is flying in Ontario where the magnetic variation is 10°W. The true track measured from the VNC is 270°. What is the magnetic heading (ignoring deviation)?"
    choices:
      A: "260°"
      B: "270°"
      C: "280°"
      D: "290°"
    answer: C
    explanation: "With westerly variation, you ADD the variation to true to get magnetic: 270° + 10° = 280°. The TVMDC mnemonic: True Variation Magnetic Deviation Compass. Westerly variation is added when converting True to Magnetic. Source: TP 12880E Chapter 9, AIM GEN 1.1."
  - id: q2
    prompt: "On a VNC, dashed magenta/purple lines running roughly north-south across the chart are called:"
    choices:
      A: "Isohypse lines"
      B: "Isogonic lines"
      C: "Isobaric lines"
      D: "Agonic lines"
    answer: B
    explanation: "Isogonic lines connect points of equal magnetic variation on a chart. The agonic line is the specific isogonic line where variation is 0°. Isohypse lines show equal altitude (contours), and isobaric lines show equal pressure on weather charts. Source: VNC Chart Legend, TP 12880E Chapter 9."
  - id: q3
    prompt: "A compass deviation card in an aircraft shows +3° on a heading of 360°. The aircraft's magnetic heading is 360°. What is the compass heading the pilot should fly?"
    choices:
      A: "357°"
      B: "360°"
      C: "363°"
      D: "356°"
    answer: C
    explanation: "Deviation is applied last: Compass = Magnetic + Deviation. With +3° (easterly) deviation, the compass reads 3° high, so the pilot must steer 363° on the compass to actually fly a magnetic heading of 360°. Using TVMDC: add easterly deviation to get compass heading. Source: TP 12880E Chapter 9."
  - id: q4
    prompt: "In northwestern Canada (e.g., Yukon), magnetic variation is approximately 25°E. A true track of 090° gives a magnetic heading of:"
    choices:
      A: "065°"
      B: "090°"
      C: "115°"
      D: "075°"
    answer: A
    explanation: "With easterly variation, you SUBTRACT the variation from true to get magnetic: 090° − 25° = 065°. Easterly variation means magnetic north is east of true north, so compass headings are numerically less than true headings. Source: TP 12880E Chapter 9, AIM GEN 1.1."
---

# Lesson NAV-003: True vs Magnetic vs Compass Heading

**Section:** Navigation  
**Lesson number:** 003  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 9, AIM GEN 1.1, VNC Chart Legend

---

## Narration Script

Welcome to Lesson NAV-003. This lesson answers a question every student pilot eventually asks: why doesn't the compass point to the actual North Pole? The answer lies in magnetic variation — and once you understand it, along with its companion concept, compass deviation, you'll have everything you need to convert a heading from the chart to what you actually fly on the cockpit compass.

---

**True North vs. Magnetic North**

When you draw a line on a VFR Navigation Chart and measure its direction with a plotter, you get a **True heading** — an angle measured from **True North**, the geographic North Pole. The lines of longitude on a chart converge at True North. It is a fixed point on the Earth's axis of rotation.

Your compass, however, does not point at True North. It points toward the **Magnetic North Pole**, which is a moving point in the Canadian Arctic caused by the Earth's molten iron core. As of recent years, the magnetic north pole has been drifting northwestward over the Arctic Ocean.

The angular difference between True North and Magnetic North at any given location is called **magnetic variation** — sometimes also called magnetic declination. This difference is expressed in degrees East or West.

---

**The Three Heading Types**

Understanding the difference between True, Magnetic, and Compass headings is fundamental to all VFR navigation:

**True Heading** — measured from True North (geographic North Pole). This is what you measure on the chart with your plotter.

**Magnetic Heading** — measured from Magnetic North. This is what you get after applying variation to the true heading.

**Compass Heading** — what the cockpit compass actually indicates. This accounts for the aircraft's own magnetic interference (deviation).

The conversion chain is: **True → (variation) → Magnetic → (deviation) → Compass**

---

**Westerly vs. Easterly Variation**

If Magnetic North lies to the **west** of True North (as seen from your position), the variation is **westerly**. If Magnetic North lies to the **east** of True North, the variation is **easterly**.

In Canada, the variation varies greatly across the country:

- **Atlantic provinces:** approximately 15°W to 20°W
- **Ontario and Quebec:** approximately 10°W to 15°W
- **Prairie provinces:** approximately 5°E to 10°E
- **British Columbia (interior):** approximately 15°E to 20°E
- **Yukon and northwest:** can exceed 25°E

The agonic line — the line of zero variation — runs roughly through central Manitoba and the Great Lakes region. East of the agonic line, variation is westerly. West of it, variation is easterly.

---

**Isogonic Lines on VNC Charts**

On your VFR Navigation Chart, magnetic variation is shown by **isogonic lines** — dashed magenta or purple lines that run roughly north-south across the chart. Each isogonic line is labelled with its variation value, such as "15°W" or "10°E."

When planning a cross-country flight, note which isogonic line is closest to your route — or interpolate between two lines if your route falls between them. This gives you the variation to apply.

---

**Applying Variation: The TVMDC Mnemonic**

The conversion from True heading to what you fly on the compass uses a sequence of corrections. A classic mnemonic to remember the order and direction is:

**TVMDC — True, Variation, Magnetic, Deviation, Compass**

Or some pilots say: **"True Virgins Make Dull Companions"** or **"Timid Virgins Make Dull Companions."**

The key rule for variation:

- **Westerly variation: ADD to True → get Magnetic**
- **Easterly variation: SUBTRACT from True → get Magnetic**

A memory trick: **"West is Best"** — add westerly variation. **"East is Least"** — subtract easterly variation.

---

**Worked Example 1 — Ontario, 15°W Variation**

You measure a true track of 090° on the VNC. The isogonic line shows 15°W variation.

- True heading: 090°
- Variation: 15°W → ADD
- Magnetic heading: 090° + 15° = **105°**

So even though your chart course is due east (090°), your compass must be pointed to 105° to actually fly true east, because the compass needle is pulled 15° to the west.

---

**Worked Example 2 — British Columbia, 20°E Variation**

You measure a true track of 180° (due south). Variation is 20°E.

- True heading: 180°
- Variation: 20°E → SUBTRACT
- Magnetic heading: 180° − 20° = **160°**

Compass deviation is applied after this step, which we cover next.

---

**Compass Deviation**

Even after applying variation, your compass may still be slightly off — this time because of magnetic fields generated by the aircraft itself. The aircraft's engine, electrical system, wiring, and metal structure all create small magnetic fields that interfere with the compass.

This error is called **compass deviation**. Unlike variation, which is a property of the Earth, deviation varies with the heading you're flying and is unique to each individual aircraft.

Deviation is recorded on a **deviation card** — a small laminated card usually mounted on the instrument panel near the compass. It typically looks like a table showing magnetic headings in increments (e.g., 000°, 030°, 060°, 090°, etc.) with a correction in degrees East or West to apply.

---

**Applying Deviation**

The same directional rule applies:

- **Easterly deviation: ADD** to Magnetic → get Compass
- **Westerly deviation: SUBTRACT** from Magnetic → get Compass

So the full TVMDC chain is:

1. Start with **True** heading (from chart)
2. Apply **Variation** (+ for West, − for East) → **Magnetic** heading
3. Apply **Deviation** (+ for East, − for West) → **Compass** heading

That final Compass heading is what you steer on the cockpit compass.

---

**Worked Example 3 — Full Chain**

True track from VNC: 045°  
Variation: 15°W  
Deviation for this heading: +2°E (from deviation card)

- True: 045°
- + 15° (West variation): Magnetic = 060°
- + 2° (East deviation): Compass = **062°**

---

**Why This Matters**

If you simply flew the true heading from the chart without correction, you could be off by 15° or more. Over a 100 NM leg, that translates to roughly 26 NM of lateral error — more than enough to miss an airport, enter wrong airspace, or become completely lost.

For the Transport Canada PPL written exam, you will likely be asked to apply variation and deviation in a straightforward problem. Know the mnemonic, know which way to add or subtract, and practice a few examples until it becomes automatic.

---

## Quick Reference: True, Magnetic, and Compass Headings

| Concept | Definition | Direction Rule |
|---------|-----------|----------------|
| Magnetic Variation | Angle between True North and Magnetic North | West: add (+); East: subtract (−) when converting T→M |
| Isogonic line | Line of equal variation on a chart | Labelled in degrees E or W on VNC |
| Agonic line | Line of zero variation | Runs roughly through central Manitoba |
| Compass Deviation | Error from aircraft's own magnetic field | East: add (+); West: subtract (−) when converting M→C |
| Deviation card | Mounted in cockpit; lists corrections by heading | Specific to each aircraft |

**Variation in Canada (approximate):**

| Region | Variation |
|--------|-----------|
| Atlantic Canada | 15°W – 20°W |
| Ontario / Quebec | 10°W – 15°W |
| Prairies | 5°E – 10°E |
| BC Interior | 15°E – 20°E |
| Yukon / NWT | 20°E – 25°E+ |

---

*End of Lesson NAV-003.*
