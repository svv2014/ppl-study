---
id: NAV-007
topic: navigation
order: 7
slug: fuel-planning
title: "Fuel Planning"
duration_min: 20
status: complete
audio: null
visual: /visuals/nav007-fuel-planning.html
sources:
  - TP 12880E
  - CARs 602.88
questions:
  - id: q1
    prompt: "Under CARs 602.88, what is the minimum fuel reserve required for a day VFR cross-country flight?"
    choices:
      A: "20 minutes at normal cruise speed"
      B: "30 minutes at normal cruise speed"
      C: "45 minutes at normal cruise speed"
      D: "1 hour at normal cruise speed"
    answer: B
    explanation: "CARs 602.88 requires day VFR aircraft to carry enough fuel to reach the destination plus a 30-minute reserve at normal cruise speed. Night VFR requires 45 minutes. Source: CARs 602.88."
  - id: q2
    prompt: "An aircraft burns 9 USG per hour. The planned flight is 2 hours 20 minutes. How much fuel is required including the day VFR reserve?"
    choices:
      A: "21 USG"
      B: "23.5 USG"
      C: "25.5 USG"
      D: "27 USG"
    answer: C
    explanation: "Enroute time = 2 hours 20 min = 2.333 hours. Enroute fuel = 9 × 2.333 = 21 USG. Reserve = 9 × 0.5 hours = 4.5 USG. Total = 21 + 4.5 = 25.5 USG. Source: CARs 602.88, TP 12880E Chapter 9."
  - id: q3
    prompt: "An aircraft has 40 USG of usable fuel. It burns 10 USG per hour. What is the maximum safe endurance for a day VFR flight (including mandatory reserve)?"
    choices:
      A: "3.5 hours"
      B: "4.0 hours"
      C: "3.0 hours"
      D: "4.5 hours"
    answer: A
    explanation: "Reserve required: 0.5 hours × 10 USG/hr = 5 USG. Usable fuel for flight: 40 − 5 = 35 USG. Endurance = 35 ÷ 10 = 3.5 hours. The 5 USG reserve must not be used except in an emergency. Source: CARs 602.88."
  - id: q4
    prompt: "True Airspeed (TAS) is 110 knots and there is a direct headwind of 20 knots. Fuel burn is 8 USG/hour. The leg is 120 NM. How much fuel is burned on this leg?"
    choices:
      A: "8.0 USG"
      B: "8.7 USG"
      C: "10.5 USG"
      D: "10.7 USG"
    answer: D
    explanation: "Ground speed = TAS − headwind = 110 − 20 = 90 knots. Time = (120 ÷ 90) × 60 = 80 minutes = 1.333 hours. Fuel = 8 × 1.333 = 10.7 USG. Note: if you mistakenly use TAS (110 kt) instead of GS, you get 8 × (120/110) × 60/60 = 8.7 USG — an underestimate. Always use ground speed for fuel calculations. Source: TP 12880E Chapter 9."
  - id: q5
    prompt: "Which of the following is the correct formula for calculating fuel required for a VFR flight leg?"
    choices:
      A: "Fuel = Distance × Burn Rate"
      B: "Fuel = Burn Rate × (Distance ÷ Ground Speed)"
      C: "Fuel = Burn Rate × True Airspeed"
      D: "Fuel = Distance ÷ Burn Rate"
    answer: B
    explanation: "Fuel required = Burn Rate (USG/hr) × Time (hours). Since Time = Distance ÷ Ground Speed, the formula becomes Fuel = Burn Rate × (Distance ÷ Ground Speed). Ground speed (not TAS) must be used because it accounts for wind effect on actual travel time. Source: TP 12880E Chapter 9."
---

# Lesson NAV-007: Fuel Planning

**Section:** Navigation  
**Lesson number:** 007  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 9, CARs 602.88

---

## Narration Script

Welcome to Lesson NAV-007. Running out of fuel in an aircraft is not a mechanical failure — it is a planning failure. Every year, fuel exhaustion is one of the leading causes of forced landings in Canada. In this lesson you will learn how to calculate fuel requirements accurately, understand the Canadian regulatory minimums, and build the habit of conservative fuel planning that professional pilots use throughout their careers.

---

**Why Fuel Planning Matters**

Unlike a car, an aircraft cannot pull over when the fuel gauge approaches empty. A fuel emergency in the air can develop quickly, and options for landing are limited by terrain and weather. Precise fuel planning is therefore both a regulatory requirement and a core airmanship skill.

The Transport Canada PPL written exam consistently tests fuel planning calculations. Master the formula and the regulatory reserves, and you will handle these questions with confidence.

---

**The Fundamental Fuel Formula**

All fuel planning starts with this relationship:

**Fuel = Burn Rate × Time**

Where:
- **Burn Rate** is in USG/hour (US gallons per hour) or litres/hour
- **Time** is in decimal hours

And since Time = Distance ÷ Ground Speed:

**Fuel = Burn Rate × (Distance ÷ Ground Speed)**

This form is useful when you know the leg distance and ground speed but haven't yet calculated the time.

---

**Ground Speed vs. True Airspeed**

A critical point: you must use **ground speed**, not True Airspeed (TAS), when calculating fuel for a specific leg.

Ground speed accounts for wind:
- Headwind: GS = TAS − headwind component (you fly slower over the ground; more fuel per NM)
- Tailwind: GS = TAS + tailwind component (you fly faster over the ground; less fuel per NM)

If you use TAS instead of GS and you have a significant headwind, you will underestimate fuel required and potentially arrive with less than the required reserve.

---

**Canadian Fuel Reserve Requirements (CARs 602.88)**

Transport Canada specifies minimum fuel reserves for VFR flight:

| Flight Type | Required Reserve |
|-------------|-----------------|
| Day VFR | 30 minutes at normal cruise speed |
| Night VFR | 45 minutes at normal cruise speed |

These reserves are minimums. In practice, pilots often carry more — particularly when flying in remote areas, when forecast winds are uncertain, or when destination weather is marginal.

The reserve is calculated at normal cruise power, which is the same power setting used for the enroute fuel calculation. It is not an emergency reserve — if you find yourself burning into the reserve, you should already be diverting to an alternate or declaring minimum fuel to ATC.

---

**Total Fuel Required: The Full Calculation**

For a day VFR flight, total fuel required is:

**Total fuel = Enroute fuel + 30-minute reserve fuel**

Where:
- Enroute fuel = Burn rate × Enroute time (hours)
- Reserve fuel = Burn rate × 0.5 hours

Example:
- Flight distance: 200 NM
- Ground speed: 100 knots
- Fuel burn: 9 USG/hour

Step 1 — Time: (200 ÷ 100) × 60 = 120 minutes = 2.0 hours  
Step 2 — Enroute fuel: 9 × 2.0 = 18.0 USG  
Step 3 — Reserve: 9 × 0.5 = 4.5 USG  
Step 4 — Total: 18.0 + 4.5 = **22.5 USG**

Before departure, confirm the aircraft has at least 22.5 USG of **usable fuel**.

---

**Usable vs. Total Fuel**

Aircraft fuel systems retain a small amount of fuel that cannot be pumped to the engine — this is **unusable fuel**, also called sump fuel or undrainable fuel. When checking fuel quantity:

- **Total fuel** = all fuel in the tanks
- **Usable fuel** = total minus unusable

Fuel calculations must always use usable fuel. Check the aircraft's Pilot Operating Handbook (POH) for the specific unusable fuel quantity for your aircraft type. On training aircraft it is typically 1–2 litres per tank.

---

**Calculating Endurance**

Sometimes you need to know how long you can fly on available fuel, rather than how much fuel a specific route requires:

**Endurance (hours) = Usable fuel ÷ Burn rate**

Then subtract the required reserve to get the **safe planning endurance**:

**Safe endurance = (Usable fuel − Reserve fuel) ÷ Burn rate**

Example:
- Usable fuel: 36 USG
- Burn rate: 9 USG/hour
- Reserve: 9 × 0.5 = 4.5 USG

Safe endurance = (36 − 4.5) ÷ 9 = 31.5 ÷ 9 = **3.5 hours**

This means you can plan legs totalling 3.5 hours before you must land. The remaining 4.5 USG stays as your 30-minute reserve.

---

**USG vs. Litres**

Most Canadian training aircraft have fuel gauges calibrated in US gallons (USG), and aircraft performance charts use USG. However, fuel is sold at Canadian airports by the litre. Know the conversion:

- 1 USG = 3.785 litres
- 1 litre = 0.264 USG

Example: You calculated you need 22.5 USG. How many litres should you order?

22.5 × 3.785 = **85.2 litres**

---

**Multi-Leg Fuel Planning**

For a flight with multiple legs and different winds, calculate fuel for each leg separately, then sum them:

| Leg | Distance | GS | Time (hr) | Fuel (USG) |
|-----|----------|----|-----------|------------|
| 1 | 80 NM | 90 kt | 0.89 | 8.0 |
| 2 | 120 NM | 110 kt | 1.09 | 9.8 |
| Total enroute | — | — | 1.98 | 17.8 |
| Reserve (30 min) | — | — | 0.5 | 4.5 |
| **Total required** | — | — | — | **22.3 USG** |

(Burn rate 9 USG/hr used throughout)

---

**Practical Habits**

Good fuel planning habits to develop now:

1. **Check fuel quantity visually** before every flight — fuel gauges in light aircraft are notoriously imprecise
2. **Dip the tanks** (stick or calibrated dip gauge) if the exact quantity matters
3. **Calculate fuel required first**, then confirm you have enough — not the other way around
4. **Add a personal buffer** — plan for 45 minutes even on day flights in areas with limited alternates
5. **Monitor fuel in-flight** — check fuel quantity at each planned checkpoint and compare to your calculated consumption

---

## Quick Reference: Fuel Planning

| Formula | Purpose |
|---------|---------|
| Fuel = Burn Rate × Time | Enroute fuel for a leg |
| Fuel = Burn Rate × (Dist ÷ GS) | Direct from distance and GS |
| Reserve = Burn Rate × 0.5 hr | Day VFR 30-min reserve |
| Total = Enroute + Reserve | Total fuel required |
| Endurance = Usable ÷ Burn Rate | How long can you fly? |

**CARs 602.88 Reserves:**
- Day VFR: 30 minutes at cruise
- Night VFR: 45 minutes at cruise

**Conversions:** 1 USG = 3.785 litres

---

*End of Lesson NAV-007.*
