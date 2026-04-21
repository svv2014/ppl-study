---
id: NAV-006
topic: navigation
order: 6
slug: time-speed-distance
title: "Time-Speed-Distance Calculations"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E
questions:
  - id: q1
    prompt: "An aircraft travels 150 NM at a ground speed of 120 knots. How long does the flight take?"
    choices:
      A: "60 minutes"
      B: "72 minutes"
      C: "75 minutes"
      D: "90 minutes"
    answer: C
    explanation: "Time = (Distance ÷ Speed) × 60 = (150 ÷ 120) × 60 = 1.25 × 60 = 75 minutes. Alternatively: 120 knots = 2 NM per minute, so 150 NM ÷ 2 NM/min = 75 minutes. Source: TP 12880E Chapter 9."
  - id: q2
    prompt: "A pilot departs at 13:30 local time for a 180 NM flight at a ground speed of 90 knots. What is the estimated time of arrival (ETA)?"
    choices:
      A: "15:00"
      B: "15:30"
      C: "16:00"
      D: "16:30"
    answer: B
    explanation: "Time = (180 ÷ 90) × 60 = 2.0 × 60 = 120 minutes = 2 hours. ETA = 13:30 + 2:00 = 15:30. At 90 knots ground speed, the aircraft covers 1.5 NM per minute, so 180 NM takes 120 minutes exactly. Source: TP 12880E Chapter 9."
  - id: q3
    prompt: "Using the 60:1 rule, an aircraft at 90 knots ground speed will cover approximately how many nautical miles in 40 minutes?"
    choices:
      A: "36 NM"
      B: "48 NM"
      C: "54 NM"
      D: "60 NM"
    answer: D
    explanation: "At 90 knots, the aircraft covers 1.5 NM per minute (90 ÷ 60 = 1.5). In 40 minutes: 1.5 × 40 = 60 NM. Alternatively, using the 60:1 mental shortcut: 90 knots ÷ 60 = 1.5 NM/min × 40 min = 60 NM. Source: TP 12880E Chapter 9."
  - id: q4
    prompt: "An aircraft burns fuel at 8 USG per hour. The planned flight is 2 hours 15 minutes. How much fuel is burned (excluding reserve)?"
    choices:
      A: "14 USG"
      B: "16 USG"
      C: "18 USG"
      D: "20 USG"
    answer: C
    explanation: "2 hours 15 minutes = 2.25 hours. Fuel = burn rate × time = 8 × 2.25 = 18 USG. Convert minutes to decimal hours: 15 min ÷ 60 = 0.25 hours. Source: TP 12880E Chapter 9."
  - id: q5
    prompt: "An aircraft travels at 105 knots ground speed for 48 minutes. What distance was covered?"
    choices:
      A: "72 NM"
      B: "78 NM"
      C: "84 NM"
      D: "90 NM"
    answer: C
    explanation: "Distance = Speed × Time = 105 × (48 ÷ 60) = 105 × 0.8 = 84 NM. Or: 105 knots ÷ 60 = 1.75 NM/min × 48 min = 84 NM. Source: TP 12880E Chapter 9."
---

# Lesson NAV-006: Time-Speed-Distance Calculations

**Section:** Navigation  
**Lesson number:** 006  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 9

---

## Narration Script

Welcome to Lesson NAV-006. This is one of the most heavily tested topics on the Transport Canada PPL written exam. Time, speed, and distance calculations — TSD — appear in navigation questions, fuel planning questions, and ETA questions. The math itself is simple, but you need to be comfortable converting between hours and minutes, and you need to know when to use the E6B and when mental math is faster.

---

**The Basic TSD Formula**

Everything in this lesson derives from one relationship:

**Distance = Speed × Time**

From this, two other forms follow:

**Speed = Distance ÷ Time**

**Time = Distance ÷ Speed**

In aviation:
- Distance is in **nautical miles (NM)**
- Speed is in **knots** (nautical miles per hour)
- Time must be in **hours** when using the formula directly

The most common mistake students make is forgetting to convert minutes to decimal hours. If your flight time is 45 minutes, you must use 0.75 hours in the formula, not 45.

---

**Converting Minutes to Decimal Hours**

To convert minutes to decimal hours, divide by 60:

- 30 min = 30 ÷ 60 = 0.50 hours
- 45 min = 45 ÷ 60 = 0.75 hours
- 20 min = 20 ÷ 60 = 0.333 hours
- 90 min = 90 ÷ 60 = 1.50 hours
- 2 hours 15 min = 2 + (15 ÷ 60) = 2.25 hours

On the exam, you'll often be given a time in mixed hours-and-minutes form. Always convert it before plugging it into the formula.

---

**The 60:1 Shortcut — NM per Minute**

For quick mental math, it's often easier to think in **NM per minute** rather than knots (which are NM per hour):

**NM per minute = Knots ÷ 60**

Some useful benchmarks:

| Speed (knots) | NM per minute |
|--------------|---------------|
| 60 | 1.0 |
| 90 | 1.5 |
| 120 | 2.0 |
| 150 | 2.5 |
| 180 | 3.0 |

Once you know NM per minute, multiply by elapsed time (in minutes) to get distance. This is faster than converting minutes to hours for most mental math problems.

---

**Using the E6B for TSD**

The circular slide rule side of the navigation computer (E6B) has a dedicated TSD scale. You set two of the three values and read the third:

- Set the rate index (speed) on the inner scale to align with 60 on the outer scale (this sets the "per hour" reference)
- Then find your time on the outer scale and read distance on the inner scale, or vice versa

For the PPL written exam, you may be allowed to use an E6B or plotter. Even if you are, practise the mental math — exam time pressure makes it easy to mis-read the circular scales.

---

**Calculating ETA**

To find your Estimated Time of Arrival:

1. Calculate time en route in minutes: Time = (Distance ÷ GS) × 60
2. Add that time to your departure time (or last checkpoint time)

Be careful with the arithmetic when time wraps past the top of an hour. Example:

Departure: 09:50 local  
Time en route: 75 minutes

09:50 + 75 min:  
09:50 + 10 min = 10:00  
10:00 + 65 min = 11:05

ETA = 11:05

A common error is to simply add 75 minutes numerically (09:50 + 75 = 10:25, which is wrong — 9:50 + 1:15 = 11:05).

---

**Fuel Burn Calculations**

Fuel planning uses the same TSD structure but replaces distance with fuel quantity:

**Fuel burned = Burn rate × Time**

Where:
- Burn rate is in **USG/hour** (US gallons per hour) or **litres/hour**
- Time is in **hours** (or decimal hours)

Example: Burn rate = 9 USG/hour, flight time = 1 hour 40 minutes

1 hour 40 min = 1.667 hours  
Fuel burned = 9 × 1.667 = 15 USG

Canadian fuel burn is typically expressed in US gallons (USG) because most light training aircraft have USG gauges, though fuel is sold and measured in litres at Canadian airports. Know both and be able to convert:
- 1 USG = 3.785 litres
- 1 Imperial gallon = 4.546 litres (rare in aviation today)

---

**Day VFR Fuel Reserve**

When calculating total fuel required, you must include the CARs fuel reserve. For day VFR (Visual Flight Rules, daytime):

- **CARs 602.88** requires fuel to reach the destination, plus enough to fly for an additional **30 minutes** at normal cruise

Total fuel = enroute fuel + 30-minute reserve

Example:
- Flight time: 2 hours, burn rate: 9 USG/hour
- Enroute fuel: 18 USG
- Reserve (30 min = 0.5 h × 9 USG/h): 4.5 USG
- Total required: 22.5 USG

You should ensure the aircraft has at least 22.5 USG usable fuel before departure.

---

**Worked Example 1 — Basic Time Calculation**

Leg distance: 135 NM  
Ground speed: 90 knots

Time = (135 ÷ 90) × 60 = 1.5 × 60 = **90 minutes**

Or using NM/min: 90 knots ÷ 60 = 1.5 NM/min  
135 ÷ 1.5 = **90 minutes** ✓

---

**Worked Example 2 — Distance Calculation**

Ground speed: 105 knots  
Time airborne: 36 minutes

Distance = 105 × (36 ÷ 60) = 105 × 0.6 = **63 NM**

Or: 105 ÷ 60 = 1.75 NM/min × 36 min = **63 NM** ✓

---

**Worked Example 3 — Fuel Planning**

Route total distance: 310 NM  
Ground speed: 100 knots  
Fuel burn: 8 USG/hour

Step 1: Time = (310 ÷ 100) × 60 = 186 minutes = 3 hours 6 minutes  
Step 2: Enroute fuel = 8 × 3.1 = **24.8 USG**  
Step 3: Reserve (30 min) = 8 × 0.5 = **4 USG**  
Step 4: Total = 24.8 + 4 = **28.8 USG**

---

**Exam Tips**

- Read the question carefully: does it ask for total time, ETA, or fuel? Are you including or excluding reserve?
- Convert minutes to decimal hours before multiplying
- Use NM/min shortcut for speed mental math (divide knots by 60)
- On ETA questions: add time carefully to avoid hour-wrap errors
- Fuel questions almost always require you to add the 30-minute reserve for day VFR

---

## Quick Reference: TSD Formulas

| Formula | Use |
|---------|-----|
| Distance = Speed × Time | How far do I go? |
| Time = (Distance ÷ Speed) × 60 | How long does the leg take? (result in minutes) |
| Speed = Distance ÷ (Time ÷ 60) | What is my ground speed? |
| NM/min = Knots ÷ 60 | Mental math shortcut |
| Fuel = Burn rate × Time (hours) | Fuel planning |

**Day VFR reserve (CARs 602.88):** 30 minutes at cruise  
**Night VFR reserve:** 45 minutes at cruise

---

*End of Lesson NAV-006.*
