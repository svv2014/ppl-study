---
id: ROC-003
topic: radio
order: 3
slug: frequencies-reference
title: "Aviation Frequency Reference"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/radio/003-frequencies-reference.m4a
visual: ''
sources:
  - ISED RIC-21
  - AIM COM 4.0
  - AIM RAC 4.5
  - Canada Flight Supplement (CFS)
questions:
  - id: q1
    prompt: "The international distress frequency for VHF aviation is:"
    choices:
      A: "126.7 MHz"
      B: "121.5 MHz"
      C: "122.8 MHz"
      D: "243.0 MHz"
    answer: B
    explanation: "121.5 MHz is the international VHF distress (guard) frequency. All ATC facilities and most IFR aircraft continuously monitor it. 243.0 MHz is the UHF military guard frequency. Source: AIM COM 4.5, ISED RIC-21."
  - id: q2
    prompt: "At an uncontrolled aerodrome with a Mandatory Frequency (MF) area, pilots should broadcast traffic information on:"
    choices:
      A: "121.5 MHz"
      B: "126.7 MHz"
      C: "The MF frequency published in the Canada Flight Supplement"
      D: "122.8 MHz in all cases"
    answer: C
    explanation: "The MF frequency for a specific aerodrome is published in the Canada Flight Supplement (CFS). It is often 122.8 MHz but may be a different assigned frequency. Pilots must use the published MF for that aerodrome, not a generic frequency. Source: AIM RAC 4.5, CFS."
  - id: q3
    prompt: "The en route advisory frequency used for VFR aircraft to obtain flight information in Canada is:"
    choices:
      A: "121.5 MHz"
      B: "122.8 MHz"
      C: "126.7 MHz"
      D: "123.45 MHz"
    answer: C
    explanation: "126.7 MHz is the en route advisory (UNICOM / Flight Information Service) frequency used for VFR advisory services in Canada away from controlled aerodromes. Source: AIM COM 4.0, CFS."
  - id: q4
    prompt: "ATIS broadcasts are typically found on:"
    choices:
      A: "121.5 MHz"
      B: "122.8 MHz"
      C: "A discrete VHF frequency or a co-located VOR frequency published in the CFS"
      D: "126.7 MHz"
    answer: C
    explanation: "ATIS (Automatic Terminal Information Service) is broadcast on a dedicated frequency assigned to each airport, which may be a standalone VHF frequency or co-located on a VOR frequency. The specific frequency is published in the Canada Flight Supplement for that airport. Source: AIM MET 3.0, CFS."
  - id: q5
    prompt: "243.0 MHz is significant in Canadian aviation because it is:"
    choices:
      A: "The VHF frequency used by all ground stations"
      B: "The UHF military guard/distress frequency monitored by military and SAR assets"
      C: "The CTAF frequency for airports above 3,000 feet elevation"
      D: "The standard UNICOM frequency for southern Ontario"
    answer: B
    explanation: "243.0 MHz is the UHF military emergency and guard frequency. It is monitored by Canadian Armed Forces aircraft and SAR assets. Most civilian light aircraft do not have UHF radios, but it is important to know as a secondary distress frequency. Source: AIM COM 4.5, ISED RIC-21."
---

# Lesson ROC-003: Aviation Frequency Reference

**Section:** Radio (ROC-A)  
**Lesson number:** 003  
**Estimated time:** 20 minutes  
**Source:** ISED RIC-21, AIM COM 4.0, AIM RAC 4.5, Canada Flight Supplement (CFS)

---

## Narration Script

Every radio frequency in aviation has a specific purpose. Dialing the wrong frequency means you either can't be heard or you're interrupting a channel you shouldn't be on. In this lesson you'll learn the key frequencies every Canadian VFR pilot must know, where to find frequencies for specific aerodromes, and how the frequency structure is organized.

---

**Distress Frequencies**

Two frequencies are reserved for emergencies and are monitored continuously by ATC facilities and search-and-rescue assets across Canada.

**121.5 MHz — International Aeronautical Emergency Frequency (VHF Guard)**  
This is the most important frequency in this lesson. 121.5 MHz is monitored 24 hours a day by:
- All ATC units in Canada
- Most commercial aircraft
- Canadian Forces Rescue Coordination Centres
- Emergency Locator Transmitters (ELTs) broadcast on this frequency upon activation

If you have an emergency and are not in contact with ATC, transmit your MAYDAY call on 121.5 MHz. You do not need to switch away from your current frequency first — you can choose whichever gives you better chance of being heard.

**243.0 MHz — Military UHF Guard Frequency**  
The UHF equivalent of 121.5 MHz. Monitored by military aircraft and SAR resources. Most light civilian aircraft do not have UHF capability, but Search and Rescue satellites and beacons that detect ELT signals also monitor this band. Know this frequency for the exam.

---

**Advisory and UNICOM Frequencies**

**122.8 MHz — Common Frequency / UNICOM**  
At many uncontrolled aerodromes in Canada, 122.8 MHz serves as the traffic advisory frequency. Pilots make position calls to announce their intentions so other traffic can build a picture of what's happening around the aerodrome. 122.8 is widely used but is NOT the universal MF frequency — always confirm in the CFS.

**126.7 MHz — En Route Advisory Frequency**  
Away from controlled aerodromes and their assigned frequencies, pilots can call 126.7 MHz to reach a Flight Service Station (FSS) or Radio (ATC outlet) for flight information, weather updates, and position reports on long cross-country flights. Think of it as the "highway" frequency for VFR en route use.

---

**Mandatory Frequency (MF) Areas**

Some uncontrolled aerodromes in Canada are designated as Mandatory Frequency (MF) aerodromes. These have specific requirements for radio use (covered in ROC-004), but the key point here is that each MF aerodrome has an assigned frequency that is **published in the Canada Flight Supplement (CFS)**. This is usually 122.8 MHz, but not always. Never assume — look it up.

---

**Controlled Aerodrome Frequencies**

At aerodromes with control towers, you'll encounter several distinct frequencies:

**ATIS (Automatic Terminal Information Service)**  
A continuous recorded broadcast of the current weather, active runways, NOTAMs, and other aerodrome information. Updated whenever conditions change and given a letter identification (Alpha, Bravo, Charlie, etc.). Pilots are expected to obtain the current ATIS before calling ATC. Tell the controller which information letter you have: "information Kilo."

The ATIS frequency is published in the CFS for each airport. It is often co-located on a VOR frequency, meaning the identifier will appear alongside the VOR entry.

**Clearance Delivery**  
At larger airports, IFR crews call clearance delivery for their route clearance before taxiing. Separate frequency published in the CFS. VFR flights do not normally use this unless operating IFR.

**Ground Control**  
Used for taxi instructions on the ground. Common allocations are 121.7 MHz and 121.9 MHz at major airports, but the specific frequency is published in the CFS. Do not transmit on ground control when airborne.

**Tower (Local Control)**  
The tower frequency is used for takeoff clearances, landing clearances, and traffic while on the runway or in the circuit. Published in the CFS. At most Canadian towered airports, the tower frequency is in the 118–136 MHz VHF aviation band.

**Approach and Departure Control**  
Larger airports have radar approach/departure frequencies for IFR and VFR aircraft in the terminal area. Published in the CFS.

---

**The Canada Flight Supplement (CFS)**

The CFS is the definitive source for aerodrome-specific frequencies. Published every 56 days by NAV CANADA, it lists every certified aerodrome in Canada with its frequencies, operating hours, elevation, runway details, and radio requirements. Every VFR pilot planning a cross-country flight should consult the CFS for each aerodrome of intended or potential use.

For an exam question asking "where do you find the MF frequency for aerodrome X?" — the answer is always the CFS.

---

## Quick Frequency Reference

| Frequency | Purpose |
|-----------|---------|
| 121.5 MHz | VHF international distress/guard (always monitored) |
| 243.0 MHz | UHF military distress/guard |
| 122.8 MHz | Common advisory / UNICOM (many uncontrolled aerodromes) |
| 126.7 MHz | En route advisory / FIS |
| Various | Tower, ground, ATIS, approach — see CFS |

---

## Key Points

- 121.5 MHz is the primary emergency frequency — monitored 24/7 by all ATC facilities and SAR
- 243.0 MHz is the UHF military guard frequency
- 126.7 MHz is the en route advisory frequency for VFR cross-country flights
- 122.8 MHz is common for uncontrolled aerodrome advisory but always verify in the CFS
- ATIS, tower, ground, and approach frequencies are aerodrome-specific — use the CFS
- The CFS is updated every 56 days and is the authoritative source for all aerodrome frequencies

---

*End of Lesson ROC-003.*
