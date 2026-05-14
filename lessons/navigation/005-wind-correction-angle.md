---
id: NAV-005
topic: navigation
order: 5
slug: wind-correction-angle
title: "Wind Correction Angle and Ground Speed"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/navigation/005-wind-correction-angle.m4a
visual: /visuals/nav005-wind-correction-angle.html
sources:
  - TP 12880E
  - AIM
questions:
  - id: q1
    prompt: "An aircraft has a True Airspeed of 110 knots and is flying into a direct headwind of 20 knots. What is the Ground Speed?"
    choices:
      A: "130 knots"
      B: "110 knots"
      C: "90 knots"
      D: "100 knots"
    answer: C
    explanation: "With a direct headwind, ground speed = TAS − headwind component: 110 − 20 = 90 knots. A headwind slows progress over the ground. A tailwind would add: GS = TAS + tailwind. Source: TP 12880E Chapter 9."
  - id: q2
    prompt: "What is the primary purpose of the Wind Correction Angle (WCA) in flight planning?"
    choices:
      A: "To correct for compass deviation"
      B: "To adjust the magnetic heading to compensate for crosswind drift"
      C: "To calculate fuel burn at altitude"
      D: "To determine the airspeed setting for cruise flight"
    answer: B
    explanation: "The Wind Correction Angle is the angle between the desired track and the heading the aircraft must fly to compensate for wind drift. Without a WCA, crosswind will push the aircraft off the intended track. Source: TP 12880E Chapter 9."
  - id: q3
    prompt: "An aircraft has a TAS of 100 knots. The wind is directly from the left at 90° to the track at 20 knots. Using the approximate formula (WCA ≈ Wind Speed / TAS × 60), what is the approximate Wind Correction Angle?"
    choices:
      A: "6°"
      B: "10°"
      C: "12°"
      D: "20°"
    answer: C
    explanation: "WCA ≈ (20 / 100) × 60 = 0.2 × 60 = 12°. This approximation works well when the wind is near 90° to track and when the wind speed is less than about 1/3 of TAS. The aircraft would turn 12° into the wind. Source: TP 12880E Chapter 9."
  - id: q4
    prompt: "An aircraft is flying a cross-country leg with a True Track of 090°. The wind is from 360° (directly from the north) at 15 knots. The TAS is 120 knots. In which direction should the pilot turn to correct for wind drift?"
    choices:
      A: "Turn left (toward a lower heading number) to correct"
      B: "Turn right (toward a higher heading number) to correct"
      C: "No correction needed — the wind is a crosswind"
      D: "Turn left because wind from the north creates a southerly drift"
    answer: A
    explanation: "Wind from 360° (north) pushes the aircraft south (to the right of a 090° track). To correct, the pilot must point the nose into the wind — to the left (north), turning to a heading less than 090°. Source: TP 12880E Chapter 9."
  - id: q5
    prompt: "An aircraft is flying a track of 180° (due south) at a TAS of 115 knots. The winds aloft forecast reports winds from 180° at 30 knots. What is the expected ground speed?"
    choices:
      A: "145 knots — the wind is a tailwind"
      B: "85 knots — the wind is a headwind"
      C: "115 knots — the wind is a crosswind with no GS effect"
      D: "100 knots — the wind reduces GS by half the wind speed"
    answer: B
    explanation: "Wind direction is always stated as the direction FROM which it blows. A wind 'from 180°' blows from the south toward the north. An aircraft flying a 180° track (southbound) is flying directly into this wind — a direct headwind. Ground speed = TAS − headwind component = 115 − 30 = 85 knots. Source: TP 12880E Chapter 9."
---

# Lesson NAV-005: Wind Correction Angle and Ground Speed

**Section:** Navigation  
**Lesson number:** 005  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 9, AIM

---

## Narration Script

Welcome to Lesson NAV-005. You've learned how to convert a true heading to a compass heading using variation and deviation. But there's one more factor that changes the heading you actually fly: the wind. Unless you compensate for crosswind, the aircraft will drift off your intended track. This lesson covers the wind triangle, Wind Correction Angle, and how wind affects your ground speed.

---

**The Wind Triangle**

When an aircraft flies through a moving air mass, there are three vectors at play:

1. **True Airspeed (TAS)** — the speed of the aircraft through the air, in the direction the nose is pointed
2. **Wind vector** — the speed and direction the air mass is moving over the ground
3. **Track and Ground Speed (GS)** — the actual path and speed of the aircraft over the ground

These three vectors form a triangle. The nose points one direction (heading), the wind pushes the aircraft another way, and the result is the actual track over the ground. If you want to fly a specific track, you must point the nose into the wind slightly — that offset is the Wind Correction Angle.

---

**True Airspeed vs. Ground Speed**

These two speeds are often confused, so let's be precise:

**True Airspeed (TAS)** is how fast the aircraft is moving through the air. It is what the aircraft's airspeed indicator shows (after corrections for altitude and temperature). TAS doesn't care about wind — it's the speed of the aircraft relative to the air mass around it.

**Ground Speed (GS)** is how fast the aircraft is moving over the ground. It depends on both TAS and the wind:

- **Headwind** (wind coming from ahead): reduces ground speed → GS = TAS − headwind component
- **Tailwind** (wind coming from behind): increases ground speed → GS = TAS + tailwind component
- **Crosswind** (wind from the side): reduces ground speed slightly, and causes drift

For a direct headwind of 20 knots with a TAS of 120 knots: GS = 100 knots  
For a direct tailwind of 20 knots with TAS of 120 knots: GS = 140 knots

---

**Wind Direction Convention**

A critical point: wind direction is always stated as the direction **the wind is coming FROM**, not where it is going. A wind of "270° at 20 knots" is a wind blowing from the west (from 270° toward 090°). This is the convention in all aviation weather reports (METAR, TAF) and ATC wind reports.

So if you're flying east (090°) and the wind is from 270° — you have a direct tailwind, and your ground speed increases.

---

**Wind Correction Angle (WCA)**

If the wind has any crosswind component (not a pure headwind or tailwind), the aircraft will drift. To maintain your intended track, you must turn the nose into the wind by an angle equal to the Wind Correction Angle.

If the wind is from the **left**, you crab to the **left** (turn left, lower the heading number).  
If the wind is from the **right**, you crab to the **right** (turn right, higher the heading number).

The result is that the aircraft's track over the ground remains on your intended route even though the nose is pointed slightly sideways.

---

**The Navigation Computer (Whiz Wheel)**

The most accurate method for calculating WCA and Ground Speed is the navigation computer — a circular slide rule also called an E6B. It has two sides:

- **The circular slide rule side** — used for calculations involving time, speed, distance, and fuel
- **The wind side (vector side)** — used for wind triangle calculations

On the wind side:
1. Set the wind direction on the compass rose
2. Draw a dot at the wind speed
3. Set the true track at the index
4. Slide the grid so the wind dot is on the TAS arc
5. Read the WCA from the grid (how far the dot is left or right of centre)
6. Read the ground speed at the index

For the PPL written exam, some questions give you a pre-calculated scenario. Others expect you to use a formula or mental estimate.

---

**The Approximate WCA Formula**

For quick mental math when the wind is roughly 90° to your track:

**WCA ≈ (Wind Speed ÷ TAS) × 60**

This is derived from the small-angle approximation for sine. It works well when:
- The crosswind component is less than about 30% of TAS
- The wind is closer to 90° to the track than to 0° or 180°

Example: TAS = 100 knots, crosswind = 15 knots at 90° to track  
WCA ≈ (15 ÷ 100) × 60 = 9°

The aircraft must be turned 9° into the wind.

---

**Ground Speed with a Crosswind**

When the wind is a pure crosswind, the ground speed is slightly less than TAS because some of the aircraft's forward energy is used fighting the crosswind. For typical light aircraft crosswinds (under 20 knots), the effect is small and is captured accurately by the E6B.

For a quick approximation: with a pure crosswind, GS ≈ TAS (the effect is small for modest crosswinds). The dominant effects on GS are headwind and tailwind components.

---

**Worked Example — Canadian Cross-Country Scenario**

Route: Ottawa (CYOW) to Kingston (CYGK), Ontario  
True Track: 250° (measured from VNC)  
TAS: 110 knots  
Wind: 310° at 25 knots (from ATC or METAR)  
Variation: 12°W

**Step 1: Determine the crosswind and headwind components**

Wind angle relative to track: 310° − 250° = 60° from the left  

Headwind component = 25 × cos(60°) = 25 × 0.5 = 12.5 knots headwind  
Crosswind component = 25 × sin(60°) = 25 × 0.866 ≈ 22 knots from the left

**Step 2: Calculate WCA (approximate)**

WCA ≈ (22 ÷ 110) × 60 ≈ 12° — turn LEFT (into the wind from the left)

**Step 3: Calculate True Heading**

True Heading = True Track + WCA correction  
= 250° − 12° (crabbing left into the wind) = 238° True

**Step 4: Apply variation**

238° + 12° (west variation) = **250° Magnetic**

(In this example the variation nearly cancels the WCA — a coincidence of the numbers chosen.)

**Step 5: Calculate Ground Speed**

GS ≈ TAS − headwind = 110 − 12.5 ≈ **97.5 knots** (approximately 98 knots)

In practice, you'd use the E6B for precise values, but this approximation gets you close enough for planning.

---

**Practical Tips**

- Always state wind relative to your track to determine if it helps or hurts
- A crosswind component over about 15 knots on a 120-knot aircraft creates roughly a 7° crab angle — noticeable on the compass
- In Canada, prevailing winds tend to be westerly (from the west) at cruise altitudes — flying east gives a tailwind advantage; flying west costs ground speed
- Always use the most current wind forecast (from a GFA or winds aloft forecast) for your planned altitude

---

## Quick Reference: Wind Effects Summary

| Wind Direction | Effect on GS | WCA Direction |
|---------------|-------------|---------------|
| Direct headwind | GS = TAS − wind speed | None (no drift) |
| Direct tailwind | GS = TAS + wind speed | None (no drift) |
| Left crosswind | GS slightly less than TAS | Turn LEFT into wind |
| Right crosswind | GS slightly less than TAS | Turn RIGHT into wind |

**Approximate WCA Formula:** WCA ≈ (crosswind component ÷ TAS) × 60°

**E6B Wind Side Steps:** Set wind direction → plot wind speed dot → set track → slide to TAS arc → read WCA and GS

---

*End of Lesson NAV-005.*
