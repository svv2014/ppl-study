---
id: MET-008
topic: meteorology
order: 8
slug: pireps
title: "PIREPs"
duration_min: 20
status: complete
audio: null
visual: /visuals/met008-pireps.html
sources:
  - TP 12880E Chapter 8
  - AIM MET 2.5
  - AIM MET 2.6
questions:
  - id: q1
    prompt: "A PIREP is particularly valuable to other pilots because:"
    choices:
      A: "It is issued by ECCC meteorologists who have detailed forecast models"
      B: "It provides real-time information about actual en route conditions from pilots who just flew through them"
      C: "It supersedes all TAF and GFA forecasts for the area it covers"
      D: "It is the only official source of turbulence intensity data for Canadian airspace"
    answer: B
    explanation: "PIREPs (Pilot Reports) provide real-time, ground-truth observations from pilots actually in the air. Forecasts can miss localized conditions; a PIREP from a pilot 30 minutes ahead of you on the same route is more current and specific than any forecast product. Filing PIREPs is encouraged and expected for significant weather. Source: AIM MET 2.5."
  - id: q2
    prompt: "A SIGMET is issued for:"
    choices:
      A: "Forecast conditions below VFR minimums at a specific aerodrome"
      B: "Significant meteorological conditions potentially hazardous to all aircraft"
      C: "Surface weather observations that include thunderstorm activity"
      D: "Pilot reports of icing above 18,000 feet ASL only"
    answer: B
    explanation: "SIGMET (Significant Meteorological Information) is issued by ECCC for significant en route weather hazardous to all aircraft: severe or extreme turbulence, severe icing, widespread dust/sandstorm, volcanic ash, and tropical cyclones. SIGMETs are important enough that ATC will broadcast them to aircraft. Source: AIM MET 2.6."
  - id: q3
    prompt: "The turbulence intensity 'SEV' in a PIREP means the pilot experienced:"
    choices:
      A: "Momentary, slight bumpiness with no control difficulty"
      B: "Rapid, irregular bumps; control maintained but flight path deviated"
      C: "Abrupt changes in attitude and altitude; control temporarily difficult; items thrown about"
      D: "Aircraft temporarily out of control"
    answer: C
    explanation: "Turbulence intensities: LIGHT = slight bumpiness; MODERATE = similar to light but more intense, control maintained but deviations occur; SEVERE = abrupt changes, large altitude/attitude deviations, control temporarily difficult, unsecured objects thrown; EXTREME = aircraft out of control (rare). Source: AIM MET 2.5, TP 12880E Chapter 8."
  - id: q4
    prompt: "An AIRMET (SIGMET for light aircraft) is issued for which condition?"
    choices:
      A: "Moderate turbulence that is not associated with thunderstorms, affecting light aircraft"
      B: "Extreme turbulence at any altitude"
      C: "A volcanic ash cloud affecting all aircraft"
      D: "Severe icing at cruise altitudes above FL180"
    answer: A
    explanation: "In Canada, AIRMETs (Airmen's Meteorological Information) are issued for conditions that may be hazardous to light aircraft but are not necessarily severe enough for a SIGMET: moderate icing or turbulence, mountain obscurement, and conditions causing widespread IFR. Severe and extreme conditions require a SIGMET. Source: AIM MET 2.6."
  - id: q5
    prompt: "A pilot wishes to report severe turbulence encountered at 8,500 feet ASL near CYYC. The correct action is to:"
    choices:
      A: "Note it in the aircraft journey log and report it to Transport Canada after landing"
      B: "Report it to the nearest ATC facility or FIC, or file a PIREP on the aviation weather website after landing"
      C: "File an Aviation Safety Report with the TSB within 24 hours"
      D: "Report it only if structural damage occurred to the aircraft"
    answer: B
    explanation: "Pilots are strongly encouraged to file PIREPs for significant weather, including severe turbulence, icing, thunderstorm activity, and other hazards. Reports can be made to the nearest ATC unit or Flight Information Centre (FIC) in flight, or filed on the NAV CANADA aviation weather website after landing. PIREPs are the most current real-time weather data available. Source: AIM MET 2.5."
---

# Lesson MET-013: PIREPs and SIGMETs

**Section:** Meteorology  
**Lesson number:** 013  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 8, AIM MET 2.5, AIM MET 2.6

---

## Narration Script

Weather forecasts are predictions. No matter how sophisticated the models, they can miss localized conditions, underestimate icing intensity, or misjudge thunderstorm development. The two weather products we're covering today fill that gap: PIREPs provide real-time reports from pilots actually in the air, and SIGMETs provide urgent advisories about hazardous en route conditions. Together, they are the highest-priority real-time weather products for the VFR pilot.

---

**PIREPs — Pilot Reports**

A PIREP (Pilot Report) is an observation filed by a pilot in flight describing actual weather conditions encountered. It is the most current and ground-truthful weather information available.

**Why PIREPs matter:**
- Forecasts predict; PIREPs confirm
- A PIREP from a pilot 30 minutes ahead of you on the same route is more valuable than a 6-hour GFA forecast
- Particularly valuable for icing reports (localized and altitude-specific), turbulence intensity, and exact cloud bases and tops
- Pilots are encouraged — and in some conditions expected — to file PIREPs

**Filing a PIREP:**

In flight, report to the nearest ATC unit, FIC (Flight Information Centre), or via radio to a Flight Service Station. After landing, PIREPs can be filed online through the NAV CANADA aviation weather website.

**PIREP Format (UA)**

PIREPs are coded in a standard format:

```
UA /OV CYYC /TM 1430 /FL085 /TP C172 /SK BKN050-OVC080 /WX -RA /TA 12 /WV 25020KT /TB LGT-MOD /IC LGT RIME /RM EN ROUTE YYQL TOPS UNOBS
```

| Code | Meaning |
|------|---------|
| `UA` | Routine PIREP (`UUA` = urgent) |
| `/OV` | Location (ICAO ID, or lat/lon, or relative to navaid) |
| `/TM` | Time (UTC) |
| `/FL` | Flight level / altitude (FL085 = 8,500 feet) |
| `/TP` | Aircraft type |
| `/SK` | Sky / cloud layers (base and top) |
| `/WX` | Weather |
| `/TA` | Air temperature (°C) |
| `/WV` | Wind (direction/speed) |
| `/TB` | Turbulence (intensity and type) |
| `/IC` | Icing (intensity and type) |
| `/RM` | Remarks |

**Turbulence intensity scale:**
- `LGT` (Light) — Slight, irregular variation in altitude or attitude; occupants may feel strain; beverages may spill
- `MOD` (Moderate) — Changes in altitude or attitude occur but aircraft remains in control; occupants feel definite strains; unsecured objects may move
- `SEV` (Severe) — Abrupt changes in altitude or attitude; large deviations; control difficult; unsecured objects thrown about; occupants may be injured
- `EXTRM` (Extreme) — Aircraft momentarily out of control; structural damage possible

**Icing intensity scale:**
- `TRACE` — Slight accumulation; not hazardous; deicing equipment not needed
- `LGT` (Light) — Accumulation; deicing cycling needed periodically
- `MOD` (Moderate) — Short encounter hazardous; deicing may not keep pace
- `SEV` (Severe) — Deicing system overwhelmed; immediately exit conditions

---

**SIGMETs**

A SIGMET (Significant Meteorological Information) is an advisory issued by **Environment and Climate Change Canada (ECCC)** warning of significant en route weather hazardous to **all** aircraft. SIGMETs must be obtained as part of any cross-country weather briefing.

**SIGMET triggers (any of the following):**
- Severe or extreme turbulence (not associated with thunderstorms)
- Severe icing (not associated with thunderstorms)
- Widespread dust or sandstorm lowering visibility below 3 SM
- Volcanic ash
- Tropical cyclone

**Convective SIGMETs** (in some countries called WST) are issued specifically for severe thunderstorm activity. In Canada, a SIGMET may cover convective hazards including embedded cumulonimbus.

**SIGMET format example:**

```
SIGMET 5 VALID 211600/212200 CYQX-
CZQX GANDER FIR
SEV ICG BTN 060 AND 180 FCST TO DVLP BY 1700Z OBS MOV NE 25KT RM NIL
```

Decoding: SIGMET number 5, valid from 1600 UTC to 2200 UTC on the 21st, issued by CYQX (Gander), covers the Gander FIR. Severe icing between 6,000 and 18,000 feet ASL, expected to develop by 1700Z, moving northeast at 25 knots.

---

**AIRMETs**

In Canada, an **AIRMET** (Airmen's Meteorological Information) is issued for conditions that may be hazardous to light aircraft but fall below SIGMET criteria:

- **Moderate turbulence** (not in or near thunderstorms)
- **Moderate icing** (not in or near thunderstorms)
- **Widespread mountain obscurement** (significant for VFR pilots)
- **Widespread IMC** conditions (IFR areas below 1,000 feet/3 SM)
- **Low-level wind shear** (LLWS) at or below 2,000 feet AGL

AIRMETs are particularly relevant to light aircraft general aviation pilots, as the conditions described may not affect heavy airliners but can be limiting for a Cessna 172.

---

**PIREP Filing — Pilot Responsibility**

While filing PIREPs is voluntary in most cases, it is strongly expected in the aviation community when significant weather is encountered. The next pilot behind you depends on your PIREP. Filing takes less than 2 minutes on the ground.

File a PIREP when you encounter:
- Any icing above trace
- Moderate or greater turbulence
- Cumulonimbus clouds, embedded or visible
- Cloud tops or bases significantly different from the forecast
- Visibility below 3 SM en route
- Mountain wave activity

When ATC requests a PIREP — and they do, regularly — provide it accurately using the standard codes where possible.

---

## Key Points

- **PIREP** = real-time pilot weather report — most current en route weather data available
- PIREP turbulence scale: LGT → MOD → SEV → EXTRM
- PIREP icing scale: TRACE → LGT → MOD → SEV
- **SIGMET** = hazardous to all aircraft: severe icing, severe turbulence, volcanic ash, widespread dust
- **AIRMET** = hazardous to light aircraft: moderate icing/turbulence, mountain obscurement, widespread IMC, LLWS
- SIGMETs issued by **ECCC**; broadcast by ATC
- File PIREPs in flight to ATC/FIC or online after landing — the next pilot depends on your report

---

*End of Lesson MET-013.*
