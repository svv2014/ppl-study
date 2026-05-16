---
id: ANV-001
topic: cpl-a
order: 10
slug: rnav-high-level-navigation
title: "RNAV and High-Level Navigation Concepts"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/010-rnav-high-level-navigation.m4a
visual: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual)"
  - "AIM ENR Chapter (Navigation)"
  - "CARs Part VI (General Operating and Flight Rules)"
  - "Transport Canada CPL-A Written Exam Guide"
questions:
  - id: q1
    prompt: "Area Navigation (RNAV) differs from conventional VOR-to-VOR navigation primarily because:"
    choices:
      A: "RNAV requires GPS and cannot use VOR signals"
      B: "RNAV allows flight on any desired path within the coverage of navigation aids, not limited to direct radials"
      C: "RNAV is used exclusively for IFR flights"
      D: "RNAV only applies to aircraft equipped with inertial navigation systems (INS)"
    answer: B
    explanation: "RNAV (Area Navigation) allows aircraft to fly any desired path within the coverage of navigation aids or the accuracy of self-contained systems, rather than being limited to direct radials from VOR stations. RNAV can use GPS, VOR/DME, DME/DME, or inertial navigation as the source. Source: TP 12880E; AIM ENR."
  - id: q2
    prompt: "On a VFR Navigational Chart (VNC), the maximum altitude shown is:"
    choices:
      A: "9,500 feet ASL"
      B: "12,500 feet ASL"
      C: "18,000 feet ASL"
      D: "VNCs have no altitude limit — they cover all altitudes"
    answer: B
    explanation: "VFR Navigational Charts (VNCs) are used for VFR flight below 18,000 feet ASL, but the primary operational coverage is below 12,500 feet ASL. Above that altitude, Enroute charts (high-level) are more appropriate. Source: AIM ENR."
  - id: q3
    prompt: "The Canadian Domestic Airspace is divided into the Northern Domestic Airspace (NDA) and the Southern Domestic Airspace (SDA). In the NDA, altimeter setting procedures differ in that:"
    choices:
      A: "Altimeters are set to QFE at all times"
      B: "The standard altimeter setting of 29.92 in.Hg (1013.2 hPa) is used at all times"
      C: "Local QNH is used up to FL180 then standard setting above"
      D: "Altimeter settings are not required in the NDA"
    answer: B
    explanation: "In the Northern Domestic Airspace (NDA), the standard altimeter setting of 29.92 in.Hg (1013.2 hPa) is used at all altitudes at all times, because weather reporting stations are too sparse to provide reliable local QNH. In the SDA, local QNH is used below the transition altitude. Source: AIM RAC; TP 12880E."
  - id: q4
    prompt: "Required Navigation Performance (RNP) specifications define:"
    choices:
      A: "The maximum airspeed for GPS-equipped aircraft"
      B: "The navigation accuracy and integrity required for a specific operation, including on-board monitoring"
      C: "The minimum number of GPS satellites required for IFR flight"
      D: "The maximum cross-track error allowed for VFR navigation"
    answer: B
    explanation: "RNP defines both the accuracy (e.g., RNP 1 = within 1 NM of centreline 95% of time) and the integrity requirement that the system monitors its own performance and alerts the crew if it cannot meet the requirement. The monitoring capability distinguishes RNP from basic RNAV. Source: AIM ENR; Transport Canada."
  - id: q5
    prompt: "When flying at high altitudes on a long-distance cross-country, the effect of the Earth's curvature means that great circle routes:"
    choices:
      A: "Follow lines of constant latitude and are the shortest path only near the equator"
      B: "Are the shortest distance between two points and appear as curved lines on Mercator projections"
      C: "Are only applicable for transatlantic and transpacific routes, not domestic"
      D: "Are the same as rhumb lines for all practical purposes in Canada"
    answer: B
    explanation: "A great circle route is the shortest distance between two points on the Earth's surface. On a Mercator projection chart (which shows meridians as parallel vertical lines), great circle routes appear as curved lines. For long-distance Canadian or polar flights, great circle routing provides significant fuel savings. Source: TP 12880E; AIM ENR."
---

# Lesson ANV-001: RNAV and High-Level Navigation Concepts

**Subject:** Advanced Navigation  
**Lesson number:** 010 (ANV-001)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Topics to be authored:
- Conventional vs. area navigation (RNAV): concepts and differences
- GPS-based RNAV: RAIM, WAAS/SBAS, integrity monitoring
- VOR/DME-based RNAV: position fixing from multiple stations
- Required Navigation Performance (RNP): concept and application
- Great circle vs. rhumb line: practical implications for long-range routing
- NDA altimeter procedures: standard setting at all altitudes
- High-level enroute charts: reading and applying to commercial navigation
- Canadian airspace structure at high altitudes

---

## Narration Script

### Introduction

Navigation for the commercial pilot goes well beyond the dead reckoning and VOR tracking that formed the backbone of your PPL training. In commercial operations, you will encounter Area Navigation — or RNAV — systems, Required Navigation Performance specifications, great circle routing for long-distance flights, and the special procedures that apply in Canada's Northern Domestic Airspace. This lesson will walk you through these concepts systematically, giving you both the theoretical understanding needed for the CPL-A written exam and the practical knowledge you will use in commercial operations. Sources for this lesson include TP 12880E, the AIM ENR Chapter, and CARs Part VI.

### Conventional Navigation vs. Area Navigation

Conventional VOR-based navigation requires the aircraft to fly direct radials to and from VOR stations. You track outbound on a specific radial from one VOR, then navigate to the next VOR in sequence, then track the next radial. The route you fly is therefore defined entirely by the geometry of the VOR network, and if you want to fly between two points that are not aligned with convenient VOR radials, you must make multiple intermediate turns at each station. This works well where the VOR network is dense, but it is inefficient, and in Canada's vast northern regions, the network is simply not there.

Area Navigation, abbreviated RNAV, is a navigation method that allows an aircraft to fly any desired path within the coverage area of navigation aids, or within the accuracy limits of self-contained navigation systems, without necessarily overflying each ground-based navaid. The key concept is the waypoint — a defined geographic position expressed in latitude and longitude that is entered into the flight management system or RNAV unit. The aircraft can navigate directly from one waypoint to another, regardless of where the nearest VOR station is located. The underlying position data can come from several sources: GPS, VOR/DME combinations, DME/DME triangulation, inertial navigation systems, or any combination. The navigation system itself computes the position and the required track, and presents the pilot with a course deviation indication just as a conventional CDI would. Source: TP 12880E; AIM ENR.

### GPS and GNSS in Canadian Airspace

The Global Navigation Satellite System — GNSS — is the overarching term for satellite-based positioning systems. GPS, operated by the United States, is the most common GNSS in Canadian aviation, though the system is used under that broader label. For aviation purposes, GPS provides continuous, three-dimensional position information with high accuracy, making it the most capable RNAV source currently available.

However, GPS has a fundamental limitation: the system itself does not always tell you when its accuracy has degraded. If a satellite malfunctions or the signal geometry becomes poor, the position error can increase without any obvious warning to the pilot. This is where RAIM — Receiver Autonomous Integrity Monitoring — becomes essential. RAIM is a function built into aviation-grade GPS receivers that continuously checks the integrity of the GPS position solution. It does this by comparing redundant satellite measurements and looking for inconsistencies. If RAIM detects that the position accuracy has degraded below the required threshold, it alerts the pilot. Without RAIM, GPS cannot be used for IFR navigation in Canada.

For precision approaches with GPS guidance down to low decision heights, a further enhancement is available. WAAS — the Wide Area Augmentation System — is a network of ground reference stations across North America that continuously monitor GPS signals and broadcast correction data to suitably equipped aircraft. WAAS-equipped GPS receivers can achieve horizontal accuracy of better than 3 metres, enabling Localiser Performance with Vertical guidance approaches — called LPV approaches — which provide precision approach capability at many airports that do not have ILS installations. Source: AIM ENR.

### Required Navigation Performance

Required Navigation Performance, or RNP, takes the concept of RNAV a step further by adding an integrity requirement. With basic RNAV, you know the system is navigating accurately, but you rely on external monitoring — RAIM, for example — to detect failures. RNP specifications require that the navigation system itself monitor its own performance continuously and alert the crew immediately if the required accuracy cannot be met. This on-board monitoring capability is what distinguishes RNP from basic RNAV.

RNP values are expressed as numbers that represent the half-width of a corridor, in nautical miles, within which the aircraft must remain 95 percent of the time. RNP 1 means the aircraft must be within 1 nautical mile of the centreline 95 percent of the time, and the system must alert if this cannot be guaranteed. RNP approaches can have values as tight as RNP 0.1, enabling curved approaches through terrain-constrained corridors that would be impossible with conventional navigation. For commercial operations in Canada, you will encounter RNP requirements in approach plates, airspace designations, and company operations manuals. Source: AIM ENR; Transport Canada.

### Great Circle vs. Rhumb Line

For long-distance flights, the question of which path to follow on the Earth's curved surface becomes significant. A rhumb line is a path that crosses all meridians at the same angle — it appears as a straight line on a Mercator projection chart, which makes it easy to plot and fly. However, a rhumb line is not the shortest distance between two points on a sphere. The shortest distance is a great circle — the arc traced by the intersection of the Earth's surface with a plane passing through the two points and the centre of the Earth. On a Mercator projection, a great circle appears as a curved line that bows toward the poles.

For short flights — say, within the same province or across a few hundred miles — the difference in distance between the great circle and the rhumb line route is negligible. But for very long flights, particularly those in higher latitudes where meridians are closer together, the great circle route can be hundreds of miles shorter than the equivalent rhumb line. Many flight management systems automatically compute great circle routes between waypoints, and you need to understand why your planned track curves poleward on Mercator charts when you file or brief a long-distance route. Source: TP 12880E; AIM ENR.

### High-Level Airspace in Canada

Canada divides its airspace into several categories, and the high-altitude structure is particularly important for commercial operations. Class A airspace in Canada begins at 18,000 feet above sea level and extends upward to Flight Level 600. All flight in Class A airspace must be conducted under Instrument Flight Rules regardless of weather conditions, because the combination of high speeds, reduced traffic separation margins, and the critical nature of high-altitude operations requires positive ATC control at all times.

High-altitude enroute charts — the Jeppesen or NAV CANADA high enroute charts — show the airways, fixes, and MEAs applicable to Class A airspace. Jet routes, called J-routes, are the high-altitude airways that are the primary navigation structure at these levels. At the transition from low to high altitude operations, the altimeter procedures also change: at and above 18,000 feet ASL, the standard altimeter setting of 29.92 inches of mercury is used by all aircraft, eliminating the QNH variable and ensuring consistent altimetry across the entire high-altitude system.

RVSM airspace — Reduced Vertical Separation Minima — applies in Canada between Flight Level 290 and Flight Level 410. In non-RVSM airspace, the standard IFR vertical separation above Flight Level 290 is 2,000 feet. RVSM reduces this to 1,000 feet, effectively doubling the number of usable flight levels in the busy upper airspace. To operate in RVSM airspace, an aircraft must be equipped with precise altimetry, dual autopilots capable of maintaining assigned altitude within tight tolerances, an altitude alerting system, and an ATC transponder. The aircraft must also be approved for RVSM operations in its certificate of airworthiness. Aircraft not meeting RVSM requirements must avoid this airspace or operate with the standard 2,000-foot separation, which severely limits their routing options. Source: CARs Part VI.

### Northern Domestic Airspace Procedures

Canada's airspace is divided into the Southern Domestic Airspace, or SDA, and the Northern Domestic Airspace, or NDA. The boundary between them runs roughly along the 60th parallel, which separates the southern provinces and territories from the Yukon, Northwest Territories, Nunavut, and the northern portions of Quebec and Labrador.

In the Southern Domestic Airspace, the familiar altimeter setting procedure applies: below the transition altitude, pilots use the current local QNH setting, which provides altitude above mean sea level referenced to actual sea-level pressure. Above the transition altitude, the standard setting is used, giving Flight Level designations.

In the Northern Domestic Airspace, the standard altimeter setting of 29.92 inches of mercury is used at all times and all altitudes. This is a critical difference you must know for the exam. The reason is practical: the NDA has very few weather reporting stations, and the spacing between them is so large that QNH readings from the nearest station may be significantly different from the actual sea-level pressure at the aircraft's location. Using local QNH in this environment could produce meaningful altimetry errors. By standardising on 29.92 at all altitudes, all aircraft in the NDA share the same altimeter reference, ensuring consistent vertical separation even without reliable local pressure data. Source: AIM RAC; TP 12880E.

Navigation in the NDA also presents unique challenges. Navaids are sparse — VOR stations may be hundreds of miles apart, and DME coverage is limited. GPS is therefore the primary navigation tool for most NDA operations. Pilots operating in the NDA must be familiar with GPS operations including RAIM monitoring, must understand the limitations of their navigation system, and must plan carefully for any GPS outage, including understanding what alternate navigation means are available. Many northern operations also contend with magnetic compass unreliability near the magnetic north pole, where the direction of magnetic north changes rapidly over short distances. Some NDA operations use grid navigation — a navigation system referenced to the geographic North Pole rather than magnetic north — for operations in the highest latitudes. Source: AIM ENR.

### Summary

In this lesson you learned that RNAV allows aircraft to fly any desired path using waypoints rather than being constrained to flying direct VOR radials, and that the position source can be GPS, VOR/DME, DME/DME, or inertial navigation. GPS requires RAIM for integrity monitoring in IFR operations, and WAAS provides the additional accuracy required for LPV precision approaches. RNP specifications add on-board monitoring of navigation system integrity, with values expressed as nautical mile corridor half-widths. Great circle routes are the shortest path between two points on the Earth's surface and appear curved on Mercator projections, with significant fuel savings on long-distance high-latitude routes. Class A airspace in Canada begins at 18,000 feet ASL and requires IFR. RVSM applies between Flight Level 290 and 410, reducing vertical separation to 1,000 feet for appropriately equipped aircraft. In Canada's Northern Domestic Airspace, the standard altimeter setting of 29.92 inches of mercury is used at all altitudes, and GPS is the primary navigation tool given the sparse navaid environment.

---

*End of Lesson ANV-001.*
