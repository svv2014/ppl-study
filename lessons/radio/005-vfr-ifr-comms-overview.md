---
id: ROC-005
topic: radio
order: 5
slug: vfr-ifr-comms-overview
title: "VFR and IFR Communications Overview"
duration_min: 20
status: complete
audio: null
visual: '/visuals/roc005-vfr-ifr-comms-overview.html'
sources:
  - AIM RAC 4.3
  - AIM COM 4.0
  - ISED RIC-21
  - CARs 602.138
questions:
  - id: q1
    prompt: "Before calling ATC at a controlled airport, a VFR pilot should first:"
    choices:
      A: "Call the tower and ask for the current weather"
      B: "Obtain the current ATIS and note the information identifier"
      C: "Tune to 121.5 MHz and confirm the frequency is clear"
      D: "Call clearance delivery for a VFR flight plan activation"
    answer: B
    explanation: "Pilots are expected to obtain the current ATIS before making their initial call to ATC. This reduces controller workload since the pilot already has the weather, active runway, and altimeter setting. Tell the controller which information letter you have: 'information Kilo.' Source: AIM RAC 4.3."
  - id: q2
    prompt: "When ATC issues a frequency change instruction, the pilot should:"
    choices:
      A: "Acknowledge with WILCO and switch immediately"
      B: "Read back the new frequency and switch after the readback is acknowledged"
      C: "Switch frequencies without any readback"
      D: "Ask the controller to repeat the frequency before acknowledging"
    answer: B
    explanation: "Frequency change instructions require a readback. The pilot reads back the new frequency, the controller acknowledges, and the pilot then switches. This prevents a pilot from switching to the wrong frequency. Source: AIM RAC 4.3, ISED RIC-21."
  - id: q3
    prompt: "A VFR pilot transitioning through a Class C terminal area is told 'traffic, twelve o'clock, five miles, Cessna one seventy two, same altitude.' The correct response is:"
    choices:
      A: "Read back the full traffic advisory"
      B: "Acknowledge with 'looking' or 'traffic in sight' or 'negative contact'"
      C: "Transmit 'ROGER WILCO'"
      D: "Request a heading change to avoid the traffic"
    answer: B
    explanation: "Traffic advisories do not require a formal readback. The pilot acknowledges visually: 'traffic in sight' if the aircraft is spotted, 'looking' if searching, or 'negative contact' if not seen. ATC will advise if further avoiding action is required. Source: AIM RAC 4.3."
  - id: q4
    prompt: "A pilot who becomes lost in poor visibility and needs ATC assistance should first:"
    choices:
      A: "Declare an emergency on 121.5 and wait for instructions"
      B: "Try to climb above cloud and navigate by GPS"
      C: "Contact ATC on the current or last-known frequency, identify your situation, and comply with instructions"
      D: "Land at the nearest field immediately without radio call"
    answer: C
    explanation: "A disoriented pilot should contact ATC immediately on the current working frequency (or 121.5 if no contact), state the situation, and follow instructions. ATC can provide radar identification, vectors, and weather information. Early communication is always preferable. Source: AIM SAR 3.0, CARs 602.138."
  - id: q5
    prompt: "The correct initial call-up format for a VFR pilot contacting a terminal control unit is:"
    choices:
      A: "Just your call sign and the word 'request'"
      B: "Station called, your call sign, aircraft type, position, altitude, and request"
      C: "Your call sign only — the controller will ask for the rest"
      D: "Your call sign, position, and the word 'inbound'"
    answer: B
    explanation: "A complete initial call-up includes: the facility name, your aircraft identification, type, position, altitude, and request. This gives ATC all the information needed to respond without asking follow-up questions. Source: ISED RIC-21, AIM RAC 4.3."
---

# Lesson ROC-005: VFR and IFR Communications Overview

**Section:** Radio (ROC-A)  
**Lesson number:** 005  
**Estimated time:** 20 minutes  
**Source:** AIM RAC 4.3, AIM COM 4.0, ISED RIC-21, CARs 602.138

---

## Narration Script

Radio communication flows differently depending on whether you are VFR in uncontrolled airspace, VFR in controlled airspace, or operating IFR. The vocabulary is the same — the prowords, the phonetic alphabet, the readback rules — but the sequence of events, what you say when, and what ATC expects from you changes significantly. This lesson gives you an overview of those differences and walks through the communication flow a VFR pilot will most commonly encounter.

---

**VFR at an Uncontrolled Aerodrome (Review)**

At an MF or ATF aerodrome, you are self-announcing. You're not asking anyone for permission — you're broadcasting so other aircraft can hear you. There's no ATC facility, no one to issue clearances. The protocol is simple: call on the MF/ATF, state your position, state your intentions, and maintain a listening watch.

---

**VFR at a Controlled Aerodrome**

At an airport with an operating control tower, you interact with ATC using a defined sequence of contacts:

**Step 1 — Get the ATIS**  
Before making any radio call, tune to the ATIS frequency. Listen to the entire broadcast, write down the altimeter setting, active runway, and information identifier (the phonetic letter). This is not optional — controllers expect you to have it.

**Step 2 — Call Ground Control (if applicable)**  
For taxi, call ground control with your full call sign, aircraft type, location on the airport, and request. Tell them you have the current information letter. Example: "Toronto Ground, Cessna Charlie Golf Alfa Bravo Charlie, at the Buttonville FBO, VFR to Oshawa, information Kilo, request taxi."

Ground will issue a taxi clearance — read back the runway assignment and any holding instructions.

**Step 3 — Call Tower for Takeoff**  
When instructed to contact tower (or when approaching the runway hold line), call the tower with your call sign and position: "Buttonville Tower, Cessna Alfa Bravo Charlie, holding short runway one five, ready for departure." The tower will issue takeoff clearance or instructions.

**Step 4 — Departure / Frequency Change**  
After takeoff, the tower may instruct you to contact departure control or remain on the tower frequency. Read back any frequency change instruction. At smaller airports with only a tower, you may be released to advisory or given a squawk and radar service.

**Step 5 — En Route**  
Away from the terminal area, you may be told to monitor 126.7 MHz for advisory service or simply be released frequency. In Class E and G airspace, no radio contact is required unless entering controlled airspace.

**Step 6 — Inbound**  
When returning to a controlled airport: get the current ATIS first, then call approach control (if applicable) or directly call the tower. Give your call sign, aircraft type, position, altitude, and that you have the information. The tower will integrate you into the sequence.

---

**Traffic Advisories**

In controlled airspace, ATC may issue traffic advisories: "traffic, two o'clock, three miles, Boeing 737, descending." Your response:
- If you see the traffic: "traffic in sight, [call sign]"
- If searching: "looking, [call sign]"
- If not found: "negative contact, [call sign]"

Traffic advisories are not clearances and do not require a full readback. ATC issues them as a service; you remain responsible for see-and-avoid.

---

**Frequency Changes and the Monitoring Instruction**

If ATC says "MONITOR [frequency]," they want you on that frequency but don't expect an initial call. You tune to it and listen. If they say "CONTACT [frequency]," you tune and call in.

Never leave a controlled frequency without either being told to switch, completing your departure, or explicitly advising the controller: "Alfa Bravo Charlie, request frequency change."

---

**IFR Communications — Overview**

IFR communications follow the same vocabulary but with much more structure. An IFR pilot obtains a clearance before departure, acknowledges it in full readback, and stays in two-way radio contact with ATC throughout the flight. Position reports are mandatory at compulsory reporting points unless in radar contact. Altitudes, headings, and routes are read back in full. The penalty for a non-readback in IFR can be significant.

As a PPL candidate you will not be flying IFR, but understanding the framework helps you interact with ATC in shared airspace.

---

**Squawk Codes and Transponders**

When ATC assigns a transponder code, it is a mandatory readback item. "Squawk four three two one" — you read back "four three two one." Set the transponder to that code and reply: "Squawking four three two one, [call sign]." In Class C and D airspace you typically squawk an assigned code. In Class G without radar contact, the standard VFR code in Canada is **1200**.

---

## Key Points

- Obtain ATIS before every call to ATC at a controlled airport — state the information letter
- Initial call-up: station, call sign, aircraft type, position, altitude, request
- Traffic advisories: acknowledge visually ("in sight," "looking," or "negative contact") — no readback required
- Frequency changes: read back the new frequency; switch only after the readback is acknowledged
- Never leave a controlled frequency without being cleared to do so
- VFR code in Class G without ATC contact: squawk 1200
- IFR requires full clearance readback and continuous ATC contact

---

*End of Lesson ROC-005.*
