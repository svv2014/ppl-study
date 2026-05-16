---
id: HEL-005
topic: helicopter
order: 5
slug: systems-helicopter
title: "Helicopter Systems"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/helicopter/005-systems-helicopter.m4a
visual: null
sources:
  - "TC Helicopter Flight Training Manual (TP 9982E)"
  - "CARs 605.06 — Aircraft Equipment Standards and Serviceability"
  - "CARs Part VI (General Operating and Flight Rules)"
  - "Transport Canada Aeronautical Information Manual (AIM)"
questions:
  - id: q1
    prompt: "A fully articulated rotor system allows each blade to move in:"
    choices:
      A: "One axis only — flap up and down"
      B: "Two axes — flap and feather (pitch change)"
      C: "Three axes — flap, lead-lag, and feather (pitch change)"
      D: "No independent movement — blades are rigidly attached to the hub"
    answer: C
    explanation: "In a fully articulated rotor system, each blade is attached to the hub via hinges that allow independent movement in three planes: flapping (up/down), lead-lag (fore/aft in the plane of rotation), and feathering (pitch change about the blade's spanwise axis). This design is typical of medium and large helicopters. Source: TP 9982E, Rotor Systems chapter."
  - id: q2
    prompt: "NOTAR (No Tail Rotor) systems provide anti-torque thrust primarily by:"
    choices:
      A: "A ducted fan inside the tail boom that blows air laterally"
      B: "Circulation control using a jet of air exhausted through slots in the tail boom, plus a rotating thruster at the tail"
      C: "Counter-rotating main rotors that cancel each other's torque"
      D: "Moveable vertical stabilizers that use aerodynamic forces to counteract torque"
    answer: B
    explanation: "NOTAR uses engine bleed air blown through slots along the tail boom. The Coanda effect causes the main rotor downwash to attach to and wrap around the tail boom, producing sideward thrust (circulation control). A variable-pitch rotating thruster at the tail provides additional directional control. Source: TP 9982E; manufacturer documentation (MD Helicopters)."
  - id: q3
    prompt: "The main advantage of a turbine engine over a piston engine in helicopter operations is:"
    choices:
      A: "Turbine engines use less fuel per hour at all power settings"
      B: "Turbine engines maintain nearly constant power output across a wider range of density altitudes and can be more readily controlled at high power"
      C: "Turbine engines require no warm-up period before flight"
      D: "Turbine engines are always lighter than equivalent piston engines"
    answer: B
    explanation: "Turbine (turboshaft) engines provide more consistent power across altitude and temperature ranges compared to normally aspirated piston engines, which lose approximately 3% power per 1,000 feet of altitude gain. Turbines also have a high power-to-weight ratio. Note: turbines use more fuel at low power and require specific startup procedures. Source: TP 9982E, Powerplants chapter."
  - id: q4
    prompt: "The transmission in a helicopter serves primarily to:"
    choices:
      A: "Convert engine RPM to appropriate main and tail rotor RPM, and transmit torque to both rotor systems"
      B: "Control the collective pitch of all rotor blades simultaneously"
      C: "Provide a clutch mechanism for the freewheeling unit only"
      D: "Regulate fuel flow to match pilot-demanded power"
    answer: A
    explanation: "Helicopter engines operate at high RPM (turbines ~20,000–30,000 RPM; pistons ~2,500–3,000 RPM). The transmission reduces engine RPM to a suitable rotor RPM (typically 300–500 RPM for the main rotor) via gearboxes. It also drives the tail rotor through a driveshaft and distributes power to accessories. Source: TP 9982E, Transmission Systems chapter."
  - id: q5
    prompt: "The freewheeling unit (sprag clutch) in a helicopter automatically:"
    choices:
      A: "Increases rotor RPM during an engine failure to prevent overspeeding"
      B: "Disengages the engine from the rotor if engine RPM drops below rotor RPM, enabling autorotation"
      C: "Locks the rotor to the engine during all phases of normal flight"
      D: "Engages when collective is lowered and disengages when collective is raised"
    answer: B
    explanation: "The freewheeling unit (sprag or overrunning clutch) is a one-way clutch: it transmits torque from engine to rotor when the engine is driving, but automatically disengages if the rotor RPM exceeds engine RPM (as occurs on engine failure or throttle reduction). This allows the rotor to autorotate freely. Source: TP 9982E."
---

# Lesson HEL-005: Helicopter Systems

**Section:** Helicopter  
**Lesson number:** 005  
**Estimated time:** 20 minutes  
**Source:** TC Helicopter Flight Training Manual (TP 9982E); CARs 605.06; CARs Part VI

---

## Narration Script

Understanding helicopter systems is essential for safe operation and for the PPL-H written exam. This lesson covers the main components that make a helicopter fly: the rotor systems, anti-torque systems, transmission, engine types, and the fuel and electrical systems.

---

### Main Rotor Systems

All single-rotor helicopters have one main rotor that provides lift and directional control. The differences between helicopter types often come down to how the rotor blades are attached to the hub — specifically, how much freedom of movement each blade has. There are three primary rotor hub designs:

**Fully Articulated Rotor Systems** attach each blade to the hub with multiple hinges, allowing movement in three planes:

1. **Flapping** — the blade can move up and down about the horizontal flapping hinge. This corrects for dissymmetry of lift in forward flight, as discussed in the aerodynamics lesson.
2. **Lead-Lag (Drag)** — the blade can move fore and aft within the plane of rotation about the vertical drag hinge. This absorbs the acceleration and deceleration forces each blade experiences as it flaps.
3. **Feathering (Pitch Change)** — the blade can rotate about its spanwise axis to change its angle of attack. This is the mechanism the cyclic and collective controls use.

Fully articulated systems are found on medium and large helicopters (Robinson R44 class and above, Bell 206, Sikorsky S-76, etc.). They are mechanically complex but allow effective control at high airspeeds and with heavy loads.

**Semi-Rigid (Teetering) Rotor Systems** use a two-blade rotor where both blades are rigidly attached to each other and to a teetering hinge at the hub. The pair of blades can teeter (one flaps up, the other flaps down) as a unit, and each blade can feather independently for pitch change. There are no individual lead-lag hinges — the semi-rigid system relies on blade flexibility to absorb those forces. The Robinson R22 and R44 use this design. Semi-rigid systems are simpler and lighter but are more sensitive to low-g conditions that can cause mast bumping.

**Rigid (Hingeless) Rotor Systems** attach blades directly to the hub with no flapping or lead-lag hinges. Instead, the blades themselves flex to accommodate flapping and lead-lag forces — an engineering feat requiring composite materials. Rigid rotors offer very responsive handling and are used on high-performance helicopters. Feathering still occurs through pitch change bearings.

---

### Tail Rotor and Anti-Torque Systems

A single main rotor helicopter requires a system to counteract main rotor torque and provide directional (yaw) control. The standard solution is a tail rotor: a small rotor mounted vertically at the tail boom, its thrust axis perpendicular to the longitudinal axis of the helicopter.

The tail rotor is driven by the transmission via a driveshaft running the length of the tail boom. The pilot controls tail rotor pitch (and therefore thrust) with the anti-torque pedals. Left pedal increases tail rotor thrust to yaw the nose left; right pedal decreases thrust (or reverses it on some designs) to yaw the nose right.

**NOTAR (No Tail Rotor)** — developed by MD Helicopters — eliminates the conventional tail rotor entirely using an aerodynamic phenomenon called the Coanda effect. An engine-driven fan pressurizes the tail boom interior. Air exits through longitudinal slots along the boom's right side. The main rotor downwash, interacting with this jet of air via Coanda effect, wraps around the tail boom, generating a sideward lift force that counteracts torque. A small variable-pitch thruster at the very tip of the tail provides additional yaw control authority. NOTAR systems eliminate the hazard of an exposed tail rotor — a significant safety advantage in confined areas.

**Tandem Rotor Helicopters** (e.g., Boeing CH-47 Chinook) use two counter-rotating main rotors — front and rear. Because the rotors rotate in opposite directions, their torques cancel each other. No tail rotor is needed. Tandem designs excel in heavy-lift applications.

**Coaxial Rotor Systems** (e.g., Kamov Ka-32) use two counter-rotating main rotors on the same shaft, one above the other. Again, opposing torques cancel.

---

### Transmission System

Helicopter engines operate at far higher RPM than the main rotor can safely turn. A turboshaft engine may run at 20,000–30,000 RPM at the power turbine shaft; a typical main rotor turns at 300–500 RPM. The transmission (gearbox) reduces this speed through a series of gear stages and distributes power to the main rotor, tail rotor driveshaft, and accessory drives (hydraulics, generators, etc.).

Critical components within or associated with the transmission include:

- **Freewheeling Unit (Sprag Clutch):** A one-way clutch that drives the rotor when engine RPM exceeds rotor RPM, and automatically disengages when rotor RPM exceeds engine RPM. On engine failure, this allows the rotor to continue spinning for autorotation without the engine drag impeding it.
- **Clutch (Belt Drive or Centrifugal):** On piston helicopters, a clutch allows the engine to be started and warmed up before engaging the rotor. Turbine helicopters use the freewheeling unit directly.
- **Gearboxes:** The main gearbox and intermediate gearboxes step down RPM. They must be lubricated and have defined operating temperature and oil pressure limits monitored by cockpit gauges.

Transmission chip detectors warn of metal particles in the gearbox oil — an early indicator of internal wear. A chip light is treated as an emergency.

---

### Engine Types

**Piston (Reciprocating) Engines** power light training helicopters. The Robinson R22 uses a Lycoming O-320, and the R44 uses a Lycoming IO-540. Piston engines are fuel-efficient at low power but lose approximately 3% power per 1,000 feet of density altitude, making high-altitude or hot-day performance calculations critical. They require carburetor heat or fuel injection and have magneto-based ignition systems.

**Turboshaft Engines** power medium and large helicopters. A turboshaft is a gas turbine in which almost all turbine power goes to drive the output shaft (rather than producing thrust as in a jet engine). Turboshafts maintain more consistent power across altitude ranges, have high power-to-weight ratios, and run on jet fuel (Jet-A, Jet-B). They require specific startup sequences and are more expensive to operate. The Bell 206 JetRanger uses the Allison 250-C series turboshaft.

---

### Fuel Systems

Fuel system components in a helicopter include tanks (often located below the cabin for low center of gravity), fuel pumps (engine-driven and electric boost pumps), filters, fuel control units, and gauges. Piston helicopters use AVGAS (100LL). Turbine helicopters use Jet-A or Jet-B. Misfuelling is an emergency.

Fuel venting is critical — without it, fuel tanks would collapse as fuel is consumed. Check that fuel vents are unobstructed during preflight.

Turbine engines have a combustion chamber where fuel is ignited, and fuel flow is controlled by the fuel control unit (FCU), which automatically adjusts fuel to maintain demanded power.

---

### Electrical Systems

Helicopter electrical systems are similar to fixed-wing: a battery for starting and backup power, an alternator or generator (driven by the engine or gearbox) for primary power in flight, a bus bar distributing power to systems, and circuit breakers for protection.

In turbine helicopters, electrical power may also run from a starter-generator, which functions as a starter during engine start and switches to generator mode once engine RPM is sufficient. Some helicopters have dual electrical buses for redundancy.

---

## Key Points

- Fully articulated rotors have three hinges per blade (flap, lead-lag, feather). Semi-rigid teetering rotors share a teetering hinge. Rigid rotors flex structurally.
- Tail rotor counteracts main rotor torque and provides yaw control. NOTAR uses Coanda effect and a tip thruster instead.
- The freewheeling unit disconnects the engine from the rotor on engine failure, enabling autorotation.
- The transmission reduces engine RPM to rotor RPM and distributes power.
- Piston engines power light helicopters (AVGAS); turboshafts power medium/large (Jet-A). Turbines maintain power better at altitude.
- Chip detectors in gearbox oil warn of internal wear — a chip light is an emergency.

---

*End of Lesson HEL-005.*
