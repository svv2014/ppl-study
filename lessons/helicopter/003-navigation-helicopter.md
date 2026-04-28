---
id: HEL-003
topic: helicopter
order: 3
slug: navigation-helicopter
title: "Navigation for Helicopter Operations"
duration_min: 20
status: draft
audio: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual) – Navigation chapters"
  - "TC AIM MAP section"
  - "CARs 602.114–602.116 (VFR Weather Minimums)"
  - "CARs 602.35 (Cruising Altitudes and Levels)"
  - "Transport Canada – VNC (VFR Navigation Chart) and VTA documentation"
questions:
  - id: q1
    prompt: "A helicopter is flying a true course of 090° with a wind from 360° at 20 knots and an airspeed of 100 knots. The wind correction angle (WCA) is approximately:"
    choices:
      A: "11° left"
      B: "11° right"
      C: "20° left"
      D: "No correction needed — the wind is perpendicular and has no effect"
    answer: A
    explanation: "Wind from 360° on a course of 090° is a 90° crosswind from the left (north wind pushing the aircraft southward). To correct, the pilot must point the nose into the wind (left), producing a left WCA. Using the 1-in-60 approximation: WCA ≈ 20/100 × 60 ≈ 12°, close to 11°. The exact answer is about 11.5°."
  - id: q2
    prompt: "On a VFR Navigation Chart (VNC), the scale is:"
    choices:
      A: "1:50,000"
      B: "1:250,000"
      C: "1:500,000"
      D: "1:1,000,000"
    answer: C
    explanation: "The VFR Navigation Chart (VNC) used for cross-country navigation in Canada has a scale of 1:500,000 (1 cm = 5 km). The VTA (Visual Terminal Area) chart has a scale of 1:250,000 for terminal area navigation. Source: TC AIM MAP 2.0."
  - id: q3
    prompt: "A helicopter pilot departing a remote off-aerodrome site must assess the landing site. Which of the following is NOT a primary factor in an off-aerodrome site assessment?"
    choices:
      A: "Slope of the ground relative to the rotor disk"
      B: "Availability of a published instrument approach"
      C: "Surface texture and suitability for brownout/whiteout"
      D: "Obstacles on approach and departure paths"
    answer: B
    explanation: "Off-aerodrome landing site assessment covers: slope (rotor disk clearance from terrain), surface condition, obstacle clearance on approach/departure, and wind direction. The availability of an instrument approach is irrelevant — off-aerodrome sites have no published approaches by definition."
  - id: q4
    prompt: "Dead reckoning navigation uses which of the following inputs to estimate position?"
    choices:
      A: "VOR radial and DME distance"
      B: "Known departure point, true airspeed, magnetic heading, and elapsed time"
      C: "GPS track and groundspeed only"
      D: "Nearest NDB bearing and estimated wind drift"
    answer: B
    explanation: "Dead reckoning (DR) uses a known starting point, true airspeed corrected for wind to get groundspeed, a magnetic heading corrected for variation and deviation, and elapsed time to estimate the current position. It is the foundational navigation technique that all other methods build on. Source: TP 12880E Navigation chapter."
  - id: q5
    prompt: "When planning a VFR cross-country flight in a helicopter, the minimum fuel reserve at destination should be:"
    choices:
      A: "20 minutes at normal cruise"
      B: "30 minutes at normal cruise"
      C: "45 minutes at normal cruise"
      D: "60 minutes at normal cruise"
    answer: B
    explanation: "CARs 602.88 requires a VFR flight to carry fuel for the flight to the destination plus 30 minutes of cruise flight (day VFR). Night VFF requires 45 minutes. This applies equally to helicopters."
---

# Lesson HEL-003: Navigation for Helicopter Operations

**Section:** Helicopter — Foundational  
**Lesson number:** 003  
**Estimated time:** 20 minutes  
**Sources:** TP 12880E (Navigation); TC AIM MAP; CARs 602

---

## Narration Script

Welcome to the navigation lesson. Navigation for helicopter pilots covers the same foundational concepts as fixed-wing navigation — charts, dead reckoning, wind correction, fuel planning — but applies them in a low-altitude, variable-route environment where flexibility and site assessment are essential. This lesson prepares you for both the PPL-H written exam and the practical realities of helicopter cross-country flight.

---

### Canadian VFR Charts

**VNC — VFR Navigation Chart (1:500,000)**

The VNC is the primary chart for cross-country VFR navigation. Scale of 1:500,000 means 1 centimetre on the chart equals 5 kilometres on the ground (or about 2.7 nautical miles). The VNC shows:

- Airspace boundaries (class, altitude limits)
- Terrain and prominent landmarks
- Aerodromes (with identifiers, elevation, and services)
- Obstructions (towers, antenna farms) above 200 feet AGL
- Navigational aids (VORs, NDBs)
- Routes and airways
- Restricted and danger areas (Class F)

Contour lines on the VNC are critical for terrain clearance planning, particularly in mountainous regions. Contour interval is typically 500 feet.

**VTA — Visual Terminal Area Chart (1:250,000)**

The VTA is used near busy terminal areas where detail at 1:500,000 scale is insufficient. It provides more detail about the airspace structure around major airports and their vicinity. Use the VTA when operating in or near terminal areas; switch to the VNC for en-route navigation.

**WAC — World Aeronautical Chart (1:1,000,000)**

The WAC provides small-scale coverage of large areas. It is less useful for low-level VFR navigation but can be used for long-distance planning.

**Source:** TC AIM MAP 2.0.

---

### Dead Reckoning — The Foundation

Dead reckoning (DR) is the calculation of your estimated position using:

1. **Known departure point** — a fix (aerodrome, VOR, prominent landmark)
2. **True course** — the direction to your destination on the chart
3. **True airspeed (TAS)** — the actual speed through the air (calibrated airspeed corrected for altitude and temperature)
4. **Wind** — direction and velocity, from the forecast or actual observation
5. **Wind correction angle (WCA)** — the offset applied to the true course to maintain the desired track over the ground
6. **Magnetic variation** — the local difference between magnetic north and true north
7. **Compass deviation** — the instrument error in your specific aircraft
8. **Elapsed time** — time since last fix

**The navigation triangle:**

The wind correction angle offsets your heading into the wind so that your ground track follows the intended course. The groundspeed is the result — the speed at which you actually travel over the ground. Groundspeed = TAS adjusted for headwind/tailwind component.

Groundspeed drives your time calculation: Time = Distance ÷ Groundspeed. Fuel required = Time × Fuel burn rate.

**Why DR matters for helicopter pilots:**

Helicopters frequently operate off published airways and in areas without GPS coverage (remote northern Canada, mountainous terrain). A pilot who cannot navigate by DR alone is dependent on a single point of failure. The PPL-H exam will test your ability to apply wind correction, calculate groundspeed, and estimate arrival time.

**Source:** TP 12880E, Navigation chapter.

---

### Magnetic Variation and Compass Deviation

**Magnetic Variation (Var):** The angle between magnetic north (where the compass points) and true north (geographic north pole). In Canada, magnetic variation is significant — it ranges from about 20° West in eastern Canada to 30° East in the western Arctic. Variation is printed on VNCs as isogonic lines (lines of equal variation).

To convert: True course ± Variation = Magnetic course  
Mnemonic: "Variation East, Magnetic least; Variation West, Magnetic best"  
(East variation: subtract to get magnetic. West variation: add to get magnetic.)

**Compass Deviation (Dev):** Every aircraft compass is slightly affected by the metal, wiring, and instruments around it. Deviation is listed on the aircraft's compass correction card. It is typically small (within a few degrees) but must be applied.

Magnetic heading ± Deviation = Compass heading

**Source:** TP 12880E, Navigation chapter.

---

### GPS Navigation

GPS is standard equipment in most modern helicopters and dramatically simplifies cross-country navigation. However:

- GPS must not replace understanding of DR — equipment can fail, satellite signal can be degraded (RAIM alerts), and database currency matters.
- For PPL-H, GPS is a supplement to, not a replacement for, fundamental navigation skills.
- Always verify GPS track against visual landmarks. A GPS that is showing the wrong destination, an old database, or a route to an incorrect waypoint will lead you astray quietly.

When using GPS:
- Set the correct datum (WGS-84 is standard)
- Confirm the destination waypoint identifier matches the intended destination
- Monitor groundspeed and crosscheck against fuel plan
- Know the nearest aerodromes along the route for emergency planning

**Source:** TP 12880E, Navigation chapter.

---

### Altitude Selection and Cruising Levels

For VFR flights in Canada at and above 3,000 feet AGL:
- **Magnetic track 0° to 179°:** Odd thousands + 500 feet (3,500 / 5,500 / 7,500 ft)
- **Magnetic track 180° to 359°:** Even thousands + 500 feet (4,500 / 6,500 / 8,500 ft)

**Source:** CARs 602.35.

Helicopters frequently cruise below 3,000 feet AGL where this rule does not apply. At low altitudes, the pilot selects a height appropriate for terrain clearance and obstacle avoidance. Common practice is to maintain at least 500 feet above the highest obstacle within 5 nautical miles of the route (following CARs 602.14 for over populated areas or controlled routes; CARs 602.15 for other airspace).

---

### Off-Aerodrome Landing Site Assessment

One of the most distinctive aspects of helicopter navigation is the ability — and frequent requirement — to operate from unprepared sites. A systematic approach to landing site assessment is essential for safety.

**The SOCA check (a common helicopter approach mnemonic):**

**S — Size:** Is the site large enough for the helicopter rotor diameter plus margins? The site must accommodate the rotor disk (main rotor diameter, typically 10–12 metres for a Robinson R44) plus a buffer. Obstacles at the edge of the rotor disk are a hazard.

**O — Obstacles:** What is on the approach path? The departure path? Trees, wires, poles, and fences are common hazards. Power lines are particularly dangerous because they are often invisible against cluttered backgrounds. Conduct an elevated reconnaissance before committing to a landing if wires are suspected.

**C — Configuration / Slope:** Helicopters can land on slopes, but the rotor disk limits the maximum safe slope. Most small training helicopters have a maximum slope tolerance of approximately 5°–8° depending on the type. On a slope, the rotor tip on the upslope side will be closest to the terrain. Always land and take off heading upslope wherever possible. Check the POH for slope limitations.

**A — Altitude / Air:** Density altitude at the site? Is there sufficient power margin for OGE hover if needed? What is the surface condition — dust, snow, loose material that could cause brownout or whiteout? What is the wind direction? Plan the approach into the wind when possible.

**Source:** Transport Canada helicopter training publications; TP 12880E (performance chapters for density altitude).

---

### Low-Level Flight Planning

Helicopter low-level flight planning differs from fixed-wing cross-country planning in several respects:

**Terrain clearance:** The CARs minimum altitude over populated areas is 1,000 feet AGL; over sparse areas it is 500 feet AGL (CARs 602.14 and 602.15). However, helicopters operating for legitimate purposes (pipeline patrol, agricultural, search and rescue, medivac) may legally operate below these altitudes. Know the regulatory basis for any low-level operation.

**Checkpoint frequency:** At low altitude, landmarks pass quickly and the horizon is compressed. Plan more frequent checkpoints — every 3–5 minutes of flight, not every 10–15 minutes as might be appropriate at altitude.

**Fuel planning:** Helicopters have high fuel burn at low altitude (more induced drag, often higher power settings). Use low-altitude fuel burn figures from the POH, not cruise altitude figures.

**Emergency landing sites:** Identify potential landing sites every few minutes along the route. In the event of a power failure, a helicopter enters autorotation — a controlled descent using rotor inertia — and has a very limited glide range (roughly 1–2 nautical miles from 1,000 feet AGL for a light helicopter). Routes over dense forest, water, or urban areas with no landing options require extra risk consideration.

**Fuel reserve:** CARs 602.88 requires 30 minutes fuel reserve at cruise power for day VFR; 45 minutes for night VFR. Plan to land with this reserve intact.

**Source:** CARs 602.14, 602.15, 602.88; TP 12880E.

---

### Pre-Flight Navigation Checklist

Before any cross-country helicopter flight:

1. Obtain weather briefing (METAR, TAF at destination and alternates, GFA for en-route)
2. Calculate density altitude at origin and destination
3. Plot route on VNC, identify checkpoints, measure distances and magnetic tracks
4. Calculate TAS, apply wind for groundspeed and WCA, calculate ETAs
5. Calculate fuel required (with reserve), confirm aircraft fuel load
6. File flight plan or flight itinerary (if beyond 25 NM — CARs 602.73)
7. Identify emergency landing sites along the route
8. Confirm aircraft performance — verify OGE hover capability at departure and destination density altitude

---

### Key Navigation Numbers

| Item | Value | Source |
|------|-------|--------|
| VNC scale | 1:500,000 | TC AIM MAP |
| VTA scale | 1:250,000 | TC AIM MAP |
| Day VFR fuel reserve | 30 minutes at cruise | CARs 602.88 |
| Night VFR fuel reserve | 45 minutes at cruise | CARs 602.88 |
| Flight plan required beyond | 25 NM from departure | CARs 602.73 |
| Cruising altitude rule applies at | ≥ 3,000 ft AGL | CARs 602.35 |
| Min altitude over populated areas | 1,000 ft AGL | CARs 602.14 |
| Min altitude over sparse areas | 500 ft AGL | CARs 602.15 |

---

*End of Lesson HEL-003.*
