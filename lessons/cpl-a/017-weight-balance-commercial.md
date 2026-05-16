---
id: PAL-002
topic: cpl-a
order: 17
slug: weight-balance-commercial
title: "Weight and Balance for Commercial Operations"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/017-weight-balance-commercial.m4a
visual: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual)"
  - "CARs 605.92–605.96 (Weight and Balance)"
  - "Transport Canada CPL-A Written Exam Guide"
  - "Aircraft AFM/POH"
questions:
  - id: q1
    prompt: "Centre of gravity (CG) limits are established primarily to ensure:"
    choices:
      A: "The aircraft can be lifted by the maximum number of passengers"
      B: "The aircraft remains controllable throughout its operating envelope"
      C: "Fuel burn is equal between left and right fuel tanks"
      D: "The landing gear is not overloaded on touchdown"
    answer: B
    explanation: "CG limits define the range within which the aircraft is stable and controllable. A CG too far forward creates a nose-heavy aircraft that may require excessive elevator to rotate on takeoff. A CG too far aft creates instability and may make the aircraft uncontrollable. Source: TP 12880E Chapter 6; CARs 605.92."
  - id: q2
    prompt: "The moment arm in a weight-and-balance calculation is:"
    choices:
      A: "The maximum weight allowed at a given loading station"
      B: "The distance from the datum to the point where a weight is applied"
      C: "The arm length of the flight control surface"
      D: "The distance between the leading edge and the CG"
    answer: B
    explanation: "The moment arm is the horizontal distance from the aircraft's datum (reference point) to the location of a given weight. Moment = weight × arm. Summing all moments and dividing by total weight gives the CG location. Source: TP 12880E Chapter 6."
  - id: q3
    prompt: "Under CARs 605.92, who is responsible for ensuring an aircraft is loaded within its weight and balance limits before flight?"
    choices:
      A: "The aircraft maintenance engineer who last signed the maintenance release"
      B: "The operator's load controller"
      C: "The pilot-in-command"
      D: "The operator's chief pilot"
    answer: C
    explanation: "CARs 605.92 makes the pilot-in-command responsible for ensuring the aircraft is loaded within its approved weight and balance limits prior to flight. While operators may use load control staff, the PIC has final responsibility and cannot delegate it. Source: CARs 605.92."
  - id: q4
    prompt: "If fuel is burned during flight, the effect on CG position depends on:"
    choices:
      A: "Only the total weight reduction — CG position does not change as fuel burns"
      B: "The location of the fuel tanks relative to the CG and datum"
      C: "Whether the engines are burning fuel from the left or right tank"
      D: "The CG always moves forward as fuel burns in any aircraft"
    answer: B
    explanation: "As fuel burns, CG moves toward the CG of the empty aircraft. If fuel tanks are located ahead of the CG datum, burning fuel moves CG aft. If tanks are aft of CG, burning fuel moves CG forward. The pilot must check that CG remains within limits at all points during flight (start, mid-flight, and landing). Source: TP 12880E Chapter 6."
  - id: q5
    prompt: "Maximum Zero Fuel Weight (MZFW) is a structural limit that means:"
    choices:
      A: "The aircraft must carry at least this weight of fuel"
      B: "The maximum weight of the aircraft excluding all fuel in the tanks"
      C: "The aircraft must be below this weight when fuel tanks are empty at landing"
      D: "The maximum weight at which zero-g flight is permitted"
    answer: B
    explanation: "Maximum Zero Fuel Weight (MZFW) is the maximum permissible weight of the aircraft without any fuel in the fuel tanks. It protects the wing structure from excessive bending loads imposed by payload in the fuselage. All weight above MZFW must be fuel. Source: TP 12880E; AFM/POH."
---

# Lesson PAL-002: Weight and Balance for Commercial Operations

**Subject:** Performance & Limitations  
**Lesson number:** 017 (PAL-002)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Extends PPL-A weight and balance. See `lessons/general-knowledge/` for PPL-A W&B foundation lesson.

Topics to be authored:
- CG concepts: datum, moment arm, moment, CG calculation method
- Weight limits: MTOW, MZFW, maximum landing weight, fuel weight
- CG limits: forward limit (elevator authority), aft limit (stability)
- W&B calculation process: index units vs. moment method
- Fuel burn effect on CG: must check CG at all fuel states
- Loading envelopes: reading and plotting on graphs
- Commercial W&B documentation: CARs 605.92 requirements
- Passenger manifests and cargo loading in air taxi (CARs 703)
- Consequences of out-of-limits loading

---

## Narration Script

### Introduction

Weight and balance is one of the most important pre-flight calculations you will perform on every commercial flight, and it is also one of the most frequently misunderstood. At the PPL level, weight and balance is often treated as a checkbox — you verify the aircraft is within limits and move on. At the commercial level, you need to understand the physics behind the limits, perform calculations accurately under time pressure, manage the effect of fuel burn on centre of gravity throughout the flight, and comply with the documentation requirements of CARs for commercial operations. This lesson builds the complete picture. Sources: TP 12880E Chapter 6; CARs 605.92.

### Key Weight Definitions

Several weight terms are used in aircraft documentation, and you must know each precisely.

Basic empty weight is the weight of the aircraft as manufactured, including all permanent equipment, unusable fuel, and full engine oil. It is established by weighing the aircraft and is documented in the weight and balance report. Any permanent modifications or additions to the aircraft change the basic empty weight and require an updated weight and balance report.

Useful load is the difference between the maximum takeoff weight and the basic empty weight. It represents the maximum payload — pilots, passengers, cargo, and usable fuel — the aircraft can carry.

Maximum takeoff weight, abbreviated MTOW, is the maximum certified weight at which the aircraft may begin its takeoff roll. It is established by structural certification and documented in the approved flight manual. No commercial loading may result in a weight above MTOW.

Maximum landing weight, sometimes abbreviated MLW, is the maximum weight at which the aircraft may touch down. In many light aircraft, the MTOW and MLW are the same. In heavier aircraft — particularly those that may need to dump fuel before landing in an emergency — the MLW is lower than the MTOW because landing loads on the structure are higher than takeoff loads.

Maximum zero fuel weight, or MZFW, is the maximum weight of the aircraft excluding all usable fuel. This limit exists because of the bending loads on the wing root during flight: the wing produces upward lift distributed along its span, while the fuselage weight acts downward at the wing root. Fuel stored in wing tanks is in between the wing root and the tip, and it reduces this bending moment. When all fuel is burned, the full bending moment of the fuselage weight must be sustained by the wing structure without the partial relief provided by wing-mounted fuel. MZFW is therefore the structural limit for zero-fuel loading: all weight above MZFW must be usable fuel. Source: TP 12880E.

### The Moment Calculation

The centre of gravity — abbreviated CG — is the point where the aircraft's total weight acts vertically downward. To find the CG, you need to know not just the weight of each item but also where each item is located relative to a reference point called the datum.

Moment is the product of a weight and its distance from the datum. The formula is moment equals weight times arm, where arm is the distance from the datum to the point where the weight is applied. If a passenger weighing 80 kilograms sits in a seat located 2.5 metres from the datum, the moment is 80 times 2.5, which equals 200 kilogram-metres.

To find the aircraft's CG, you sum all the individual moments — engine, airframe, fuel, passengers, cargo — and divide by the total weight. The result gives the CG location as a distance from the datum. You then verify that this distance falls within the forward and aft CG limits specified in the aircraft's weight and balance data.

In practice, the calculation proceeds in four steps. First, list all items and their weights. Second, multiply each weight by its arm to find each moment. Third, add all weights to get total weight and all moments to get total moment. Fourth, divide total moment by total weight to find the CG location. Compare the CG location to the envelope, and confirm both total weight and CG are within limits. Source: TP 12880E Chapter 6.

### CG Limits: Forward and Aft

The approved flight manual specifies a CG envelope — a range of CG positions, expressed as distances from the datum, within which the aircraft must be loaded for all phases of flight. The envelope typically narrows at higher weights because structural and aerodynamic loads are greater.

The forward CG limit is determined by elevator authority. The further forward the CG, the greater the nose-down pitching moment the elevator must counteract during takeoff rotation, flare, and stall recovery. If the CG is too far forward, the elevator may not have sufficient authority to raise the nose to the required angle, making takeoff rotation difficult or impossible at some weight and flap configurations, and making a flare for landing impossible at the appropriate airspeed. Forward CG also increases the stick force required to pull up to stall, which in some respects is a safety feature — it makes inadvertent stalls less likely — but it also means a higher approach speed may be required, increasing landing distance.

The aft CG limit is determined by static stability. When an aircraft with an aft CG is disturbed by a gust or pitch input, the aerodynamic restoring moment from the horizontal tail is reduced because the tail's moment arm to the CG is shorter. At the certified aft CG limit, the aircraft still has adequate static stability — it will return to trimmed flight when disturbed. If the CG is pushed beyond the aft limit, the aircraft may have near-neutral or negative static stability, meaning it will not return to trimmed flight on its own and may diverge from its flight path after a disturbance. In severe cases, the aircraft can enter a deep stall — an unrecoverable stall condition — or become uncontrollable. Operating with an aft CG that exceeds limits is a certification violation and a potentially fatal situation. Source: TP 12880E Chapter 6; CARs 605.92.

### The Loading Envelope

The loading envelope is a graph with CG location on the horizontal axis and gross weight on the vertical axis. The approved operating region is shown as a polygon bounded by the forward CG limit, the aft CG limit, the maximum weight, and in some aircraft, a minimum weight. To confirm that a particular loading is within limits, you calculate the CG location and total weight, then plot this point on the envelope. If the point falls inside the polygon, the loading is within limits. If it falls outside — even slightly — the loading must be adjusted before flight.

Some aircraft use index units instead of actual moments to simplify calculation. An index unit is a reduced-scale moment calculated by dividing the actual moment by a convenient constant and then offsetting by a fixed number. This reduces the arithmetic and the size of the numbers involved, making manual computation more practical. The resulting CG check is performed on an index envelope rather than a moment envelope, but the principle is identical.

### Effect of Fuel Burn on CG

An aspect of weight and balance that is often underappreciated is that burning fuel changes the CG position throughout the flight. Fuel has a weight and a moment — its arm is the distance from the datum to the fuel tank. As fuel is consumed, both the total weight and the total moment decrease, and the CG shifts. The direction of shift depends on whether the fuel tank arm is forward or aft of the current CG.

If the fuel tanks are located forward of the CG, burning fuel reduces the forward moment more than the aft moment, and the CG moves aft during the flight. If the tanks are aft of the CG, the opposite occurs — fuel burn moves the CG forward. In many aircraft, fuel burn moves the CG aft, which means the aircraft that was comfortably within limits at departure may approach or exceed the aft CG limit as fuel burns off in cruise.

For this reason, the weight and balance check for a commercial flight must be conducted at multiple fuel states: at takeoff weight with full fuel, at an intermediate fuel state representing the en route cruise phase, and at landing weight with minimum fuel. If any of these conditions produces a CG outside the envelope, the loading must be adjusted. You cannot simply check takeoff weight and assume all will be well on landing. Source: TP 12880E Chapter 6.

### Moving or Adding Loads

A simple formula allows quick calculation of how moving a weight from one location to another changes the CG. The CG shift equals the weight moved times the distance it was moved, divided by the new total weight. This formula is useful when you discover that the calculated CG is close to a limit and you want to know how much a load shift would help.

For example, if the CG is 5 centimetres forward of the desired position, and you want to move a cargo item weighing 50 kilograms from near the front of the cargo hold to the rear — a distance of 3 metres — the CG shift would be 50 times 3, divided by the total aircraft weight. If the aircraft weighs 1,500 kilograms, the shift would be 150 divided by 1,500, or 0.10 metres or 10 centimetres. Moving the cargo rearward would shift the CG 10 centimetres aft, more than correcting the 5-centimetre forward displacement. In this case, you might move the cargo only partway to get exactly to your target CG. Source: TP 12880E.

### Commercial Documentation Requirements

CARs 605.92 places the responsibility for weight and balance compliance on the pilot-in-command. Before every commercial flight, the PIC must verify that the aircraft is loaded within its approved weight and CG limits. This verification must be documented.

For air taxi operations under CARs Part VII, the documentation requirements may include a passenger manifest listing each passenger, a cargo manifest listing freight weights and locations, and a weight and balance calculation or trim sheet showing the derived CG and total weight. These documents may be required to be retained for a specified period after the flight.

In some commercial operations, a load controller or operations agent prepares the initial weight and balance calculation. The PIC reviews and verifies it before accepting the aircraft for flight. If the PIC disagrees with the calculation or believes the loading is incorrect, the PIC has the authority and the responsibility to require the load to be adjusted before departure. This authority cannot be overridden by schedule pressure or operator instruction. Source: CARs 605.92; CARs 703.

### Summary

In this lesson you learned the key weight definitions: basic empty weight, useful load, MTOW, maximum landing weight, and MZFW. The CG is calculated as total moment divided by total weight, where moment equals weight times arm for each item. The forward CG limit is determined by elevator authority; the aft CG limit is determined by static stability. Loading outside either limit is both a regulatory violation and a serious safety hazard. The loading envelope graph allows rapid visual confirmation that a given weight and CG combination is within limits. Fuel burn changes the CG position during flight, so the check must be done at multiple fuel states. Moving a load changes CG by an amount equal to the weight moved times distance moved, divided by the new total weight. CARs 605.92 places the weight and balance responsibility firmly on the pilot-in-command, who cannot delegate this duty.

---

*End of Lesson PAL-002.*
