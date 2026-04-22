---
id: MET-005
topic: meteorology
order: 5
slug: metar-decoding
title: "METAR Decoding"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E Chapter 8
  - AIM MET 2.1
questions:
  - id: q1
    prompt: "In a METAR, the sky condition group 'BKN015CB' means:"
    choices:
      A: "Broken clouds at 1,500 feet with cumulonimbus present"
      B: "Broken clouds at 15,000 feet, clear below"
      C: "Below cloud is obscured at 150 feet"
      D: "Scattered cumulonimbus at 1,500 feet"
    answer: A
    explanation: "In a METAR sky condition group, the cloud amount prefix (FEW/SCT/BKN/OVC) is followed by a three-digit height in hundreds of feet AGL. BKN015 = broken cloud layer at 1,500 feet AGL. The suffix CB means cumulonimbus is present in that layer. BKN = 5–7 eighths coverage = ceiling. Source: AIM MET 2.1."
  - id: q2
    prompt: "A METAR reports visibility as '1SM'. This means:"
    choices:
      A: "Visibility is 1 nautical mile"
      B: "Visibility is 1 statute mile"
      C: "Visibility is 1,000 metres"
      D: "Visibility is 1 kilometre"
    answer: B
    explanation: "In Canadian METARs (following North American standard), visibility is reported in statute miles (SM). '1SM' = 1 statute mile. In ICAO format used in many other countries, visibility is in metres. Canadian PPL candidates must know that METAR visibility in Canada is in statute miles. Source: AIM MET 2.1."
  - id: q3
    prompt: "The METAR remark 'RVR28 1200FT' refers to:"
    choices:
      A: "Runway 28 has a landing distance available of 1,200 feet"
      B: "Runway Visual Range on runway 28 is 1,200 feet"
      C: "Visibility reported 2,800 feet above the runway at 1,200 feet altitude"
      D: "Wind on runway 28 is gusting to 1,200 feet per minute"
    answer: B
    explanation: "RVR = Runway Visual Range — an instrument measurement of visibility along the runway axis, critical for low-visibility operations. RVR28 1200FT means the runway visual range on Runway 28 is 1,200 feet. RVR is used when prevailing visibility is less than 1 SM and is assessed by transmissometers. Source: AIM MET 2.1."
  - id: q4
    prompt: "In a METAR, temperature and dewpoint are reported as '15/12'. The relative humidity can be determined as approximately:"
    choices:
      A: "12%"
      B: "80%"
      C: "15%"
      D: "25%"
    answer: B
    explanation: "Temperature is 15°C and dewpoint is 12°C, giving a spread of 3°C. A small spread indicates the air is near saturation. Relative humidity with a 3°C spread is approximately 80%. The dewpoint represents the temperature at 100% RH; each degree of spread reduces RH by roughly 5%. Source: TP 12880E Chapter 8, AIM MET 2.1."
  - id: q5
    prompt: "A METAR includes the group 'TSRA' in the weather field. This indicates:"
    choices:
      A: "Trace amounts of rain expected in the area"
      B: "Thunderstorm with rain at the station"
      C: "Temporary showers reported by air traffic control"
      D: "Turbulence and shear advisory with rain"
    answer: B
    explanation: "In METAR weather coding, TS = thunderstorm, RA = rain. TSRA = thunderstorm with rain. The thunderstorm descriptor (TS) always precedes the precipitation type. Intensity modifiers: -TSRA = light thunderstorm with rain; +TSRA = heavy thunderstorm with rain. Source: AIM MET 2.1."
---

# Lesson MET-010: METAR — Aviation Routine Weather Report

**Section:** Meteorology  
**Lesson number:** 010  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 8, AIM MET 2.1

---

## Narration Script

The METAR is the standardized weather observation report used at airports worldwide. Every preflight weather briefing in Canadian aviation includes METARs for the departure airport, destination, and alternates. Being able to decode a METAR quickly and accurately is not just an exam skill — it is a direct flight safety skill.

---

**METAR Structure**

A METAR is a coded alphanumeric string. Let's decode a complete example:

```
METAR CYYZ 211400Z 24018G28KT 200V280 4SM -TSRA BKN012 OVC030CB 16/14 A2992 RMK CB8 BINOVC SLP136
```

We'll work through this field by field.

---

**Field 1: Report Type**

`METAR` — Routine observation, issued hourly (or on the hour at reporting stations).
`SPECI` — Special observation, issued when conditions change significantly between hourly reports (e.g., sudden drop in visibility, wind shift, thunderstorm onset).

---

**Field 2: Station Identifier**

`CYYZ` — The ICAO four-letter identifier for the airport. Canadian stations start with `CY`. CYYZ = Toronto Pearson. Other examples: CYVR (Vancouver), CYUL (Montréal-Trudeau), CYYC (Calgary).

---

**Field 3: Date/Time**

`211400Z` — Day 21, time 1400 UTC (Zulu). All aviation weather times are in UTC. Remember: UTC = local time + time zone offset. Eastern Standard Time is UTC–5; Eastern Daylight Time is UTC–4. Convert correctly when planning flights across time zones or when interpreting weather charts.

---

**Field 4: Wind**

`24018G28KT` — Wind from 240° magnetic at 18 knots, gusting to 28 knots.
- Direction: in hundreds of degrees magnetic, three digits (so 240 = from the southwest)
- Speed: in knots (KT). Canada reports in knots.
- Gusts: G followed by the gust speed in knots
- `VRB` prefix means variable direction (used when speed ≤ 6 knots or direction varies > 60°)
- `200V280` following the wind group means the direction is varying between 200° and 280°

---

**Field 5: Prevailing Visibility**

`4SM` — Visibility is 4 statute miles. In Canada, visibility in METARs is in statute miles. Key values to know:
- `P6SM` = greater than 6 statute miles
- `6SM` = exactly 6 statute miles
- `M1/4SM` = less than ¼ statute mile (minimum reportable)
- When visibility is < 1 SM, **Runway Visual Range (RVR)** may also be reported

---

**Field 6: Present Weather**

`-TSRA` — Light thunderstorm with rain.

Weather codes are constructed from:
| Prefix (Intensity) | Descriptor | Phenomenon |
|---|---|---|
| `-` = light | `TS` = thunderstorm | `RA` = rain |
| (none) = moderate | `SH` = showers | `SN` = snow |
| `+` = heavy | `FZ` = freezing | `FG` = fog |
| `VC` = vicinity | `BL` = blowing | `BR` = mist |
| | `DR` = drifting | `HZ` = haze |
| | `MI` = shallow | `GR` = hail |
| | `BC` = patches | `PL` = ice pellets |
| | `PR` = partial | `DZ` = drizzle |

Examples: `FZRA` = freezing rain; `+RASN` = heavy rain and snow; `VCSH` = showers in the vicinity.

---

**Field 7: Sky Condition**

`BKN012 OVC030CB`

Format: coverage + height (in hundreds of feet AGL) + cloud type (if applicable)

Cloud coverage codes:
- `FEW` — 1–2 eighths (oktas) — not a ceiling
- `SCT` (Scattered) — 3–4 eighths — not a ceiling
- `BKN` (Broken) — 5–7 eighths — **ceiling**
- `OVC` (Overcast) — 8 eighths — **ceiling**

Height: three digits × 100 = feet AGL. `012` = 1,200 feet AGL.

Cloud type suffixes: `CB` = cumulonimbus; `TCU` = towering cumulus.

So `BKN012 OVC030CB` = broken cloud at 1,200 feet, overcast at 3,000 feet with cumulonimbus.

**Ceiling:** The lowest BKN or OVC layer is the ceiling. In this example, ceiling is 1,200 feet.

When the sky is obscured (e.g., by heavy fog or snow), the sky condition is reported as `VV` (vertical visibility) followed by the depth: `VV004` = sky obscured, vertical visibility 400 feet.

---

**Field 8: Temperature / Dewpoint**

`16/14` — Temperature 16°C / Dewpoint 14°C. Spread is 2°C — very near saturation. Negative temperatures are prefixed with `M`: `M05/M08` = –5°C / –8°C.

---

**Field 9: Altimeter Setting**

`A2992` — Altimeter setting 29.92 inHg (the altimeter format used in Canada and the US). Some ICAO METARs use `Q` prefix with hPa: `Q1013`. Set this value in your altimeter Kollsman window before takeoff and update as instructed by ATC.

---

**Field 10: Remarks (RMK)**

`RMK CB8 BINOVC SLP136`

- `CB8` — cumulonimbus covering 8 eighths (full overcast of CB)
- `BINOVC` — sky partially obscured (binoculars needed to see through overcast — indicates varying conditions)
- `SLP136` — sea level pressure 1013.6 hPa

Remarks contain additional information beyond the coded fields, including: precipitation type at the station, sea-level pressure, significant weather in the vicinity, and plain language additions.

---

**SPECI**

A SPECI is a special METAR issued between routine observations when:
- Visibility falls to or below a threshold (e.g., 3 SM)
- Ceiling descends to or below a threshold (e.g., 3,000 feet)
- Wind shifts significantly
- Thunderstorm begins or ends
- Temperature/dewpoint changes significantly

When planning a flight in marginal conditions, check for recent SPECIs — they indicate rapidly changing weather.

---

## Key Points

- METAR = hourly surface weather observation; SPECI = special ob when conditions change significantly
- Time is always **UTC (Zulu)**
- Visibility in Canadian METARs = **statute miles** (SM)
- Wind direction = **magnetic**; speed = **knots**
- Cloud ceiling = lowest **BKN or OVC** layer
- Temperature / Dewpoint spread ≤ 2°C = very high fog/low cloud risk
- Altimeter setting in Canada: `A` prefix (inHg) — set before flight and update as instructed

---

*End of Lesson MET-010.*
