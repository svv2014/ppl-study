---
id: GK-010
topic: general-knowledge
order: 10
slug: atmosphere-and-altimetry
title: "The Atmosphere and Altimetry"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E Chapter 7
  - TP 12880E Chapter 8
  - AIM AIR 1.0
questions:
  - id: q1
    prompt: "The International Standard Atmosphere (ISA) defines standard sea-level conditions as:"
    choices:
      A: "15°C, 1013.25 hPa (29.92 in Hg), and a temperature lapse rate of 1.5°C per 1,000 ft"
      B: "15°C, 1013.25 hPa (29.92 in Hg), and a temperature lapse rate of 2°C per 1,000 ft"
      C: "0°C, 1013.25 hPa, and a temperature lapse rate of 2°C per 1,000 ft"
      D: "15°C, 1029.92 hPa, and a temperature lapse rate of 2°C per 1,000 ft"
    answer: B
    explanation: "The ISA defines sea-level conditions as: temperature 15°C, pressure 1013.25 hPa (29.92 in Hg), and a lapse rate of 2°C per 1,000 ft (approximately) up to the tropopause at 36,090 ft. This is the reference model used for altimeter calibration and performance calculations. Source: TP 12880E Chapter 7."
  - id: q2
    prompt: "If the altimeter setting (QNH) is set lower than the actual local pressure, the altimeter will:"
    choices:
      A: "Read higher than actual altitude MSL"
      B: "Read lower than actual altitude MSL"
      C: "Read accurately — QNH setting does not affect indicated altitude"
      D: "Show an error flag and require resetting"
    answer: B
    explanation: "Setting a lower QNH than actual causes the altimeter to read lower than the actual altitude. The memory hook: 'High to low, look out below' — flying from high pressure into lower pressure causes the altimeter to over-read, meaning you are actually lower than indicated. Source: TP 12880E Chapter 8, AIM AIR 2.4."
  - id: q3
    prompt: "Pressure altitude is the altitude indicated when the altimeter is set to:"
    choices:
      A: "The local QNH at the departure airport"
      B: "Standard pressure: 1013.25 hPa (29.92 in Hg)"
      C: "The QFE at the airfield"
      D: "The actual surface elevation of the airport"
    answer: B
    explanation: "Pressure altitude is read when the altimeter subscale is set to 1013.25 hPa (29.92 in Hg) — standard pressure. It is used for density altitude calculations and, in Canada, for flight at or above 18,000 ft ASL (transition altitude), where all aircraft use standard pressure setting (SPS). Source: TP 12880E Chapter 8."
  - id: q4
    prompt: "True altitude is best described as:"
    choices:
      A: "The altitude indicated on the altimeter with QNH set"
      B: "The actual height above mean sea level"
      C: "The height above the ground directly below the aircraft"
      D: "The pressure altitude corrected for non-standard temperature"
    answer: B
    explanation: "True altitude is the actual height above mean sea level (MSL). Indicated altitude (altimeter set to QNH) approximates true altitude but may differ in non-standard temperature conditions. True altitude is important for terrain clearance — charts show terrain in true altitude. Source: TP 12880E Chapter 8."
  - id: q5
    prompt: "In cold weather, a pilot flying at the charted MSA (Minimum Safe Altitude) may be at risk because:"
    choices:
      A: "Cold air is denser, causing the altimeter to under-read"
      B: "In temperatures colder than ISA, true altitude is less than indicated altitude — the aircraft is lower than the altimeter shows"
      C: "QNH corrections are not required in cold weather"
      D: "Altimeters are less accurate at temperatures below -20°C"
    answer: B
    explanation: "Cold air is denser and contracts, so air columns are shorter than the ISA model predicts. As a result, a given pressure level is found at a lower true altitude than the standard atmosphere would suggest. The altimeter over-reads in cold weather — you are lower than indicated. Transport Canada and the AIM publish cold temperature corrections. Source: AIM AIR 2.4, TP 12880E Chapter 8."
---

# Lesson GK-010: The Atmosphere and Altimetry

**Section:** General Knowledge  
**Lesson number:** 010  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapters 7–8, AIM AIR 1.0

---

## Narration Script

The atmosphere is the medium in which we fly. Understanding its structure — how pressure, temperature, and density change with altitude — is essential for interpreting instruments, understanding aircraft performance, and staying safe in marginal conditions. This lesson covers the International Standard Atmosphere, the different definitions of altitude, and how altimeter setting errors can put you into terrain.

---

**The Atmosphere's Structure**

The atmosphere is layered:

- **Troposphere**: the lowest layer, from sea level to approximately 36,000 ft (11 km) at mid-latitudes. This is where weather happens. Temperature decreases with altitude at an average lapse rate of approximately 2°C per 1,000 feet.
- **Tropopause**: the boundary between the troposphere and the stratosphere. Temperature stops decreasing here.
- **Stratosphere**: above the tropopause; temperature is roughly constant at -56.5°C, then gradually increases.

As a VFR pilot operating below 18,000 ft, you are always in the troposphere.

---

**The International Standard Atmosphere (ISA)**

The ISA is a theoretical model of how the atmosphere would behave under defined standard conditions. It provides a reference baseline for aircraft performance calculations and altimeter calibration.

**ISA standard conditions at sea level:**
- Temperature: 15°C
- Pressure: 1013.25 hPa (29.92 in Hg)
- Density: 1.225 kg/m³
- Temperature lapse rate: 2°C per 1,000 ft (up to the tropopause)

ISA temperature at any altitude: ISA temp = 15°C − (2°C × altitude in thousands of feet)

Example: ISA temperature at 8,000 ft = 15 − (2 × 8) = 15 − 16 = −1°C.

If actual temperature is warmer than ISA at a given altitude: "ISA+X°C" (e.g., ISA+10°C).

---

**Types of Altitude**

There are five types of altitude pilots need to know:

1. **Indicated altitude**: what the altimeter reads when set to local QNH. This is what pilots use for day-to-day navigation and terrain clearance in normal operations.

2. **True altitude**: the actual height above mean sea level (MSL). True altitude equals indicated altitude only when conditions are exactly standard (ISA). In practice, true altitude differs from indicated altitude in non-standard temperature conditions.

3. **Pressure altitude**: the altitude the altimeter reads when set to standard pressure (1013.25 hPa / 29.92 in Hg). Used for performance calculations (density altitude) and for flight above 18,000 ft ASL in Canada.

4. **Density altitude**: pressure altitude corrected for non-standard temperature. This is the altitude at which the current air density corresponds in the standard atmosphere. Density altitude determines actual aircraft performance. High temperature → high density altitude → reduced performance.

5. **Absolute altitude**: the height above ground level (AGL). Changes with terrain. Not directly measured by the altimeter (though radar altimeters measure it).

---

**QNH vs. Standard Pressure Setting**

**QNH** (Query: Nautical Height above mean sea level) is the altimeter setting that, when dialled into the Kollsman window, causes the altimeter to read the elevation of the airport when on the ground. In flight, it gives MSL altitude. ATIS and ATC provide QNH as part of weather information.

**Standard Pressure Setting (SPS)** is 1013.25 hPa / 29.92 in Hg. In Canada, all aircraft above the transition altitude of 18,000 ft ASL use SPS. Below 18,000 ft, QNH is used.

**QFE** causes the altimeter to read zero on the ground at a specific airfield. Rarely used in Canada, but may appear on the exam.

---

**Altimeter Errors**

**1. QNH error**: if the altimeter subscale is set to a pressure lower than actual QNH, the altimeter will read lower than actual altitude — you are higher than shown. If set higher than actual, you are lower than shown.

Memory hook: **"High to low, look out below"** — flying from high pressure into a low pressure area, the altimeter over-reads — you are actually lower than the altimeter indicates. This is dangerous near terrain.

**2. Temperature error (cold temperature correction)**: the altimeter is calibrated to the ISA model. In temperatures colder than ISA, air columns are shorter than the model predicts. The altimeter over-reads — the true altitude is less than indicated. This is the cold temperature altimetry problem.

Transport Canada requires pilots to apply cold temperature corrections to altitude minimums when temperatures are significantly below ISA at certain IFR procedures. As a VFR pilot, you should be aware that in cold weather, you are lower than indicated — increase your terrain clearance buffers.

---

**Density Altitude and Performance**

Density altitude is calculated as:
Density altitude = Pressure altitude + (120 × (OAT − ISA OAT at that pressure altitude))

Or more practically: use the E6B flight computer or POH charts. A high-elevation airport on a hot day can easily produce density altitude 3,000 to 5,000 ft higher than field elevation — with dramatic performance consequences.

---

**Altimeter Setting Procedures in Canada**

- Obtain the local QNH from ATIS, AWOS, or ATC before flight and after takeoff
- Set QNH before entering any controlled airspace
- In uncontrolled airspace, if no local QNH is available, use the regional setting (area QNH) from the nearest reporting station
- When climbing through 17,500 ft ASL, switch to SPS (1013.25 hPa); when descending through 18,000 ft, switch back to QNH

---

## Key Points

- **ISA sea level**: 15°C, 1013.25 hPa, lapse rate 2°C / 1,000 ft
- **Five altitudes**: indicated, true, pressure, density, absolute
- **Pressure altitude**: altimeter set to 1013.25 hPa; used above 18,000 ft and for performance calcs
- **QNH**: local MSL setting; use below 18,000 ft in Canada
- **"High to low, look out below"**: flying into lower pressure → altimeter over-reads → you're lower than shown
- **Cold temperature**: altimeter over-reads; true altitude is less than indicated → fly with extra clearance
- **Density altitude** = pressure altitude + temperature correction; determines actual performance

---

*End of Lesson GK-010.*
