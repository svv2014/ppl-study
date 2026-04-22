---
id: GK-005
topic: general-knowledge
order: 5
slug: electrical-system
title: "Electrical System"
duration_min: 20
status: complete
audio: null
visual: /visuals/gk005-electrical-system.html
sources:
  - TP 12880E Chapter 5
  - TP 12880E Chapter 8
questions:
  - id: q1
    prompt: "The alternator in a light aircraft electrical system:"
    choices:
      A: "Stores electrical energy for use when the engine is not running"
      B: "Generates electrical power when driven by the engine to recharge the battery and power systems"
      C: "Provides power only to the avionics bus"
      D: "Acts as a backup generator that only operates in case of battery failure"
    answer: B
    explanation: "The alternator (or generator in older aircraft) converts engine mechanical power to electrical power. It charges the battery and powers electrical systems during flight. The battery provides power for starting and for short periods if the alternator fails. Source: TP 12880E Chapter 5."
  - id: q2
    prompt: "An ammeter in a light aircraft typically indicates:"
    choices:
      A: "The total electrical load on the bus in amps"
      B: "The charging current flowing into the battery (positive) or the discharge rate (negative)"
      C: "Battery voltage in the electrical system"
      D: "Alternator field current"
    answer: B
    explanation: "A centre-zero ammeter shows charging (positive deflection, alternator is working) or discharging (negative deflection, battery supplying power). A left-of-zero reading in cruise means the alternator may have failed. Some aircraft use a loadmeter instead, which shows total electrical load in amps. Source: TP 12880E Chapter 5."
  - id: q3
    prompt: "If an alternator fails in flight, the pilot should:"
    choices:
      A: "Continue the flight normally — the battery will power all systems indefinitely"
      B: "Reduce electrical load to essential equipment to extend battery life, and plan to land as soon as practicable"
      C: "Shut off all radios to prevent battery damage"
      D: "Switch to the backup alternator automatically — it requires no pilot action"
    answer: B
    explanation: "When the alternator fails, the battery becomes the only power source. Battery capacity is limited (typically 30–60 minutes of flight), so the pilot must shed non-essential electrical loads immediately to extend battery life, and land at the nearest suitable airport. Most training aircraft do not have a backup alternator. Source: TP 12880E Chapter 5."
  - id: q4
    prompt: "The master switch in most light aircraft controls:"
    choices:
      A: "Only the magneto ignition system"
      B: "Both the battery and alternator circuits (two-switch master or split-rocker switch)"
      C: "Only the avionics power bus"
      D: "All electrical systems simultaneously in a single on/off switch"
    answer: B
    explanation: "The master switch typically consists of two sections: the battery master (connects the battery to the main bus) and the alternator field switch (activates the alternator). In most aircraft these are combined in a single split-rocker switch. Source: TP 12880E Chapter 5."
  - id: q5
    prompt: "Electrical circuit breakers in a light aircraft are designed to:"
    choices:
      A: "Isolate the avionics from voltage spikes caused by the engine"
      B: "Protect wiring from overheating by opening the circuit if current exceeds the breaker's rating"
      C: "Convert alternating current (AC) to direct current (DC)"
      D: "Regulate voltage to a constant 28 V regardless of alternator output"
    answer: B
    explanation: "Circuit breakers protect wiring from overheating and fire. If current exceeds the breaker's rating (due to a short circuit or overloaded component), the breaker trips, opening the circuit. A tripped breaker should be reset only once — if it trips again, leave it open. Source: TP 12880E Chapter 5."
---

# Lesson GK-005: Electrical System

**Section:** General Knowledge  
**Lesson number:** 005  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapters 5, 8

---

## Narration Script

Modern light aircraft depend heavily on electrical systems for radios, navigation equipment, instruments, lighting, and in some aircraft, the fuel boost pump. Understanding the basic electrical system helps you manage failures and make smart decisions if something goes wrong in flight.

---

**The Basic Electrical System**

Most light training aircraft use a **12-volt or 28-volt direct current (DC)** electrical system. The main components are:

1. **Battery**: provides electrical energy for engine starting and acts as a backup if the alternator fails. A fully charged lead-acid battery has limited capacity — typically enough for 30 minutes to an hour of normal operations.

2. **Alternator (or generator in older aircraft)**: when the engine is running, the alternator produces DC power to run electrical equipment and recharge the battery. It is driven by the engine via a belt or direct coupling.

3. **Voltage regulator**: keeps alternator output voltage constant across different engine RPM and load conditions (typically at 13.5–14.5 V for a 12-V system, or 27–28 V for a 28-V system).

4. **Main bus bar**: a central connection point distributing electrical power to all systems and circuits.

5. **Circuit breakers (CBs)**: protect individual circuits from overloading. Most modern aircraft use push-to-reset circuit breakers rather than glass fuses.

6. **Master switch**: connects the battery and alternator field to the electrical system. Usually a split-rocker switch — the left (battery) half connects the battery; the right (alternator) half activates the alternator field circuit.

---

**How the System Works**

At engine start: battery master ON → battery powers the starter motor → engine starts. During starting, the alternator is typically not yet producing power (it requires minimum engine RPM).

At normal engine RPM: the alternator produces sufficient power to run all systems and keep the battery charged. The ammeter or loadmeter shows the system status.

**Ammeter (centre-zero type)**: 
- Positive (right of zero): alternator is charging the battery
- Zero: alternator output equals electrical load exactly
- Negative (left of zero): battery is discharging — alternator may have failed

**Loadmeter**: shows total electrical load in amps. Normal operating range depends on the aircraft.

---

**Alternator Failure**

Signs: ammeter shows discharge (negative reading) or low voltage warning light illuminates.

Immediate actions:
1. Check the alternator field switch (ensure it's ON)
2. Reset by cycling the alternator switch OFF then ON (may restore if a minor fault)
3. If not restored: **reduce electrical load** to essential systems only (transponder, one radio, essential navigation)
4. Plan to land as soon as practicable — battery will not last indefinitely

Non-essential items to shed: autopilot, pitot heat (if VMC), landing/nav lights (if day VFR), unnecessary avionics.

---

**Battery Capacity and Priority**

A 12-V aircraft battery might have 35 amp-hours of capacity. With a 10-amp load (essential equipment), that's roughly 3.5 hours — sounds like a lot. But battery capacity degrades with age and cold temperatures, and the battery may not be fully charged. In practice, assume 30–60 minutes of battery power at reduced load.

Priority order if alternator fails: 
1. Essential navigation (GPS or VOR)
2. Communication (one radio or emergency frequency)
3. Transponder (Mode C or S — helps ATC see you)
4. Everything else optional

---

**Circuit Breakers and Fuses**

Circuit breakers protect each circuit from overcurrent — if a fault draws more current than the wire can handle, the wire would overheat and potentially start an electrical fire. The circuit breaker interrupts the circuit before this happens.

**Tripped breaker procedure**: if a CB trips:
- Identify which system lost power
- Wait 30 seconds to let the circuit cool
- Reset ONCE by pushing the breaker back in
- If it trips again: do NOT reset — the circuit has a fault and resetting repeatedly can cause overheating and fire

Fuses serve the same function in older aircraft but must be replaced, not reset.

---

**Electrical Fire**

If you smell burning or see smoke in the cockpit:
1. Master switch OFF (removes power from bus)
2. Avionics master OFF
3. All individual switches OFF
4. Master switch ON — turn each switch back on one at a time to identify the faulty circuit
5. If smoke or burning returns when a specific switch is turned on: leave that switch off and leave the circuit breaker for that system pulled

---

**Gyro Instrument Power**

In aircraft with vacuum-driven gyros (attitude indicator and heading indicator), the gyros are powered by the vacuum system (engine-driven vacuum pump), not the electrical system. In glass cockpit aircraft, the AHRS and PFD are electrically powered — alternator failure is more critical.

---

## Key Points

- **Alternator**: produces power when engine runs; charges battery; powers systems
- **Battery**: starts engine; backup if alternator fails; limited capacity (~30–60 min at reduced load)
- **Ammeter**: positive = charging; negative = discharging (alternator may have failed)
- **Alternator failure**: shed non-essential loads, plan to land soon
- **Circuit breakers**: protect wiring; reset once if tripped; leave open if trips again
- **Master switch**: battery + alternator field (usually split-rocker)
- Electrical fire: master OFF, investigate systematically

---

*End of Lesson GK-005.*
