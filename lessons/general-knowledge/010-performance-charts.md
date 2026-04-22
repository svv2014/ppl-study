---
id: GK-010
topic: general-knowledge
order: 10
slug: performance-charts
title: "Performance Charts"
duration_min: 20
status: complete
audio: null
visual: /visuals/gk010-performance-charts.html
sources:
  - TP 12880E Chapter 11
  - POH (aircraft-specific)
questions:
  - id: q1
    prompt: "Density altitude is defined as:"
    choices:
      A: "Pressure altitude corrected for non-standard temperature"
      B: "Indicated altitude corrected for local altimeter setting"
      C: "True altitude above mean sea level"
      D: "Altitude above ground level at the departure airport"
    answer: A
    explanation: "Density altitude is pressure altitude corrected for non-standard temperature. It represents the altitude in the International Standard Atmosphere with the same air density as the actual conditions. High density altitude (hot, high, humid) degrades engine power, propeller thrust, and wing lift. Source: TP 12880E Chapter 11."
  - id: q2
    prompt: "When using a POH takeoff distance chart, which combination of conditions will result in the LONGEST takeoff roll?"
    choices:
      A: "Sea level elevation, 15°C, maximum gross weight, headwind 10 kt"
      B: "High elevation airport, 35°C, maximum gross weight, calm wind"
      C: "High elevation airport, 15°C, below maximum gross weight, headwind 5 kt"
      D: "Sea level elevation, 30°C, below maximum gross weight, calm wind"
    answer: B
    explanation: "High elevation + high temperature = very high density altitude, reducing engine power and lift generation. Maximum gross weight requires the highest takeoff speed. Calm wind provides no airspeed advantage. This combination maximizes takeoff distance. A headwind in option A greatly reduces the ground roll. Source: TP 12880E Chapter 11."
  - id: q3
    prompt: "When interpolating between two values in a performance table, the correct technique is:"
    choices:
      A: "Always use the higher (more conservative) value in the table"
      B: "Use the value closest to your actual conditions"
      C: "Interpolate proportionally between the nearest table values to find the value for your exact conditions"
      D: "Multiply the nearest table value by a safety factor of 1.3"
    answer: C
    explanation: "Performance tables provide values at specific conditions. When your actual conditions fall between tabulated values, you interpolate — calculate the proportional value between the two nearest table entries. For safety, round to the conservative side. Always use the POH chart for the specific aircraft flown. Source: TP 12880E Chapter 11."
  - id: q4
    prompt: "A takeoff distance chart requires 'pressure altitude' as an input. On a day when QNH = 30.12 in Hg, pressure altitude is:"
    choices:
      A: "Equal to indicated altitude on the altimeter with QNH set"
      B: "Obtained by setting the altimeter to 29.92 in Hg and reading the indicated altitude"
      C: "The airport elevation above MSL"
      D: "The airport elevation plus the OAT correction factor"
    answer: B
    explanation: "Pressure altitude is the indicated altitude when the altimeter is set to standard pressure of 29.92 in Hg (1013.25 hPa). When QNH is above 29.92, pressure altitude is lower than field elevation; when QNH is below 29.92, pressure altitude is higher. Each 0.01 in Hg difference in altimeter setting corresponds to approximately 10 ft of altitude difference. Source: TP 12880E Chapter 11."
  - id: q5
    prompt: "Which statement about cruise performance charts is correct?"
    choices:
      A: "Cruise performance charts give true airspeed (TAS), which is always the same as indicated airspeed"
      B: "Cruise performance charts provide fuel flow, TAS, and power settings at specific altitudes, temperatures, and RPM/MAP combinations"
      C: "Cruise performance charts can only be used at standard temperature"
      D: "Published fuel flows include all reserves required by CARs 602.88"
    answer: B
    explanation: "Cruise performance charts in the POH provide fuel consumption (in gallons per hour or litres per hour), true airspeed, and the associated power settings (RPM and/or manifold pressure) for specific combinations of altitude and temperature. This allows accurate flight planning. The charts do not include regulatory reserves — those are added by the pilot. Source: TP 12880E Chapter 11."
---

# Lesson GK-010: Performance Charts

**Section:** General Knowledge  
**Lesson number:** 010  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 11, POH (aircraft-specific)

---

## Narration Script

Performance charts let you predict how your aircraft will behave under specific conditions — before you commit to a takeoff or plan a long cross-country. The Transport Canada PPL exam tests your ability to read and interpret these charts, and in real life, misunderstanding performance data is a leading cause of accidents. This lesson covers density altitude, the main chart types, and how to read them correctly.

---

**Why Density Altitude Matters**

An aircraft engine, propeller, and wing all depend on **air density** to do their jobs. Less dense air contains fewer air molecules per cubic metre — which means:

- The engine ingests less air mass per intake stroke → **less power**
- The propeller blades act against less air → **less thrust**
- The wings generate less lift at a given indicated airspeed → **the aircraft must accelerate to a higher TAS to fly**

Result: every performance figure in the POH degrades at high density altitude.

**Density altitude** is the altitude in the International Standard Atmosphere (ISA) that has the same air density as the actual conditions. It is found from:

Density altitude = Pressure altitude + (120 × (OAT − ISA temperature at that pressure altitude))

Where ISA temperature = 15°C − 2°C per 1,000 ft of pressure altitude.

Alternatively, use a flight computer or a density altitude chart in the POH.

**Factors that increase density altitude:**
- High field elevation (lower pressure → lower air density)
- High temperature (hot air expands → lower density)
- High humidity (water vapour partially replaces heavier nitrogen/oxygen → slightly lower density)

---

**Finding Pressure Altitude**

Performance charts require **pressure altitude** as an input — not field elevation and not altimeter-corrected altitude.

**Pressure altitude** = altimeter indication when the Kollsman window is set to 29.92 in Hg.

Practically: if QNH is 30.12 in Hg and field elevation is 500 ft, pressure altitude is approximately 500 − (30.12 − 29.92) × 1,000 = 500 − 200 = 300 ft. Each 0.01 in Hg above standard = ~10 ft lower pressure altitude.

---

**Takeoff Distance Charts**

The takeoff distance chart predicts:
- **Ground roll** (distance from brake release to liftoff)
- **Distance to clear a 50-foot obstacle** (includes the initial climb)

Inputs typically include:
1. Pressure altitude (or field elevation + altimeter setting)
2. Outside air temperature (OAT)
3. Aircraft gross weight
4. Headwind or tailwind component

**Reading the chart**: most charts use a "step-across" method — enter from one axis, step across or up/down through the chart following the reference lines, adjusting for each variable in sequence. Always follow the exact method shown in your specific POH.

**Headwind effect**: a headwind directly reduces the ground speed needed at liftoff. Halving the headwind component roughly doubles the ground roll — a significant effect. A headwind is the best performance aid available.

**Tailwind effect**: even a small tailwind greatly increases takeoff distance. The aircraft must reach a higher ground speed before generating flying speed. Avoid tailwind takeoffs on marginal runways.

**Conservative practice**: add a safety margin (many operators use 1.33× the charted distance) or use the unfavourable end of the range when interpolating.

---

**Interpolating Between Table Values**

When your conditions (temperature, weight, altitude) fall between published table entries:

1. Find the two nearest values in the table (one above, one below your actual condition)
2. Determine what fraction your actual condition is between the two entries
3. Apply that fraction to the difference in the table output values
4. Add the fractional amount to the lower table output

Example: if 15°C gives 850 ft roll and 20°C gives 1,000 ft roll, at 18°C:
- Fraction = (18−15)/(20−15) = 3/5 = 0.6
- 850 + 0.6 × (1,000 − 850) = 850 + 90 = 940 ft

---

**Climb Performance Charts**

Climb charts give **rate of climb (fpm)** at various altitudes and weights. The rate of climb decreases with altitude because engine power decreases and the speed of maximum excess power (Vy) changes.

**Absolute ceiling**: the altitude at which the maximum rate of climb equals zero — the aircraft cannot climb further. It is approached asymptotically and is not a practical operating altitude.

**Service ceiling**: the altitude at which the maximum rate of climb is 100 fpm — a more practical limit.

---

**Cruise Performance Charts**

Cruise charts list:
- **Power setting** (RPM and, for constant-speed propeller aircraft, manifold pressure)
- **True Airspeed (TAS)**
- **Fuel flow (GPH or L/hr)**

At altitude, for the same power setting, TAS is higher than indicated airspeed because air is less dense. The chart is typically presented for standard temperature; some POHs provide adjustments for temperature deviations.

Use cruise charts to:
- Plan fuel burn and trip time
- Verify actual in-flight fuel burn matches predicted
- Select the most efficient altitude and power combination for the trip

---

**Landing Distance Charts**

Landing charts predict ground roll from the point where the aircraft crosses the runway threshold at the specified approach speed (usually 50 ft) to a full stop.

Key factors:
- Higher approach speed → much longer roll (distance ∝ speed²)
- Tailwind → longer roll
- Wet or icy runway → dramatically longer roll (not always in the chart — apply judgment)
- Slope → downhill increases roll, uphill decreases roll
- Higher elevation → higher TAS at same IAS → longer roll

---

**Weight and Balance — Linked to Performance**

Performance charts are published at specific weights. If you are lighter than maximum gross weight, performance improves — but always use the weight that matches your actual loading. Many POH charts provide a correction factor or separate table for below-gross-weight operations.

---

## Key Points

- **Density altitude** = pressure altitude corrected for non-standard temperature; high DA = degraded performance
- **Pressure altitude**: set altimeter to 29.92 in Hg to find it; required input for performance charts
- High temperature + high elevation + high weight = longest takeoff distances
- **Headwind** reduces ground roll significantly; **tailwind** increases it dramatically
- **Interpolate** proportionally between table values; round conservatively
- **Cruise charts** give TAS and fuel flow at specified altitude, temperature, and power setting
- **Landing distance** increases with approach speed squared; wet runways multiply required distance

---

*End of Lesson GK-010.*
