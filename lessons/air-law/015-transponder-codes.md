---
id: AL-015
topic: air-law
order: 15
slug: transponder-codes
title: "Transponder — Codes, Squawk 7700/7600/7500, Mode C Requirements"
duration_min: 20
status: complete
audio: null
visual: /visuals/al015-transponder-codes.html
sources:
  - CARs 601.03
  - CARs 605.35
  - AIM RAC 1.9
  - TP 12880E Chapter 7
questions:
  - id: q1
    prompt: "Mode C on a transponder provides ATC with:"
    choices:
      A: "The aircraft's GPS-derived position"
      B: "The aircraft's pressure altitude encoded from the altimeter"
      C: "The pilot's selected altitude in the flight management system"
      D: "The aircraft's magnetic heading"
    answer: B
    explanation: "Mode C transmits pressure altitude information derived from the aircraft's encoding altimeter or blind encoder. This gives ATC an independent altitude readout alongside the radar return. It is pressure altitude — not indicated or corrected altitude. Source: AIM RAC 1.9, CARs 605.35."
  - id: q2
    prompt: "Mode C equipment is required for flight in which of the following Canadian airspace?"
    choices:
      A: "Class G airspace below 10,000 feet ASL"
      B: "Class E airspace below 3,000 feet AGL"
      C: "Class C and Class B airspace"
      D: "All controlled airspace regardless of altitude"
    answer: C
    explanation: "CARs 601.03 requires Mode C (altitude reporting) transponder equipment to enter Class B and Class C airspace. Mode C is also required when flying at or above 12,500 feet ASL in Class E airspace. Source: CARs 601.03, AIM RAC 1.9."
  - id: q3
    prompt: "ATC instructs you to 'squawk 4521'. You should:"
    choices:
      A: "Set code 4521 only after receiving a radar service advisory"
      B: "Set code 4521 on your transponder and activate Mode C"
      C: "Set code 4521 and reply 'Roger' only after confirming on radar"
      D: "Set code 4521 and advise ATC when you have done so"
    answer: B
    explanation: "When ATC assigns a discrete squawk code, you set it immediately and ensure Mode C is also active. You readback the instruction and set the code — no need to wait for radar confirmation. The transponder operates continuously, not on-demand. Source: AIM COM 4.3, CARs 605.35."
  - id: q4
    prompt: "You are flying VFR in uncontrolled airspace and have not been assigned a transponder code. What code should you squawk?"
    choices:
      A: "1200 (standard VFR code in Canada and the US)"
      B: "1000"
      C: "2000"
      D: "0000"
    answer: A
    explanation: "In Canada, the standard VFR squawk code when no ATC code has been assigned is 1200. Canada uses 1200 in alignment with the North American standard — the same code used in the US. AIM RAC 1.9 specifies squawk 1200 for VFR operations. Squawk 2000 is the ICAO standard used in European/ICAO airspace for aircraft entering controlled airspace without an assigned code; it is not the Canadian domestic VFR default. Source: AIM RAC 1.9, CARs 601.03."
  - id: q5
    prompt: "When should a pilot squawk 7500?"
    choices:
      A: "When experiencing radio failure"
      B: "When declaring a general in-flight emergency"
      C: "When the aircraft is subject to unlawful interference"
      D: "When operating in Class A airspace without clearance"
    answer: C
    explanation: "Squawk 7500 is reserved exclusively for unlawful interference — the international code for hijacking. It silently alerts ATC and security services without requiring a radio transmission. 7700 is for general emergency; 7600 is for radio failure. Source: AIM RAC 1.9, ICAO Annex 10."
---

# Lesson AL-015: Transponder — Codes, Squawk 7700/7600/7500, Mode C Requirements

**Section:** Air Law  
**Lesson number:** 015  
**Estimated time:** 20 minutes  
**Source:** CARs 601.03, CARs 605.35, AIM RAC 1.9, TP 12880E Chapter 7

---

## Narration Script

Welcome to Lesson AL-015. This lesson covers the transponder — what it is, the modes it operates in, which airspace requires it, the discrete codes ATC assigns, and the three emergency codes every pilot must know without hesitation.

---

### What Is a Transponder?

A transponder is a radio receiver-transmitter that automatically replies to interrogation signals from ATC radar. When a secondary surveillance radar (SSR) interrogates your aircraft, your transponder responds with a coded signal that allows ATC to identify your aircraft on their radar display and, with Mode C, determine your altitude.

There are several transponder modes in use:

**Mode A** — Identification only. The transponder transmits a 4-digit octal code (0000–7777) assigned by ATC or set by the pilot. No altitude information is included.

**Mode C** — Identification plus altitude. The transponder transmits the 4-digit code AND pressure altitude data from an encoding altimeter. This gives ATC your altitude readout alongside your radar return. Mode C uses the pressure altitude — the altitude at the standard altimeter setting of 29.92 in Hg — not your actual indicated altitude after setting local QNH. ATC applies the correction internally.

**Mode S** — A newer, more capable mode that allows individual aircraft interrogation and data link messaging. Mode S includes all the functionality of Modes A and C plus additional data exchange capabilities. Most modern transponders are Mode S-capable.

---

### When Is a Transponder Required in Canada?

The requirement to carry and operate a transponder in Canada is governed by CARs 601.03 and 605.35.

**Transponder with Mode C (altitude-encoding) is required to enter:**
- **Class B airspace** (12,500 to 18,000 feet ASL)
- **Class C airspace** (the controlled airspace surrounding busy airports)
- **Airspace at or above 12,500 feet ASL in Class E** (if applicable)

**Transponder must be operating** whenever the aircraft is in flight in controlled airspace where it is installed and serviceable.

In **Class D airspace**, a transponder is required if one is installed, but it is not required as a condition of entry the way it is for Class B and C.

**Bottom line for the exam:** Mode C transponder = required for Class B and Class C. Know this cold.

---

### Squawk Codes

A transponder code (squawk code) is a 4-digit octal number — each digit ranges from 0 to 7, giving 4,096 possible codes. ATC assigns discrete codes to individual aircraft to track them on radar.

**Standard codes to know:**

| Code | Meaning |
|------|---------|
| **1200** | VFR — no code assigned (Canadian and US standard) |
| **7700** | Emergency (distress) |
| **7600** | Radio/communications failure |
| **7500** | Unlawful interference (hijacking) |
| **2000** | ICAO standard for entering controlled airspace without assigned code (not the Canadian VFR default) |

**Important fact for Canadian exam:** The VFR squawk in Canada when no code is assigned is **1200**. Canada uses the North American standard of 1200, the same code as the US. Squawk 2000 is the ICAO standard used in European/international airspace — it is not the Canadian domestic VFR default. Source: AIM RAC 1.9.

---

### The Three Emergency Codes

You must know 7700, 7600, and 7500 instantly — no hesitation on the exam.

**7700 — General Emergency**

Set 7700 when you are declaring a MAYDAY (distress) or have any life-threatening emergency. This code triggers an alert on all ATC radar displays showing your aircraft. If you are already squawking an assigned discrete code and ATC knows your situation, you may not need to switch to 7700 — they can already track you. But if contact is lost or you want to ensure radar visibility, squawk 7700.

**7600 — Radio Failure (NORDO)**

If you lose two-way radio communication, squawk 7600. ATC will see the code and initiate lost-communications procedures. They will issue light signals at controlled aerodromes. After squawking 7600, if the radio failure is in receive only (you can transmit but not receive, or vice versa), continue operating and land at the nearest suitable aerodrome.

Lost communications procedures in controlled airspace: squawk 7600, maintain VFR, proceed to the destination or the nearest suitable aerodrome, and look for light gun signals from the tower on final.

**7500 — Unlawful Interference (Hijacking)**

7500 is a silent distress code used when the crew cannot safely make a voice communication. Setting 7500 alerts ATC and security agencies without requiring any radio transmission that might endanger the crew. Do not accidentally set 7500 — it triggers an immediate security response.

---

### Operating the Transponder

When should you turn the transponder on? The answer is: **before takeoff** and keep it on for the entire flight, including taxiing at airports with surface movement radar. Mode C should be ON unless ATC instructs otherwise.

**Ident:** ATC may ask you to "squawk ident." Pressing the IDENT button on your transponder causes your radar return to temporarily blossom on the ATC display — useful when ATC is trying to confirm your identity. Only ident when ATC specifically requests it — pressing ident randomly disrupts the radar picture for controllers.

**Standby:** The transponder has a STANDBY mode where it is powered but not responding to interrogations. Use standby on the ground at busy airports when ATC instructs, or when asked to by ground control to prevent interference with surface radar. Never leave it in standby for a flight.

---

### Mode C Altitude Encoding

Mode C transmits pressure altitude — altitude at the standard setting of 29.92 in Hg (1013.25 hPa), also called the standard datum plane. Your altimeter may be set to a local QNH of 30.12 in Hg, but the Mode C encoder reads from a separate encoding altimeter or from a dedicated altitude encoder that always references standard pressure.

ATC's radar computer receives the pressure altitude and automatically adds the current altimeter setting correction to display your corrected altitude. This means Mode C data may differ from your indicated altitude by the altimeter setting correction — this is expected and normal.

---

## Key Points

- **Mode A:** Transponder code (squawk) only; no altitude
- **Mode C:** Squawk code plus pressure altitude encoding — required for Class B and Class C airspace
- **Canadian VFR squawk code when no code assigned: 1200** (North American standard; 2000 is the ICAO/European standard, not used in Canada)
- **7700** = general emergency; **7600** = radio failure; **7500** = unlawful interference
- Set 7500 only for hijacking — it triggers an immediate silent security alert
- Squawk IDENT only when instructed by ATC
- Mode C transmits pressure altitude (29.92 in Hg reference); ATC applies local QNH correction

---

*End of Lesson AL-015.*
