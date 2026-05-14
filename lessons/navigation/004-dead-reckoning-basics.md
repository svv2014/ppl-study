---
id: NAV-004
topic: navigation
order: 4
slug: dead-reckoning-basics
title: "Dead Reckoning"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/navigation/004-dead-reckoning-basics.m4a
visual: /visuals/nav004-dead-reckoning-basics.html
sources:
  - TP 12880E
questions:
  - id: q1
    prompt: "Dead reckoning navigation relies primarily on which of the following?"
    choices:
      A: "Radio navigation aids such as VOR and NDB"
      B: "Known starting position, heading, airspeed, and elapsed time"
      C: "GPS satellite signals for continuous position updates"
      D: "Visual identification of landmarks below the aircraft"
    answer: B
    explanation: "Dead reckoning (DR) is the process of estimating current position based on a known starting point, plus calculated heading, speed, and elapsed time. No radio aids or GPS are required, making it fundamental to VFR navigation. Source: TP 12880E Chapter 9."
  - id: q2
    prompt: "A pilot measures a true track of 045° on a VNC. Magnetic variation is 15°W and the E6B gives a Wind Correction Angle of 8° left (crabbing into wind from the left). What is the magnetic heading to fly?"
    choices:
      A: "038°"
      B: "052°"
      C: "060°"
      D: "030°"
    answer: B
    explanation: "True Track (045°) minus WCA of 8° left (crabbing into wind from left) = True Heading 037°. Apply 15°W variation (add): 037° + 15° = 052° Magnetic. Always apply WCA first (True Track → True Heading), then variation (True Heading → Magnetic Heading). Source: TP 12880E Chapter 9."
  - id: q3
    prompt: "During a cross-country flight using dead reckoning, a pilot passes a checkpoint 4 minutes later than planned. What is the most appropriate first action?"
    choices:
      A: "Immediately declare an emergency on 121.5 MHz"
      B: "Turn back to the departure airport"
      C: "Revise the estimated time of arrival (ETA) for subsequent checkpoints"
      D: "Climb to a higher altitude to improve visibility"
    answer: C
    explanation: "A 4-minute delay at a checkpoint indicates a lower ground speed than planned (possibly a stronger headwind). The pilot should revise subsequent ETAs using the new observed ground speed, and update the flight log. This is normal dead reckoning practice. Source: TP 12880E Chapter 9."
  - id: q4
    prompt: "Why do dead reckoning errors tend to accumulate over time?"
    choices:
      A: "The compass becomes less accurate at higher altitudes"
      B: "Small errors in heading and ground speed estimation compound with distance flown"
      C: "The magnetic variation changes along the route"
      D: "Dead reckoning does not use magnetic headings"
    answer: B
    explanation: "In dead reckoning, position is estimated by projecting from the last known point. Any small error in heading or ground speed estimate multiplies with time: a 2° heading error becomes a 3.5 NM track error after 100 NM. Regular checkpoint verification is essential to correct accumulated errors. Source: TP 12880E Chapter 9."
  - id: q5
    prompt: "A pilot plans a cross-country leg of 75 NM with a calculated ground speed of 90 knots. What is the estimated time en route for this leg?"
    choices:
      A: "40 minutes"
      B: "45 minutes"
      C: "50 minutes"
      D: "55 minutes"
    answer: C
    explanation: "Time (min) = (Distance ÷ Ground Speed) × 60 = (75 ÷ 90) × 60 = 0.833 × 60 = 50 minutes. Ground speed — not TAS — is used for time calculations because it accounts for the wind effect on actual progress over the ground. Source: TP 12880E Chapter 9."
---

# Lesson NAV-004: Dead Reckoning

**Section:** Navigation  
**Lesson number:** 004  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 9

---

## Narration Script

Welcome to Lesson NAV-004. Dead reckoning is the foundation of all VFR cross-country navigation. Before GPS, before VOR, before radio navigation of any kind, pilots flew cross-country using only their chart, a compass, a watch, and their knowledge of airspeed and wind. That technique is dead reckoning — and Transport Canada expects you to understand it thoroughly, because it underpins everything else.

---

**What is Dead Reckoning?**

Dead reckoning — abbreviated DR — is the process of calculating your current position based on:

1. A **known starting position** (the departure airport or a verified checkpoint)
2. A **known heading** being flown (the magnetic heading from your flight plan)
3. A **known ground speed** (calculated from TAS and wind forecast)
4. **Elapsed time** since the last known position

From these four pieces of information, you project forward on your chart to estimate where you are right now. The name is believed to derive from "deduced reckoning" — shortened over centuries of nautical use to "dead" reckoning.

---

**Measuring True Track from the VNC**

The first step in planning a dead reckoning flight is to draw your route on the VNC and measure the true track of each leg.

Using a **navigation plotter** (a transparent plastic ruler with a protractor built in):

1. Draw a straight line from departure to destination (or checkpoint to checkpoint)
2. Place the centre of the plotter's protractor on the line at a point where it crosses a meridian (longitude line) or parallel (latitude line)
3. Read the true track from the protractor scale

You measure at a meridian because the chart is oriented to True North along meridians. If your line doesn't conveniently cross a meridian, you can draw a temporary parallel line that does.

Distances are measured using the plotter's ruler scale, which is calibrated to the VNC's 1:500,000 scale, or by comparing to the latitude scale on the chart edge (1° of latitude = approximately 60 NM).

---

**Building the Magnetic Heading**

Once you have the true track from the chart, you apply:

1. **Wind Correction Angle** (from E6B, using forecast wind and TAS) to get **True Heading**
2. **Magnetic Variation** (from VNC isogonic lines) to get **Magnetic Heading**
3. **Compass Deviation** (from the aircraft's deviation card) to get **Compass Heading**

This gives you the heading to fly on the cockpit compass. It is this heading that you maintain during the leg.

---

**Estimating Ground Speed**

The ground speed for each leg comes from the E6B wind solution. It takes into account:

- True Airspeed (TAS at the planned cruise altitude and temperature)
- Wind speed and direction (from the Winds Aloft forecast for the planned altitude)
- The angle between the wind and the track

Ground speed is what you use to calculate time en route and ETAs — not TAS.

---

**Calculating Time En Route**

Once you have the leg distance and ground speed:

**Time (minutes) = Distance (NM) ÷ Ground Speed (knots) × 60**

Example: 90 NM leg, GS = 100 knots  
Time = (90 ÷ 100) × 60 = 54 minutes

If your departure is 10:00 local, your ETA at the end of that leg is 10:54.

---

**The Navigation Log (PLOG)**

For any cross-country flight, the pilot completes a **navigation log** (PLOG) before departure. A typical PLOG has columns for each leg:

| Column | Content |
|--------|---------|
| Checkpoint | Name of waypoint or landmark |
| True Track | Measured from chart (°T) |
| WCA | From E6B |
| True Heading | True Track ± WCA |
| Variation | From VNC isogonic lines |
| Magnetic Heading | True Heading ± variation |
| Deviation | From aircraft deviation card |
| Compass Heading | Magnetic ± deviation |
| TAS | From performance chart |
| Ground Speed | From E6B |
| Distance | From chart (NM) |
| Time (min) | Calculated |
| ETA | Departure time + cumulative time |
| Fuel | Burn rate × time |

This completed PLOG is your navigation plan. You annotate it in flight as you pass checkpoints and update your estimates.

---

**In-Flight Navigation with DR**

Once airborne, you monitor the flight by:

**1. Timing checkpoints:** Note the time when you pass each planned checkpoint and compare to your ETA. If you're early, your GS is higher than expected (tailwind stronger than forecast). If you're late, GS is lower (headwind stronger). Update subsequent ETAs accordingly.

**2. Identifying landmarks:** Use pilotage (visual ground reference) to confirm your DR position. Features like towns, lakes, rivers, rail lines, and highways should match the chart.

**3. Maintaining heading:** Fly the compass heading you calculated. Small deviations accumulate — a consistent 5° heading error produces 8.7 NM of lateral error over 100 NM.

**4. Estimating position mid-leg:** If you're partway through a 90-minute leg and 40 minutes have elapsed, you should be approximately 44% of the way along that leg (assuming constant GS). Plot this on your chart to confirm.

---

**Error Accumulation**

The weakness of dead reckoning is that errors build over time. Every imprecise compass heading, every undetected wind change, and every timing estimate contributes to growing uncertainty about your position. Over short legs (under 50 NM), this is manageable. Over long legs with poor visibility, errors can grow to the point where you're unsure of your position.

This is why:
- Dead reckoning works best with frequent checkpoints (every 15–30 NM)
- Pilotage is used alongside DR to verify position
- Radio navigation (VOR, GPS) is used to cross-check when available

---

**Practical Application**

For the PPL written exam, you should be able to:
- Calculate time en route given distance and ground speed
- Build a magnetic heading from a true track, variation, and WCA
- Identify what a checkpoint timing discrepancy means (early = faster GS, late = slower GS)
- Explain why DR errors accumulate

For actual flight, practise filling out a PLOG before your first dual cross-country. Your instructor will walk through it with you — the habit of pre-flight navigation planning is one of the most important skills a VFR pilot develops.

---

## Quick Reference: Dead Reckoning Steps

| Step | Action |
|------|--------|
| 1 | Draw route on VNC; measure True Track and distance per leg |
| 2 | Apply WCA (from E6B) → True Heading |
| 3 | Apply variation → Magnetic Heading |
| 4 | Apply deviation → Compass Heading |
| 5 | Calculate GS from E6B |
| 6 | Calculate time per leg: (dist ÷ GS) × 60 = minutes |
| 7 | Calculate ETA per checkpoint |
| 8 | In-flight: time checkpoints; revise ETAs if GS differs |

**Time formula:** Time (min) = (Distance ÷ GS) × 60

**Error rule:** Small heading or speed errors accumulate — verify position at every checkpoint.

---

*End of Lesson NAV-004.*
