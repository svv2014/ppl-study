---
id: NAV-010
topic: navigation
order: 10
slug: vor-navigation
title: "VOR Navigation"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/navigation/010-vor-navigation.m4a
visual: /visuals/nav010-vor-navigation.html
sources:
  - TP 12880E
  - AIM COM 5.0
questions:
  - id: q1
    prompt: "What does the TO/FROM flag on a VOR indicator show when it reads 'TO'?"
    choices:
      A: "The selected radial is behind the aircraft"
      B: "Flying the selected OBS course will take the aircraft toward the VOR station"
      C: "The aircraft is currently over the VOR station"
      D: "The VOR station is transmitting a valid signal"
    answer: B
    explanation: "A 'TO' flag means the selected OBS course, if flown, would take the aircraft toward the VOR station. A 'FROM' flag means flying the selected course would take the aircraft away from the VOR. Neither indicates whether the CDI is deflected left or right — the pilot must use both the CDI and the TO/FROM flag together to determine corrective action. Source: TP 12880E Chapter 10."
  - id: q2
    prompt: "An aircraft is tracking inbound on the 270° radial of a VOR (i.e., flying toward the VOR from the west). The CDI deflects to the right. What correction should the pilot make?"
    choices:
      A: "Turn left to intercept the radial"
      B: "Turn right to intercept the radial"
      C: "Fly a lower altitude to intercept"
      D: "No correction — the CDI always deflects right on inbound tracks"
    answer: B
    explanation: "When tracking inbound on a radial with a TO flag, CDI deflection indicates the course is to that side of the aircraft. CDI deflects to the right = the course is to the right = turn right. This is the standard 'fly toward the needle' rule. On inbound tracks with a TO flag, the needle indicates the direction to turn. Source: TP 12880E Chapter 10."
  - id: q3
    prompt: "Why does VOR reception range increase with altitude?"
    choices:
      A: "VOR transmitters increase power at higher altitudes"
      B: "VOR signals travel in straight lines and are limited by line-of-sight to the horizon"
      C: "VOR signals are reflected off the ionosphere at high altitudes"
      D: "Magnetic variation has less effect at higher altitudes"
    answer: B
    explanation: "VOR operates in the VHF band (108–117.95 MHz). VHF radio waves travel in straight lines and do not follow the Earth's curvature. The range is limited by the radio horizon — the higher the aircraft, the further the horizon, and the greater the reception range. At 1,000 feet AGL, VOR range is roughly 40 NM; at 10,000 feet, it exceeds 100 NM. Source: TP 12880E Chapter 10, AIM COM 5.0."
  - id: q4
    prompt: "How do you identify a VOR station to confirm you are receiving the correct signal?"
    choices:
      A: "By reading the station name printed on the cockpit receiver display"
      B: "By tuning to the VOR frequency and listening to or decoding the Morse code identifier"
      C: "By verifying the VOR symbol on the GPS moving map"
      D: "By confirming the CDI centres on the expected radial"
    answer: B
    explanation: "VOR stations broadcast a continuous Morse code identifier (3 letters) on the VOR frequency. The pilot must identify the VOR by listening to or decoding the Morse identifier and confirming it matches the identifier printed on the chart. If a VOR is undergoing maintenance, it transmits TST or no identifier as a signal to pilots not to use it. Source: TP 12880E Chapter 10, AIM COM 5.0."
  - id: q5
    prompt: "To obtain a precise position fix using two VOR stations, a pilot should:"
    choices:
      A: "Fly toward the first VOR until station passage, then track the second VOR outbound"
      B: "Tune each VOR, centre the CDI with a FROM flag displayed, read the OBS for each, and plot both radials on the chart — the intersection is the aircraft's position"
      C: "Average the two OBS readings and apply the result to the nearest chart feature"
      D: "Use the TO/FROM flags from both VORs to determine which quadrant the aircraft is in"
    answer: B
    explanation: "A position fix by cross-bearing requires tuning each VOR in turn, rotating the OBS until the CDI centres with a FROM flag, and reading the OBS — that value is the radial from that station. Plotting both radials on the VNC gives a precise fix at their intersection. This technique provides a reliable position confirmation independent of visual ground contact. Source: TP 12880E Chapter 10."
---

# Lesson NAV-010: VOR Navigation

**Section:** Navigation  
**Lesson number:** 010  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 10, AIM COM 5.0

---

## Narration Script

Welcome to Lesson NAV-010. Until GPS became widespread, VHF Omnidirectional Range — VOR — was the backbone of en route navigation in Canada and across the world. Many Canadian VOR stations remain in service, they appear on VNC charts, and they are still tested on the PPL written exam. More importantly, VOR is reliable, accurate, and independent of satellites — making it a valuable backup even in the GPS era.

---

**What is a VOR?**

A VOR — VHF Omnidirectional Range — is a ground-based radio navigation station that broadcasts signals on a frequency between **108.0 and 117.95 MHz** (in the VHF band). The station simultaneously broadcasts two signals: one reference signal that is constant in all directions, and a rotating directional signal. The phase difference between the two signals at any point in space corresponds to the magnetic bearing from the VOR station to that point. This bearing is called a **radial**.

Every VOR broadcasts 360 radials, numbered 001° through 360°, measured in degrees magnetic from the station outward. The 090° radial points due east from the station; the 270° radial points due west. Radials are always described as being FROM the station.

---

**VOR on the VNC Chart**

On a VFR Navigation Chart, a VOR station is shown as a compass-rose circle — a six-pointed or eight-pointed shape with a dot in the centre. The frequency, identifier (three letters), and Morse code for the identifier are printed alongside the symbol.

Some VORs are combined with Distance Measuring Equipment (DME) — shown on charts as VOR/DME. Some are combined with TACAN (Tactical Air Navigation) for military use — shown as VORTAC. For VFR flight planning, treat all of these the same way; the VOR component works identically.

---

**The VOR Receiver in the Cockpit**

The cockpit VOR receiver has three main elements:

**1. Frequency selector** — sets the VOR frequency (e.g., 114.5 MHz). You tune the frequency to the desired VOR. Always verify the Morse code identifier after tuning to confirm you have the right station.

**2. OBS — Omni Bearing Selector** — a rotatable knob that lets you select a course. Turn it to the number you want to track or intercept. The OBS selects which radial (or its reciprocal) you want displayed on the CDI.

**3. CDI — Course Deviation Indicator** — a needle that moves left or right. When centred, the aircraft is on the selected course. When deflected, the course is to the side the needle points. Full deflection (two dots or more) typically represents 10° off course.

**4. TO/FROM flag** — shows whether the selected OBS course will take you toward (TO) or away from (FROM) the station.

---

**Radials, Courses, and Bearings**

These terms are used precisely in VOR navigation:

- A **radial** is defined as a direction FROM the VOR: "the aircraft is on the 090° radial" means the aircraft is due east of the station.
- A **course** is the direction you intend to fly. If you want to fly toward the VOR from the east, your course is 270° inbound. The OBS would be set to 270°, and the flag would read TO.
- When tracking outbound (flying away from the VOR), you set the OBS to the outbound course, and the flag reads FROM.

---

**Intercepting and Tracking a Radial**

To track inbound to a VOR on a specific radial:

1. Tune and identify the VOR
2. Set the OBS to the inbound course (the reciprocal of the radial you want to track; e.g., to track the 090° radial inbound, set OBS to 270°)
3. Confirm TO flag
4. Fly toward the needle — if CDI deflects right, turn right; if left, turn left
5. When centred, maintain the heading that keeps the CDI centred

To track outbound from a VOR on a specific radial:

1. Set OBS to the desired outbound course (same as the radial number: e.g., 090° to track outbound on the 090° radial)
2. Confirm FROM flag
3. Fly toward the needle — same principle

---

**Determining Position Using VOR**

You can determine your position with a single VOR by identifying which radial you're on:
1. Tune and identify the VOR
2. Centre the CDI with the OBS while FROM shows on the flag
3. The OBS reading is your radial — your position is somewhere along that line, at that bearing from the station

For a more precise position fix, use two VOR stations and plot both radials on the chart — your position is where the two radials intersect. This is called a **position fix by cross-bearing**.

---

**VOR Coverage and Range**

VOR signals are line-of-sight — they travel in straight lines and cannot follow the Earth's curve. Coverage increases with altitude:

- At 1,000 feet AGL, useful VOR range is approximately 40–50 NM
- At 5,000 feet AGL, range extends to roughly 75 NM
- At 10,000 feet AGL, range may exceed 120 NM

Below a certain altitude, you may be in the cone of silence directly above the station and briefly lose the signal. This is normal when passing over a VOR.

Canadian VOR stations are spaced with overlapping coverage so that aircraft flying at typical cruise altitudes (3,500–9,500 feet) can receive at least one VOR across most of the southern populated corridor.

---

**Identifying the VOR**

This step is critical and must not be skipped. Every VOR transmits a Morse code identifier on its frequency — three letters, repeated every few seconds. Before using any VOR indication for navigation, confirm:

1. The Morse identifier you hear matches the three-letter code on the chart
2. The identifier is present (if silent or transmitting "TST," the station may be under maintenance — do not use it)

Most modern aircraft have audio panels that can route the VOR audio to a headset. Simply listen and compare the dits and dahs to the code on the chart.

---

**VOR Limitations**

- **Line of sight** — low-level flying limits range significantly
- **Cone of silence** — brief signal loss directly over the station
- **Bends and scalloping** — mountainous terrain can cause the signal to bend, producing false indications; this is more common in western Canada
- **CDI sensitivity** — a small OBS error produces large apparent displacement when close to the station; track with more heading corrections when close in
- **No altitude information** — VOR tells you direction, not height; terrain clearance is still your responsibility

---

## Quick Reference: VOR Navigation

| Component | Function |
|-----------|----------|
| OBS | Selects the course to display on CDI |
| CDI | Shows left/right deviation from selected course |
| TO flag | Flying OBS course will take you toward the station |
| FROM flag | Flying OBS course will take you away from the station |
| Radial | Direction FROM station; 001°–360° magnetic |

**Track toward VOR:** Set OBS to inbound course; confirm TO; fly toward needle  
**Track from VOR:** Set OBS to outbound course; confirm FROM; fly toward needle  
**Position fix:** Centre CDI with FROM flag; read OBS = your radial from the station

**VOR identification:** Always confirm Morse code identifier before use

**Range (approximate):**

| Altitude AGL | Approx. VOR Range |
|-------------|-------------------|
| 1,000 ft | 40–50 NM |
| 5,000 ft | 75 NM |
| 10,000 ft | 120+ NM |

---

*End of Lesson NAV-010.*
