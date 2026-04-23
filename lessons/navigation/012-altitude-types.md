---
id: NAV-012
topic: navigation
order: 12
slug: altitude-types
title: "Altitude Types"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/navigation/012-altitude-types.m4a
visual: /visuals/nav012-altitude-types.html
sources:
  - TP 12880E
  - AIM AIR 2.0
questions:
  - id: q1
    prompt: "An aircraft altimeter is set to the local QNH (altimeter setting). The altimeter reads 4,500 feet. The elevation of the aerodrome below is 600 feet ASL. What is the aircraft's height above the aerodrome?"
    choices:
      A: "3,900 feet"
      B: "4,500 feet"
      C: "5,100 feet"
      D: "3,600 feet"
    answer: A
    explanation: "With QNH set, the altimeter reads altitude ASL. Height above aerodrome (AGL) = indicated altitude − aerodrome elevation = 4,500 − 600 = 3,900 feet AGL. Source: TP 12880E Chapter 3, AIM AIR 2.0."
  - id: q2
    prompt: "Indicated Altitude differs from True Altitude because:"
    choices:
      A: "The altimeter is not calibrated to sea level"
      B: "Non-standard temperature and pressure conditions cause the altimeter to read incorrectly"
      C: "The aircraft's speed affects the pressure at the static port"
      D: "GPS altitude is always more accurate than barometric altitude"
    answer: B
    explanation: "Indicated Altitude is the altimeter reading with a QNH setting; it equals True Altitude (actual height ASL) only under standard atmosphere conditions (15°C and 1013.25 hPa at sea level). Non-standard temperature and pressure cause errors. In Canada, cold temperatures make the aircraft lower than indicated — a significant safety concern in mountainous terrain. Source: TP 12880E Chapter 3."
  - id: q3
    prompt: "Which altimeter setting makes an aircraft's altimeter read height above the aerodrome (field elevation = zero)?"
    choices:
      A: "QNH"
      B: "QNE"
      C: "QFE"
      D: "Standard pressure (1013.25 hPa)"
    answer: C
    explanation: "QFE is the altimeter setting equal to the actual atmospheric pressure at the aerodrome elevation. With QFE set, the altimeter reads zero on the ground at that aerodrome and reads height above the aerodrome in flight. QNH gives altitude ASL; QNE (1013.25 hPa / 29.92 in Hg) gives flight level altitude. Source: AIM AIR 2.0."
  - id: q4
    prompt: "An aircraft is flying at 8,500 feet indicated altitude with a QNH of 29.92 in Hg (standard). What is the Flight Level equivalent?"
    choices:
      A: "FL085"
      B: "FL090"
      C: "FL095"
      D: "FL080"
    answer: A
    explanation: "Flight Levels are altimeter readings with standard pressure (29.92 in Hg / 1013.25 hPa) set, expressed in hundreds of feet. At standard pressure, 8,500 feet indicated = FL085. If local QNH equals standard, indicated altitude and flight level altitude are the same. Source: TP 12880E Chapter 3."
  - id: q5
    prompt: "Density Altitude is defined as:"
    choices:
      A: "Pressure altitude corrected for non-standard temperature"
      B: "True altitude corrected for wind speed"
      C: "Indicated altitude corrected for altimeter setting error"
      D: "Height above mean sea level measured by GPS"
    answer: A
    explanation: "Density Altitude is pressure altitude corrected for non-standard temperature. It represents the altitude in the standard atmosphere at which the current air density would be found. High density altitude (hot, high, humid conditions) reduces engine and propeller performance — a critical factor in takeoff and climb performance calculations. Source: TP 12880E Chapter 3."
---

# Lesson NAV-012: Altitude Types

**Section:** Navigation  
**Lesson number:** 012  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 3, AIM AIR 2.0

---

## Narration Script

Welcome to Lesson NAV-012. When someone asks how high an aircraft is flying, the question seems simple — but in aviation there are six distinct types of altitude, each measuring something slightly different. Understanding which type applies in which situation is critical for safe navigation, terrain clearance, and exam success.

---

**Why Multiple Altitude Types?**

The atmosphere is not uniform. Temperature, pressure, and humidity all vary with location and season. A barometric altimeter measures pressure, not actual height — it infers height from pressure by assuming a standard atmospheric model. When the real atmosphere differs from the standard, the altimeter is wrong in a predictable way. The different altitude types capture these distinctions.

---

**The Six Altitude Types**

**1. Indicated Altitude (IA)**

The reading on the altimeter when the correct altimeter setting (QNH) is dialled in. Under standard atmospheric conditions, indicated altitude equals altitude above mean sea level (ASL). Under non-standard conditions, it may differ from true altitude.

*Use:* Day-to-day navigation, ATC communications, terrain clearance (with caution in cold temperatures).

---

**2. True Altitude (TA)**

The actual geometric height above mean sea level (MSL). Equals indicated altitude only under standard atmospheric conditions. In cold, dense air, the aircraft is actually lower than the altimeter indicates. In hot, thin air, it is higher.

*Use:* Obstacle clearance calculations in flight manuals; accurate position on approach charts.

Cold temperature correction: In Canada, cold temperatures are significant. When the temperature is colder than standard, True Altitude is **less** than Indicated Altitude. A rule of thumb: 4 feet lower per 1°C below standard per 1,000 feet of height above the altimeter setting source.

---

**3. Absolute Altitude (AA)**

Height above the ground directly below the aircraft (Above Ground Level — AGL). This is what matters for terrain clearance. Calculated as: True Altitude − Ground Elevation.

*Use:* Low-level flight, circuit patterns (circuits are conducted at a specific height AGL), descent planning.

Example: If your True Altitude is 4,200 feet ASL and the terrain below is 700 feet ASL, your Absolute Altitude is 3,500 feet AGL.

---

**4. Pressure Altitude (PA)**

The altitude indicated when the altimeter is set to standard pressure (1013.25 hPa or 29.92 in Hg). Pressure altitude is measured from the standard datum plane, regardless of local conditions.

*Use:* Performance calculations in the Pilot Operating Handbook (POH); density altitude calculations; flight at and above the Transition Altitude where Flight Levels are used.

---

**5. Density Altitude (DA)**

Pressure altitude corrected for non-standard temperature. Density altitude represents the altitude in the standard atmosphere at which the current air density would exist. It directly determines aircraft performance — engine power, propeller efficiency, and lift all depend on air density.

*Use:* Performance calculations for takeoff distance, climb rate, and engine power output.

High density altitude conditions (hot, high elevation, humid) can make a sea-level aircraft perform as if it were at 5,000 or 8,000 feet altitude. This is a leading cause of takeoff accidents.

Formula: DA = PA + [120 × (OAT − ISA temperature)]
Where ISA temperature at sea level = 15°C, decreasing 2°C per 1,000 feet.

---

**6. Flight Level (FL)**

An indication of pressure altitude in hundreds of feet, with the altimeter set to standard pressure (29.92 in Hg / 1013.25 hPa). FL180 = 18,000 feet of pressure altitude.

In Canada, Flight Levels are used above the Transition Altitude, which is 18,000 feet ASL. Below 18,000 feet, QNH (local altimeter setting) is used.

*Use:* High-altitude navigation; IFR airways at and above FL180; communication with ATC at high altitudes.

---

**Altimeter Settings: QNH, QNE, QFE**

These three codes (from the Q-code system) describe different altimeter settings:

| Code | Setting | Altimeter reads |
|------|---------|-----------------|
| QNH | Local sea-level pressure | Altitude ASL |
| QNE | Standard (1013.25 hPa / 29.92 in Hg) | Pressure altitude / Flight Levels |
| QFE | Pressure at aerodrome elevation | Height above aerodrome (AGL = 0 on ground) |

In Canadian VFR operations, QNH is the standard setting for flight below 18,000 feet ASL. QFE is rarely used in North America but may appear on the PPL exam.

---

**Cold Temperature Corrections**

In winter operations at Canadian airports, the temperature is often significantly colder than the standard atmosphere assumed by the altimeter. This makes the aircraft **lower** than the altimeter indicates.

The effect is:
- True Altitude = Indicated Altitude − Cold Temperature Correction

Transport Canada publishes cold temperature correction tables in the AIP and AIM. When conducting approaches in cold temperatures (below −10°C), pilots must add corrections to instrument approach altitudes to ensure terrain clearance.

For the PPL written exam, you should know:
- Cold air is denser → aircraft is lower than indicated
- Warm air is less dense → aircraft is higher than indicated
- Memory aid: "From high to low, look out below"

---

**Practical Application**

For VFR navigation, the altitude you primarily work with is **indicated altitude** (altimeter set to QNH). This is what ATC asks for, what your chart altitudes reference, and what VFR cruising altitude rules (CARs 602.34) use.

For performance calculations before takeoff, you use **density altitude** to determine whether your aircraft can safely depart with the planned load.

For terrain clearance, remember that your indicated altitude is only an approximation of your true altitude — in cold temperatures, you may be significantly lower than the altimeter suggests.

---

## Quick Reference: Altitude Types

| Type | Definition | Primary Use |
|------|-----------|-------------|
| Indicated | Altimeter reading (QNH set) | Navigation, ATC, VFR altitude rules |
| True | Actual height ASL | Obstacle clearance calculations |
| Absolute | Height AGL | Terrain clearance, circuit height |
| Pressure | Altitude at standard pressure datum | Performance calcs, FL base |
| Density | PA corrected for temperature | Takeoff/climb performance |
| Flight Level | Pressure altitude ÷ 100 (std pressure) | High altitude navigation (≥FL180 Canada) |

**Memory:** "From high to low, look out below" — cold temperatures make you lower than indicated.

---

*End of Lesson NAV-012.*
