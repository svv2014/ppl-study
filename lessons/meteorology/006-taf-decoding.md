---
id: MET-006
topic: meteorology
order: 6
slug: taf-decoding
title: "TAF Decoding"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/meteorology/006-taf-decoding.m4a
visual: /visuals/met006-taf-decoding.html
sources:
  - TP 12880E Chapter 8
  - AIM MET 2.2
questions:
  - id: q1
    prompt: "A TAF is issued for how long a period of validity, at most reporting stations in Canada?"
    choices:
      A: "6 hours"
      B: "12 hours"
      C: "24 hours"
      D: "30 hours"
    answer: C
    explanation: "Standard TAFs in Canada are valid for 24 hours and are issued four times daily (00Z, 06Z, 12Z, 18Z). Some major hub airports may issue 30-hour TAFs. The TAF is the primary weather forecast product for departure and destination aerodromes during flight planning. Source: AIM MET 2.2."
  - id: q2
    prompt: "In a TAF, the change group 'TEMPO 1416 3SM -SHRA OVC015' means:"
    choices:
      A: "Temporarily from 1400 to 1600 UTC, conditions will be: visibility 3 SM, light rain showers, broken cloud at 1,500 feet"
      B: "Temporary conditions from 1400 to 1600 local time: 3 SM visibility, light rain showers, overcast at 1,500 feet, expected to last less than an hour at a time"
      C: "Temperature will be –14°C to –16°C with 3 SM visibility"
      D: "From time 1400, temporarily expect visibility 3 SM with overcast at 1,500 feet persisting until 1600"
    answer: B
    explanation: "TEMPO indicates temporary fluctuations expected to last less than one hour at a time and collectively less than half the time period. 1416 = from 1400 to 1600 UTC. 3SM = 3 statute miles visibility. -SHRA = light rain showers. OVC015 = overcast at 1,500 feet AGL. The TEMPO conditions replace the prevailing forecast during the valid period. Source: AIM MET 2.2."
  - id: q3
    prompt: "The change group 'BECMG 1820 VRB05KT 9999 SKC' in a TAF indicates:"
    choices:
      A: "Becoming: between 1800 and 2000 UTC, conditions are expected to gradually improve to variable winds 5 knots, visibility greater than 9,999 metres, sky clear"
      B: "By 1820 UTC, conditions will rapidly change to 5-knot winds"
      C: "Beginning at 1820 UTC, expect variable weather with clear skies through 9,999 feet"
      D: "Becoming conditions: 18 to 20 local time with turbulence below 5,000 feet"
    answer: A
    explanation: "BECMG (becoming) indicates a gradual, permanent change in conditions expected to occur during the specified time window. 1820 = change expected between 1800 and 2000 UTC. The new conditions persist for the rest of the TAF after the change is complete. 9999 = visibility 9,999 metres or more (maximum). SKC = sky clear. Source: AIM MET 2.2."
  - id: q4
    prompt: "Which TAF change group indicates conditions that are expected to last more than one hour but during which the prevailing conditions also still apply intermittently?"
    choices:
      A: "BECMG"
      B: "FM (from)"
      C: "TEMPO"
      D: "PROB30"
    answer: C
    explanation: "TEMPO (temporary) conditions last less than one hour at a time and occur less than half the time. The prevailing conditions still apply for more than half the period. BECMG = gradual permanent change. FM = abrupt, complete change from the specified time. PROB30 = 30% probability of the stated conditions. Source: AIM MET 2.2."
  - id: q5
    prompt: "In a TAF, the group 'PROB30 TSRA' indicates:"
    choices:
      A: "Thunderstorms with rain expected with 30% probability; conditions not included in TEMPO or BECMG"
      B: "Thunderstorms are probable between 3:00 and the end of the TAF"
      C: "30-minute warning for thunderstorm onset"
      D: "Severe thunderstorm with probability 30 minutes after the preceding change group"
    answer: A
    explanation: "PROB30 indicates a 30% probability of the stated conditions occurring. It is used for conditions that are not expected (< 50% likely) but possible. PROB30 is not used for conditions > 50% likely (those would be in BECMG or TEMPO). In Canada, PROB40 (40% probability) is also used. Source: AIM MET 2.2."
---

# Lesson MET-011: TAF — Terminal Aerodrome Forecast

**Section:** Meteorology  
**Lesson number:** 011  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 8, AIM MET 2.2

---

## Narration Script

The TAF — Terminal Aerodrome Forecast — is the authoritative weather forecast for a specific airport. Where the METAR tells you what the weather IS right now, the TAF tells you what the weather is EXPECTED to be over the next 24 hours. Every cross-country flight plan in Canada should include a TAF review for the departure airport, destination, and alternates.

---

**What Is a TAF**

A TAF is a coded forecast for conditions at a specific aerodrome, valid for a specific period. In Canada:
- Standard TAFs are valid for **24 hours**
- Issued **four times daily** at 0000Z, 0600Z, 1200Z, and 1800Z
- Issued approximately 30 minutes before the valid period begins
- Covers a radius of roughly 8 km (5 SM) from the aerodrome
- Only issued for airports with a full-time meteorological observation program

Not every airport has a TAF. Smaller airports may have only a METAR, or no weather reporting at all. When planning to an airport without a TAF, check area forecasts and adjacent airports.

---

**TAF Structure**

Let's decode a complete example:

```
TAF
CYEG 211130Z 2112/2212 28015KT P6SM SKC
     BECMG 2116/2118 27025G35KT 6SM -TSRA OVC020CB
     TEMPO 2118/2124 3SM +TSRA OVC010CB
     FM220000 25012KT P6SM BKN030
```

---

**Header Fields**

`TAF` — Identifies the message type.

`CYEG` — Station identifier (ICAO). CYEG = Edmonton International.

`211130Z` — Issue time: day 21, 1130 UTC.

`2112/2212` — Valid period: day 21, 1200 UTC to day 22, 1200 UTC (24 hours).

---

**Base (Prevailing) Conditions**

`28015KT P6SM SKC`

This is the forecast for the beginning of the valid period. Format is identical to METAR fields:
- `28015KT` — Wind 280° at 15 knots
- `P6SM` — Visibility greater than 6 statute miles
- `SKC` — Sky clear (no significant cloud)

The base conditions represent the expected prevailing conditions at the start of the TAF valid period.

---

**Change Groups**

**BECMG (Becoming)**

`BECMG 2116/2118 27025G35KT 6SM -TSRA OVC020CB`

BECMG indicates a **gradual, permanent** change in conditions expected to occur between the two time groups (2116 = day 21, 1600 UTC; 2118 = day 21, 1800 UTC). The change is completed by the end of the window. After the BECMG group, the new conditions persist for the rest of the TAF unless overridden by another change group.

This BECMG means: between 1600 and 1800 UTC, conditions will gradually change to:
- Wind 270° at 25 knots gusting 35 knots
- Visibility 6 SM
- Light thunderstorm with rain (`-TSRA`)
- Overcast at 2,000 feet with cumulonimbus (`OVC020CB`)

**TEMPO (Temporary)**

`TEMPO 2118/2124 3SM +TSRA OVC010CB`

TEMPO indicates **temporary fluctuations** expected during the specified period. Temporary means:
- Each occurrence lasts **less than 1 hour**
- The conditions occur **less than half the time** during the period

Between 1800 and 2400 UTC, expect temporary periods with:
- 3 SM visibility
- Heavy thunderstorm with rain (`+TSRA`)
- Overcast at 1,000 feet with cumulonimbus (`OVC010CB`)

During TEMPO periods, the prevailing conditions (the BECMG conditions after 1800 UTC) still apply more than half the time. TEMPO conditions DO NOT replace the base — they oscillate with it.

**FM (From)**

`FM220000 25012KT P6SM BKN030`

FM indicates an **abrupt, complete change** in conditions starting at the specified time. Format: `FM` + DDHHMM (day-hour-minute).

`FM220000` = From day 22, 0000 UTC. At this time, ALL previous conditions are replaced by:
- Wind 250° at 12 knots
- Visibility greater than 6 SM
- Broken clouds at 3,000 feet

FM is the strongest change indicator — everything before the FM is discarded after that time.

**PROB (Probability)**

`PROB30` or `PROB40` — Used for conditions that are possible but not expected. PROB30 = 30% probability; PROB40 = 40% probability. Only PROB30 and PROB40 are used. If conditions are expected more than 50% of the time, TEMPO or BECMG is used instead.

Example: `PROB40 2200/2204 1SM FZRA` — 40% probability between 2200 and 2204 UTC of 1 SM visibility with freezing rain.

---

**Using the TAF for Flight Planning**

1. **Check the valid time:** Is the TAF still valid for your planned arrival time? If not, wait for the next issuance.

2. **Read the base conditions:** What are the conditions expected when the TAF begins?

3. **Scan for change groups:** Are BECMG or FM groups changing conditions significantly during your flight window? Will conditions improve or deteriorate?

4. **Identify TEMPO or PROB groups:** Are there temporary periods of IMC (instrument meteorological conditions) forecast? Even if TEMPO, if the periods involve conditions below your personal minimums, reconsider.

5. **Check CB mentions:** Any `CB` in the sky condition means cumulonimbus activity is forecast. Plan accordingly.

6. **Margin check:** For VFR flight, you need ceilings and visibility to remain above your minimums throughout the flight. If the TAF shows conditions approaching VFR minimums, plan an early departure or have a solid alternate.

---

**TAF Amendments**

A TAF can be amended (`TAF AMD`) when conditions change significantly from the forecast. Always check for amendments before departure, particularly in rapidly changing weather situations.

---

## Key Points

- TAF = terminal aerodrome forecast; valid **24 hours**, issued **4× daily** (0000, 0600, 1200, 1800 UTC)
- **BECMG** = gradual permanent change; conditions persist after the window
- **TEMPO** = temporary fluctuations; last < 1 hour, occur < half the time; prevailing conditions still dominate
- **FM** = abrupt complete change; all previous conditions replaced from that time
- **PROB30/40** = 30%/40% probability of stated conditions
- Visibility in TAFs: statute miles (SM); `P6SM` = greater than 6 SM
- Scan for **CB** and icing conditions; check valid period covers your estimated arrival

---

*End of Lesson MET-011.*
