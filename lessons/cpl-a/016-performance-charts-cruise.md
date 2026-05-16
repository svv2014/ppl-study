---
id: PAL-001
topic: cpl-a
order: 16
slug: performance-charts-cruise
title: "Performance Charts — Cruise and Range Computations"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/016-performance-charts-cruise.m4a
visual: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual)"
  - "CARs 605 (Aircraft Equipment and Maintenance)"
  - "Transport Canada CPL-A Written Exam Guide"
  - "Aircraft AFM/POH (Pilot's Operating Handbook)"
questions:
  - id: q1
    prompt: "Density altitude is defined as:"
    choices:
      A: "The altitude shown on the altimeter when set to 29.92 in.Hg"
      B: "Pressure altitude corrected for non-standard temperature"
      C: "The height of the aircraft above mean sea level"
      D: "The altitude at which the air density equals standard sea-level density"
    answer: B
    explanation: "Density altitude is pressure altitude corrected for non-standard temperature. High density altitude (hot, high, or humid conditions) reduces engine performance and increases takeoff/landing distances. All performance charts use density altitude as the basis for calculations. Source: TP 12880E Chapter 5."
  - id: q2
    prompt: "On a cruise performance chart, 'best range' airspeed is the speed at which:"
    choices:
      A: "Endurance (time aloft) is maximised"
      B: "Fuel burn per nautical mile is minimised — maximum distance per unit of fuel"
      C: "True airspeed is maximised for a given power setting"
      D: "The aircraft can fly level with maximum fuel load"
    answer: B
    explanation: "Best range speed (L/Dmax) minimises fuel consumption per nautical mile — it is the most efficient speed for covering distance. Best endurance speed (minimum fuel burn per hour) is slower and used to maximise time aloft. Source: TP 12880E Chapter 5."
  - id: q3
    prompt: "A performance chart shows that the aircraft burns 45 litres/hour at 65% power cruise. With a total usable fuel of 200 litres, the maximum endurance (ignoring reserves) is:"
    choices:
      A: "3 hours 45 minutes"
      B: "4 hours"
      C: "4 hours 26 minutes"
      D: "5 hours"
    answer: C
    explanation: "Endurance = total fuel ÷ fuel burn rate = 200 ÷ 45 = 4.44 hours = 4 hours 26.7 minutes (approximately 4 hours 27 minutes). Always remember that the regulatory reserve must be subtracted when calculating safe endurance. Source: TP 12880E."
  - id: q4
    prompt: "When interpolating between entries in a performance chart for an intermediate density altitude, the correct approach is to:"
    choices:
      A: "Always use the more conservative (worse) performance value"
      B: "Interpolate linearly between the two nearest table entries"
      C: "Use the lower altitude entry for all calculations as a safety margin"
      D: "Use the manufacturer's performance calculator — manual charts should never be interpolated"
    answer: B
    explanation: "Linear interpolation between chart entries is the standard method for values between tabulated points. For example, at a density altitude halfway between two chart rows, interpolate halfway between the corresponding performance values. This gives a more accurate result than always rounding to the conservative entry. Source: TP 12880E; AFM/POH guidance."
  - id: q5
    prompt: "A tailwind affects en-route range performance by:"
    choices:
      A: "Reducing range — tailwinds increase groundspeed, using more fuel per hour"
      B: "Increasing range — for a fixed fuel load, greater groundspeed means more distance per hour"
      C: "Having no effect — range is determined by airspeed and fuel burn, not groundspeed"
      D: "Reducing range only at high altitudes where density altitude effects dominate"
    answer: B
    explanation: "A tailwind increases groundspeed without changing fuel burn (which depends on airspeed and power setting). This means the aircraft covers more nautical miles per litre of fuel, increasing range. A headwind has the opposite effect. Source: TP 12880E Chapter 8."
---

# Lesson PAL-001: Performance Charts — Cruise and Range Computations

**Subject:** Performance & Limitations  
**Lesson number:** 016 (PAL-001)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Topics to be authored:
- Density altitude: calculation from pressure altitude and temperature
- Performance chart structure: how to read tables and graphs
- Interpolation technique for intermediate values
- Cruise performance: percent power, TAS, fuel flow relationships
- Best power vs. best economy mixture in cruise
- Range vs. endurance: definitions, airspeeds, trade-offs
- Effect of wind on range: tailwind increases range, headwind decreases
- Fuel planning using performance charts: systematic approach
- Factors affecting actual vs. chart performance: contamination, age, technique

---

## Narration Script

### Introduction

The performance section of your aircraft's pilot's operating handbook contains detailed charts and tables that predict the aircraft's capabilities under specific conditions. Using these charts accurately is a practical and regulatory requirement for commercial operations — you cannot legally fly a cross-country without confirming your fuel burn and range, and you cannot dispatch a charter flight without verifying that your aircraft can reach the destination with legal reserves. In this lesson you will learn to interpret cruise performance charts, understand the relationship between power setting and fuel flow, distinguish between range and endurance performance, account for wind and altitude, and apply the results to commercial flight planning. Sources: TP 12880E; AFM/POH examples.

### Density Altitude: The Basis for All Performance

All aircraft performance — takeoff distance, climb rate, cruise speed, and fuel flow — depends on the density of the air, not on the pressure altitude or geometric altitude directly. Density altitude is the altitude in the standard atmosphere that corresponds to the actual air density at the aircraft's location. It is calculated as pressure altitude corrected for non-standard temperature.

Pressure altitude is what the altimeter reads when set to the standard setting of 29.92 inches of mercury. On a standard day, pressure altitude equals density altitude — they are the same thing. But on a hot day, the air is less dense than the standard atmosphere would predict for that pressure altitude, so the density altitude is higher than the pressure altitude. On a cold day, the reverse is true.

The practical implication is significant. If you are operating at an airport with a pressure altitude of 5,000 feet on a day where the temperature is 30 degrees Celsius — 20 degrees above standard — the density altitude may be 8,000 feet or more. Your aircraft will perform as if it were operating at 8,000 feet, not 5,000. Takeoff distances are longer, climb rates are reduced, and true airspeed for a given indicated airspeed is higher. Performance charts use density altitude as their input variable, so you must derive density altitude from your pressure altitude and outside air temperature before entering the chart. Source: TP 12880E Chapter 5.

### Reading Cruise Performance Charts

A typical cruise performance chart in a piston aircraft POH is organised by altitude and power setting. The chart may present performance at several power percentages — commonly 55, 65, and 75 percent of rated brake horsepower — and for each, it lists the manifold pressure and RPM combination that achieves that power, the resulting true airspeed in knots, and the fuel flow in litres per hour or US gallons per hour.

To use the chart, you enter with the pressure altitude (or density altitude if the chart requires it) and the temperature, and read off the performance values for your selected power setting. In some charts, temperature is an additional parameter that must be applied to correct the values, and you interpolate between the tabulated temperatures. In others, the table already incorporates a standard lapse rate temperature assumption, and you apply a temperature correction factor.

Interpolation is the arithmetic process of finding a value between two tabulated entries. If the chart provides values for 6,000 feet and 8,000 feet, and you are operating at 7,000 feet, you interpolate: find the difference between the two chart values, take half of it, and add it to the lower entry. This linear interpolation is accurate enough for practical aviation purposes. More complex two-dimensional interpolation — where both altitude and temperature are between tabulated values — requires interpolating first on one variable, then on the other.

### Power Settings: Manifold Pressure and RPM

In a fixed-pitch propeller aircraft, the throttle directly controls engine power, and there is only one control to manage. In an aircraft with a constant-speed propeller, power is determined by the combination of manifold pressure — set with the throttle — and RPM — set with the propeller control. The performance chart tells you which combination of manifold pressure and RPM achieves a specific power percentage at a given altitude.

For example, at 6,000 feet density altitude, 65 percent power might require 23 inches of manifold pressure at 2,400 RPM, while achieving the same 65 percent with a lower manifold pressure of 21 inches would require 2,600 RPM. Both produce similar power but through different loading of the engine. The manifold pressure and RPM limits in the POH define the operational boundaries — you may not operate above certain manifold pressures at given RPMs because doing so would exceed the engine's certification limits.

The general rule in most piston engines with constant-speed propellers is to reduce RPM before increasing manifold pressure, and to reduce manifold pressure before increasing RPM. This sequencing prevents momentary overloading of the engine.

### Best Power vs. Best Economy Mixture

At any given power setting and altitude, the mixture setting significantly affects both fuel flow and cylinder head temperature. Best power mixture, approximately 100 degrees Fahrenheit rich of peak exhaust gas temperature, produces the maximum power for that throttle and RPM combination. More fuel than stoichiometrically required is being burned, the combustion is slightly cooler due to the excess fuel absorbing heat, and power is at its highest. Best economy mixture, at or just lean of peak exhaust gas temperature, reduces fuel flow and decreases power slightly, but the specific fuel consumption — litres burned per unit of power produced — is at its minimum. For long-distance commercial flights, best economy mixture at a power setting of 65 percent or below is typically the most efficient operating mode, provided cylinder head temperatures remain within limits.

It is important to understand that operating lean of peak at high power settings — above approximately 75 percent — can cause detonation. The reduced cooling effect of the lean mixture combined with the high combustion pressure at high power creates conditions that can lead to premature ignition. This is why the lean-of-peak technique is approved only at reduced power settings, typically 65 percent or below in most aircraft. Source: TP 12880E.

### Range vs. Endurance

Range and endurance are related but distinct concepts. Range is the total distance the aircraft can travel on a given fuel load. Endurance is the total time the aircraft can remain airborne. Maximising one does not maximise the other, and understanding when to prioritise each is part of commercial flight planning.

Maximum endurance is achieved at the airspeed that minimises fuel flow — minimum power speed, approximately the bottom of the power-required curve. This speed is slower than cruise speed and typically below the best rate of climb speed. You would use maximum endurance speed when you need to stay airborne as long as possible — for example, if your destination is below minimums and you are holding for conditions to improve.

Maximum range is achieved at the airspeed that minimises fuel burn per nautical mile — equivalently, the speed that maximises nautical miles per litre. This is the speed at the tangent to the power-required curve from the origin, which corresponds to the best lift-to-drag ratio speed or very close to it. Flying at the best range speed and best economy mixture gives the maximum distance from a given fuel load, ignoring wind.

Wind has a significant effect on the optimal range speed. With a tailwind, your effective range per litre improves because you cover more ground per hour. Counterintuitively, this means you should fly slightly faster than no-wind best range speed to take maximum advantage of the tailwind. With a headwind, you should fly slightly slower, because slowing down reduces fuel burn proportionally more than it reduces groundspeed. In practice, for most headwind and tailwind values encountered in normal commercial operations, the correction is small, and the no-wind best range speed is used as a practical approximation. Source: TP 12880E Chapter 5.

### Effect of Wind on Fuel Planning

When you calculate the fuel required for a commercial cross-country, you use the planned groundspeed — not the true airspeed — for time and therefore fuel calculations. If you plan to fly at 130 knots TAS into a 20-knot headwind, your groundspeed is 110 knots. A 200 nautical mile leg will take 200 divided by 110, or approximately 1.82 hours. If your fuel flow is 40 litres per hour, the fuel used is 40 times 1.82, or approximately 73 litres.

If the headwind is stronger than forecast — say 30 knots instead of 20 — your groundspeed drops to 100 knots. The same 200 nautical mile leg now takes 2.0 hours and burns 80 litres. You must account for this uncertainty in your fuel planning by carrying contingency fuel above the CARs minimums, particularly on long legs where a significant forecast error could produce a material change in fuel consumption.

The practical approach for commercial planning is to calculate fuel requirements for the forecast wind, add the CARs reserve, add a contingency allowance appropriate to the forecast confidence and route remoteness, and verify that this total fuel load keeps the aircraft within weight and balance limits.

### Factors Reducing Actual vs. Chart Performance

Aircraft performance charts are produced under controlled conditions in new aircraft with clean airframes, calibrated engines, and expert test pilots. Your actual performance in service will be somewhat different, and you should plan conservatively.

Airframe contamination — dirt, bugs, or surface roughness on wings and control surfaces — increases drag and reduces both climb performance and cruise true airspeed. A typical figure used in commercial flight planning is a 1 to 2 percent reduction in fuel efficiency for normal airframe contamination. In winter operations, even light frost on the wing surfaces reduces lift and increases drag significantly.

Engine wear reduces the power output below the new-engine chart values. An engine that has accumulated many hours since its last overhaul may produce 3 to 5 percent less power than the chart assumes. This translates to a higher fuel burn for the same airspeed, or a lower airspeed for the same fuel burn.

Pilot technique matters. Failing to lean the mixture to the appropriate setting, running at higher power than the planned cruise setting, or flying at the wrong airspeed all increase fuel burn relative to chart predictions. Part of the value of systematic performance planning is that it creates a reference against which in-flight monitoring can detect deviations early.

### Systematic Fuel Planning Process

When planning fuel for a commercial cross-country, use this systematic process. First, determine the density altitude for each leg based on forecast temperature and pressure altitude. Second, enter the cruise performance chart to find the fuel flow at your planned power setting and density altitude. Third, calculate fuel burned per leg using fuel flow times estimated leg time, where leg time is leg distance divided by planned groundspeed. Fourth, sum the fuel for all legs to get total trip fuel. Fifth, add the reserve required by CARs 602.88 — 30 minutes for VFR day, 45 minutes for VFR night, or the IFR reserve including alternate if applicable. Sixth, add any contingency fuel appropriate to the forecast confidence, route remoteness, and your company's standard operating procedures. The result is your minimum required fuel for departure.

Verify that the required fuel is available in the aircraft and that loading this fuel keeps the aircraft within weight and balance limits. If not, you must either reduce payload or plan a fuel stop.

### Summary

In this lesson you learned that density altitude — pressure altitude corrected for non-standard temperature — is the foundation of all performance chart calculations. Cruise performance charts are entered with altitude and power setting to find true airspeed and fuel flow. Interpolation between table entries is the standard method for intermediate values. Best power mixture maximises power for a given throttle setting; best economy mixture minimises fuel consumption per unit of power and is used at 65 percent power and below. Range is maximised at the specific airspeed that minimises fuel burn per nautical mile; endurance is maximised at a slower minimum-power speed. Tailwinds increase effective range; headwinds decrease it. Actual performance will be slightly less than chart performance due to airframe contamination, engine wear, and pilot technique, and contingency fuel should be added to the regulatory minimums accordingly. A systematic fuel planning process applied consistently to every commercial flight is both a regulatory requirement and professional best practice.

---

*End of Lesson PAL-001.*
