---
id: GK-002
topic: general-knowledge
order: 2
slug: four-forces
title: "Four Forces of Flight"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E Chapter 3
  - TP 12880E Chapter 4
questions:
  - id: q1
    prompt: "As angle of attack increases beyond the critical angle, the wing will:"
    choices:
      A: "Produce more lift proportionally to the increase in angle"
      B: "Stall — airflow separates from the upper surface, causing an abrupt loss of lift"
      C: "Generate more drag but maintain the same lift"
      D: "Enter a spiral dive due to increased induced drag"
    answer: B
    explanation: "Beyond the critical angle of attack (typically around 15–18°), airflow separates from the upper wing surface. Lift drops sharply and drag increases dramatically — this is a stall. The stall is an aerodynamic event defined by angle of attack, not airspeed. Source: TP 12880E Chapter 3."
  - id: q2
    prompt: "Induced drag is caused by:"
    choices:
      A: "The friction of air molecules moving over the wing surface"
      B: "Wingtip vortices created by the pressure differential between the upper and lower wing surfaces"
      C: "The frontal area of the aircraft pushing through the air"
      D: "Interference between the wing and fuselage airflows"
    answer: B
    explanation: "Induced drag is a byproduct of lift. High-pressure air under the wing spills around the wingtip to the low-pressure area on top, creating vortices. These vortices cause a downwash that tilts the lift vector rearward, producing induced drag. Induced drag increases as lift (and angle of attack) increases. Source: TP 12880E Chapter 3."
  - id: q3
    prompt: "In straight and level flight at constant airspeed, which statement about the four forces is correct?"
    choices:
      A: "Lift equals weight; thrust equals drag"
      B: "Lift is greater than weight; thrust equals drag"
      C: "Lift equals weight; thrust is greater than drag"
      D: "All four forces are zero"
    answer: A
    explanation: "In unaccelerated straight and level flight, the four forces are in equilibrium: lift equals weight (no vertical acceleration) and thrust equals drag (no horizontal acceleration). Source: TP 12880E Chapter 3."
  - id: q4
    prompt: "The lift equation shows that if airspeed is halved, lift will:"
    choices:
      A: "Decrease by half"
      B: "Decrease to one quarter"
      C: "Double"
      D: "Remain the same if angle of attack is increased"
    answer: B
    explanation: "Lift is proportional to the square of airspeed (L = ½ρV²CL·S). If V is halved, V² is one quarter — so lift drops to one quarter of its original value, all else equal. To maintain the same lift at half the speed, you would need to increase CL (angle of attack) by a factor of four. Source: TP 12880E Chapter 3."
  - id: q5
    prompt: "Profile drag (parasite drag) varies with airspeed in which way?"
    choices:
      A: "Decreases as airspeed increases"
      B: "Is constant regardless of airspeed"
      C: "Increases as airspeed increases"
      D: "Is highest at low airspeed and decreases at cruise speed"
    answer: C
    explanation: "Parasite (profile) drag includes form drag, skin friction drag, and interference drag. It increases with airspeed — specifically, it increases with the square of velocity. As speed doubles, parasite drag quadruples. This is opposite to induced drag, which decreases as speed increases. Source: TP 12880E Chapter 3."
---

# Lesson GK-002: Four Forces of Flight

**Section:** General Knowledge  
**Lesson number:** 002  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapters 3–4

---

## Narration Script

Understanding how a wing generates lift — and what limits that lift — is fundamental to understanding why aircraft behave the way they do. This lesson covers the four forces, the lift equation, drag types, and the critical concept of angle of attack. Every performance and stability topic builds on this.

---

**The Four Forces**

In flight, four forces act on an aircraft:

1. **Lift** — acts upward, perpendicular to the relative airflow
2. **Weight** — acts downward through the centre of gravity
3. **Thrust** — acts forward along the flight path (roughly)
4. **Drag** — acts rearward, opposing the direction of motion

In straight and level, unaccelerated flight, these forces are in equilibrium: lift equals weight, thrust equals drag. Any imbalance produces acceleration.

---

**How Wings Generate Lift**

A wing's cross-sectional shape is an aerofoil. The upper surface is more curved (cambered) than the lower surface. When the wing moves through air:

- Air must travel a greater distance over the curved upper surface, so it accelerates.
- By Bernoulli's principle, faster-moving air has lower pressure.
- The pressure difference — low pressure above, higher pressure below — creates a net upward force: **lift**.

Newton's third law also contributes: the wing deflects air downward (downwash), and the reaction force pushes the wing upward.

**Angle of Attack (AOA)** is the angle between the chord line (a straight line from the leading edge to trailing edge) and the relative airflow. As AOA increases, lift increases — up to a point. Beyond the **critical angle of attack** (typically around 15–18 degrees), airflow can no longer follow the upper wing surface. It separates, creating turbulent flow. Lift drops abruptly and drag increases sharply. This is a **stall**.

Key point: a stall is always caused by exceeding the critical angle of attack, not by low airspeed. An aircraft can stall at any airspeed if the critical AOA is exceeded.

---

**The Lift Equation**

Lift = ½ × ρ × V² × CL × S

Where:
- ρ = air density
- V = airspeed (velocity)
- CL = coefficient of lift (depends on AOA and wing shape)
- S = wing area

The important relationship: lift is proportional to **V squared**. Halving the airspeed reduces lift to one quarter. This is why stall speed increases in a bank or at higher weight — you need more lift, so you need more AOA to compensate.

---

**Types of Drag**

Drag divides into two main categories:

**1. Induced Drag** — a byproduct of lift production. High-pressure air under the wing spills around the wingtip to the low-pressure area on top, creating wingtip vortices. These vortices produce a downwash that tilts the lift vector slightly rearward, resulting in a rearward force component: induced drag. Induced drag **increases as lift increases** (higher AOA, lower speed, heavier aircraft). It is highest at low airspeed.

**2. Parasite Drag** — caused by anything that doesn't generate lift:
- **Form drag**: the shape of the aircraft pushing through air
- **Skin friction drag**: air molecules sticking to the surface
- **Interference drag**: airflow interaction at junctions (wing-fuselage)

Parasite drag **increases with the square of airspeed**. At cruise speeds, parasite drag dominates.

**Total drag** is the sum of induced and parasite drag. It has a U-shaped curve: high at low speed (induced dominates), decreasing to a minimum at a specific speed, then increasing at high speed (parasite dominates). The speed of minimum total drag is the most efficient speed — this is important for endurance and glide range calculations.

---

**Glide Ratio**

In engine-out glide, the aircraft trades altitude for forward distance. The best glide speed corresponds to the speed of maximum lift-to-drag ratio (best L/D). Flying faster or slower than best glide airspeed reduces glide range. The POH specifies the best glide speed for each aircraft.

---

**Weight and Loading**

Higher weight requires more lift, which means higher AOA at any given speed — and therefore more induced drag. Higher weight also raises the stall speed. The stall speed increases with the square root of the weight ratio: if weight increases 21%, stall speed increases by about 10%.

---

## Key Points

- **Four forces in balance**: lift = weight, thrust = drag (straight and level, constant speed)
- **Stall** = exceeding critical angle of attack; not caused by low airspeed alone
- **Lift ∝ V²**: halve airspeed → lift drops to one quarter
- **Induced drag**: byproduct of lift; highest at low speed, decreases with speed
- **Parasite drag**: form + friction + interference; increases with speed (∝ V²)
- **Total drag minimum** = most efficient airspeed (best glide, best endurance)
- Higher weight raises stall speed and increases induced drag

---

*End of Lesson GK-002.*
