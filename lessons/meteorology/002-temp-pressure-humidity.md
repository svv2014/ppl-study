---
id: MET-002
topic: meteorology
order: 2
slug: temp-pressure-humidity
title: "Temperature, Pressure, Humidity"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/meteorology/002-temp-pressure-humidity.m4a
visual: /visuals/met002-temp-pressure-humidity.html
sources:
  - TP 12880E Chapter 8
  - AIM MET 1.0
questions:
  - id: q1
    prompt: "If the outside air temperature (OAT) at 6,000 feet ASL is –3°C, and the ISA temperature at that altitude is –3°C, the atmosphere at that level is:"
    choices:
      A: "Warmer than ISA by 3°C"
      B: "Colder than ISA by 3°C"
      C: "Exactly ISA standard"
      D: "Unstable"
    answer: C
    explanation: "ISA temperature at 6,000 feet = 15°C – (2°C × 6) = 3°C. Wait — the question states OAT is –3°C and ISA is –3°C, so they match: the atmosphere is at standard ISA conditions. To compute ISA at any altitude: start at 15°C at sea level and subtract 2°C per 1,000 feet. Source: TP 12880E Chapter 8."
  - id: q2
    prompt: "A high-pressure system (anticyclone) in the Northern Hemisphere produces surface winds that flow:"
    choices:
      A: "Inward and counterclockwise"
      B: "Inward and clockwise"
      C: "Outward and clockwise"
      D: "Outward and counterclockwise"
    answer: C
    explanation: "In the Northern Hemisphere, air flows outward from a high-pressure centre (diverging) and curves clockwise due to the Coriolis effect. Low-pressure systems have air flowing inward (converging) counterclockwise. The memory hook: High = Clockwise Out; Low = Counterclockwise In. Source: TP 12880E Chapter 8."
  - id: q3
    prompt: "The altimeter setting (QNH) is set to 30.12 inHg. This means:"
    choices:
      A: "The altimeter indicates pressure altitude"
      B: "The altimeter will read field elevation when the aircraft is on the ground at that reporting station"
      C: "The altimeter is set to standard pressure regardless of local conditions"
      D: "The altimeter reads height above the tropopause"
    answer: B
    explanation: "QNH is the local altimeter setting corrected to sea level. When QNH is set, the altimeter reads the aircraft's altitude above mean sea level (AMSL). On the ground at the reporting station, it will indicate the aerodrome elevation. Standard pressure (29.92 / 1013.25 hPa) is used above the transition altitude for pressure altitude. Source: TP 12880E Chapter 8, CARs 605.14."
  - id: q4
    prompt: "A trough of low pressure is associated with:"
    choices:
      A: "Clear skies and light winds"
      B: "Settling air, warming, and high pressure"
      C: "Unsettled weather, convergence, and potential precipitation"
      D: "Stratospheric intrusion bringing dry cold air aloft"
    answer: C
    explanation: "A trough is an elongated extension of low pressure between two high-pressure areas. Air converges at low-pressure troughs, rises, cools, and can produce cloud and precipitation. Troughs are associated with unsettled weather. Ridges (extensions of high pressure) are associated with fair weather. Source: TP 12880E Chapter 8."
  - id: q5
    prompt: "Isobars on a surface weather chart connect points of:"
    choices:
      A: "Equal temperature"
      B: "Equal pressure reduced to sea level"
      C: "Equal wind speed"
      D: "Equal dewpoint"
    answer: B
    explanation: "Isobars are lines connecting points of equal atmospheric pressure, corrected (reduced) to sea level for uniformity. The spacing of isobars indicates the pressure gradient: closely-spaced isobars mean a steep gradient and strong winds; widely-spaced isobars indicate light winds. Source: TP 12880E Chapter 8."
---

# Lesson MET-002: Temperature and Pressure

**Section:** Meteorology  
**Lesson number:** 002  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 8, AIM MET 1.0

---

## Narration Script

In the previous lesson we introduced the atmosphere's structure and the ISA baseline values. Now let's go deeper into how temperature and pressure behave, how they drive large-scale weather patterns, and how they're directly relevant to reading weather charts and operating your altimeter correctly.

---

**Temperature**

Temperature is the measure of how much heat energy the air molecules possess. In the context of aviation meteorology, temperature matters because:

1. It determines air density, which affects aircraft performance.
2. It controls whether water vapour condenses into cloud or fog.
3. It drives stability and instability — the engine of weather.

We already know the ISA lapse rate: 2°C per 1,000 feet. To find ISA temperature at any altitude, start at 15°C at sea level and subtract 2 degrees for every thousand feet. At 10,000 feet, ISA temperature is 15 – 20 = –5°C. Simple arithmetic — and it comes up directly on the exam.

When the actual temperature deviates from ISA, we describe it as ISA +X or ISA –X. A warm day might be ISA+10 (10°C warmer than standard). This affects density altitude — warmer air is less dense, so performance suffers as if you're at a higher altitude than your actual elevation.

---

**Atmospheric Pressure and Pressure Systems**

Pressure is caused by the weight of the overlying air. It varies horizontally across the Earth's surface due to uneven heating and the Earth's rotation. Where air is warmer, it expands, becomes less dense, and rises — creating a low-pressure area at the surface. Where air cools, it sinks and compresses — creating a high-pressure area.

**High-Pressure Systems (Anticyclones)** — Air sinks in the centre and flows outward. In the Northern Hemisphere, that outflow curves clockwise due to the Coriolis effect. Sinking air warms and dries, suppressing cloud formation. High-pressure systems are associated with fair weather, good visibility, and stable conditions. However, they can trap pollution near the surface and cause haze.

**Low-Pressure Systems (Cyclones)** — Air flows inward and upward. In the Northern Hemisphere, the inflow curves counterclockwise. Rising air cools, moisture condenses, and clouds form. Low-pressure systems bring unsettled weather: cloud, precipitation, and wind.

The memory hook: In the Northern Hemisphere — **H**igh = clockwise, **L**ow = counterclockwise. Or: think of a drain (low pressure) pulling water in counterclockwise (in the Northern Hemisphere).

---

**Pressure Gradient and Winds**

The pressure gradient force is what drives wind. Air wants to flow from high pressure to low pressure. The steeper the gradient — the more tightly packed the isobars on a weather chart — the stronger the wind. Widely-spaced isobars indicate light winds.

The Coriolis effect, caused by the Earth's rotation, deflects moving air to the right in the Northern Hemisphere. This is why winds don't flow straight from high to low pressure — they curve. At upper levels (above the friction layer), winds flow nearly parallel to the isobars in geostrophic balance.

---

**Isobars and Weather Charts**

On a surface analysis chart, lines called **isobars** connect points of equal sea-level pressure. They're usually drawn every 4 hPa. Where isobars form closed loops around a centre of high pressure, you have an anticyclone. Closed isobars around a centre of low pressure indicate a cyclone. Elongated extensions of high pressure are called **ridges** — associated with fair weather. Elongated extensions of low pressure are called **troughs** — associated with unsettled weather and potential precipitation.

---

**Altimetry: Pressure in Practice**

The altimeter is a pressure instrument. It works by measuring static (ambient) air pressure and converting it to altitude using a mathematical model based on ISA pressure and temperature values. Because actual atmospheric pressure varies from the ISA model, you must dial in the correct altimeter setting.

There are three altimeter setting types:

- **QNH** — The local pressure corrected to sea level. This is what ATC gives you. When set to QNH, the altimeter reads AMSL (above mean sea level). On the ground at the reporting station, it reads the field elevation. This is the standard setting for VFR flight in Canada.

- **QFE** — The actual pressure at the aerodrome. When set to QFE, the altimeter reads zero on the runway. Rarely used in Canada.

- **Standard (1013.25 hPa / 29.92 inHg)** — Used above the transition altitude (18,000 feet ASL in Canada). Above this level, all aircraft use standard pressure so that relative altitudes are consistent regardless of local pressure variations. Altimeter readings in standard are called "flight levels" (FL180 = 18,000 feet on standard).

**Cold temperature correction:** In cold weather, the altimeter over-reads — the aircraft is lower than indicated. This is because cold air is denser than ISA, so the pressure levels are compressed closer to the ground. In Canada, ATC provides cold temperature corrections at certain airports when temperatures are very low. This is a Canadian exam topic.

---

## Key Points

- ISA temperature at altitude: 15°C – (2°C × altitude in thousands of feet)
- **High-pressure** = sinking air, clockwise outflow (Northern Hemisphere), fair weather
- **Low-pressure** = rising air, counterclockwise inflow (Northern Hemisphere), unsettled weather
- **Isobars** connect points of equal sea-level pressure; closely-spaced = strong winds
- **QNH** is the standard Canadian altimeter setting; reads AMSL altitude
- In **cold temperatures**, the altimeter over-reads — actual altitude is lower than indicated (Source: TP 12880E Chapter 8, CARs 605.14)

---

*End of Lesson MET-002.*
