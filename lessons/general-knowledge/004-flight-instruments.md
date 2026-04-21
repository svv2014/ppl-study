---
id: GK-004
topic: general-knowledge
order: 4
slug: flight-instruments
title: "Flight Instruments"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E Chapter 8
  - CARs 605.14
questions:
  - id: q1
    prompt: "The altimeter measures altitude by sensing:"
    choices:
      A: "The difference between pitot pressure and static pressure"
      B: "Absolute static air pressure and comparing it to a calibrated reference"
      C: "Radio signals reflected from the ground"
      D: "Temperature changes with altitude"
    answer: B
    explanation: "The altimeter is an aneroid barometer. It senses static pressure and translates that pressure to an altitude reading using the International Standard Atmosphere model. The Kollsman window allows the pilot to set the local altimeter setting (QNH) to correct for non-standard sea-level pressure. Source: TP 12880E Chapter 8."
  - id: q2
    prompt: "The airspeed indicator measures:"
    choices:
      A: "The aircraft's speed relative to the ground"
      B: "True airspeed directly, compensated for temperature and altitude"
      C: "The difference between pitot (ram) pressure and static pressure"
      D: "Dynamic pressure only from the pitot tube"
    answer: C
    explanation: "The airspeed indicator compares pitot (impact/ram) pressure with static pressure. The difference — dynamic pressure — is displayed as airspeed. This gives indicated airspeed (IAS), which differs from true airspeed (TAS) due to density altitude effects. Source: TP 12880E Chapter 8."
  - id: q3
    prompt: "If the pitot tube becomes blocked by ice but the static port remains open, the airspeed indicator will:"
    choices:
      A: "Read zero"
      B: "Read current speed accurately since the static port is unaffected"
      C: "Act like an altimeter — reading high when climbing and low when descending"
      D: "Fluctuate rapidly and become unusable"
    answer: C
    explanation: "With the pitot tube blocked, the trapped pitot pressure stays constant while the static pressure changes with altitude. In a climb, static pressure decreases — the difference between the trapped pitot pressure and the lower static pressure increases — and the ASI reads a higher (false) airspeed. In a descent the reverse occurs. Source: TP 12880E Chapter 8."
  - id: q4
    prompt: "The attitude indicator (artificial horizon) is driven by:"
    choices:
      A: "The static pressure system"
      B: "A gyroscope — either vacuum-driven or electrically powered"
      C: "The pitot pressure system"
      D: "Magnetic sensors aligned with the Earth's magnetic field"
    answer: B
    explanation: "The attitude indicator uses a gyroscope with rigidity-in-space properties. In most training aircraft it is vacuum-driven — a vacuum pump creates suction that spins the gyro. Modern glass cockpit aircraft use solid-state AHRS (Attitude and Heading Reference System) instead. Source: TP 12880E Chapter 8."
  - id: q5
    prompt: "During a prolonged coordinated turn, the turn coordinator will indicate a turn, but the inclinometer ball will be:"
    choices:
      A: "Deflected in the direction of the turn"
      B: "Centred, indicating a coordinated (balanced) turn"
      C: "Deflected opposite to the turn direction"
      D: "Stationary at the top of the tube, indicating straight flight"
    answer: B
    explanation: "In a coordinated (balanced) turn, the ball in the inclinometer (slip indicator) is centred, indicating that rudder and aileron are properly coordinated. A ball to the right means you need right rudder ('step on the ball'). Source: TP 12880E Chapter 8."
---

# Lesson GK-004: Flight Instruments

**Section:** General Knowledge  
**Lesson number:** 004  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 8, CARs 605.14

---

## Narration Script

Flight instruments tell pilots what the aircraft is doing when outside visual references are limited or unavailable. Even as a VFR pilot, you need to understand how each instrument works, what it tells you, and what happens when it fails. This lesson covers the six primary instruments and their operating principles.

---

**The Pitot-Static System**

Three instruments rely on the pitot-static system: the **airspeed indicator**, the **altimeter**, and the **vertical speed indicator (VSI)**.

**Static pressure** is the ambient atmospheric pressure — sensed through static ports on the fuselage sides (away from disturbed airflow). As altitude increases, static pressure decreases.

**Pitot (ram) pressure** is the pressure created by air ramming into the pitot tube (usually mounted on the wing or nose, pointed forward). Pitot pressure = static + dynamic pressure, where dynamic pressure is proportional to airspeed squared.

---

**Airspeed Indicator (ASI)**

The ASI measures the difference between pitot pressure and static pressure — this difference is dynamic pressure, and it's proportional to the square of airspeed. The display is in knots (or miles per hour in some older aircraft). This gives **Indicated Airspeed (IAS)**.

IAS differs from **True Airspeed (TAS)** because air density changes with altitude and temperature. At altitude, the air is less dense — the same dynamic pressure represents a higher actual speed through the air. TAS = IAS × approximately 2% per 1,000 feet above sea level (a useful rule of thumb).

The airspeed indicator has coloured arcs:
- **White arc**: flap operating range (Vfe at top, Vs0 at bottom)
- **Green arc**: normal operating range (Vs1 at bottom, Vno at top)
- **Yellow arc**: caution range — fly in smooth air only
- **Red radial line**: Vne — never exceed speed

**Pitot tube blockage**: If the pitot tube blocks (ice, insects) but the static port is clear, the ASI behaves like an altimeter — it reads high when climbing and low when descending because it's comparing trapped pitot pressure to changing static pressure.

**Static port blockage**: If the static port blocks, the ASI freezes at the speed when blockage occurred (no change in the pressure differential). The altimeter and VSI also freeze.

---

**Altimeter**

The altimeter is an aneroid barometer — it measures static pressure and translates it to altitude using the International Standard Atmosphere model. The **Kollsman window** (or subscale) is set to the local altimeter setting (QNH — the sea-level pressure at a reporting station). This corrects for the difference between actual sea-level pressure and standard pressure (29.92 in Hg / 1013.25 hPa).

- **QNH**: altimeter indicates height above mean sea level
- **QFE**: altimeter indicates height above a specific reference (rarely used in Canada)
- **Standard (29.92 in Hg)**: used above the transition altitude (18,000 ft ASL in Canada)

**Memory hook**: "High to low (pressure), look out below." Flying from high pressure into low pressure, the altimeter over-reads — you're lower than indicated. Flying from warm to cold, you're also lower than the altimeter shows.

---

**Vertical Speed Indicator (VSI)**

The VSI shows the rate of climb or descent in feet per minute. It measures the rate of change of static pressure. There is a lag of 6–9 seconds before the VSI stabilizes after a manoeuvre — it is a trend instrument, not a primary reference for pitch attitude.

---

**Attitude Indicator (AI)**

The AI (artificial horizon) uses a gyroscope whose spin axis is kept vertical by the properties of gyroscopic rigidity. It shows the aircraft's pitch and bank attitude relative to the horizon. In training aircraft, it is typically vacuum-driven — a vacuum pump spins a gyro wheel at high speed (8,000–12,000 RPM). Failure of the vacuum system causes the AI to tumble and give false readings after several minutes.

**Errors**: The AI has a slow precession error — it drifts slightly over time. Most have an erection mechanism that realigns the gyro during straight and level flight.

---

**Heading Indicator (Directional Gyro)**

The HI shows the aircraft's heading but has no inherent north-seeking ability (unlike the magnetic compass). It must be set to agree with the magnetic compass during straight and level flight before departure, and re-synchronized every 10–15 minutes as it drifts due to gyroscopic precession and Earth's rotation.

---

**Magnetic Compass**

The direct-reading magnetic compass is the only heading instrument that needs no power. However, it has limitations:
- **Variation**: difference between magnetic north and true north — accounted for by the isogonic lines on charts
- **Deviation**: local magnetic interference from the aircraft; corrected by the compass correction card
- **Turning errors**: in the northern hemisphere, when turning from north, the compass lags; when turning from south, it leads
- **Acceleration errors**: in the northern hemisphere on east or west headings, acceleration causes a northerly turn indication; deceleration indicates a south turn

---

**Turn Coordinator / Turn and Slip Indicator**

The turn coordinator shows the rate and direction of turn (it also reacts to roll). The **inclinometer** (ball in a curved glass tube) shows whether the turn is coordinated — ball centred means coordinated; ball displaced means slipping (too little rudder) or skidding (too much rudder). "Step on the ball" — apply rudder in the direction the ball is displaced.

---

## Key Points

- **ASI**: pitot minus static = dynamic pressure → indicated airspeed
- **Altimeter**: static pressure → altitude; set QNH for accurate MSL altitude
- **VSI**: rate of static pressure change → rate of climb/descent; 6–9 s lag
- **Attitude indicator**: vacuum-driven gyro; shows pitch and bank
- **Heading indicator**: set to compass before flight; re-sync every 10–15 min
- **Magnetic compass**: only no-power heading reference; subject to variation, deviation, turning and acceleration errors
- **Pitot blocked**: ASI acts like altimeter (reads high in climb)
- **Static blocked**: ASI, altimeter, VSI all freeze

---

*End of Lesson GK-004.*
