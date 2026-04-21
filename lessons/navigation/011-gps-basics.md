---
id: NAV-011
topic: navigation
order: 11
slug: gps-basics
title: "GPS Basics"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E
  - AIM RAC 1.0
  - CARs 605.38
questions:
  - id: q1
    prompt: "For VFR navigation, GPS is classified by Transport Canada as:"
    choices:
      A: "A primary navigation aid that can replace charts and dead reckoning"
      B: "An IFR-certified navigation system requiring RAIM"
      C: "A supplemental aid — the pilot must maintain chart navigation skills independently"
      D: "An approved substitute for an operable magnetic compass"
    answer: C
    explanation: "Transport Canada classifies GPS as a supplemental navigation aid for VFR flight. Pilots must maintain the ability to navigate using charts, compass, and dead reckoning. GPS does not replace these skills and is not approved as the sole means of navigation for VFR cross-country flights. Source: TP 12880E Chapter 9, AIM RAC 1.0."
  - id: q2
    prompt: "What does RAIM stand for and why is it important for IFR GPS approaches?"
    choices:
      A: "Radio Altimeter Integrity Monitor — detects terrain conflicts"
      B: "Receiver Autonomous Integrity Monitoring — alerts the pilot if GPS signal accuracy is insufficient"
      C: "Route Automated Instrument Management — programs approach procedures automatically"
      D: "Regional Airspace Information Module — provides airspace boundaries"
    answer: B
    explanation: "RAIM (Receiver Autonomous Integrity Monitoring) is a GPS function that cross-checks satellite signals to detect errors. It alerts the pilot if position accuracy falls below the required level for the operation being conducted. RAIM prediction is required before IFR GPS approaches; loss of RAIM requires an alternate means of navigation. Source: AIM RAC 1.0."
  - id: q3
    prompt: "A VFR pilot using GPS notices the moving map shows the aircraft is 5 NM off the planned track. The GPS is functioning normally. What should the pilot do first?"
    choices:
      A: "Declare an emergency and divert to the nearest aerodrome"
      B: "Cross-check position using chart features visible below"
      C: "Immediately request radar vectors from ATC"
      D: "Land as soon as possible to recalibrate the GPS"
    answer: B
    explanation: "When a GPS shows an unexpected position, the pilot should cross-check using visual pilotage — identifying chart features on the ground. GPS errors, database errors, or simple data entry mistakes can cause incorrect displayed positions. Cross-checking with independent visual reference confirms which is correct. Source: TP 12880E Chapter 9."
  - id: q4
    prompt: "Which of the following GPS terms describes the direction the aircraft is actually moving over the ground?"
    choices:
      A: "Bearing to waypoint (BRG)"
      B: "Desired track (DTK)"
      C: "Track made good (TMG)"
      D: "Cross-track error (XTE)"
    answer: C
    explanation: "Track Made Good (TMG) is the actual direction of movement over the ground, as measured by the GPS from successive position fixes. Desired Track (DTK) is the planned track. Cross-Track Error (XTE) is the perpendicular distance off the desired track. Bearing to waypoint is the direction from present position to the next waypoint. Source: TP 12880E Chapter 9."
  - id: q5
    prompt: "A GPS database must be current (not expired) for which type of operation?"
    choices:
      A: "VFR flight using GPS as a supplemental aid only"
      B: "All GPS use regardless of flight rules"
      C: "IFR flight using GPS for instrument approaches"
      D: "Any flight within controlled airspace"
    answer: C
    explanation: "For IFR operations using GPS for approaches, the database must be current (within the 28-day AIRAC cycle). For VFR supplemental use, an expired database does not make the GPS unusable — but the pilot must verify any waypoints against current charts. Source: CARs 605.38, AIM RAC 1.0."
---

# Lesson NAV-011: GPS Basics

**Section:** Navigation  
**Lesson number:** 011  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 9, AIM RAC 1.0, CARs 605.38

---

## Narration Script

Welcome to Lesson NAV-011. GPS has transformed aviation navigation. A device that fits in your hand can tell you your position to within metres, display a moving map of your route, and calculate winds, ground speed, and estimated arrival time — automatically. But GPS also creates traps for student pilots who become over-reliant on it. In this lesson you will learn how GPS works, what it can and cannot do, and how to use it correctly as a Canadian VFR pilot.

---

**How GPS Works**

The Global Positioning System (GPS) is a constellation of satellites operated by the United States government. At any point on Earth, a minimum of four satellites are typically visible above the horizon. Your GPS receiver:

1. Receives timing signals from multiple satellites simultaneously
2. Calculates the distance to each satellite from the time delay of the signal
3. Triangulates position (latitude, longitude, altitude) from the intersection of those distances

This process is called trilateration. The accuracy of the result depends on the geometry of the visible satellites and the quality of the receiver.

---

**GPS Accuracy for VFR Use**

Modern GPS receivers (even those built into smartphones) typically achieve accuracy of 3–5 metres horizontally under good conditions. However, several factors can degrade accuracy:

- **Satellite geometry** — if satellites are clustered on one side of the sky, position error increases
- **Signal blockage** — buildings, terrain, or aircraft structure can block satellite signals
- **Ionospheric errors** — the ionosphere delays GPS signals unpredictably
- **Multipath errors** — signals can reflect off terrain or structures before reaching the receiver

For VFR navigation, these errors are generally insignificant. For IFR precision approaches, they must be tightly monitored by RAIM.

---

**GPS as a Supplemental Aid**

Transport Canada classifies GPS as a **supplemental navigation aid** for VFR flight. This means:

- GPS may be used to assist in navigation
- GPS **does not replace** the requirement to navigate using charts, compass, and dead reckoning skills
- Pilots must be capable of completing a VFR cross-country without GPS if required

The practical implication: always prepare your flight with a chart, measure your tracks and distances, and have a traditional navigation plan. GPS is a powerful tool, but it can fail, be jammed, or display an incorrect position if a database error exists.

---

**Key GPS Displays and Terms**

Modern aviation GPS units (and moving map applications) display several navigation parameters:

| Display | Meaning |
|---------|---------|
| TRK / TMG | Track Made Good — actual direction of movement over ground |
| DTK | Desired Track — planned track to next waypoint |
| XTE | Cross-Track Error — distance left/right of planned track |
| BRG | Bearing to Waypoint — direction from present position to next waypoint |
| GS | Ground Speed — actual speed over ground |
| ETE | Estimated Time Enroute — time to next waypoint at current GS |
| ETA | Estimated Time of Arrival — time of arrival at destination |
| CDI | Course Deviation Indicator — graphical left/right deviation from track |

Understanding these displays lets you get maximum value from a GPS without misinterpreting the information.

---

**Waypoints and the GPS Database**

A GPS navigates to **waypoints** — named points defined by latitude and longitude. Waypoints include:

- **Airports** (identified by ICAO code, e.g., CYYZ for Toronto Pearson)
- **VORs** (VHF Omnidirectional Range stations)
- **NDBs** (Non-Directional Beacons)
- **Intersections** (named nav aid crossings used in IFR)
- **User waypoints** (custom points you create)

The GPS database contains all the official waypoints, airspace boundaries, and instrument approach procedures. This database is updated every 28 days (the AIRAC cycle). For VFR supplemental use, an expired database is acceptable if you verify waypoints against current charts. For IFR approaches, the database must be current.

---

**RAIM — Receiver Autonomous Integrity Monitoring**

RAIM is a GPS function that monitors the consistency of all received satellite signals. If one satellite provides an inconsistent signal (indicating a possible error), RAIM detects this by comparing the satellite against others in view.

- **RAIM available:** GPS position meets the accuracy requirement for the current operation
- **RAIM alert / loss of RAIM:** Accuracy cannot be guaranteed; pilot must use alternate navigation

For IFR operations, RAIM prediction (checking expected satellite geometry before departure) is required. For VFR use, RAIM loss is an indication to cross-check position by other means.

---

**GPS Failure Modes and Cross-Checking**

Never trust GPS alone. If your GPS shows an unexpected position:

1. **Cross-check with chart** — look out the window and find ground features that match the chart
2. **Cross-check with other instruments** — compass heading, VOR, elapsed time from last known point all provide independent position estimates
3. **Check for data entry errors** — have you selected the correct destination waypoint?

Common GPS failures that trip students:
- **Wrong waypoint selected** — the GPS is accurately navigating to a waypoint you didn't intend
- **Expired or corrupt database** — waypoints may have been renamed, relocated, or decommissioned
- **Magnetic vs. True reference** — some units display bearing in True, others in Magnetic; confirm the setting matches your charts

---

**Using GPS in Practice**

A sound workflow for GPS-assisted VFR navigation:

1. Complete your traditional PLOG (chart, plotter, E6B) before the flight
2. Load your route into the GPS and verify each waypoint matches your chart
3. After departure, fly your planned headings — use GPS to confirm track and GS
4. Use XTE to detect significant track deviations; investigate before making large corrections
5. At each checkpoint, verify GPS position against visual landmarks on the chart
6. Trust your eyes and the chart over the GPS if they disagree until you determine which is correct

---

**GPS and the Transport Canada PPL Exam**

Exam questions on GPS typically focus on:
- Classification of GPS (supplemental, not primary, for VFR)
- RAIM and its purpose
- Definitions of GPS display terms (TMG, XTE, DTK, ETE)
- Database currency requirements
- Cross-checking GPS against chart navigation

---

## Quick Reference: GPS for VFR Pilots

| Concept | Key Point |
|---------|-----------|
| GPS classification | Supplemental aid for VFR; does not replace chart nav skills |
| RAIM | Monitors satellite consistency; alerts if accuracy is insufficient |
| Database currency | Must be current for IFR approaches; VFR can use with verification |
| XTE | Perpendicular distance off the desired track |
| TMG | Actual direction of movement over ground |
| Cross-check rule | Always verify GPS position against visual ground features |

---

*End of Lesson NAV-011.*
