---
id: GK-006
topic: general-knowledge
order: 6
slug: pitot-static-instruments
title: "Pitot-Static System"
duration_min: 20
status: complete
audio: null
visual: /visuals/gk006-pitot-static-instruments.html
sources:
  - TP 12880E Chapter 8
  - CARs 605.14
questions:
  - id: q1
    prompt: "The airspeed indicator measures:"
    choices:
      A: "The aircraft's speed relative to the ground"
      B: "True airspeed directly, compensated for temperature and altitude"
      C: "The difference between pitot (ram) pressure and static pressure"
      D: "Dynamic pressure only, from the pitot tube alone"
    answer: C
    explanation: "The airspeed indicator compares pitot (impact/ram) pressure with static pressure. The difference — dynamic pressure — is displayed as indicated airspeed (IAS). IAS differs from true airspeed (TAS) due to density altitude effects. Source: TP 12880E Chapter 8."
  - id: q2
    prompt: "If the pitot tube becomes blocked by ice but the static port remains open, the airspeed indicator will:"
    choices:
      A: "Read zero"
      B: "Continue to read accurately since the static port is unaffected"
      C: "Act like an altimeter — reading higher when climbing and lower when descending"
      D: "Fluctuate rapidly and become unusable"
    answer: C
    explanation: "With the pitot tube blocked, the trapped pitot pressure stays constant while the static pressure changes with altitude. In a climb, static pressure decreases — the difference between the trapped pitot pressure and the lower static pressure increases — and the ASI reads a false high airspeed. In a descent the reverse occurs. Source: TP 12880E Chapter 8."
  - id: q3
    prompt: "The altimeter measures altitude by sensing:"
    choices:
      A: "The difference between pitot pressure and static pressure"
      B: "Absolute static air pressure referenced against a calibrated internal standard"
      C: "Radio signals reflected from the ground"
      D: "Temperature changes with altitude"
    answer: B
    explanation: "The altimeter is an aneroid barometer. It senses static pressure and translates that pressure to an altitude reading using the International Standard Atmosphere model. The Kollsman window allows the pilot to set the local altimeter setting (QNH) to correct for non-standard sea-level pressure. Source: TP 12880E Chapter 8."
  - id: q4
    prompt: "If the static port becomes blocked in flight, which instruments are affected?"
    choices:
      A: "Only the altimeter"
      B: "Only the airspeed indicator and vertical speed indicator"
      C: "The airspeed indicator, altimeter, and vertical speed indicator all freeze or give erroneous readings"
      D: "None — the pitot tube provides backup static pressure"
    answer: C
    explanation: "All three pitot-static instruments — the ASI, altimeter, and VSI — depend on static pressure. If the static port blocks, the trapped static pressure no longer changes with altitude. The ASI freezes at the airspeed when blockage occurred; the altimeter freezes at the altitude; the VSI reads zero. Source: TP 12880E Chapter 8."
  - id: q5
    prompt: "The vertical speed indicator (VSI) has a characteristic lag of approximately:"
    choices:
      A: "No lag — it responds instantaneously"
      B: "1–2 seconds"
      C: "6–9 seconds before stabilizing after a pitch change"
      D: "30 seconds — it is not suitable for real-time pitch control"
    answer: C
    explanation: "The VSI uses a calibrated leak to compare static pressure inside a capsule with static pressure in the case. The leak introduces a lag of approximately 6–9 seconds after a pitch change. The VSI is a trend instrument — not used as a primary pitch reference in instrument flight. Source: TP 12880E Chapter 8."
---

# Lesson GK-006: Pitot-Static System

**Section:** General Knowledge  
**Lesson number:** 006  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 8, CARs 605.14

---

## Narration Script

Three of the six primary flight instruments rely on pressure — specifically the difference between pitot (ram) pressure and static (ambient) pressure, or on static pressure alone. Understanding how these instruments work, what they tell you, and what happens when they fail is essential both for the exam and for managing a real in-flight system failure.

---

**The Pitot-Static System**

The pitot-static system provides two types of pressure to the instruments:

**Static pressure** is the ambient atmospheric pressure — the weight of the atmosphere above you. It decreases as altitude increases. Static ports are small openings flush with the fuselage sides, positioned out of the disturbed airflow so they sense undisturbed atmospheric pressure.

**Pitot (ram) pressure** is the total pressure created by air ramming into the forward-facing pitot tube. Pitot pressure equals static pressure plus dynamic pressure. Dynamic pressure is the "extra" pressure due to the aircraft's motion through the air — it increases with the square of airspeed.

The three pitot-static instruments are:
1. Airspeed Indicator (ASI)
2. Altimeter
3. Vertical Speed Indicator (VSI)

---

**Airspeed Indicator (ASI)**

The ASI measures the difference between pitot pressure and static pressure — this difference is dynamic pressure. It is displayed in knots and gives **Indicated Airspeed (IAS)**.

IAS differs from **True Airspeed (TAS)** because air density changes with altitude and temperature. At altitude, air is less dense — the same dynamic pressure represents a higher actual speed through the air. A useful approximation: TAS ≈ IAS + 2% per 1,000 ft of altitude above sea level.

**Airspeed indicator coloured arcs:**
- **White arc**: flap operating range (Vs0 at bottom — stall speed, flaps down; Vfe at top — max flap extension speed)
- **Green arc**: normal operating range (Vs1 at bottom — stall speed, flaps up; Vno at top — max structural cruising speed)
- **Yellow arc**: caution range — fly only in smooth air
- **Red radial line**: Vne — never exceed speed

**Pitot tube blockage** (with static port clear): the trapped pitot pressure stays constant while static pressure changes with altitude. In a climb, the decreasing static pressure widens the differential — the ASI reads a false high airspeed. In a descent, the differential narrows and the ASI reads false low. The ASI behaves like an altimeter.

**Static port blockage** (with pitot clear): the ASI freezes at the airspeed when blockage occurred. The altimeter and VSI also freeze. An **alternate static source** (in the cockpit or another port) can restore static-dependent instrument function.

---

**Altimeter**

The altimeter is an aneroid barometer. It contains a stack of sealed, flexible metal capsules (aneroids) that expand as pressure decreases and contract as pressure increases. The expansion is mechanically translated into an altitude reading.

The **Kollsman window** (subscale) allows the pilot to dial in the local altimeter setting (QNH — the sea-level equivalent pressure at the nearest reporting station). Setting QNH corrects the altimeter so it reads height above mean sea level (MSL) accurately.

Key altimeter settings:
- **QNH**: altimeter reads MSL altitude. Used below the transition altitude.
- **Standard (29.92 in Hg / 1013.25 hPa)**: used above 18,000 ft ASL in Canada. All aircraft at high altitude use the same reference, ensuring separation.

**Cold temperature error**: the altimeter is calibrated for the International Standard Atmosphere (ISA). In air colder than ISA, the atmosphere is denser and you are actually lower than the altimeter indicates. This is important near terrain in cold conditions. Canada uses ICAO cold-temperature altitude corrections (published in the CFS) for precision approaches and obstacle clearance. Memory hook: "From high to low, look out below."

---

**Vertical Speed Indicator (VSI)**

The VSI shows the rate of climb or descent in feet per minute. It works by comparing the pressure inside a sealed capsule (which changes instantaneously) against the pressure in the surrounding instrument case (which changes slowly through a calibrated leak). The difference drives a pointer proportional to the rate of pressure change.

The VSI has a **6–9 second lag** after a pitch change before the reading stabilizes. It is a trend instrument — useful for confirming a steady climb or descent, but not suitable for primary attitude control. An initial pitch change shows an immediate "instantaneous" VSI movement (because the capsule responds first), but the pointer settles to the true climb rate only after the lag.

---

**Pitot Heat**

Ice can block the pitot tube and drain holes, causing erroneous airspeed indications. Most aircraft have a pitot heat switch that electrically heats the pitot tube. Pitot heat should be activated before entering visible moisture at temperatures where icing is possible. In many aircraft, the pitot heat is checked during the pre-flight run-up by briefly switching it on and confirming the ammeter shows increased electrical load.

---

**Required Equipment (CARs 605.14)**

CARs 605.14 specifies the minimum instruments required for day VFR flight. These include the airspeed indicator, altimeter, and other items. If any required instrument is inoperative, the aircraft is not airworthy for that category of flight unless an MEL (Minimum Equipment List) specifically permits dispatch with it inoperative.

---

## Key Points

- **Pitot pressure** = static + dynamic; **dynamic pressure** ∝ V²
- **ASI**: measures pitot minus static → IAS; multiply by ~2% per 1,000 ft to get TAS
- **ASI colour arcs**: white = flap range; green = normal; yellow = caution; red = Vne
- **Pitot blocked, static clear**: ASI reads high in climb, low in descent (like altimeter)
- **Static blocked**: ASI, altimeter, VSI all freeze — use alternate static source
- **Altimeter**: aneroid barometer; set QNH for MSL altitude; cold temperatures = lower than indicated
- **VSI**: rate of static pressure change; 6–9 s lag; trend instrument only
- Pitot heat prevents ice blockage of pitot tube

---

*End of Lesson GK-006.*
