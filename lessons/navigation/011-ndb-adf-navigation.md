---
id: NAV-011
topic: navigation
order: 11
slug: ndb-adf-navigation
title: "NDB and ADF Navigation"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E
  - AIM COM 5.0
questions:
  - id: q1
    prompt: "An aircraft is heading 060° magnetic. The ADF Relative Bearing Indicator shows a bearing of 030° relative. What is the Magnetic Bearing TO the NDB?"
    choices:
      A: "030°"
      B: "060°"
      C: "090°"
      D: "330°"
    answer: C
    explanation: "Magnetic Bearing TO the NDB = Magnetic Heading + Relative Bearing = 060° + 030° = 090°. The NDB is due east of the aircraft's current position. Always add the relative bearing to the magnetic heading, wrapping around 360° if necessary. Source: TP 12880E Chapter 10."
  - id: q2
    prompt: "What is the difference between 'homing' and 'tracking' to an NDB?"
    choices:
      A: "Homing uses the ADF; tracking uses the VOR receiver"
      B: "Homing means flying the needle to zero without wind correction, causing a curved path; tracking means maintaining a straight track by applying a wind correction angle"
      C: "Homing requires GPS; tracking uses only the ADF"
      D: "There is no difference — homing and tracking are the same technique"
    answer: B
    explanation: "Homing means pointing the aircraft directly at the NDB (keeping relative bearing at 000°) without correcting for wind — the aircraft follows a curved path into the wind. Tracking means determining and applying a wind correction angle to maintain a straight-line magnetic bearing to or from the NDB. Tracking is the correct cross-country technique. Source: TP 12880E Chapter 10."
  - id: q3
    prompt: "Which of the following is a known source of ADF/NDB error that is most significant at night?"
    choices:
      A: "GPS interference affecting the ADF frequency"
      B: "Night effect — skywave interference from distant NDB stations on the same frequency"
      C: "Magnetic variation causing the ADF needle to drift"
      D: "Terrain masking reducing signal strength"
    answer: B
    explanation: "Night effect occurs because NDB signals in the LF/MF frequency range (190–1750 kHz) reflect off the ionosphere at night, allowing distant stations on the same frequency to interfere with the intended station's signal. This causes erratic ADF needle movement, particularly at dawn and dusk. It is a recognized NDB limitation. Source: TP 12880E Chapter 10, AIM COM 5.0."
  - id: q4
    prompt: "On a VNC chart, an NDB is identified by which symbol?"
    choices:
      A: "A compass rose circle with a central dot"
      B: "A solid blue circle with tick marks"
      C: "A magenta circle with a dot and the station identifier and frequency in magenta text"
      D: "A yellow diamond shape"
    answer: C
    explanation: "NDB stations on a VNC are shown as a magenta (purple) circle with a dot in the centre, with the station identifier (two or three letters) and frequency (in kHz) printed in magenta text nearby. VORs are shown as compass rose symbols. Controlled airports use blue circles with ticks; uncontrolled use yellow circles. Source: VNC Chart Legend."
---

# Lesson NAV-011: NDB and ADF Navigation

**Section:** Navigation  
**Lesson number:** 011  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 10, AIM COM 5.0

---

## Narration Script

Welcome to Lesson NAV-011. The Non-Directional Beacon — NDB — is one of the oldest radio navigation aids still in use. While VOR and GPS have largely replaced it in populated areas, NDBs remain in service at many remote Canadian airports, and NDB navigation still appears on the Transport Canada PPL written exam. Understanding how the Automatic Direction Finder works, and how to convert ADF readings to magnetic bearings, is an important navigation skill.

---

**What is an NDB?**

A Non-Directional Beacon is a ground-based radio transmitter that broadcasts an omnidirectional signal — meaning it transmits equally in all directions, unlike a VOR which broadcasts specific directional radials. The NDB operates in the **Low Frequency (LF) and Medium Frequency (MF) band, between 190 and 1750 kHz**.

The NDB transmits a continuous carrier wave plus its Morse code identifier. That's it — it sends no directional information itself. All the directional work is done in the aircraft's receiver.

---

**The ADF Receiver**

The Automatic Direction Finder (ADF) is the cockpit receiver that works with NDBs. It contains a directional loop antenna that automatically rotates to find the direction from which the NDB signal is arriving strongest. It then drives a needle on the **Relative Bearing Indicator (RBI)** — or on a more advanced **Radio Magnetic Indicator (RMI)** — to point toward the NDB.

**Relative Bearing** is the key concept. It is the angle between the aircraft's **nose** (heading) and the direction to the NDB, measured clockwise from the nose. It has nothing to do with magnetic north.

- Relative bearing of 000° = NDB is directly ahead
- Relative bearing of 090° = NDB is to the right
- Relative bearing of 180° = NDB is directly behind
- Relative bearing of 270° = NDB is to the left

---

**Converting Relative Bearing to Magnetic Bearing**

To use an ADF reading for navigation, you need to convert the relative bearing to a **Magnetic Bearing TO the NDB** (MB TO). The formula is:

**MB TO = Magnetic Heading + Relative Bearing**

If the result exceeds 360°, subtract 360°.

**Example:**  
Aircraft heading: 180° magnetic  
ADF relative bearing: 045°  
MB TO = 180° + 045° = **225° magnetic**

The NDB is to the south-southwest of the aircraft.

To find where you are, plot a line on the chart from the NDB in the direction of the reciprocal: 225° − 180° = **045°** from the NDB. The aircraft is somewhere on that line, northeast of the NDB.

---

**NDB Identification**

Just like VOR stations, every NDB must be identified by its Morse code before use. NDB identifiers are typically two or three letters. The Morse code plays continuously on the NDB frequency.

Tune the ADF to the NDB frequency, listen to the identifier, and confirm it matches the two/three-letter code on the chart. Do not use an NDB that is silent, making no identifier, or sending "TST" — it may be under maintenance or transmitting unreliably.

---

**NDB Symbols on VNC Charts**

On the VFR Navigation Chart, NDB stations are shown as a **magenta (purple) circle with a dot** in the centre. The station identifier and frequency (in kHz) are printed in magenta text nearby. The frequency for NDBs is always in kHz, not MHz. For example, "YOW 233" means the Ottawa NDB has the identifier YOW and operates on 233 kHz.

Some aerodromes have a locator NDB (LNB) associated with an instrument approach — these may be shown differently, but for VFR cross-country use, the standard NDB symbol applies.

---

**Homing vs. Tracking**

There are two approaches to flying to an NDB, and they produce very different paths:

**Homing** means keeping the ADF needle on 000° relative (pointing at the nose) at all times. You constantly steer toward the NDB. In a crosswind, this causes you to continuously turn into the wind, following a curved path — a banana-shaped track that eventually arrives at the NDB, but not along a straight-line track. Homing is simple but navigationally imprecise.

**Tracking** means maintaining a straight-line course to (or from) the NDB by applying a wind correction angle. You determine the wind correction needed (just as with pilotage and dead reckoning) and fly a slightly offset heading to maintain the straight-line bearing. The ADF needle will then show a constant relative bearing equal to the WCA (rather than zero). Tracking is the correct technique for cross-country navigation.

For inbound tracking on a magnetic bearing of 090° with a WCA of 8° left:
- Fly heading 082° magnetic (crabbed 8° left into the wind)
- ADF should indicate 008° relative (NDB is slightly right of nose, due to crab)
- If the bearing remains constant, you are tracking a straight line to the NDB

---

**NDB on the VNC — Practical Use**

Before a cross-country, you might use an en route NDB as a checkpoint:
1. Note the NDB frequency and identifier from the VNC
2. Tune the ADF and identify the Morse code
3. At a point along your route, take a bearing (MB TO) and plot the position line on your chart
4. Intersect with your DR track to get a position fix

This is a valuable backup when there are no visual landmarks, or to confirm your DR position over featureless terrain.

---

**NDB Limitations**

NDB is notably less accurate than VOR. Known sources of error include:

**Night effect (skywave interference):** At night, LF/MF signals reflect off the ionosphere. Signals from distant NDB stations on the same (or nearby) frequency arrive at the ADF along with the desired local signal, causing the needle to oscillate erratically. Night effect is worst near sunrise and sunset.

**Coastal refraction:** When an NDB signal crosses a coastline at a shallow angle, the signal bends slightly — causing an ADF bearing error of up to 5°. Pilots operating near coastlines should be aware of this.

**Thunderstorm interference:** The ADF needle is attracted to electrical discharge in nearby thunderstorms. The needle may point toward a thunderstorm rather than the NDB. This makes ADF unreliable near convective activity — but also serves as a rough indicator of lightning-producing cells.

**Quadrantal error:** Caused by the aircraft's airframe re-radiating the NDB signal. This creates predictable errors at certain relative bearings (especially 045°, 135°, 225°, 315°). Modern ADF equipment compensates for most of this.

---

**NDB Use in Canada Today**

Many Canadian airports — particularly in remote northern regions — still rely on NDB for instrument approaches. For VFR pilots, NDB is primarily useful as an en route checkpoint aid and as a backup to dead reckoning when flying in areas with few visual landmarks.

The Canadian AIM (COM 5.0) lists operational NDB stations and their frequencies. Check NOTAMs before relying on an NDB, as some are being decommissioned as GPS approaches replace them.

---

## Quick Reference: ADF/NDB Navigation

| Term | Definition |
|------|-----------|
| NDB | Ground-based omnidirectional radio beacon (190–1750 kHz) |
| ADF | Aircraft receiver — drives needle pointing at NDB |
| Relative Bearing (RB) | Angle from aircraft nose to NDB, clockwise |
| Magnetic Bearing TO | MH + RB (wrap around 360° if > 360°) |
| Homing | Keeping RB at 000°; curved path in crosswind |
| Tracking | Applying WCA to maintain a straight-line course |

**MB TO Formula:** Magnetic Bearing TO NDB = Magnetic Heading + Relative Bearing

**NDB Errors:** Night effect, coastal refraction, thunderstorm attraction, quadrantal error

**Chart symbol:** Magenta circle with dot; identifier + frequency in kHz in magenta text

---

*End of Lesson NAV-011.*
