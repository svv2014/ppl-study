---
id: GK-006
topic: general-knowledge
order: 6
slug: aircraft-performance
title: "Aircraft Performance"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E Chapter 11
  - POH (aircraft-specific)
questions:
  - id: q1
    prompt: "Density altitude is defined as:"
    choices:
      A: "Pressure altitude corrected for non-standard temperature"
      B: "Indicated altitude corrected for local altimeter setting"
      C: "True altitude above mean sea level"
      D: "Altitude above ground level at the departure airport"
    answer: A
    explanation: "Density altitude is pressure altitude corrected for non-standard temperature. It is the altitude in the standard atmosphere that has the same air density as the current conditions. High density altitude (high, hot, humid conditions) means reduced engine power, reduced propeller efficiency, and reduced wing lift — all degrading performance. Source: TP 12880E Chapter 11."
  - id: q2
    prompt: "On a hot summer day at a high-elevation airport, compared to a sea-level airport on a standard day, you should expect:"
    choices:
      A: "Shorter takeoff run because the propeller is more efficient in thin air"
      B: "Longer takeoff run and reduced climb rate due to high density altitude"
      C: "The same performance because indicated airspeed is unaffected by density"
      D: "Better performance because warm air is less dense and easier to push through"
    answer: B
    explanation: "High density altitude reduces engine power (less air mass for combustion), reduces propeller thrust, and reduces lift at a given indicated airspeed — the aircraft must accelerate to a higher true airspeed before enough lift is generated. The result is a longer takeoff run and reduced climb rate. This is a leading cause of takeoff accidents in mountainous regions. Source: TP 12880E Chapter 11."
  - id: q3
    prompt: "Vx and Vy are best described as:"
    choices:
      A: "Vx is best rate of climb; Vy is best angle of climb"
      B: "Vx is best angle of climb (most altitude per unit of distance); Vy is best rate of climb (most altitude per unit of time)"
      C: "Vx is the speed for maximum range; Vy is the speed for maximum endurance"
      D: "Vx is manoeuvring speed; Vy is never-exceed speed"
    answer: B
    explanation: "Vx provides the best angle of climb — the most altitude gained per horizontal distance. Use Vx to clear obstacles after takeoff. Vy provides the best rate of climb — the most altitude gained per unit of time. Use Vy for normal climb after obstacle clearance. Vx is lower than Vy. Source: TP 12880E Chapter 11."
  - id: q4
    prompt: "Which of the following factors will INCREASE takeoff distance the most?"
    choices:
      A: "A 5-knot headwind"
      B: "A 5-knot tailwind"
      C: "A 10°C increase in temperature"
      D: "A slight downslope on the runway"
    answer: B
    explanation: "A tailwind increases ground speed at liftoff — the aircraft must travel more ground distance to reach flying speed. The general rule is that a tailwind of 10% of liftoff speed approximately doubles takeoff distance. A headwind has the opposite effect, significantly reducing takeoff distance. Temperature and slope also matter but a tailwind typically has the largest single-factor effect. Source: TP 12880E Chapter 11."
  - id: q5
    prompt: "The TODA (Take-Off Distance Available) at an airport is the:"
    choices:
      A: "Length of the declared runway for takeoff"
      B: "Runway length plus any declared stopway"
      C: "Runway length plus any declared clearway"
      D: "Runway length minus the displaced threshold"
    answer: C
    explanation: "TODA = TORA + Clearway. TORA (Take-Off Run Available) is the declared runway length available for the ground roll. A clearway is an area beyond the runway end over which an aircraft may make the initial climb to the required screen height — it adds to TODA but not to TORA. Source: TP 12880E Chapter 11."
---

# Lesson GK-006: Aircraft Performance

**Section:** General Knowledge  
**Lesson number:** 006  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 11, POH (aircraft-specific)

---

## Narration Script

Performance topics are prominent on the PPL written exam. You need to understand density altitude, how to use performance charts, and how environmental factors affect takeoff, climb, cruise, and landing. Misunderstanding performance is a major contributing factor in takeoff and landing accidents.

---

**Density Altitude**

Air density directly determines how much power the engine produces, how much thrust the propeller generates, and how much lift the wing generates at a given indicated airspeed. Less dense air = less performance.

**Density altitude** is the altitude in the standard atmosphere corresponding to a given air density. It is computed as:

Density altitude = Pressure altitude + (120 × (OAT − ISA temperature at that altitude))

Where ISA standard temperature at altitude = 15°C − (2°C per 1,000 ft of pressure altitude).

Practically: density altitude = pressure altitude when temperature is standard. Higher than standard temperature increases density altitude above pressure altitude. High humidity also reduces density slightly (humid air is less dense than dry air — water vapour replaces heavier nitrogen and oxygen molecules).

**High density altitude effects:**
- Engine produces less power (less air mass per intake stroke)
- Propeller generates less thrust (thinner air, same RPM)
- Wing generates less lift at a given indicated airspeed (the IAS is the same but TAS is higher → the aircraft must accelerate further before generating enough lift force)
- Result: longer takeoff run, lower climb rate, higher true airspeed at all flight phases

---

**Performance Charts**

Performance data is in the POH, often as graphs or tables. You interpolate between values. Key charts include:

- **Takeoff distance chart**: inputs are pressure altitude, temperature, weight, headwind/tailwind component. Outputs are ground roll and distance to clear a 50-foot obstacle.
- **Climb performance**: rate of climb at various altitudes and weights.
- **Cruise performance**: fuel burn, TAS, and power settings at various altitudes and temperatures.
- **Landing distance chart**: similar inputs as takeoff.

Always use the most conservative (unfavourable) combination when making go/no-go decisions.

---

**Vx and Vy**

Two climb speeds appear repeatedly on exams:

**Vx — Best Angle of Climb**: provides the greatest altitude gain per unit of horizontal distance. Use Vx to clear obstacles after takeoff. Vx is achieved at the speed of maximum excess thrust (thrust minus drag is greatest).

**Vy — Best Rate of Climb**: provides the greatest altitude gain per unit of time. Use Vy for normal climb after clearing obstacles to reach cruise altitude efficiently. Vy corresponds to the speed of maximum excess power.

Vx < Vy. As altitude increases, Vx and Vy converge — at the absolute ceiling, they are equal.

---

**Factors Affecting Takeoff Performance**

- **Headwind**: reduces ground roll significantly. Cutting headwind component in half roughly doubles the ground roll required. A strong headwind is the best performance aid.
- **Tailwind**: dramatically increases ground roll. Even a 5-knot tailwind can increase takeoff distance significantly. Avoid tailwind operations with short runways.
- **Density altitude**: higher DA = longer roll (discussed above)
- **Weight**: heavier aircraft need more runway (stall speed higher, more distance to accelerate)
- **Slope**: upslope runway increases takeoff distance; downslope decreases it
- **Surface**: a soft or rough surface increases rolling resistance

---

**Runway Declarations (CARs)**

Canadian airports may declare specific distances:

- **TORA** (Take-Off Run Available): the length of runway available for takeoff ground roll
- **TODA** (Take-Off Distance Available): TORA + any clearway (the area beyond the runway over which initial climb can be made)
- **ASDA** (Accelerate-Stop Distance Available): TORA + any stopway (area where the aircraft can be stopped in an emergency)
- **LDA** (Landing Distance Available): the declared length for landing

---

**Landing Performance**

Key factors:
- Higher approach speed increases landing roll (distance ∝ speed²)
- Tailwind increases landing roll; headwind reduces it
- High density altitude requires a higher true airspeed at the same indicated airspeed — landing roll is longer
- Wet or icy runways dramatically increase stopping distance
- Flaps: full flaps lower approach speed, reduces landing roll

---

**Glide Range**

In an engine-out glide, the best glide speed (published in POH) gives maximum range. Flying faster or slower reduces range. Glide ratio (e.g., 9:1 for a Cessna 172) means 9 feet forward for every 1 foot of altitude lost, with no wind. Headwind reduces range; tailwind increases it.

---

## Key Points

- **Density altitude** = pressure altitude corrected for temperature; high DA = degraded performance
- **High DA causes**: longer takeoff roll, lower climb rate, higher TAS at given IAS
- **Vx** (best angle): clear obstacles; **Vy** (best rate): climb efficiently; Vx < Vy
- Takeoff distance roughly doubles with a tailwind of ~10% of liftoff speed
- Use POH performance charts; interpolate; use conservative values
- **TODA** = TORA + clearway; **ASDA** = TORA + stopway
- Higher weight, higher temperature, higher altitude all degrade performance

---

*End of Lesson GK-006.*
