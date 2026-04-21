---
id: NAV-013
topic: navigation
order: 13
slug: density-altitude
title: "Density Altitude"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E
  - AIM AIR 2.0
questions:
  - id: q1
    prompt: "On a hot summer day, an airport at 3,000 feet ASL has an outside air temperature of 35°C. Standard temperature at 3,000 feet is 9°C. What effect does this have on aircraft performance?"
    choices:
      A: "Performance improves because the engine runs cooler"
      B: "Performance is unaffected — density altitude only matters above 10,000 feet"
      C: "Performance degrades — high density altitude reduces engine power and lift"
      D: "Performance improves because hot air provides more lift"
    answer: C
    explanation: "At 35°C versus the standard 9°C at 3,000 feet, the air is much less dense. High density altitude means the engine produces less power (less oxygen), the propeller is less efficient, and wings generate less lift. Takeoff roll increases significantly and climb rate decreases. Source: TP 12880E Chapter 3."
  - id: q2
    prompt: "Density Altitude is defined as:"
    choices:
      A: "Height above the ground directly below the aircraft"
      B: "Pressure altitude corrected for non-standard temperature"
      C: "True altitude corrected for altimeter setting error"
      D: "The altitude shown on a GPS receiver"
    answer: B
    explanation: "Density Altitude is pressure altitude corrected for non-standard temperature. It indicates the altitude in the standard atmosphere at which air density would equal current density. High temperature raises density altitude; low temperature decreases it. Source: TP 12880E Chapter 3."
  - id: q3
    prompt: "An airport is at 2,000 feet ASL. The altimeter setting is 29.42 in Hg (standard is 29.92) and OAT is 30°C (standard at 2,000 feet is 11°C). Pressure altitude is approximately 2,500 feet. What is the approximate density altitude?"
    choices:
      A: "2,000 feet"
      B: "2,500 feet"
      C: "4,800 feet"
      D: "6,200 feet"
    answer: C
    explanation: "Density altitude = Pressure altitude + [120 × (OAT − ISA temperature)]. ISA at 2,500 ft PA ≈ 10°C. DA = 2,500 + [120 × (30 − 10)] = 2,500 + 2,400 = 4,900 feet ≈ 4,800 feet. The aircraft performs as if it were at nearly 5,000 feet even though it's departing from an airport at 2,000 feet ASL. Source: TP 12880E Chapter 3."
  - id: q4
    prompt: "Which combination of conditions produces the highest density altitude?"
    choices:
      A: "Low elevation, cold temperature, high pressure"
      B: "High elevation, hot temperature, low pressure"
      C: "Low elevation, hot temperature, high pressure"
      D: "High elevation, cold temperature, high pressure"
    answer: B
    explanation: "Density altitude increases with: higher elevation (lower pressure), higher temperature, lower atmospheric pressure, and higher humidity. The worst combination — most dangerous for performance — is high elevation + high temperature + low pressure (+ high humidity). This is common at inland airports during summer heat waves. Source: TP 12880E Chapter 3."
  - id: q5
    prompt: "How does high humidity affect density altitude and aircraft performance?"
    choices:
      A: "Humidity has no effect on aircraft performance"
      B: "High humidity decreases density altitude by adding water weight to the air"
      C: "High humidity increases density altitude because water vapour is lighter than dry air, reducing density"
      D: "High humidity only affects reciprocating engines, not the airframe"
    answer: C
    explanation: "Water vapour (H₂O, molecular weight 18) is lighter than the nitrogen (28) and oxygen (32) it displaces in humid air. This makes humid air less dense than dry air at the same temperature and pressure, raising density altitude. The effect is smaller than temperature or altitude, but adds to the total degradation. Source: TP 12880E Chapter 3."
---

# Lesson NAV-013: Density Altitude

**Section:** Navigation  
**Lesson number:** 013  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 3, AIM AIR 2.0

---

## Narration Script

Welcome to Lesson NAV-013. Density altitude is one of the most important — and most underestimated — concepts in aviation. Every year, pilots in Canada and around the world are surprised by how their aircraft performs in hot weather or at high elevation airports. Understanding density altitude is the difference between a safe departure and a ground accident.

---

**What is Density Altitude?**

Density altitude is **pressure altitude corrected for non-standard temperature**. More intuitively: it is the altitude in the standard atmosphere at which the current air density would be found.

Air density determines how much work the engine, propeller, and wings can do. At high density altitude:
- The engine draws in thinner air → less oxygen → less power
- The propeller "bites" into less dense air → less thrust for the same RPM
- The wings move through less dense air → less lift for the same airspeed

All three effects combine to significantly degrade performance.

---

**Standard Atmosphere Reference**

Density altitude is calculated relative to the International Standard Atmosphere (ISA):

- Sea level: 15°C, 1013.25 hPa (29.92 in Hg)
- Temperature lapse rate: −2°C per 1,000 feet of altitude

Standard temperature at any altitude:
ISA temp = 15°C − (2°C × altitude in thousands of feet)

Examples:
- At 3,000 feet: ISA = 15 − 6 = 9°C
- At 6,000 feet: ISA = 15 − 12 = 3°C
- At 10,000 feet: ISA = 15 − 20 = −5°C

Any temperature above these ISA values at a given altitude raises density altitude.

---

**Calculating Density Altitude**

**Step 1 — Calculate Pressure Altitude:**

Pressure altitude is the altimeter reading when set to 29.92 in Hg (standard pressure).

If local QNH is known:
- For each 0.01 in Hg below 29.92, add 10 feet to field elevation
- For each 0.01 in Hg above 29.92, subtract 10 feet

Example: Airport elevation 1,500 feet, QNH = 29.72 in Hg  
Difference: 29.92 − 29.72 = 0.20 in Hg → 20 × 10 = 200 feet  
Pressure Altitude = 1,500 + 200 = **1,700 feet**

**Step 2 — Calculate Density Altitude:**

DA = PA + [120 × (OAT − ISA temperature at PA)]

Example continuation:
- PA = 1,700 feet
- ISA at 1,700 feet ≈ 15 − (2 × 1.7) = 11.6°C ≈ 12°C
- OAT = 30°C

DA = 1,700 + [120 × (30 − 12)] = 1,700 + [120 × 18] = 1,700 + 2,160 = **3,860 feet**

This airport at 1,500 feet ASL performs like an airport at nearly 4,000 feet on a hot day.

---

**Using the E6B or POH Charts**

In practice, density altitude is calculated using the aircraft's Pilot Operating Handbook (POH) or an E6B computer:

**E6B method:**
1. Set the Pressure Altitude in the density altitude window
2. Set the OAT
3. Read the Density Altitude from the scale

**POH charts:** Performance charts in the POH plot directly against pressure altitude and OAT, so you don't need to calculate DA separately — the chart accounts for it.

---

**Performance Effects**

The POH lists performance data for various density altitude conditions. Typical effects when density altitude increases by 1,000 feet:

| Performance Parameter | Approximate Change |
|----------------------|-------------------|
| Takeoff distance | +10 to +15% |
| Climb rate | −100 to −200 fpm |
| Engine power output | −3 to −4% |
| Maximum altitude (service ceiling) | Decreases |

At density altitudes above 5,000–6,000 feet, a normally aspirated aircraft may be unable to maintain a positive climb gradient fully loaded. Runway length becomes a critical consideration.

---

**The Four Factors That Raise Density Altitude**

1. **High elevation** — less atmospheric pressure
2. **High temperature** — air expands and becomes less dense
3. **Low atmospheric pressure** — abnormally low QNH (e.g., weather systems)
4. **High humidity** — water vapour displaces denser nitrogen and oxygen

The worst combination in Canadian aviation: an inland airport during a summer heat wave with high pressure altitude (mountains in BC), temperature over 30°C, and high humidity. In these conditions, performance can be equivalent to an airport at 6,000–8,000 feet even at moderate elevation.

---

**Practical Decision-Making**

Before any departure, ask:

1. What is my pressure altitude?
2. What is the OAT?
3. What is my density altitude?
4. Does my POH show adequate performance at this density altitude with my current weight?

If the takeoff distance in the POH exceeds the available runway with appropriate margins, do not depart. Options:
- Wait for cooler temperatures (early morning is best)
- Reduce fuel or payload
- Use a longer runway if available
- Delay the flight

---

**Density Altitude Accidents**

A typical density altitude accident: A pilot with a full load departs a mountain airport on a hot afternoon. The aircraft fails to climb, cannot clear terrain, and impacts the ground shortly after departure. The aircraft was mechanically sound — the failure was inadequate performance planning.

Transport Canada has issued safety advisories on this topic. The pattern is consistent: pilots do not calculate density altitude, assume the aircraft will perform the same as at their home airport, and are caught off guard.

---

**Exam Tips**

On the Transport Canada PPL written exam, density altitude questions typically:
- Ask you to identify the definition (pressure altitude corrected for temperature)
- Ask which conditions produce the highest DA (hot + high + low pressure)
- Present a scenario and ask what will happen to performance
- May ask you to use the 120-foot-per-degree formula or a simple E6B setup

---

## Quick Reference: Density Altitude

| Concept | Value |
|---------|-------|
| ISA sea level | 15°C, 1013.25 hPa |
| ISA lapse rate | −2°C per 1,000 feet |
| DA formula | DA = PA + [120 × (OAT − ISA temp at PA)] |
| Pressure alt rule | Each 0.01 in Hg below 29.92 adds 10 feet |

**Raises DA:** High elevation + High temp + Low pressure + Humidity

**Effect:** High DA → longer takeoff roll, reduced climb rate, reduced engine power

---

*End of Lesson NAV-013.*
