---
id: GK-013
topic: general-knowledge
order: 13
slug: load-factor
title: "Load Factor and Maneuvering Speed"
duration_min: 20
status: complete
audio: null
visual: /visuals/gk013-load-factor.html
sources:
  - TP 12880E Chapter 3
  - TP 12880E Chapter 4
  - POH (aircraft-specific)
questions:
  - id: q1
    prompt: "Load factor is defined as:"
    choices:
      A: "The ratio of aircraft weight to maximum gross takeoff weight"
      B: "The total aerodynamic load on the airframe divided by the aircraft weight"
      C: "The weight of passengers and cargo divided by empty aircraft weight"
      D: "The ratio of thrust to drag in level flight"
    answer: B
    explanation: "Load factor (expressed in 'G') is the ratio of the total aerodynamic lift force acting on the aircraft to its weight. In straight and level unaccelerated flight, lift equals weight and load factor is 1 G. In turns, pullouts, or turbulence, load factor increases. Source: TP 12880E Chapter 3."
  - id: q2
    prompt: "In a level 60-degree banked turn, the load factor acting on the aircraft is:"
    choices:
      A: "1.0 G"
      B: "1.41 G"
      C: "2.0 G"
      D: "3.0 G"
    answer: C
    explanation: "In a level banked turn, load factor = 1/cos(bank angle). At 60°: load factor = 1/cos(60°) = 1/0.5 = 2.0 G. The wings must generate twice the aircraft's weight in lift — half to support the aircraft against gravity and half to provide the centripetal force for the turn. Source: TP 12880E Chapter 3."
  - id: q3
    prompt: "Va (manoeuvring speed) is important because:"
    choices:
      A: "It is the maximum speed for flight in turbulent air — above Va, structural damage may result from full control deflection"
      B: "It is the minimum speed for stable cruise flight"
      C: "It is the maximum speed for extending flaps"
      D: "It defines the top of the green arc on the airspeed indicator"
    answer: A
    explanation: "Va is the design manoeuvring speed — at or below Va, the aircraft will stall before structural loads exceed the certified limit. Above Va, full or abrupt control inputs can produce loads that exceed the airframe's structural limit load factor. In turbulence, maintain airspeed at or below Va. Va decreases as aircraft weight decreases. Source: TP 12880E Chapter 4."
  - id: q4
    prompt: "A normal-category light aircraft is certified to a positive limit load factor of:"
    choices:
      A: "+2.5 G"
      B: "+3.8 G"
      C: "+6.0 G"
      D: "+9.0 G"
    answer: B
    explanation: "Normal category aircraft are certified to a positive limit load factor of +3.8 G (and typically a negative limit of −1.52 G). Utility category aircraft are certified to +4.4 G. Aerobatic category aircraft are certified to +6.0 G and −3.0 G. Exceeding the limit load factor risks permanent structural deformation; exceeding the ultimate load factor risks structural failure. Source: TP 12880E Chapter 4."
  - id: q5
    prompt: "As bank angle increases in a level coordinated turn, stall speed:"
    choices:
      A: "Decreases because centrifugal force assists lift"
      B: "Remains the same — stall is only a function of angle of attack"
      C: "Increases because the load factor increases and more lift is required"
      D: "Increases only beyond 45° of bank"
    answer: C
    explanation: "Stall speed increases with the square root of the load factor: Vs(banked) = Vs(level) × √(load factor). At 60° bank, load factor is 2.0 G, so stall speed = Vs × √2 ≈ 1.41 × Vs. The aircraft must fly at a higher airspeed in a steep turn to avoid stalling — this is a critical safety consideration near the ground. Source: TP 12880E Chapter 3."
---

# Lesson GK-013: Load Factor and Maneuvering Speed

**Section:** General Knowledge  
**Lesson number:** 013  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapters 3–4, POH (aircraft-specific)

---

## Narration Script

Load factor is the concept that connects aerobatics, turbulence, steep turns, and structural limits. Understanding it explains why steep turns near the ground are so dangerous, why you slow down in turbulence, and how the airframe's certified limits protect — or fail to protect — you. This lesson covers load factor, the V-g diagram, manoeuvring speed, and how they relate to stall speed.

---

**What Is Load Factor?**

In straight and level unaccelerated flight, the wings generate lift equal to the aircraft's weight. The load factor is **1 G** — you feel your normal weight in the seat.

When the aircraft manoeuvres — banks, pulls up, or hits turbulence — the wings must generate more lift than the aircraft's weight. The **load factor** (also called G-load or G-force) is the ratio of the total lift force to the aircraft's weight:

**Load factor (n) = Lift / Weight**

In straight and level flight: n = 1.0 G  
In a banked level turn: n = 1 / cos(bank angle)

**Load factor in level turns:**

| Bank Angle | Load Factor (G) |
|---|---|
| 0° | 1.0 |
| 30° | 1.15 |
| 45° | 1.41 |
| 60° | 2.0 |
| 75° | 3.86 |
| 80° | 5.76 |

Notice how steeply G increases beyond 60°. A 75° bank requires nearly 4 G — an extreme structural and physiological demand.

---

**Positive and Negative G**

**Positive G (upward acceleration)**: the aircraft is pushed into the seat. Wings generate lift upward (or in coordinated turns, inward toward the turn centre). Positive G is felt in normal manoeuvring.

**Negative G (downward acceleration)**: the aircraft pushes the pilot out of the seat toward the harness. Occurs in pushover manoeuvres, inverted flight, or severe downdrafts. Negative G is more physiologically stressful and is limited more severely by the airframe.

---

**Structural Limits and Categories**

Aircraft are certified in categories that define the structural limits they are designed to withstand:

| Category | Positive Limit G | Negative Limit G |
|---|---|---|
| Normal | +3.8 | −1.52 |
| Utility | +4.4 | −1.76 |
| Aerobatic | +6.0 | −3.0 |

**Limit load factor**: the maximum G load the structure is designed to withstand without **permanent deformation**. A properly manufactured aircraft can reach the limit load factor repeatedly.

**Ultimate load factor**: 1.5× the limit load factor. The structure may fail at or beyond the ultimate load factor. This is a one-time event — structural failure.

**Operating the aircraft beyond the limit load factor does not guarantee immediate failure** (there is a safety margin to the ultimate load factor), but it may permanently deform structure and require immediate inspection. The aircraft is no longer airworthy until inspected and cleared by an AME.

---

**The V-g Diagram (Manoeuvre Envelope)**

The V-g diagram (also called the flight envelope or manoeuvre envelope) plots load factor (G) on the vertical axis against airspeed (V) on the horizontal axis. It defines the safe operating region.

Key boundaries:
- **Upper curved boundary (stall line)**: the maximum G achievable at each airspeed before the wing stalls. At low speed, the wing can only generate limited G before stalling.
- **Upper horizontal line**: the positive limit load factor (+3.8 G for normal category)
- **Lower curved boundary (negative stall line)**: the minimum G achievable before the wing stalls in inverted or negative G
- **Lower horizontal line**: the negative limit load factor
- **Right vertical line (Vne)**: the never-exceed speed — above this speed, structural integrity is not guaranteed from dynamic pressure alone, even in level flight

**Design manoeuvring speed (Va)**: the intersection of the upper curved boundary (stall line) and the upper limit load factor line. At Va, the aircraft reaches the structural limit load factor exactly as the wing stalls. Flying at or below Va means full, abrupt control deflections will stall the aircraft before exceeding structural limits.

---

**Maneuvering Speed (Va)**

**Va** is the maximum speed at which full, abrupt application of any one control will not overstress the airframe. It is published in the POH.

**Critical rule**: below Va, the aircraft stalls before structural limits are reached. Above Va, full control deflection or severe turbulence can impose loads exceeding the limit load factor and cause structural damage.

**Practical application**:
- In turbulence: slow to Va or below and fly conservatively — smooth control inputs, avoid aggressive manoeuvring
- Never make full, abrupt control deflections above Va

**Va varies with weight**: a lighter aircraft has a lower Va. Less mass means the same aerodynamic force produces a higher G for a given structural load. Most POHs provide Va at various weights.

---

**Effect of Load Factor on Stall Speed**

In straight and level flight, the aircraft stalls at Vs (the published stall speed). In a banked turn or pulling manoeuvre, the wing must generate more lift → it reaches the critical angle of attack at a higher airspeed → **stall speed increases**.

Stall speed in a manoeuvre = Vs × √(load factor)

**Examples (assuming Vs = 50 knots wings-level):**

| Bank Angle | Load Factor | Stall Speed |
|---|---|---|
| 0° | 1.0 G | 50 kt |
| 30° | 1.15 G | 54 kt |
| 45° | 1.41 G | 59 kt |
| 60° | 2.0 G | 71 kt |

This is why steep turns near the ground are so dangerous: at 60° bank, the stall speed is 41% higher than wings-level. A slow base-to-final turn with a tightening bank is a known fatal accident scenario.

---

**Turbulence and Structural Stress**

Turbulence imposes dynamic loads on the airframe — gusts increase the angle of attack momentarily, generating sudden lift spikes that translate to increased G loads.

**Turbulence penetration speed (Vb or Va)**: slow to Va or below before entering reported or anticipated turbulence. At lower speeds, the aircraft is more likely to stall before exceeding structural limits in a gust.

**Gust load factor**: the G increment from a gust depends on gust velocity, aircraft speed, and the lift curve slope of the wing. Faster aircraft experience more severe gust-induced G for the same gust intensity.

---

**Summary of V-Speeds Covered in This Lesson**

| Speed | Definition |
|---|---|
| Va | Design manoeuvring speed — max speed for full control deflection in turbulence |
| Vne | Never-exceed speed (red line) |
| Vs | Stall speed in specified configuration (green arc bottom = Vs1) |
| Vno | Maximum structural cruising speed (top of green arc) — caution range begins above |

---

## Key Points

- **Load factor** = Lift / Weight; 1 G in level flight; increases in banked turns
- At **60° bank**: load factor = 2.0 G; stall speed = 1.41 × Vs
- **Normal category limit**: +3.8 G / −1.52 G; exceeding risks permanent deformation or failure
- **Va (manoeuvring speed)**: never make full control deflections above Va; Va decreases as weight decreases
- In turbulence: slow to Va or below, fly smoothly
- Stall speed in a turn = Vs × √(load factor) — steep turns greatly increase stall speed
- The V-g diagram shows the safe flight envelope; Va is where stall line meets limit G

---

*End of Lesson GK-013.*
