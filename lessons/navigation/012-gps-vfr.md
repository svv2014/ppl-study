---
id: NAV-012
topic: navigation
order: 12
slug: gps-vfr
title: "GPS Navigation for VFR Pilots"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E
  - AIM NAV 1.0
  - CARs 605.38
questions:
  - id: q1
    prompt: "Under Canadian regulations, a non-certified portable GPS unit (e.g., a tablet or handheld GPS) used by a VFR pilot:"
    choices:
      A: "Is approved as the primary navigation system and can replace chart and pilotage"
      B: "Is authorized for use as a supplementary navigation aid but does not replace the requirement to carry and use approved charts"
      C: "Is prohibited for use in Canadian airspace"
      D: "Is approved only when flying above 3,000 feet AGL"
    answer: B
    explanation: "Non-certified GPS devices (tablets, handheld units, smartphones) may be used as supplementary navigation aids for VFR flight, but they do not replace the regulatory requirement to carry appropriate aeronautical charts (CARs 605.38) and to navigate using approved methods. VFR GPS is a helpful tool, not a certified navigation system. Source: CARs 605.38, AIM NAV 1.0."
  - id: q2
    prompt: "What is RAIM in the context of GPS navigation?"
    choices:
      A: "A radio altimeter used to measure height above terrain"
      B: "Receiver Autonomous Integrity Monitoring — a GPS self-check that detects satellite failures and alerts the pilot"
      C: "A remote area instrument for measuring magnetic variation"
      D: "An acronym for Required Aeronautical Instrument Minimums"
    answer: B
    explanation: "RAIM (Receiver Autonomous Integrity Monitoring) is a GPS function that monitors the satellite constellation's geometry and signal quality. If RAIM detects that GPS accuracy has degraded beyond acceptable limits, it alerts the pilot. Certified IFR GPS units require RAIM to be operational before an approach. VFR GPS units may or may not have RAIM, but the concept is important for understanding GPS reliability. Source: TP 12880E Chapter 10, AIM NAV 1.0."
  - id: q3
    prompt: "If a VFR pilot's GPS fails in flight, what is the correct action?"
    choices:
      A: "Declare an emergency immediately on 121.5 MHz"
      B: "Land at the nearest airport immediately"
      C: "Continue using dead reckoning, pilotage, and available radio navigation aids"
      D: "Request an IFR clearance from ATC"
    answer: C
    explanation: "GPS failure in a VFR aircraft is not an emergency — the pilot should revert to the fundamental navigation methods: dead reckoning (using the PLOG), pilotage (visual landmarks), and radio navigation aids (VOR, NDB) if available. This is why VFR pilots must not become entirely dependent on GPS and must maintain proficiency in traditional navigation. Source: TP 12880E Chapter 9."
  - id: q4
    prompt: "Which Canadian regulation requires that appropriate aeronautical charts be carried on board a VFR flight?"
    choices:
      A: "CARs 602.34"
      B: "CARs 602.73"
      C: "CARs 605.38"
      D: "CARs 602.115"
    answer: C
    explanation: "CARs 605.38 requires that no person shall conduct a VFR flight unless appropriate aeronautical charts are carried on board. This requirement exists independently of any GPS or electronic navigation equipment on board. Source: CARs 605.38."
---

# Lesson NAV-012: GPS Navigation for VFR Pilots

**Section:** Navigation  
**Lesson number:** 012  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 10, AIM NAV 1.0, CARs 605.38

---

## Narration Script

Welcome to Lesson NAV-012. GPS has transformed how VFR pilots navigate. For many student pilots today, a tablet running a moving map app was their first exposure to navigation — before they ever held a paper chart or used a plotter. That's understandable, but it creates a potential problem: over-reliance on GPS means being helpless when it fails.

This lesson covers how GPS works, what "certified" vs. "non-certified" means for GPS equipment, what RAIM is, and — critically — how Canadian regulations treat GPS in VFR flight.

---

**How GPS Works**

The Global Positioning System (GPS) is a satellite-based navigation system operated by the United States military. It consists of at least 24 active satellites in medium Earth orbit, arranged so that at least four are visible from any point on the Earth's surface at any time.

Each GPS satellite continuously broadcasts two things: its precise orbital position, and the exact time (from an atomic clock aboard). Your GPS receiver listens to multiple satellites simultaneously and measures how long it took each signal to arrive. Since radio waves travel at the speed of light, the travel time converts to a distance. With signals from at least four satellites, the receiver can calculate its position in three dimensions (latitude, longitude, and altitude) to within approximately 3–5 metres under normal conditions.

The system works globally, continuously, and in all weather conditions. However, signal strength is relatively weak (the satellites are far away), which means GPS can be interrupted by:
- Dense tree canopy (especially in a handheld unit)
- Buildings or terrain shading the sky (less relevant in the air)
- Intentional jamming or interference (military exercises)
- Solar storms affecting the ionosphere

---

**GPS Accuracy and RAIM**

Modern GPS receivers are generally accurate to within 5–15 metres horizontally under normal conditions. For VFR navigation, this is far more accurate than any other method — a confirmed GPS fix is precise enough to identify which taxiway you're on.

However, GPS accuracy can degrade without warning if satellite signals become corrupted or unavailable. **RAIM — Receiver Autonomous Integrity Monitoring** — is a function built into certified GPS units that monitors the quality and geometry of the satellite signals being received. If RAIM detects a problem:

- A RAIM alarm alerts the pilot that GPS integrity cannot be guaranteed
- The GPS may freeze its last position rather than showing a degraded fix
- The pilot must revert to other navigation methods

Certified GPS units (approved for IFR use, installed and tested per Transport Canada standards) have RAIM. Most portable devices — tablets and handheld GPS units — do not have full RAIM capability. This is one of the reasons they cannot be used as primary IFR navigation tools.

---

**Certified vs. Non-Certified GPS**

This distinction matters in Canadian regulations:

**Certified GPS** is equipment that has been approved by Transport Canada (or its equivalent) to meet specific performance and integrity standards. It is panel-mounted, tested, and documented in the aircraft flight manual supplement. Certified GPS can be used as a primary navigation tool for IFR operations (including non-precision approaches) when properly set up and RAIM-confirmed.

**Non-certified GPS** includes:
- Portable handheld GPS units (Garmin GPSmap series, etc.)
- Tablet computers running aviation apps (ForeFlight, Garmin Pilot, OzRunways, etc.)
- Smartphones with GPS navigation apps

Non-certified GPS may be carried and used in VFR flight as a **supplementary navigation tool**. It provides enormously useful situational awareness — traffic, terrain, airspace awareness, moving map — but it does not replace:
- The requirement to carry approved aeronautical charts (CARs 605.38)
- The pilot's responsibility to navigate using approved methods

Transport Canada's position is that VFR GPS supplements but does not replace traditional navigation skills. When the tablet battery dies, you must be able to navigate home.

---

**Using GPS for VFR Navigation**

A portable GPS or tablet makes VFR navigation dramatically easier:

**Moving map:** The aircraft's real-time position overlaid on an aeronautical chart gives instant situational awareness. You can see exactly where you are relative to airspace, terrain, and your planned route.

**Direct-to function:** Press "Direct-To," enter a waypoint, and the GPS shows the bearing and distance. This is extremely useful but should always be cross-checked — ensure the direct-to course avoids controlled airspace and terrain.

**Waypoints and flight plans:** Enter your planned route as a series of waypoints. The GPS provides course guidance, ETE (estimated time en route), and ground speed readout.

**Airspace awareness:** Most aviation apps display airspace boundaries and alert you when you approach a boundary. This is valuable but not a substitute for understanding airspace — read the AIM and know what the colours mean.

**Terrain awareness:** Apps overlaying terrain data can alert you to obstacles and terrain ahead. This is especially useful in mountainous terrain or when flying in conditions of reduced visibility.

---

**What GPS Does Not Replace**

Even with the best GPS setup, you must:

**Carry approved charts.** CARs 605.38 requires aeronautical charts on board. A tablet is not an approved chart, and its data may be out of date if you haven't updated it recently. Always verify your app's database is current.

**Know your position without GPS.** If the tablet fails, you need to know where you are. Keep a paper PLOG, note your checkpoints, and keep track of elapsed time. At any point in the flight, you should be able to estimate your position within a few NM using dead reckoning.

**Understand airspace.** The GPS shows you boundaries but doesn't tell you the rules. You must know the entry requirements for Class C and Class D airspace, how to identify a Class B layer, and where to expect parachute activity or restricted areas.

**Maintain visual lookout.** GPS is eyes-down. Set up your display so you can glance at it briefly, then return to looking outside. The collision avoidance responsibility in VFR flight is yours, not the technology's.

---

**Battery and Power Failure**

Portable devices run on batteries. Battery failure mid-flight is a real scenario, especially on long cross-country flights in cold weather (cold dramatically reduces battery life). Mitigations:

- Bring a charging cable and use the aircraft's 12V outlet or USB port
- Carry a backup battery bank
- Turn down screen brightness to conserve power
- Know your PLOG well enough to continue without the device

Always check battery charge before departure.

---

**Canadian Regulatory Summary**

- **CARs 605.38** — requires approved aeronautical charts on board; a tablet alone is insufficient
- **AIM NAV 1.0** — guidance on the use of GPS for VFR navigation; GPS is supplementary, not primary
- Non-certified GPS may be used as a supplementary tool; certified GPS required for IFR approaches

The bottom line: GPS is an excellent tool that makes VFR navigation easier and safer. Use it — but never rely on it exclusively. The skills you learned in the previous lessons (dead reckoning, pilotage, VOR, NDB) remain essential when technology fails.

---

## Quick Reference: GPS for VFR Pilots

| Category | Certified GPS | Non-Certified GPS |
|----------|--------------|-------------------|
| Examples | Panel-mount IFR-approved unit | Tablet, portable handheld |
| RAIM | Yes | Typically no |
| IFR use | Approved (with RAIM) | Not approved |
| VFR use | Approved | Supplementary only |
| Replaces charts? | No | No |

**CARs 605.38:** Aeronautical charts required on board all VFR flights

**Key GPS limitations:** Battery failure, signal jamming, no RAIM (portable), database currency, eyes-down distraction

**Backup plan:** PLOG + dead reckoning + pilotage + VOR/NDB if available

---

*End of Lesson NAV-012.*
