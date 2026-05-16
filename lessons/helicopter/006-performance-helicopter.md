---
id: HEL-006
topic: helicopter
order: 6
slug: performance-helicopter
title: "Helicopter Performance"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/helicopter/006-performance-helicopter.m4a
visual: null
sources:
  - "TC Helicopter Flight Training Manual (TP 9982E)"
  - "CARs 605.31 — Weight and Balance Control"
  - "CARs 605.92 — Aircraft Operating Limitations"
  - "Transport Canada TP 13572E — Density Altitude and Performance"
questions:
  - id: q1
    prompt: "A helicopter is said to be operating HOGE when it:"
    choices:
      A: "Hovers with its skids within 10 feet of the ground"
      B: "Hovers at an altitude where the ground cushion is no longer effective, typically above one rotor diameter"
      C: "Hovers with the engine at maximum continuous power"
      D: "Hovers over a surface with no wind"
    answer: B
    explanation: "HOGE (Hover Out of Ground Effect) refers to hovering at an altitude high enough that the ground pressure cushion is negligible — typically above approximately one rotor diameter. HOGE requires significantly more power than HIGE (Hover In Ground Effect). The distinction is critical for performance planning at high density altitudes or heavy weights. Source: TP 9982E, Performance chapter."
  - id: q2
    prompt: "The height-velocity (H-V) diagram defines regions where autorotation to a safe landing:"
    choices:
      A: "Is always possible regardless of airspeed or altitude"
      B: "Is not possible within the 'dead man's curve' — too high and too slow, or too low to arrest the descent"
      C: "Is only possible above 500 feet AGL"
      D: "Requires the pilot to immediately raise the collective to maximum"
    answer: B
    explanation: "The H-V diagram shows combinations of height and airspeed from which a safe autorotational landing cannot be made — either there is insufficient airspeed to flare, or insufficient height to arrest the rate of descent. Flight in the 'dead man's curve' is avoided in single-engine helicopters during normal operations. Source: TP 9982E; Rotorcraft Flight Manual for the specific type."
  - id: q3
    prompt: "Increasing density altitude has which of the following effects on helicopter hover performance?"
    choices:
      A: "Increases available lift because the rotor blades produce more lift in thinner air"
      B: "Has no effect if the engine is producing rated power"
      C: "Reduces rotor efficiency and engine power output, requiring higher collective pitch for the same lift, which may exceed available power"
      D: "Only affects turbine-powered helicopters, not piston-powered ones"
    answer: C
    explanation: "High density altitude (high altitude, high temperature, low pressure, high humidity) reduces air density. Thinner air means the rotor blades generate less lift per unit of pitch angle, so more collective is required. Simultaneously, piston engines lose ~3% power per 1,000 ft density altitude, and turbines are also affected. The combination can reduce hover capability to the point where flight is impossible at extreme conditions. Source: TP 9982E; TP 13572E."
  - id: q4
    prompt: "When computing helicopter weight and balance, the datum is:"
    choices:
      A: "Always the main rotor hub"
      B: "The forward skid attachment point"
      C: "A manufacturer-defined reference point from which all moment arms are measured"
      D: "The centre of the fuselage"
    answer: C
    explanation: "The datum is an arbitrary reference point defined by the manufacturer (often the nose of the helicopter, the rotor hub, or another convenient point). All moment arm distances (horizontal distances from the datum to component CG locations) are measured from this datum. The overall centre of gravity must remain within the allowable CG envelope for safe flight. Source: CARs 605.31; TP 9982E, Weight and Balance chapter."
  - id: q5
    prompt: "A helicopter's CG that is too far aft will result in:"
    choices:
      A: "Improved autorotation performance"
      B: "A tendency to pitch nose-up that may exceed available forward cyclic travel to correct"
      C: "Increased tail rotor effectiveness"
      D: "Reduced fuel consumption due to lower drag"
    answer: B
    explanation: "An aft CG shifts the balance point behind the optimal position. The rotor disc must be tilted aft to maintain level flight, and in extreme cases the nose-up tendency exceeds the pilot's ability to apply forward cyclic. This can result in loss of control. Aft CG also reduces longitudinal stability. Source: TP 9982E, Weight and Balance chapter."
---

# Lesson HEL-006: Helicopter Performance

**Section:** Helicopter  
**Lesson number:** 006  
**Estimated time:** 20 minutes  
**Source:** TC Helicopter Flight Training Manual (TP 9982E); CARs 605.31; CARs 605.92; TP 13572E

---

## Narration Script

Performance planning for helicopters is different from fixed-wing in several key ways. Helicopters operate much closer to their performance limits — especially in hover, where power demands are highest. Understanding HIGE versus HOGE, the height-velocity diagram, weight and balance, and density altitude effects is fundamental to safe helicopter operations.

---

### Hover In Ground Effect (HIGE) vs. Hover Out of Ground Effect (HOGE)

Ground effect, as covered in the aerodynamics lesson, is the efficiency gain the rotor experiences when operating close to the surface. In practical performance terms:

**HIGE (Hover In Ground Effect)** — hovering with skids near the surface, typically within approximately one rotor diameter. The ground cushion reduces induced drag and improves rotor efficiency. A helicopter hovering in ground effect requires significantly less power than the same helicopter hovering at height. For a given weight, temperature, and altitude, there is a maximum density altitude at which the helicopter can HIGE, and a separate (lower) limit for HOGE.

**HOGE (Hover Out of Ground Effect)** — hovering at sufficient altitude that ground effect is negligible. HOGE requires more power. At high density altitudes or near maximum gross weight, a helicopter that can achieve HIGE may not be able to achieve HOGE. This has direct operational implications:

- If departure requires transitioning through the HOGE regime (such as lifting above trees or a ridgeline before gaining translational lift), the helicopter must be able to HOGE at that weight and density altitude — or the departure cannot be safely made.
- Performance charts in the Rotorcraft Flight Manual (RFM) provide HIGE and HOGE power requirements for various combinations of pressure altitude, temperature, and gross weight.

Always check HOGE capability, not just HIGE, when planning helicopter operations from confined areas or elevated terrain.

---

### The Height-Velocity (H-V) Diagram — "Dead Man's Curve"

The height-velocity diagram (H-V diagram, also called the "dead man's curve") is unique to helicopters. It defines combinations of height above ground and airspeed from which a safe autorotational landing cannot be accomplished following a sudden engine failure.

The diagram typically shows two "avoid" regions:

1. **The High-Hover Region (upper left):** The helicopter is flying slowly at high altitude. If the engine fails here, there is not enough airspeed to flare effectively and reduce the rate of descent before reaching the ground. The descent rate, even in autorotation, cannot be arrested in time.

2. **The Low-Speed, Low-Height Region (lower right):** The helicopter is flying fast and low. If the engine fails, there is insufficient height to establish autorotation, reduce speed, flare, and cushion the landing before ground contact.

Outside these avoid regions — that is, either low and slow (below the low-altitude avoid region) or sufficiently high and fast — an engine failure can be managed with a successful autorotation.

In practice, pilots flying single-engine helicopters try to minimize time in the avoid regions of the H-V diagram. During takeoff, this means transitioning quickly through the vulnerable speed range — accelerating and climbing through the danger zone as rapidly as practical. During approach, pilots plan descent profiles that pass through the avoid regions briefly and at speeds that offer the best autorotation options.

The H-V diagram is specific to each helicopter type and is found in the Rotorcraft Flight Manual. It varies with gross weight and density altitude — at higher weights or density altitudes, the avoid regions grow.

---

### Weight and Balance for Helicopters

Helicopter weight and balance follows the same fundamental principles as fixed-wing: total weight must be within the maximum certificated gross weight, and the centre of gravity (CG) must remain within the allowable CG envelope throughout the flight.

**Weight:** Exceeding maximum gross weight reduces performance margins, increases stress on the rotor system and transmission, and degrades autorotation capability. Load and fuel must be managed to stay within limits. As fuel burns, the CG shifts — plan for both the takeoff and landing CG positions.

**CG Envelope:** The manufacturer defines a CG envelope in the RFM — typically a chart of CG position (forward-aft and sometimes lateral) versus gross weight. The datum is a manufacturer-defined reference point (sometimes the nose, sometimes the main rotor shaft). Moment arms are measured horizontally from the datum; positive arms are typically aft of datum.

**Effects of CG Position:**
- **Forward CG:** The rotor disc must tilt forward to maintain trim, requiring aft cyclic. Extreme forward CG can exhaust aft cyclic authority. Forward CG generally improves longitudinal stability.
- **Aft CG:** The disc must tilt aft, requiring forward cyclic. Extreme aft CG can exhaust forward cyclic travel, leading to loss of control. Aft CG also reduces longitudinal stability and makes the helicopter harder to control.
- **Lateral CG:** Many helicopters have a lateral CG limit. Asymmetric loading (e.g., a heavy passenger on one side and no one on the other) can cause a sustained lateral roll that requires constant cyclic correction and may exceed the correction available.

**CARs 605.31** requires that aircraft be operated within the weight and balance limits established by the manufacturer, and **CARs 605.92** requires the operating limitations from the flight manual to be available to the flight crew.

---

### Density Altitude Effects on Performance

Density altitude is the altitude in the International Standard Atmosphere (ISA) that corresponds to the actual air density. It accounts for pressure altitude, temperature, and humidity. High density altitude means low air density, which degrades both rotor performance and engine performance.

**Effect on Rotors:** Thinner air produces less lift per unit of angle of attack. For a given rotor RPM and blade area, more blade pitch (collective) is required to produce the same lift. This increases induced drag and power demand.

**Effect on Piston Engines:** Piston engines lose approximately 3% of sea-level power per 1,000 feet of density altitude. At 5,000 feet density altitude, a normally aspirated engine produces only about 85% of its rated sea-level power. The power available decreases while the power required increases — a double penalty.

**Effect on Turboshaft Engines:** Turbine engines are less affected than pistons up to the critical altitude, but they still lose power at high density altitudes, and their fuel consumption increases. Temperature is the primary degrading factor for turbines at altitude.

**Practical Implications:**
- On hot summer days at high-elevation aerodromes (many locations in BC, Alberta, and the Yukon), density altitude may be 3,000–5,000 feet higher than field elevation.
- Performance charts must be used at actual density altitude, not field elevation.
- Hover capability (HIGE and HOGE) degrades rapidly with density altitude.
- Takeoff distance and climb performance decrease.
- In extreme cases, departure may need to be delayed until cooler temperatures (early morning) or load reduced.

**Computing Density Altitude:** Use a flight computer or the chart in the Canada Flight Supplement / performance charts. Rule of thumb: add approximately 1,000 feet of density altitude for every 15°C above ISA temperature at a given pressure altitude. ISA temperature is 15°C at sea level, decreasing 2°C per 1,000 feet.

---

## Key Points

- HIGE (In Ground Effect) requires less power than HOGE (Out of Ground Effect) — always check HOGE capability when confined-area or elevated departures are planned.
- The H-V (height-velocity) diagram defines combinations of height and speed from which autorotation to a safe landing is not possible — avoid the "dead man's curve."
- Helicopter CG must remain within the manufacturer's envelope; aft CG is particularly dangerous due to loss of forward cyclic authority.
- High density altitude reduces both rotor efficiency and engine power, degrading all performance parameters.
- CARs 605.31 requires weight and balance control within certificated limits; CARs 605.92 covers operating limitations.

---

*End of Lesson HEL-006.*
