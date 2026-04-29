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
  - "TP 12880E (Aeroplane Flight Training Manual) – Navigation chapter"
  - "TC AIM MAP section"
  - "CARs 602.14–602.15 (Minimum Altitudes)"
  - "CARs 602.35 (Cruising Altitudes)"
  - "CARs 602.73 (Flight Plans and Itineraries)"
  - "CARs 602.88 (Fuel Requirements)"
questions:
  - id: q1
    prompt: "A helicopter is flying true course 090° with a wind from 360° at 20 knots and a true airspeed of 100 knots. The wind correction angle is approximately:"
    choices:
      A: "11° left (point the nose left of course)"
      B: "11° right (point the nose right of course)"
      C: "20° left"
      D: "No correction needed — a wind from 360° has no effect on a 090° course"
    answer: A
    explanation: "Wind from 360° (north) on a course of 090° (east) is a crosswind from the left, pushing the aircraft south. The pilot must point the nose into the wind (left) to maintain the desired track. WCA ≈ arcsin(20/100) ≈ 11.5°. Source: TP 12880E (Navigation chapter)."
  - id: q2
    prompt: "The VFR Navigation Chart (VNC) used for cross-country navigation in Canada has a scale of:"
    choices:
      A: "1:50,000"
      B: "1:250,000"
      C: "1:500,000"
      D: "1:1,000,000"
    answer: C
    explanation: "The VNC has a scale of 1:500,000 (1 cm = 5 km, approximately 2.7 NM). The VTA (Visual Terminal Area) chart has a scale of 1:250,000 for terminal area navigation. Source: TC AIM MAP 2.0."
  - id: q3
    prompt: "Dead reckoning navigation uses which of the following to estimate position?"
    choices:
      A: "VOR radial and DME distance only"
      B: "Known departure point, true airspeed, magnetic heading, and elapsed time"
      C: "GPS track and groundspeed only"
      D: "Nearest NDB bearing and estimated wind drift"
    answer: B
    explanation: "Dead reckoning (DR) uses a known starting point, airspeed corrected for wind to get groundspeed, a magnetic heading corrected for variation and deviation, and elapsed time to estimate current position. It is the foundational VFR navigation technique. Source: TP 12880E."
  - id: q4
    prompt: "For a day VFR cross-country flight, CARs 602.88 requires the pilot to carry fuel to the destination plus a minimum reserve of:"
    choices:
      A: "20 minutes at normal cruise"
      B: "30 minutes at normal cruise"
      C: "45 minutes at normal cruise"
      D: "60 minutes at normal cruise"
    answer: B
    explanation: "CARs 602.88 requires a VFR flight to carry fuel for the destination plus 30 minutes at normal consumption (day VFR). Night VFR requires 45 minutes. This applies equally to helicopters."
  - id: q5
    prompt: "A helicopter pilot assessing an off-aerodrome landing site should check which factors?"
    choices:
      A: "Slope of the surface, obstacle clearance on approach/departure, surface texture, and wind direction"
      B: "The published instrument approach procedure and airport rescue services"
      C: "The distance from the nearest Class D airport and ATIS availability"
      D: "Whether the site has a published UNICOM frequency"
    answer: A
    explanation: "Off-aerodrome site assessment covers: slope relative to the rotor disk, obstacles on approach and departure paths, surface texture (risk of brownout/whiteout), and wind direction to plan an into-wind approach. Published approaches and rescue services do not exist at off-aerodrome sites."
---

# Lesson HEL-003: Navigation for Helicopter Operations

**Section:** Helicopter — Foundational  
**Lesson number:** 003  
**Estimated time:** 20 minutes  
**Sources:** TP 12880E (Navigation); TC AIM MAP; CARs 602

---

## Narration Script

Welcome to the navigation lesson. Navigation for helicopter pilots builds on the same foundation as fixed-wing navigation — charts, dead reckoning, wind correction, fuel planning — but applies it in a low-altitude, flexible-route environment where off-aerodrome operations and site assessment are routine. This lesson prepares you for both the PPL-H written exam and practical helicopter cross-country flight.

---

### Canadian VFR Charts

**VNC — VFR Navigation Chart (1:500,000)**

The VNC is the primary chart for cross-country VFR navigation. Scale 1:500,000 means 1 centimetre equals 5 kilometres on the ground (approximately 2.7 NM). The VNC shows:

- Airspace boundaries with class designations and altitude limits
- Terrain and prominent landmarks
- Aerodromes with identifier, elevation, and service symbols
- Obstructions above 200 feet AGL (towers, antenna farms)
- Navigational aids (VORs, NDBs)
- Restricted and danger areas (Class F)
- Contour lines showing terrain elevation (interval typically 500 feet)

Contour lines are critical for terrain clearance planning, especially in mountainous regions.

**VTA — Visual Terminal Area Chart (1:250,000)**

The VTA is used near busy terminal areas where 1:500,000 scale lacks detail. Use the VTA when operating in or transiting terminal areas; switch to the VNC for en-route navigation.

**WAC — World Aeronautical Chart (1:1,000,000)**

The WAC covers large geographic areas at small scale — useful for long-distance planning but not detailed VFR navigation.

**Source:** TC AIM MAP 2.0.

---

### Dead Reckoning — The Foundation

Dead reckoning (DR) estimates your position using:

1. **Known departure point** — a positively identified fix (aerodrome, VOR, prominent landmark)
2. **True course** — direction to destination, measured from the chart
3. **True airspeed (TAS)** — calibrated airspeed corrected for altitude and temperature
4. **Wind** — forecast or actual direction and speed
5. **Wind correction angle (WCA)** — heading offset into the wind to maintain the desired ground track
6. **Magnetic variation** — difference between magnetic north and true north
7. **Compass deviation** — instrument error specific to the aircraft
8. **Elapsed time** — time since the last confirmed fix

**The calculation:** Groundspeed = TAS adjusted for headwind/tailwind component. Time = Distance ÷ Groundspeed. Fuel = Time × burn rate per hour.

**Why DR matters for helicopter pilots:**

Helicopters frequently operate off published airways and in areas with limited GPS coverage (remote northern Canada, mountainous terrain). Equipment can fail and GPS signals can degrade. A pilot who cannot navigate by DR alone is dependent on a single point of failure.

**Source:** TP 12880E (Navigation chapter).

---

### Magnetic Variation and Compass Deviation

**Magnetic Variation (Var):** The angle between magnetic north (where the compass points) and true north (the geographic pole). In Canada, variation ranges from approximately 20° West in the east to over 30° East in parts of the western Arctic. Variation is shown on VNCs as isogonic lines.

Converting: True Course ± Variation = Magnetic Course  
Mnemonic: *"Variation East, Magnetic least; Variation West, Magnetic best"*  
(East variation: subtract to get magnetic. West variation: add to get magnetic.)

**Compass Deviation (Dev):** Every aircraft compass is affected by the airframe's metal and electronics. Deviation is listed on the aircraft's compass correction card and is typically small (a few degrees). Magnetic Heading ± Deviation = Compass Heading.

**Source:** TP 12880E (Navigation chapter).

---

### GPS Navigation

GPS is standard equipment in most modern helicopters but it supplements, not replaces, DR skills:

- GPS failure, database errors, and signal degradation are real scenarios.
- A GPS routing to an incorrect waypoint (wrong identifier, outdated database) leads you off course silently.
- Always crosscheck GPS track against visual landmarks.
- Confirm the destination identifier matches the intended destination before departure.
- Monitor groundspeed and crosscheck against the fuel plan.

**Source:** TP 12880E (Navigation chapter).

---

### Altitude Selection and Cruising Levels

For VFR flights **at and above 3,000 feet AGL** (CARs 602.35):

| Magnetic Track | Required Altitude |
|---------------|------------------|
| 0° to 179° | Odd thousands + 500 ft (3,500 / 5,500 / 7,500 ft) |
| 180° to 359° | Even thousands + 500 ft (4,500 / 6,500 / 8,500 ft) |

Helicopters frequently cruise below 3,000 feet AGL, where this rule does not apply. At low altitudes, follow these minimums:

- **Over built-up areas and congested open-air assemblies:** 1,000 feet AGL above the highest obstacle within 2,000 feet of the aircraft. Source: CARs 602.14.
- **Elsewhere:** 500 feet from any person, vessel, vehicle, or structure. Source: CARs 602.15.

---

### Off-Aerodrome Landing Site Assessment

One of the most distinctive aspects of helicopter operations is the ability to land at unprepared sites. A systematic pre-landing assessment is essential.

**The SOCA check:**

**S — Size:** Is the site large enough for the rotor disk plus margins? Main rotor diameter on a light training helicopter (e.g., Robinson R44) is approximately 10 metres. There must be clear space for the rotor disk with buffer from any obstacle at the rotor tip level.

**O — Obstacles:** What lies on the approach path? The departure path? Power lines are especially hazardous — nearly invisible against cluttered backgrounds. If wires are suspected, conduct an elevated reconnaissance before committing. Establish a go-around point before reaching the point of no return on approach.

**C — Configuration / Slope:** Helicopters can land on slopes, but the rotor disk limits the safe slope angle. Most light training helicopters have a maximum slope tolerance of approximately 5°–8° (check the POH for the specific type). On a slope, the rotor tip on the uphill side is closest to the terrain. Land and depart heading upslope where possible.

**A — Altitude / Air / Surface:** What is the density altitude at the site? Is there sufficient power margin for OGE hover if the approach is missed? What is the surface condition — loose dust, snow, long grass, or soft ground that could cause brownout, whiteout, or dynamic rollover? What is the wind direction and speed? Plan the approach and departure into the wind whenever possible.

---

### Low-Level Flight Planning

**Checkpoint frequency:** At low altitude, landmarks pass quickly. Plan checkpoints every 3–5 minutes of flight time, not every 10–15 minutes.

**Fuel planning:** Helicopters typically burn more fuel per hour at low altitude than at cruise altitude (increased induced drag requires more power). Use low-altitude fuel burn figures from the POH. CARs 602.88 requires fuel for the destination plus 30 minutes reserve (day VFR) or 45 minutes (night VFR).

**Emergency landing sites:** Following a power failure, a helicopter enters autorotation — a controlled descent using stored rotor RPM. The glide range from 1,000 feet AGL is roughly 1–2 NM for a light helicopter (varies by type and airspeed flown). Identify potential landing sites every few minutes along the route.

**Source:** CARs 602.14, 602.15, 602.88; TP 12880E.

---

### Pre-Flight Navigation Checklist

Before any cross-country helicopter flight:

1. Obtain weather: METAR at departure and destination, TAF for destination and alternates, GFA for the en-route region
2. Calculate density altitude at departure and destination
3. Plot route on VNC; identify checkpoints; measure distances and magnetic tracks
4. Apply wind for groundspeed and WCA; calculate ETAs at each checkpoint
5. Calculate fuel required with reserve (CARs 602.88); verify aircraft fuel load
6. File flight plan or itinerary if beyond 25 NM (CARs 602.73)
7. Identify emergency landing sites along the route
8. Verify OGE hover capability at departure and destination density altitude using POH charts

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
| Min altitude over built-up areas | 1,000 ft AGL above highest obstacle within 2,000 ft | CARs 602.14 |
| Min altitude elsewhere | 500 ft from person, vessel, vehicle, structure | CARs 602.15 |

---

*End of Lesson HEL-003.*
