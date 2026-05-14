---
id: HEL-002
topic: helicopter
order: 2
slug: meteorology-helicopter
title: "Meteorology for Helicopter Operations"
duration_min: 20
status: draft
audio: null
visual: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual) – Meteorology and Performance chapters"
  - "TC AIM MET section"
  - "CARs 602.114–602.116 (VFR Weather Minimums)"
  - "NAV CANADA – METAR, TAF, GFA product descriptions"
questions:
  - id: q1
    prompt: "Density altitude is best defined as:"
    choices:
      A: "The altitude shown on the altimeter when set to 29.92 inHg"
      B: "Pressure altitude corrected for non-standard temperature"
      C: "The height above sea level as measured by GPS"
      D: "The altitude at which the helicopter achieves its maximum hover ceiling"
    answer: B
    explanation: "Density altitude is pressure altitude corrected for non-standard temperature. High temperature, high humidity, and high elevation all increase density altitude, reducing the air density available to the engine and rotor system. Source: TP 12880E (Performance chapter)."
  - id: q2
    prompt: "A helicopter is hovering in ground effect (IGE) at a high-altitude airport on a hot day. The pilot attempts to transition to out-of-ground-effect (OGE) hover. What is the primary risk?"
    choices:
      A: "Retreating blade stall caused by high humidity"
      B: "The helicopter may not have sufficient power to maintain OGE hover due to high density altitude"
      C: "The tail rotor loses effectiveness due to reduced air density"
      D: "Carburetor ice in the moist air causes engine failure"
    answer: B
    explanation: "At high density altitudes, rotor efficiency decreases. A helicopter that can hover IGE (aided by the ground cushion) may lack the power margin needed for OGE hover. The POH hover ceiling charts must be consulted before flight. Source: TP 12880E."
  - id: q3
    prompt: "Surface winds are especially critical to helicopter pilots because:"
    choices:
      A: "Helicopters require a minimum headwind for all takeoffs"
      B: "Helicopters cannot operate in crosswinds exceeding 10 knots"
      C: "Wind provides translational lift, significantly reducing power demand during takeoff and landing"
      D: "Wind changes the direction of gyroscopic precession in the rotor system"
    answer: C
    explanation: "As a helicopter accelerates to approximately 15–24 knots, it gains translational lift — the rotor moves through undisturbed air and generates substantially more lift for the same power. A headwind provides translational lift at a lower ground speed, reducing power demand. Calm winds require the helicopter to produce all lift from rotor thrust alone."
  - id: q4
    prompt: "A METAR reports BKN090. What does this indicate?"
    choices:
      A: "Broken cloud layer at 900 feet AGL"
      B: "Broken cloud layer at 9,000 feet AGL"
      C: "Broken cloud layer at 9,000 feet ASL"
      D: "Overcast ceiling at 9,000 feet AGL"
    answer: B
    explanation: "Cloud heights in METARs are reported in hundreds of feet AGL. BKN090 = broken cloud at 9,000 feet AGL. A BKN layer is 5–7 oktas coverage. If it is the lowest BKN or OVC layer, it defines the ceiling. Source: NAV CANADA METAR documentation."
  - id: q5
    prompt: "Which weather product provides a 24-hour forecast for a specific aerodrome, including wind, visibility, and cloud?"
    choices:
      A: "METAR"
      B: "GFA (Graphical Forecast for Aviation)"
      C: "SIGMET"
      D: "TAF (Terminal Aerodrome Forecast)"
    answer: D
    explanation: "A TAF provides a forecast for conditions at a specific aerodrome, valid for 24 hours (sometimes 30 hours). A METAR is an observation, not a forecast. A GFA covers a large geographic region, not a single aerodrome. Source: NAV CANADA weather products."
---

# Lesson HEL-002: Meteorology for Helicopter Operations

**Section:** Helicopter — Foundational  
**Lesson number:** 002  
**Estimated time:** 20 minutes  
**Sources:** TP 12880E; TC AIM MET; NAV CANADA weather products

---

## Narration Script

Welcome to the meteorology lesson. Weather is critical for all aviation, but helicopters have vulnerabilities that make certain weather phenomena especially dangerous. This lesson covers the standard weather products required for the PPL-H written exam — METAR, TAF, and GFA — and then focuses on the weather hazards disproportionately dangerous for low-level, low-speed rotary-wing operations.

---

### Standard Weather Products

**METAR — Aviation Routine Weather Report**

A METAR is a weather observation at a reporting station (usually an aerodrome) — a snapshot of actual conditions, not a forecast. METARs are issued at 20 and 50 minutes past the hour (routine), or when conditions change significantly (SPECI — Special METAR).

A METAR reads left to right in a fixed format:

`CYYZ 151900Z 28008KT 15SM FEW030 BKN090 OVC250 18/11 A2992`

| Element | Meaning |
|---------|---------|
| `CYYZ` | ICAO station identifier (Toronto Pearson) |
| `151900Z` | Day 15, time 1900 Zulu (UTC) |
| `28008KT` | Wind from 280° at 8 knots |
| `15SM` | Visibility 15 statute miles |
| `FEW030` | Few clouds at 3,000 feet AGL |
| `BKN090` | Broken cloud at 9,000 feet AGL — this is the ceiling |
| `OVC250` | Overcast at 25,000 feet AGL |
| `18/11` | Temperature 18°C, dew point 11°C |
| `A2992` | Altimeter setting 29.92 inHg |

Cloud amounts: SKC (sky clear), FEW (1–2 oktas), SCT (3–4 oktas), BKN (5–7 oktas), OVC (8 oktas). The **ceiling** is the lowest layer reported as BKN or OVC.

**Source:** NAV CANADA METAR documentation; TP 12880E.

---

**TAF — Terminal Aerodrome Forecast**

A TAF forecasts conditions at a specific aerodrome, valid for 24 hours (sometimes 30 hours). It uses the same format elements as METARs. Change indicators signal expected shifts:

- `BECMG` — becoming (gradual change)
- `TEMPO` — temporary (lasting less than one hour at a time)
- `FM` — from a specific time
- `PROB30` / `PROB40` — probability

Before any cross-country flight, check the TAF for the destination and alternates.

**Source:** NAV CANADA weather products guide.

---

**GFA — Graphical Forecast for Aviation**

The GFA replaced the FA (Area Forecast) in Canada. It provides a regional depiction of forecast cloud, icing, turbulence, and freezing levels on a map. GFAs are issued every 6 hours and cover 6-hour valid periods.

For helicopter pilots operating over large areas at low altitude — pipeline patrol, powerline inspection, survey — the GFA provides regional weather context that point forecasts cannot provide.

**Source:** NAV CANADA GFA documentation.

---

**SIGMETs and AIRMETs**

A SIGMET (Significant Meteorological Information) is an advisory of significant weather affecting a large area: severe icing, severe turbulence, volcanic ash, tropical cyclones.

An AIRMET covers less severe but still significant conditions affecting light aircraft: moderate icing, moderate turbulence, widespread reduced visibility.

---

### Density Altitude — Critical for Helicopters

Density altitude is the most important performance concept for helicopter pilots operating outside of sea-level standard-day conditions.

**Definition:** Density altitude is pressure altitude corrected for non-standard temperature. It represents the altitude at which the air has the same density as the current conditions — and it is the effective altitude at which the helicopter performs.

**ICAO Standard Atmosphere:** 15°C at sea level, decreasing approximately 2°C per 1,000 feet. Pressure: 29.92 inHg at sea level.

**What raises density altitude:**
- **High temperature** — warm air is less dense
- **High elevation / low pressure** — less air pressure
- **High humidity** — water vapour is less dense than dry air

**Performance impact on helicopters:**

Rotor blades are airfoils — lift is proportional to air density. In high density altitude conditions:

1. **Main rotor produces less lift** for the same RPM and collective pitch. The pilot increases collective to compensate, demanding more engine power.
2. **Engine produces less power** — piston engines and turbines both lose power as air density decreases.
3. **Tail rotor produces less anti-torque thrust** — directional control degrades, especially at high power settings.

**IGE vs. OGE hover:**

A helicopter hovering close to the ground benefits from the ground cushion — air compressed between the rotor disk and the ground surface that partially supports the helicopter. This is hover in ground effect (IGE). When the helicopter rises above approximately one rotor diameter height, the ground cushion disappears and power demand increases — this is hover out of ground effect (OGE).

At high density altitudes, a helicopter may hover IGE but lack the power margin to hover OGE. The helicopter lifts off easily, then loses the ground cushion and may be unable to maintain altitude or clear obstacles.

**The POH performance chart:** The Pilot Operating Handbook (POH) for every helicopter includes hover ceiling charts for IGE and OGE. These charts plot maximum gross weight against pressure altitude and temperature. Before any flight at elevation, in hot weather, or with heavy loads, the pilot must verify OGE hover capability against actual conditions using these charts.

**Source:** TP 12880E (Aircraft Performance chapter).

---

### Surface Winds and Low-Level Hazards

**Translational Lift**

As a helicopter accelerates from a hover into forward flight, the rotor moves through undisturbed air and lift efficiency improves dramatically. Translational lift becomes effective at approximately 15–24 knots (varies by helicopter type). Once established, the helicopter can maintain flight with significantly less power than in a hover.

- **Headwind** — translational lift arrives at lower ground speed; takeoff power demand is reduced.
- **Tailwind** — the helicopter must accelerate further; power demand is higher.
- **Calm** — all lift comes from rotor thrust alone; highest power demand condition.

**Source:** TP 12880E.

**Rotor Downwash and Visibility Hazards**

Rotor downwash creates a column of fast-moving air directed at the ground, generating hazards unique to helicopters:

- **Brownout** — in dusty or sandy conditions, downwash lifts particles that rapidly obscure ground visual references during landing. Spatial disorientation follows quickly. Brownout is a leading cause of helicopter accidents.
- **Whiteout** — same mechanism in snow. Recirculating snow eliminates the horizon and the ground surface.
- **Water spray** — downwash over water creates spray that can obscure vision and affect instruments.

**Source:** Transport Canada helicopter safety publications; TP 12880E.

---

### Fog and Low Visibility

Fog types relevant to VFR pilots:

- **Radiation fog** — forms on clear, calm nights as the ground radiates heat; typically burns off by mid-morning; worst in valleys and low-lying terrain.
- **Advection fog** — warm moist air moves over a cold surface; can persist all day; common in coastal regions and near the Great Lakes.
- **Upslope fog** — moist air forced up terrain cools and condenses; common in foothills and mountain approaches.

If destination fog has not lifted by intended arrival time, have a fuel margin and alternate plan before departing.

---

### Icing

Rotor icing is especially hazardous:

- Ice on rotor blades changes the blade profile and reduces lift.
- Ice buildup is uneven, causing vibration.
- When ice sheds from rotor blades, it sheds asymmetrically — causing severe vibration that can damage the airframe.

Conditions for potential icing: **visible moisture** (cloud, freezing precipitation) combined with **OAT at or slightly below 0°C**.

Most small training helicopters are not certified for flight into known icing (FIKI). Know your aircraft's limitations.

**Source:** TP 12880E (Icing chapter).

---

### Key Weather Numbers

| Item | Value | Source |
|------|-------|--------|
| ISA sea-level temperature | 15°C | ICAO standard |
| ISA lapse rate | ~2°C per 1,000 ft | ICAO standard |
| Translational lift onset (approx.) | 15–24 knots | TP 12880E |
| Potential icing: OAT in visible moisture | −10°C to +2°C | TP 12880E |
| GFA valid period | 6-hour intervals | NAV CANADA |

---

*End of Lesson HEL-002.*
