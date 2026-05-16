---
id: ADE-001
topic: cpl-a
order: 13
slug: high-speed-aerodynamics
title: "High-Speed Aerodynamics and Compressibility Effects"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/013-high-speed-aerodynamics.m4a
visual: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual)"
  - "TP 1102 Vol. 4 (Aerodynamics)"
  - "Transport Canada CPL-A Written Exam Guide"
questions:
  - id: q1
    prompt: "Mach number is defined as the ratio of:"
    choices:
      A: "True airspeed to calibrated airspeed"
      B: "Indicated airspeed to true airspeed"
      C: "The aircraft's speed to the local speed of sound"
      D: "True airspeed to the speed of sound at sea level"
    answer: C
    explanation: "Mach number = aircraft speed ÷ local speed of sound. The local speed of sound varies with temperature (and therefore altitude). At Mach 1, the aircraft is travelling at the speed of sound in the surrounding air mass. Source: TP 12880E; TP 1102 Vol. 4."
  - id: q2
    prompt: "As an aircraft approaches the critical Mach number (Mcrit), what aerodynamic effect first becomes significant?"
    choices:
      A: "Increased lift due to compressed air under the wing"
      B: "Shock wave formation on the wing, causing buffet and a rise in drag"
      C: "Decreased induced drag due to compressibility"
      D: "Reduction in stall speed caused by higher air density"
    answer: B
    explanation: "The critical Mach number (Mcrit) is the speed at which airflow over the wing first reaches Mach 1 locally. Above Mcrit, shock waves form on the wing surface, causing a rapid drag rise, buffet, and possible loss of control effectiveness. Source: TP 1102 Vol. 4."
  - id: q3
    prompt: "Mach tuck (pitch-down tendency at high Mach numbers) occurs primarily because:"
    choices:
      A: "The pilot fails to trim the aircraft adequately at altitude"
      B: "Shock waves cause the centre of pressure to move rearward, shifting the aerodynamic balance"
      C: "Engine thrust decreases above Mach 0.9, allowing the nose to drop"
      D: "Sweepback on the wings causes adverse yaw at high speed"
    answer: B
    explanation: "Mach tuck is caused by rearward migration of the centre of pressure as shock waves develop. This moves the lift force behind the centre of gravity, creating a nose-down pitching moment. Recovery requires immediate speed reduction and may require significant nose-up trim. Source: TP 1102 Vol. 4."
  - id: q4
    prompt: "VMO/MMO refers to:"
    choices:
      A: "The minimum operating manoeuvring speed and minimum Mach number for level flight"
      B: "The maximum operating speed in IAS and the maximum operating Mach number, above which structural or controllability limits may be exceeded"
      C: "The maximum speed with flaps extended and maximum speed in turbulence"
      D: "The never-exceed speed (VNE) expressed in Mach number only"
    answer: B
    explanation: "VMO is the maximum operating speed in indicated airspeed; MMO is the maximum operating Mach number. Exceeding either limit may cause structural damage, buffet, or loss of control. On most high-speed aircraft, the more restrictive of the two limits applies at any given altitude. Source: TP 12880E; aircraft AFM."
  - id: q5
    prompt: "High-speed buffet (coffin corner) occurs when an aircraft flying at high altitude finds that:"
    choices:
      A: "The stall speed and the high-speed buffet speed converge, leaving a very narrow speed margin"
      B: "The engine cannot produce enough thrust to maintain level flight"
      C: "Turbulence causes the aircraft to exceed its maximum operating altitude"
      D: "The aircraft's autopilot disengages at high altitude Mach numbers"
    answer: A
    explanation: "At extreme altitudes, the stall speed (which increases as air density decreases) and the high-speed buffet (compressibility) onset speed converge. The narrow speed band between them is colloquially called 'coffin corner.' This limits the maximum altitude at which an aircraft can be safely operated. Source: TP 1102 Vol. 4."
---

# Lesson ADE-001: High-Speed Aerodynamics and Compressibility Effects

**Subject:** Aerodynamics & Engines  
**Lesson number:** 013 (ADE-001)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Topics to be authored:
- Speed of sound: dependence on temperature, not pressure
- Mach number: definition and calculation
- Subsonic, transonic, supersonic regimes
- Critical Mach number (Mcrit): when local Mach 1 first occurs on the wing
- Shock wave formation: normal and oblique shock waves, their effects
- Wave drag: why drag increases dramatically above Mcrit
- Mach tuck: cause, recognition, and recovery
- VMO/MMO limits: definition and why both exist
- Coffin corner: high-altitude speed margins
- Design features that delay compressibility: swept wings, supercritical airfoils

---

## Narration Script

### Introduction

As an aircraft flies faster, the rules of aerodynamics change in ways that have no parallel in the low-speed world you studied for your PPL. When airspeed approaches the speed of sound, compressibility effects alter how air flows over the wings, how much drag the aircraft produces, and how the controls respond. For commercial pilots who operate high-performance aircraft or who may eventually transition to jet equipment, understanding high-speed aerodynamics is not optional knowledge — it is essential. In this lesson you will learn the physics of compressibility, the concept of Mach number, what happens above the critical Mach number, and the design features that allow modern aircraft to operate efficiently at high subsonic speeds. Sources: TP 12880E; TP 1102 Vol. 4.

### The Speed of Sound

The speed of sound is the speed at which a pressure disturbance propagates through a medium. In air, this speed depends on temperature: specifically, it equals approximately 20.05 times the square root of the absolute temperature in Kelvin. At sea level on a standard day, where the temperature is 15 degrees Celsius or 288 Kelvin, the speed of sound is approximately 661 knots. At 36,000 feet in the standard atmosphere, where the temperature has fallen to minus 56.5 degrees Celsius, the speed of sound drops to approximately 574 knots. The key point is that the speed of sound depends on temperature, not on pressure or altitude directly. Higher altitude produces lower temperature, which produces a lower speed of sound — but it is the temperature that is the controlling variable.

Mach number is defined as the ratio of the aircraft's speed to the local speed of sound in the surrounding air. An aircraft flying at the speed of sound is at Mach 1. An aircraft flying at half the speed of sound is at Mach 0.5. A Mach number below 1.0 is subsonic; above 1.0 is supersonic. The transonic regime covers the range roughly from Mach 0.75 to Mach 1.2, where some portions of the airflow around the aircraft are subsonic and others are supersonic simultaneously. No commercial piston or turboprop aircraft you will fly for a CPL-A operates above the transonic regime, but understanding transonic aerodynamics helps you understand why the high-speed limitations in the aircraft flight manual exist. Source: TP 12880E; TP 1102 Vol. 4.

### The Critical Mach Number

When an aircraft is flying at subsonic speeds, the air accelerates as it flows over the curved upper surface of the wing. This is the same process that generates lift: the accelerated airflow over the upper surface produces lower pressure than the slower flow beneath, and the pressure difference produces an upward force. The important consequence for high-speed aerodynamics is that the air over the upper surface of the wing is always moving faster than the aircraft as a whole. At some aircraft Mach number, the local airflow at the fastest point on the upper wing surface will first reach Mach 1 — even though the aircraft itself is still flying below Mach 1.

The aircraft Mach number at which local airflow first reaches Mach 1 somewhere on the wing is called the critical Mach number, abbreviated Mcrit. Above Mcrit, a small region of locally supersonic airflow exists on the wing, bounded by a shock wave at the point where the flow decelerates back to subsonic. This is the beginning of the transonic regime for that aircraft. Source: TP 1102 Vol. 4.

### Shock Waves and Their Effects

A shock wave is a thin discontinuity in the flow field where pressure, temperature, and density change abruptly. In the transonic regime, shock waves form on the wing surface where the locally supersonic airflow is forced back to subsonic conditions. The shock wave causes several serious problems for aircraft operations.

First, wave drag increases dramatically above Mcrit. In subsonic flight, pressure drag is the dominant drag component at cruise. When shock waves form, they add a new form of drag — called wave drag or compressibility drag — that rises very steeply with increasing Mach number. The total drag can increase by a factor of several times in a very small Mach number range, which is why early jet aircraft had great difficulty exceeding Mach 0.8 to 0.85.

Second, shock waves cause buffet — the same phenomenon as low-speed stall buffet, but caused by a different mechanism. As the shock wave passes over the wing surface, it causes the boundary layer of airflow behind it to separate, generating turbulent unsteady forces that shake the airframe. This high-speed buffet is a warning that the aircraft is approaching its compressibility limits.

Third, control surfaces may lose effectiveness or even reverse their effect when immersed in or behind a shock wave. The shock wave disrupts the smooth airflow that control surfaces depend on to generate control forces.

Fourth, and most critically, shock waves cause a rearward shift in the centre of pressure — the point where the net aerodynamic lift force effectively acts. When the centre of pressure moves rearward, the aerodynamic moment about the aircraft's centre of gravity changes, creating a nose-down pitching tendency. This phenomenon is called Mach tuck, and it can become a runaway situation: the nose-down pitch increases speed, which moves the shock waves further aft and intensifies Mach tuck, which increases speed further. Without intervention, Mach tuck can lead to structural failure in a high-speed dive. Source: TP 1102 Vol. 4.

### Mach Trim and VMO/MMO

To compensate for Mach tuck, high-speed aircraft are fitted with a Mach trim system — an automatic device that applies progressive nose-up trim as the aircraft approaches its maximum Mach number, offsetting the nose-down tendency. If the Mach trim system fails, the pilot must manually apply trim corrections as Mach number increases.

The maximum operating Mach number is called MMO — pronounced M-M-O — and is the highest Mach number at which the aircraft is permitted to operate in service. Similarly, VMO is the maximum indicated airspeed, also called the maximum operating speed. Both limits exist because of the high-speed aerodynamic effects described above: beyond these limits, buffet, control reversal, Mach tuck, or structural loads may exceed the aircraft's certification basis.

In practical terms, at low altitudes the limiting factor is VMO — the indicated airspeed limit is reached first. At high altitudes, as the speed of sound decreases with falling temperature, the Mach number limit MMO becomes the binding constraint before the indicated airspeed limit. The aircraft's airspeed indicator on high-speed aircraft typically shows both an IAS barber pole at VMO and a Machmeter reading MMO, and the pilot must respect whichever limit is more restrictive. Source: TP 12880E; aircraft AFM.

### Swept Wings and Supercritical Airfoils

Aircraft designers have developed two primary aerodynamic strategies for delaying the onset of compressibility effects to higher Mach numbers, thereby allowing efficient high-speed cruise without encountering the drag rise and stability problems associated with shock waves.

The first strategy is wing sweep. A swept-back wing presents an oblique angle to the oncoming airflow. The component of velocity perpendicular to the wing's leading edge is less than the total airspeed of the aircraft — by an amount that depends on the sweep angle. For a wing swept 35 degrees, the effective velocity component that drives the aerodynamic loading is reduced by the cosine of 35 degrees, which is approximately 82 percent. This means a swept-wing aircraft can fly at a higher total Mach number before the effective local velocity reaches the critical value on the wing. Modern jet airliners use sweep angles of 25 to 35 degrees, and some high-performance military aircraft use even more extreme sweep. The trade-off is that swept wings have lower lift at low speeds, requiring higher approach and landing speeds and more complex high-lift devices such as leading-edge slats and multi-segment trailing-edge flaps. Source: TP 1102 Vol. 4.

The second strategy is the supercritical airfoil. A conventional airfoil has a highly curved upper surface that accelerates airflow strongly, producing lift efficiently at low speeds but also generating a high local velocity peak that drives Mcrit down. A supercritical airfoil has a flatter upper surface that distributes the lift more evenly, reducing the local velocity peak and therefore raising Mcrit. The lower surface of a supercritical airfoil typically has more camber than a conventional wing, contributing lift without requiring as much upper-surface curvature. The result is an airfoil that can operate at higher Mach numbers before encountering shock waves, and that produces less wave drag when shock waves do form. Many modern commercial aircraft combine swept wings with supercritical airfoils for maximum cruise efficiency at high subsonic Mach numbers.

### Coffin Corner

At very high altitudes, a phenomenon known colloquially as coffin corner creates an extremely narrow safe operating speed band. The stall speed — the minimum airspeed for level flight — increases with altitude because as air density decreases, the aircraft must fly faster to generate the same lift. Simultaneously, as the aircraft climbs to higher altitudes and the temperature and speed of sound continue to decrease, the Mach number at which high-speed buffet onset occurs in terms of indicated airspeed becomes lower and lower. At extreme altitudes — well above FL400 for most piston aircraft, and above FL500 for turbojet designs — the indicated airspeed for high-speed buffet onset and the indicated airspeed for low-speed stall converge. The gap between them may be only a few knots.

At coffin corner, a small gust or turbulence encounter can simultaneously push the aircraft toward both the high-speed and low-speed limits. There is no recovery action available: slowing down risks a stall, and speeding up risks high-speed buffet and structural failure. The maximum altitude at which the aircraft can be safely operated is determined by the altitude where a minimum acceptable speed margin remains between stall and high-speed buffet — typically defined as a 1.3g buffet onset margin. Aircraft flight manuals specify a maximum certified altitude that respects this margin. Source: TP 1102 Vol. 4.

### Summary

In this lesson you learned that the speed of sound depends on temperature, and decreases with altitude in the standard atmosphere. Mach number is the ratio of aircraft speed to local speed of sound. The critical Mach number Mcrit is the flight Mach number at which local airflow first reaches Mach 1 somewhere on the wing. Above Mcrit, shock waves form, causing wave drag, buffet, control effectiveness changes, and Mach tuck — a nose-down pitch tendency caused by the rearward shift of the centre of pressure. MMO is the maximum permitted operating Mach number, and VMO is the maximum operating indicated airspeed; whichever is more restrictive applies at any given altitude. Swept wings delay Mcrit by reducing the effective velocity component perpendicular to the leading edge. Supercritical airfoils flatten the upper surface to reduce local velocity peaks. Coffin corner is the high-altitude condition where the stall speed and high-speed buffet speed converge, leaving an extremely narrow safe speed band. These concepts are core material for the CPL-A aerodynamics questions.

---

*End of Lesson ADE-001.*
