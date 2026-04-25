---
id: ROC-006
topic: radio
order: 6
slug: emergency-comms
title: "Emergency Communications"
duration_min: 20
status: complete
audio: null
visual: '/visuals/roc006-emergency-comms.html'
sources:
  - AIM SAR 3.0
  - AIM COM 4.0
  - CARs 602.138
  - ISED RIC-21
  - AIM RAC 1.9
questions:
  - id: q1
    prompt: "The correct distress signal to declare a life-threatening emergency by radio is:"
    choices:
      A: "PAN-PAN PAN-PAN PAN-PAN"
      B: "SECURITE SECURITE SECURITE"
      C: "MAYDAY MAYDAY MAYDAY"
      D: "EMERGENCY EMERGENCY EMERGENCY"
    answer: C
    explanation: "MAYDAY (from the French 'm'aidez' — help me) is the international distress signal indicating a grave and imminent danger requiring immediate assistance. It is spoken three times consecutively to ensure the word is not mistaken for other traffic. Source: ISED RIC-21, AIM SAR 3.0, ICAO Annex 10."
  - id: q2
    prompt: "A pilot experiencing an urgent situation — engine running rough, unsure if it will continue — but not yet in immediate danger of losing the aircraft should declare:"
    choices:
      A: "MAYDAY"
      B: "PAN-PAN"
      C: "SECURITE"
      D: "DISTRESS"
    answer: B
    explanation: "PAN-PAN (from the French 'panne' — breakdown) signals an urgency condition — a serious situation that does not yet require immediate assistance but may deteriorate. It alerts ATC and other traffic that you need priority handling. MAYDAY is reserved for immediate danger to life or the aircraft. Source: ISED RIC-21, AIM SAR 3.0."
  - id: q3
    prompt: "A pilot who has experienced a radio failure should squawk:"
    choices:
      A: "7700"
      B: "7500"
      C: "7600"
      D: "1200"
    answer: C
    explanation: "Squawk 7600 indicates radio failure (NORDO — no radio). ATC will attempt to re-establish contact by light signals or other means. Squawk 7700 is for general emergency; squawk 7500 is for unlawful interference (hijack). Source: AIM RAC 1.9, CARs 602.138."
  - id: q4
    prompt: "An ELT (Emergency Locator Transmitter) in Canada automatically activates on impact and broadcasts on which frequency?"
    choices:
      A: "126.7 MHz"
      B: "121.5 MHz"
      C: "243.0 MHz"
      D: "Both 121.5 MHz and 406 MHz (for modern digital ELTs)"
    answer: D
    explanation: "Modern 406 MHz digital ELTs (now required in Canada for new registrations) activate automatically on impact and transmit on both 406 MHz (for satellite detection via the COSPAS-SARSAT system) and 121.5 MHz (for homing by SAR aircraft). Older 121.5-only ELTs are still in service but being phased out. Source: CARs 605.38, AIM SAR 3.0."
  - id: q5
    prompt: "Which transponder code is reserved for a hijack or unlawful interference situation?"
    choices:
      A: "7700"
      B: "7600"
      C: "7500"
      D: "7000"
    answer: C
    explanation: "Squawk 7500 is the universal code for unlawful interference (hijack). It alerts ATC and military authorities without a verbal declaration. Squawk 7700 = general emergency; squawk 7600 = radio failure. Source: AIM RAC 1.9, ISED RIC-21."
  - id: q6
    prompt: "After declaring MAYDAY, a pilot who has re-established the aircraft under control and no longer needs assistance should:"
    choices:
      A: "Continue on 121.5 MHz and wait for ATC to cancel the emergency"
      B: "Simply switch to the en route frequency without notifying anyone"
      C: "Transmit 'MAYDAY CANCELLED' to notify all stations the emergency is over"
      D: "Land immediately as required by regulation regardless of circumstances"
    answer: C
    explanation: "When an emergency is resolved, the pilot should transmit 'MAYDAY CANCELLED' (or equivalent cancellation phrase) on the frequency on which the MAYDAY was declared. This notifies all listening stations — including SAR assets that may be mobilizing — that the emergency no longer exists. Source: ISED RIC-21, AIM SAR 3.0."
  - id: q7
    prompt: "The complete MAYDAY call format includes (in order):"
    choices:
      A: "MAYDAY x3, station called, your identification, nature of distress, last known position, heading and speed, altitude, intentions, number of persons on board"
      B: "MAYDAY x3, your name, aircraft type, departure aerodrome, destination"
      C: "MAYDAY x3, your registration only — ATC will ask for more"
      D: "MAYDAY x3, transponder code, fuel remaining, passengers"
    answer: A
    explanation: "The standard MAYDAY call format follows the mnemonic MPDAIINS: MAYDAY x3, station called, identification (call sign), nature of distress, position (last known or current), altitude, intentions, number of persons. Source: ISED RIC-21, AIM SAR 3.0."
---

# Lesson ROC-006: Emergency Communications

**Section:** Radio (ROC-A)  
**Lesson number:** 006  
**Estimated time:** 20 minutes  
**Source:** AIM SAR 3.0, AIM COM 4.0, CARs 602.138, ISED RIC-21, AIM RAC 1.9

---

## Narration Script

No lesson in this course is more operationally important than this one. Emergency radio procedures exist because people have died from improper or delayed communication during in-flight crises. Every element of this lesson — MAYDAY vs PAN-PAN, the emergency transponder codes, the ELT — maps directly to a scenario where correct action can save lives.

---

**MAYDAY — Distress**

"MAYDAY" comes from the French "m'aidez" — help me. It is the international signal for a grave and imminent danger requiring immediate assistance. Use it when:
- The aircraft is on fire
- An engine has failed and terrain is imminent
- A medical emergency is incapacitating a crew member
- Control of the aircraft has been lost or is about to be lost
- Any situation where there is immediate threat to life

MAYDAY is spoken three times consecutively to ensure it is not misheard or confused with other traffic: "MAYDAY MAYDAY MAYDAY."

**Standard MAYDAY Call Format:**

> "MAYDAY MAYDAY MAYDAY, [station called — e.g., Toronto Centre], [your call sign], [nature of distress], [position], [altitude], [intentions], [number of persons on board], [any other relevant information]."

Example: "MAYDAY MAYDAY MAYDAY, Toronto Centre, Cessna Charlie Golf Alfa Bravo Charlie, engine failure, fifteen miles northwest of Orangeville, two thousand five hundred feet, forced landing in field, one POB."

If you cannot reach the assigned ATC frequency, transmit on **121.5 MHz** — the international distress frequency monitored by all ATC units and SAR assets.

---

**PAN-PAN — Urgency**

"PAN-PAN" (from the French "panne" — breakdown) signals an urgency condition. The situation is serious and requires priority handling, but it does not (yet) involve immediate danger to life or the aircraft. Use PAN-PAN when:
- An engine is running rough but still producing power
- A passenger has become seriously ill
- You are lost in deteriorating visibility
- You have declared a precautionary landing

Like MAYDAY, it is spoken three times: "PAN-PAN PAN-PAN PAN-PAN." The format is similar to a MAYDAY call. ATC will prioritize you and may clear frequency for your communications.

Do not hesitate to upgrade from PAN-PAN to MAYDAY if the situation worsens.

---

**Cancelling an Emergency**

When the emergency is resolved — the rough-running engine has been shut down and a landing secured, the sick passenger is stable — you must transmit a cancellation:

> "MAYDAY CANCELLED, [all stations or specific station], [your call sign], all is well."

This is critical. SAR assets may already be mobilizing based on your MAYDAY. Failing to cancel wastes enormous resources and can compromise real emergencies elsewhere.

---

**Emergency Transponder Codes**

Transponders provide ATC with an immediate visual alert in addition to voice communication. Three squawk codes are reserved for emergency use:

| Code | Meaning |
|------|---------|
| **7700** | General emergency (distress) |
| **7600** | Radio failure — NORDO (no radio) |
| **7500** | Unlawful interference (hijack) |

**7700** — Squawk this in any emergency. The code causes an alert symbol to appear on ATC radar displays. Do not delay voice communication while setting it.

**7600** — If your radio fails, immediately squawk 7600. ATC will attempt to contact you by other means, including light signals (covered in ROC-007). Continue navigating as filed or planned and land at the nearest suitable aerodrome.

**7500** — The hijack code. Set it if the aircraft is under unlawful interference. Avoid verbal confirmation in the cockpit if doing so would endanger safety.

**Memory hook for 7s:** "7500 — Seven five, taking me alive (hijack); 7600 — Seven six, radio fix needed (NORDO); 7700 — Seven seven, going to heaven (distress)."

---

**Emergency Locator Transmitters (ELTs)**

An ELT is a crash-survivable radio transmitter that activates automatically on impact (via a G-force switch) and broadcasts a distress signal. Canada requires ELTs on most aircraft under CARs 605.38.

**Modern 406 MHz ELTs (now required on new aircraft):**
- Transmit on 406 MHz for detection by COSPAS-SARSAT satellites
- Also transmit on 121.5 MHz for homing by SAR aircraft
- Include aircraft registration data encoded digitally — no SAR satellite confirmation needed
- Detectable by satellite within minutes

**Older 121.5 MHz ELTs:**
- Transmit only on 121.5 MHz (and 243.0 MHz for military coverage)
- Still in use on older aircraft but being phased out
- Take longer to detect — must be in direct satellite line-of-sight over multiple passes

**What to do if the ELT goes off accidentally:** Notify the nearest ATC unit or FSS immediately and state it was an inadvertent activation. Accidental ELT activations are one of the most common SAR false alarms.

---

**Lost Communications Procedure (NORDO)**

If your radio fails in flight:

1. Squawk **7600**
2. Try to re-establish communications on your last assigned frequency; also try 121.5 MHz
3. If in controlled airspace, continue as filed and look for light gun signals from the tower
4. Land as soon as practicable
5. Notify ATC by any means after landing

---

## Key Points

- MAYDAY = grave and immediate danger; PAN-PAN = urgent but not immediately life-threatening
- Both are spoken three times consecutively
- MAYDAY format: station, call sign, nature, position, altitude, intentions, POB
- Cancel an emergency when resolved — transmit "MAYDAY CANCELLED"
- Emergency squawk codes: 7700 = distress, 7600 = radio failure, 7500 = hijack
- 406 MHz ELTs transmit on both 406 MHz (satellite) and 121.5 MHz (homing)
- NORDO: squawk 7600, try 121.5 MHz, continue as filed, land ASAP, notify ATC after landing

---

*End of Lesson ROC-006.*
