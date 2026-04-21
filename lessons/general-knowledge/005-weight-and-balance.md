---
id: GK-005
topic: general-knowledge
order: 5
slug: weight-and-balance
title: "Weight and Balance"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E Chapter 10
  - POH (aircraft-specific)
questions:
  - id: q1
    prompt: "The centre of gravity (CG) of an aircraft must remain within the approved CG envelope because:"
    choices:
      A: "Exceeding the aft CG limit increases stall speed"
      B: "If CG moves too far forward, the aircraft becomes uncontrollable in pitch"
      C: "The CG envelope defines limits within which the aircraft is stable and controllable; operation outside these limits may make the aircraft uncontrollable"
      D: "Maximum gross weight determines the CG limits"
    answer: C
    explanation: "The CG envelope specifies the forward and aft limits within which the aircraft can be safely controlled. Exceeding the forward limit makes the aircraft nose-heavy — more difficult or impossible to rotate for takeoff and to flare for landing. Exceeding the aft limit reduces pitch stability and can make recovery from unusual attitudes impossible. Source: TP 12880E Chapter 10."
  - id: q2
    prompt: "The moment of a weight is calculated as:"
    choices:
      A: "Weight ÷ Arm"
      B: "Weight × Arm"
      C: "Arm ÷ Weight"
      D: "Weight + Arm"
    answer: B
    explanation: "Moment = Weight × Arm. The arm is the distance from the datum reference plane to the point where the weight acts. The CG is located by dividing total moment by total weight. Source: TP 12880E Chapter 10."
  - id: q3
    prompt: "An aircraft is loaded with a total weight of 2,400 lb and a CG at 43.2 inches aft of the datum. The forward CG limit is 41.0 inches and the aft limit is 47.5 inches. This loading is:"
    choices:
      A: "Outside the forward CG limit — not airworthy"
      B: "Within the CG envelope — airworthy for this loading"
      C: "Outside the aft CG limit — not airworthy"
      D: "Within limits only if the weight is under the maximum gross weight"
    answer: B
    explanation: "CG at 43.2 in is between the forward limit of 41.0 in and the aft limit of 47.5 in, so the CG is within the approved envelope. Weight must also be checked against MGTOW, but the question only asks about CG location. Source: TP 12880E Chapter 10."
  - id: q4
    prompt: "Fuel burn during a flight will cause the CG to shift. This shift:"
    choices:
      A: "Always moves the CG aft"
      B: "Depends on where the fuel tanks are located relative to the datum"
      C: "Always moves the CG forward"
      D: "Has no effect on CG position since fuel weight is not counted in loaded weight"
    answer: B
    explanation: "Fuel is a significant weight, and as it burns off, the CG moves depending on the tank location. If the fuel tanks are aft of the CG, burning fuel moves the CG forward. If tanks are forward of the CG, burning fuel moves it aft. Pilots must check that the CG remains within limits throughout the flight, not just at takeoff. Source: TP 12880E Chapter 10."
  - id: q5
    prompt: "An aircraft operating at a forward CG will:"
    choices:
      A: "Require less back pressure and be more stable, but may lack sufficient pitch-up authority"
      B: "Be unstable and require continuous forward pressure"
      C: "Stall at a lower airspeed than at a mid CG position"
      D: "Require full right rudder to maintain coordinated flight"
    answer: A
    explanation: "A forward CG increases longitudinal stability — the aircraft is more resistant to pitch changes. However, it requires more back pressure to rotate and flare, and at the extreme forward limit, the elevator may not have enough authority to raise the nose for takeoff or landing. Stall speed also increases with forward CG. Source: TP 12880E Chapter 10."
---

# Lesson GK-005: Weight and Balance

**Section:** General Knowledge  
**Lesson number:** 005  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 10, POH (aircraft-specific)

---

## Narration Script

Weight and balance is one of the most practical topics on the PPL exam — it directly affects flight safety and is the pilot's responsibility before every flight. An aircraft that is too heavy or has its weight distributed improperly can be uncontrollable, even if the engine is running perfectly. This lesson walks through the concepts, the math, and the limits.

---

**Why Weight and Balance Matters**

An aircraft is designed to be controllable only within a specific range of weight and centre of gravity positions. Outside those limits:

- Too heavy → higher stall speed, longer takeoff run, reduced climb performance, structural stress
- CG too far forward → nose-heavy; may lack elevator authority to rotate or flare
- CG too far aft → pitch unstable; may be unrecoverable from a stall or unusual attitude

Both weight AND CG must be within limits for every flight.

---

**Key Definitions**

**Datum**: An arbitrary reference plane defined in the aircraft's documents. All arm measurements are taken from the datum. Some aircraft use the firewall, the nose, or the leading edge of the wing as the datum.

**Arm**: The horizontal distance in inches from the datum to the point where a weight acts. Arms forward of the datum may be negative; aft of datum are positive (depends on the datum location for that aircraft).

**Moment**: Moment = Weight × Arm. A moment measures the turning force (torque) a weight creates about the datum. Unit: inch-pounds.

**Centre of Gravity (CG)**: CG = Total Moment ÷ Total Weight. This gives the location of the CG as a distance from the datum.

**CG Envelope (CG Limits)**: The forward and aft CG limits, often also varying with aircraft weight. These limits are published in the POH/AFM.

**Maximum Gross Takeoff Weight (MGTOW)**: The maximum certified weight at which the aircraft can take off. Never exceed this.

---

**The Calculation Process**

1. List all weights (basic empty weight, pilot, passengers, baggage, fuel)
2. Find the arm for each item (from the POH loading data or weight and balance form)
3. Calculate the moment for each item (Weight × Arm)
4. Sum all weights → total weight
5. Sum all moments → total moment
6. Divide total moment by total weight → CG position
7. Check: Is total weight ≤ MGTOW? Is CG within the approved limits?

Both checks must pass.

---

**Fuel Weight**

Avgas (100LL) weighs approximately **6 lb per US gallon** (6.01 lb/USG to be precise). Fuel capacity is usually given in US gallons in the POH. Always check usable fuel — some fuel in the tanks is unusable due to geometry at certain attitudes.

---

**CG Effects on Performance and Handling**

**Forward CG:**
- More stable — aircraft resists pitch changes
- Higher stick forces required
- Higher stall speed (more nose-down tendency → need more AOA to lift nose)
- Risk: may not have sufficient elevator authority to rotate or flare

**Aft CG:**
- Less stable — more sensitive to pitch inputs, "twitchy"
- Lighter stick forces
- Lower stall speed
- Risk: at extreme aft limit, stall recovery may be impossible because the aircraft cannot be pitched nose-down

---

**Weight Effects on Performance**

Higher weight:
- Increases stall speed (stall speed ∝ √weight)
- Requires longer takeoff run (more lift needed → rotate at higher speed)
- Reduces climb rate (more lift = more induced drag, less net thrust available)
- Reduces ceiling
- Increases fuel burn for a given speed

---

**Checking During Flight**

Fuel burns as you fly. If the fuel tanks are aft of the CG, the CG will move forward as fuel burns. If tanks are ahead of the CG, it moves aft. Some aircraft begin flight near the forward CG limit (full fuel) but move toward the aft limit as fuel burns — meaning the aircraft could become unstable partway through a long flight. Always check the CG at takeoff weight AND at estimated landing weight.

---

**Reading a CG Envelope Chart**

The CG envelope chart plots weight on the vertical axis and CG position on the horizontal axis. The shaded area is the approved envelope. Plot your loading point (weight, CG) — if the point falls inside the envelope, you're good. If outside, you must shift ballast, passengers, or baggage to correct.

---

## Key Points

- **Moment = Weight × Arm**; **CG = Total Moment ÷ Total Weight**
- Check both weight (≤ MGTOW) and CG (within limits) before every flight
- **Forward CG**: stable but nose-heavy; possible lack of elevator authority
- **Aft CG**: unstable; possible unrecoverable stall
- Avgas ≈ **6 lb per US gallon**
- CG shifts during flight as fuel burns — check limits at start AND end of flight
- Higher weight = higher stall speed, longer takeoff run, reduced climb

---

*End of Lesson GK-005.*
