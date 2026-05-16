---
id: ANV-002
topic: cpl-a
order: 11
slug: time-distance-calculations
title: "Time and Distance Calculations for Long-Range Flying"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/011-time-distance-calculations.m4a
visual: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual)"
  - "AIM ENR Chapter"
  - "Transport Canada CPL-A Written Exam Guide"
  - "CARs 602.88–602.89 (Fuel Requirements)"
questions:
  - id: q1
    prompt: "An aircraft is flying at a true airspeed of 140 knots. The wind is directly on the nose at 20 knots. What is the groundspeed?"
    choices:
      A: "120 knots"
      B: "140 knots"
      C: "160 knots"
      D: "Cannot be determined without knowing the aircraft heading"
    answer: A
    explanation: "With a direct headwind, groundspeed = TAS minus headwind component = 140 − 20 = 120 knots. The heading does not affect the calculation when the wind is directly on the nose. Source: TP 12880E Chapter 8."
  - id: q2
    prompt: "An aircraft departs at 1415Z and arrives at 1632Z. What is the total elapsed time?"
    choices:
      A: "2 hours 07 minutes"
      B: "2 hours 17 minutes"
      C: "2 hours 47 minutes"
      D: "3 hours 17 minutes"
    answer: B
    explanation: "From 1415Z to 1632Z: from 1415 to 1615 is 2 hours; from 1615 to 1632 is 17 minutes. Total elapsed time = 2 hours 17 minutes. Always use 24-hour UTC (Zulu) time for navigation calculations. Source: TP 12880E."
  - id: q3
    prompt: "A flight covers 210 NM in 1 hour 45 minutes. What is the average groundspeed?"
    choices:
      A: "100 knots"
      B: "105 knots"
      C: "120 knots"
      D: "130 knots"
    answer: C
    explanation: "Groundspeed = distance ÷ time. Convert 1 hour 45 minutes to decimal: 1.75 hours. GS = 210 ÷ 1.75 = 120 knots. Source: TP 12880E Chapter 8."
  - id: q4
    prompt: "At a groundspeed of 150 knots, how long will it take to fly 75 nautical miles?"
    choices:
      A: "20 minutes"
      B: "30 minutes"
      C: "45 minutes"
      D: "50 minutes"
    answer: B
    explanation: "Time = distance ÷ groundspeed. Time = 75 ÷ 150 = 0.5 hours = 30 minutes. Source: TP 12880E Chapter 8."
  - id: q5
    prompt: "An aircraft has 3.5 hours of usable fuel. Current groundspeed is 140 knots. Regulatory fuel reserve is 45 minutes. What is the maximum safe range?"
    choices:
      A: "350 NM"
      B: "385 NM"
      C: "420 NM"
      D: "490 NM"
    answer: B
    explanation: "Usable time after reserve = 3.5 hours − 0.75 hours (45 min) = 2.75 hours. Range = 2.75 × 140 = 385 NM. The 45-minute reserve must be subtracted before calculating maximum range. Source: CARs 602.88; TP 12880E."
---

# Lesson ANV-002: Time and Distance Calculations for Long-Range Flying

**Subject:** Advanced Navigation  
**Lesson number:** 011 (ANV-002)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Extends PPL-A dead reckoning. See `lessons/navigation/` for the PPL-A foundation lessons on time/speed/distance.

Topics to be authored:
- Time-speed-distance formula applications at commercial level
- Wind triangle: wind correction angle, groundspeed, true heading
- Off-track correction: 1-in-60 rule, double track error method
- Point of no return (PNR) / critical point calculations
- Equal time point (ETP) for engine-out diversion planning
- Fuel planning for commercial cross-country with alternates
- Using the flight computer (whiz wheel) for commercial-level calculations

---

## Narration Script

### Introduction

Accurate time, distance, and fuel calculations are foundational skills for any commercial pilot. At the PPL level, these calculations were relatively straightforward: fly a planned route, track your time and fuel, and navigate from point to point. At the commercial level, the same mathematical tools are applied with greater precision and extended to cover more complex planning scenarios, including multi-leg routes, critical point calculations, and fuel management with mandatory reserves and alternates. In this lesson you will work through the key calculation methods that appear on the Transport Canada CPL-A exam and that you will use throughout your commercial flying career. Sources: TP 12880E; CARs 602.88.

### The Speed-Distance-Time Triangle

Everything in time and distance calculation starts with one relationship: distance equals speed multiplied by time, or D equals S times T. From this single formula, all three variables can be derived. If you know speed and distance, time equals distance divided by speed. If you know distance and time, speed equals distance divided by time. If you know speed and time, distance equals speed times time.

In aviation, speed is expressed as groundspeed in knots, distance as nautical miles, and time in hours and decimal fractions of hours. This is important: the formula works cleanly when time is expressed in hours, not in minutes. If you calculate a time in minutes, you need to convert it to hours before using it in another formula. For example, 30 minutes is 0.5 hours, and 45 minutes is 0.75 hours.

The flight computer — the circular slide rule device also called the whiz wheel — performs this calculation mechanically by aligning scales on its rotating disc. Rotating the inner disc to set the speed on the outer scale, then reading the distance opposite the time, gives you the answer without any arithmetic. At the CPL-A level, you are expected to be proficient with both the flight computer and mental or written arithmetic for these calculations. Source: TP 12880E.

### True Airspeed, Groundspeed, and the Wind Triangle

True airspeed, abbreviated TAS, is the actual speed of the aircraft through the airmass. It is derived from indicated airspeed corrected for pressure altitude and temperature. However, it is the groundspeed — the speed of the aircraft relative to the ground — that determines how long a flight will take and therefore how much fuel will be consumed.

The difference between TAS and groundspeed is caused by wind. If you are flying into a headwind, your groundspeed is less than your TAS. If you have a tailwind, your groundspeed exceeds your TAS. For winds from other directions, the wind component along your track — the headwind or tailwind component — is what matters for the groundspeed calculation, and you also need to apply a wind correction angle to your heading to compensate for the crosswind component that would otherwise push you off track.

The wind triangle — also called the velocity triangle — is the geometric method for solving these problems. You construct a triangle using three vectors: the true airspeed vector in the direction of the true heading, the wind vector in the direction the wind is blowing toward, and the track vector in the direction from departure to destination. The groundspeed is the magnitude of the track vector, and the wind correction angle is the angular difference between the true heading and the desired track. The flight computer handles this geometry mechanically on its slide rule side, and you should be able to solve a wind triangle both with the computer and using the formula methods taught in TP 12880E Chapter 8.

A simple case: if you are flying on a track of 090 degrees with a TAS of 140 knots, and the wind is from the north at 20 knots, the wind is a pure crosswind — no headwind or tailwind component. Your groundspeed equals your TAS, 140 knots. But you need to correct your heading into the crosswind to maintain the 090-degree track. The wind correction angle for a 20-knot crosswind at 140 knots TAS is approximately 8 degrees, so you would fly a heading of 098 degrees to track 090 degrees. Your ETA is calculated using the 140-knot groundspeed.

### Fuel Burn Calculations

Fuel burn is calculated using the formula: fuel used equals fuel flow rate multiplied by time. Fuel flow is typically expressed in litres per hour in Canadian metric documents, or pounds per hour or US gallons per hour in older American references. For the exam, work in consistent units — do not mix litres and gallons.

If your aircraft burns 40 litres per hour and you are flying for 2.5 hours, fuel used is 40 times 2.5, which equals 100 litres. If you have 150 litres of usable fuel and need to carry a 30-minute reserve, your usable fuel for the flight is 150 minus 20 litres of reserve (30 minutes at 40 litres per hour is 0.5 hours times 40, which equals 20 litres), leaving 130 litres for actual flight. Your maximum endurance is 130 divided by 40, or 3.25 hours.

Always determine your reserve requirement from the applicable CARs before calculating your usable flight fuel. For VFR day flights, CARs 602.88 requires a fuel reserve sufficient for 30 minutes of flight at normal cruise speed, in addition to the fuel needed to reach the destination. For VFR night flights, the required reserve is 45 minutes. For IFR flights, the reserve requirement is more complex: the aircraft must carry fuel to reach the destination, then to the alternate aerodrome, plus 45 minutes at normal cruise speed. These reserve requirements are minimums — operational practice and company standard operating procedures may require additional contingency fuel. Source: CARs 602.88.

### Elapsed Time and ETA Calculations

Coordinated Universal Time, abbreviated UTC and also called Zulu time, is the standard time reference in aviation. All flight plans, ATC clearances, and weather products use UTC. When calculating elapsed time, always work in UTC to avoid errors caused by time zone boundaries or daylight saving time.

To calculate elapsed time from a departure time to an arrival time, subtract the departure time from the arrival time. If the arrival time is greater than the departure time, simple subtraction works: 1632 minus 1415 equals 2 hours and 17 minutes. If the arrival time is in the next day — that is, the flight crosses midnight UTC — you add 2400 to the arrival time before subtracting.

To calculate an estimated time of arrival, add the estimated time en route to the departure time. If you depart at 1415 UTC and your estimated time en route is 2 hours 30 minutes, your ETA is 1415 plus 2 hours and 30 minutes, which equals 1645 UTC.

### The 1-in-60 Rule and Off-Track Corrections

In cross-country navigation, you rarely fly perfectly on track for the entire route. You will drift due to wind estimation errors, heading errors, or navigation system inaccuracies. The 1-in-60 rule is a simple mental arithmetic method for estimating how far off track you are and how much heading change is required to regain track and reach the destination.

The rule states that for every 1 degree of track error, an aircraft will be displaced approximately 1 nautical mile off track for every 60 nautical miles flown. So if you have flown 90 nautical miles and discover you are 3 nautical miles off track, your track error is 3 divided by 90, times 60, which equals 2 degrees. To simply parallel the correct track from this point forward, you would correct your heading by 2 degrees into the error. But if you want to reach the destination rather than just parallel the track, you must also apply a closing angle to converge on the destination. The closing angle is calculated the same way, using the distance remaining to the destination instead of the distance flown. Total heading correction equals the track error angle plus the closing angle. Source: TP 12880E Chapter 8.

### Point of No Return

The point of no return, abbreviated PNR, is the furthest point from departure to which the aircraft can fly and still have enough fuel to return to the departure aerodrome with the required reserve. Beyond the PNR, the aircraft is committed — it cannot return, and must continue to the destination or divert to an alternate that is closer than the departure point.

The PNR is calculated from two variables: the fuel available for the out-and-back legs, and the groundspeeds in each direction. The out-leg groundspeed is TAS minus the headwind component going out, and the return-leg groundspeed is TAS plus the tailwind component on the return (which is the same wind reversed). The formula for PNR distance from departure is: fuel available for the round trip, multiplied by the product of the out-leg groundspeed and the return-leg groundspeed, divided by the sum of those two groundspeeds. This formula emerges from the requirement that the time out equals the fuel available for the out leg divided by fuel flow, and the time back equals the fuel available for the return divided by fuel flow, and the total fuel used for both legs equals the available fuel.

In a no-wind situation, the PNR is simply the total usable range divided by 2, which makes intuitive sense. With a headwind outbound, the PNR is closer to the departure point because you cover less distance going out for the same fuel burn. With a tailwind outbound, the PNR is further from departure because you cover more distance going out. Source: TP 12880E.

### Equal Time Point

The Equal Time Point, also called the Critical Point or ETP, is the point along the route where the time to continue to the destination equals the time to return to the departure or to divert to an alternate aerodrome. It is most commonly applied in the context of engine failure planning on long overwater or remote routes: if an engine fails at the ETP, the time to reach safety is minimised because both the destination and the alternate are equidistant in time.

The ETP is calculated similarly to the PNR but uses time-to-destination rather than fuel. ETP distance from departure equals total route distance multiplied by the return-leg groundspeed, divided by the sum of the outbound and return-leg groundspeeds. In a no-wind situation, the ETP is the geographic midpoint of the route. With a headwind outbound, the ETP is closer to the destination because it takes longer to get there, so the equidistant-in-time point shifts downwind. Source: TP 12880E.

### Summary

In this lesson you learned that all time, distance, and fuel calculations flow from the single relationship: distance equals speed times time. True airspeed differs from groundspeed because of wind, and the wind triangle is used to determine the wind correction angle and the effective groundspeed. Fuel burn is fuel flow rate times time, and planning must account for mandatory reserves per CARs 602.88 — 30 minutes for VFR day, 45 minutes for VFR night. Elapsed time calculations use UTC. The 1-in-60 rule allows quick mental estimation of off-track corrections. The Point of No Return is the furthest point from which an aircraft can return to departure with required reserves. The Equal Time Point is the point where the time to destination equals the time to the alternate, and is used to plan for engine failure on extended routes. These calculations are core material for the CPL-A exam and for daily commercial flight planning.

---

*End of Lesson ANV-002.*
