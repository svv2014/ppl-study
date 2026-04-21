---
id: MET-003
topic: meteorology
order: 3
slug: wind
title: "Wind"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E Chapter 8
  - AIM MET 1.1
questions:
  - id: q1
    prompt: "Wind direction in aviation is always reported and measured as the direction:"
    choices:
      A: "The wind is blowing toward, in magnetic degrees"
      B: "The wind is blowing from, in true degrees (upper winds) or magnetic degrees (surface)"
      C: "The wind is blowing toward, in true degrees"
      D: "The wind is blowing from, referenced to grid north"
    answer: B
    explanation: "Wind direction is always reported as the direction FROM which the wind is blowing. Surface winds (METAR, ATIS) are in magnetic degrees. Upper-level winds (winds aloft forecasts) are in true degrees. A west wind comes FROM the west and blows toward the east. Source: TP 12880E Chapter 8, AIM MET."
  - id: q2
    prompt: "Surface friction causes wind near the ground to differ from the geostrophic wind aloft by:"
    choices:
      A: "Backing (turning counterclockwise) and decreasing in speed"
      B: "Veering (turning clockwise) and increasing in speed"
      C: "Backing and increasing in speed"
      D: "No change in direction, only reduced speed"
    answer: A
    explanation: "Surface friction slows the wind and reduces the Coriolis deflection. This causes the surface wind to back (turn counterclockwise/anti-clockwise) relative to the geostrophic wind aloft, and to be slower. At altitude, the wind veers with altitude in the Northern Hemisphere. Source: TP 12880E Chapter 8."
  - id: q3
    prompt: "Wind shear is most hazardous to aircraft during:"
    choices:
      A: "Cruise flight above 10,000 feet"
      B: "Takeoff and landing, when airspeed margins are small"
      C: "Level flight in the stratosphere"
      D: "Flight in Class G airspace only"
    answer: B
    explanation: "Wind shear — a sudden change in wind speed or direction over a short distance — is most dangerous during takeoff and landing, when the aircraft is slow and close to the ground. A sudden headwind-to-tailwind shear causes an abrupt loss of lift and airspeed. Low-level wind shear (LLWS) is a major cause of accidents in the approach and departure phases. Source: TP 12880E Chapter 8, AIM MET 1.11."
  - id: q4
    prompt: "A mountain wave (standing wave) is most likely to form when:"
    choices:
      A: "Winds are calm and the air is very humid"
      B: "Strong winds blow perpendicular to a mountain range in a stable atmosphere"
      C: "A sea breeze meets the opposing land breeze over coastal terrain"
      D: "Thermal activity breaks down the surface inversion layer in the morning"
    answer: B
    explanation: "Mountain waves form when stable air flows at sufficient speed (typically >25 knots) approximately perpendicular to a mountain ridge. The stable air is set into oscillation downwind of the ridge. Lenticular (lens-shaped) clouds mark the crests of the waves. Severe turbulence and rotor zones (below the wave crests) are hazards. Source: TP 12880E Chapter 8."
  - id: q5
    prompt: "The Coriolis effect deflects moving air in the Northern Hemisphere:"
    choices:
      A: "To the left"
      B: "To the right"
      C: "Upward"
      D: "Downward"
    answer: B
    explanation: "The Coriolis effect is caused by Earth's rotation. In the Northern Hemisphere, it deflects moving objects (including air) to the right of their direction of travel. This is why winds flow clockwise around high-pressure systems and counterclockwise around low-pressure systems in the Northern Hemisphere. Source: TP 12880E Chapter 8."
---

# Lesson MET-003: Wind

**Section:** Meteorology  
**Lesson number:** 003  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 8, AIM MET 1.1

---

## Narration Script

Wind is the horizontal movement of air. For a pilot, wind affects groundspeed, fuel consumption, drift, takeoff and landing performance, and turbulence. Understanding where wind comes from and how it behaves is fundamental to safe flight planning and airborne decision-making.

---

**Wind Direction Convention**

First, the convention: wind direction in aviation is always reported as the direction **from** which the wind is blowing. A "northerly" wind comes from the north and pushes your aircraft toward the south. This matters because on the surface, when you're told to land on runway 36 with a north wind, the wind is coming toward you — a headwind. If you get confused and think of wind as "toward," every calculation is backwards.

Surface winds (reported in METARs, ATIS, and tower broadcasts) are in **magnetic degrees**. Upper-level winds (winds aloft forecasts, FD charts) are in **true degrees**. Remember this distinction — the exam tests it.

---

**What Causes Wind**

Wind is caused by pressure differences. Air flows from areas of high pressure to areas of low pressure — but it doesn't flow directly. The Earth's rotation introduces the **Coriolis effect**, which deflects moving air to the right in the Northern Hemisphere (and to the left in the Southern Hemisphere).

At altitude, above the frictional influence of the surface (typically above 2,000 to 3,000 feet AGL), the pressure gradient force and the Coriolis force reach a balance. The resulting wind flows parallel to the isobars with low pressure on its left — this is the **geostrophic wind**.

Near the surface, friction slows the wind and reduces the Coriolis deflection. The result: surface winds **back** (turn counterclockwise in the Northern Hemisphere) compared to upper-level winds and are slower. With altitude the wind typically **veers** (turns clockwise) back toward the geostrophic direction.

---

**Types of Wind**

**General circulation:** On a global scale, the atmosphere has three main circulation cells per hemisphere (Hadley, Ferrel, Polar). At mid-latitudes (where most of Canada sits), the prevailing upper winds flow from the west — the **westerlies**. This is why weather systems generally move from west to east across Canada.

**Sea and land breezes:** Near coastlines, differential heating between land and water creates local circulation. During the day, land heats faster, creating lower pressure over land and drawing a sea breeze (from water to land). At night, land cools faster, reversing the cycle to a land breeze. These are light, diurnal (daily) winds.

**Valley and mountain winds:** Slopes heat up during the day, causing warm air to rise up the slope — an **anabatic** (upslope) wind. At night, slopes cool and dense air drains downhill — a **katabatic** (downslope) wind. Katabatic winds can be strong and cold, especially in mountain terrain.

**Chinook:** A warm, dry katabatic wind on the eastern side of the Rocky Mountains in Canada. Air descends rapidly from the mountains, warming at the dry adiabatic lapse rate and arriving very warm at the surface. Chinooks can raise temperatures dramatically in minutes.

---

**Wind Shear**

Wind shear is a change in wind speed and/or direction over a short horizontal or vertical distance. It can be mild or severe.

**Low-level wind shear (LLWS)** is the most dangerous type for general aviation. It occurs below 2,000 feet AGL — during takeoff and approach — when the difference between wind layers is significant. If an aircraft flies from a headwind into a tailwind during approach, it loses effective airspeed and can sink rapidly below the glidepath. This has caused numerous accidents worldwide.

LLWS can be associated with:
- Thunderstorm microbursts and downbursts
- Temperature inversions near the surface
- Frontal zones near the ground
- Terrain channelling

NAV CANADA issues **SIGMET** and **AIRMET** notifications for significant wind shear. The AIM MET section lists pilot reporting procedures (PIREPs) for turbulence and wind shear.

---

**Mountain Waves**

When stable air flows strongly (typically >25 knots) approximately perpendicular to a mountain ridge, it can set up a series of standing waves downwind — **mountain waves** or **lee waves**. The air rises over the ridge and oscillates downwind. The crests are marked by smooth, lens-shaped **lenticular clouds**. Below the crest, violent circular eddies called **rotors** create severe to extreme turbulence. Mountain waves can extend hundreds of kilometres downwind and up to well above the tropopause.

In Canada, mountain wave activity is common in the lee of the Rockies and other ranges. PIREPs are the best source of real-time wave intensity information.

---

**Jet Streams**

Jet streams are narrow bands of very strong winds (100+ knots) at tropopause level. The **polar jet** affects much of Canada. It moves southward in winter and northward in summer. On each side of the jet core, **clear air turbulence (CAT)** can occur with no visible warning. General aviation piston aircraft rarely reach these altitudes, but the jet stream still affects weather below it by steering pressure systems.

---

**Wind Measurement and Reporting**

Wind speed in Canada is reported in **knots** in aviation weather products (METAR, TAF). Wind direction is given in degrees magnetic at the surface. A METAR entry of `27018KT` means wind from 270° magnetic at 18 knots. Gusts are appended: `27018G28KT` means gusts to 28 knots. Variable wind direction is coded `VRB`: `VRB06KT` means variable direction at 6 knots.

---

## Key Points

- Wind direction = the direction the wind is **blowing from** (not toward)
- Surface winds: **magnetic** degrees; upper winds: **true** degrees
- **Coriolis** deflects moving air to the right in the Northern Hemisphere
- Surface friction causes wind to **back** and slow relative to winds aloft
- **Low-level wind shear** is most hazardous on takeoff and landing
- **Mountain waves** form with strong stable wind perpendicular to a ridge; rotors cause severe turbulence below wave crests
- Wind speed in aviation products is in **knots**

---

*End of Lesson MET-003.*
