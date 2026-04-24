---
id: GK-007
topic: general-knowledge
order: 7
slug: gyroscopic-instruments
title: "Gyroscopic Instruments"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/general-knowledge/007-gyroscopic-instruments.m4a
visual: /visuals/gk007-gyroscopic-instruments.html
sources:
  - TP 12880E Chapter 8
  - CARs 605.14
questions:
  - id: q1
    prompt: "The attitude indicator (artificial horizon) is driven by:"
    choices:
      A: "The static pressure system"
      B: "A gyroscope — either vacuum-driven or electrically powered"
      C: "The pitot pressure system"
      D: "Magnetic sensors aligned with the Earth's magnetic field"
    answer: B
    explanation: "The attitude indicator uses a gyroscope with rigidity-in-space properties to maintain a fixed orientation relative to inertial space. In most training aircraft it is vacuum-driven — a vacuum pump creates suction that spins the gyro rotor. Modern glass-cockpit aircraft use solid-state AHRS instead. Source: TP 12880E Chapter 8."
  - id: q2
    prompt: "The heading indicator (directional gyro) differs from the magnetic compass primarily because:"
    choices:
      A: "It automatically corrects for magnetic variation"
      B: "It has no north-seeking ability and must be periodically synchronized with the magnetic compass"
      C: "It is more accurate in turns than the magnetic compass"
      D: "It requires no power source and works even with the engine off"
    answer: B
    explanation: "The heading indicator uses a gyroscope for stability and accuracy in turns, but has no inherent north-seeking ability. It must be set to agree with the magnetic compass before departure and re-synchronized every 10–15 minutes because gyroscopic precession causes it to drift. Source: TP 12880E Chapter 8."
  - id: q3
    prompt: "During a prolonged coordinated turn, the inclinometer (ball) in the turn coordinator will be:"
    choices:
      A: "Deflected in the direction of the turn"
      B: "Centred, indicating a coordinated (balanced) turn"
      C: "Deflected opposite to the turn direction"
      D: "Unusable — the inclinometer only works in straight flight"
    answer: B
    explanation: "In a coordinated (balanced) turn, the ball in the inclinometer is centred, indicating that rudder and aileron are properly coordinated and no sideslip exists. A ball displaced to one side means the turn is uncoordinated — apply rudder in the direction the ball is displaced ('step on the ball'). Source: TP 12880E Chapter 8."
  - id: q4
    prompt: "If the vacuum system fails in flight, which instruments are immediately affected?"
    choices:
      A: "Airspeed indicator and altimeter"
      B: "Attitude indicator and heading indicator (if vacuum-driven)"
      C: "Turn coordinator and inclinometer"
      D: "All six primary instruments simultaneously"
    answer: B
    explanation: "Vacuum-driven gyroscopic instruments — typically the attitude indicator and heading indicator — lose power if the vacuum system fails. The turn coordinator is usually electrically driven and remains operational. The pitot-static instruments (ASI, altimeter, VSI) are unaffected by vacuum failure. Source: TP 12880E Chapter 8."
  - id: q5
    prompt: "The magnetic compass is subject to turning errors. In the northern hemisphere, when initiating a turn from a northerly heading:"
    choices:
      A: "The compass leads the actual turn — it shows a turn before one is made"
      B: "The compass lags — it initially indicates a turn in the opposite direction"
      C: "The compass reads correctly throughout the turn"
      D: "The compass rotates at the same rate as the aircraft turn"
    answer: B
    explanation: "In the northern hemisphere, the dip angle of the Earth's magnetic field causes the compass card to tilt during turns. When turning from north, the compass initially lags and may briefly indicate a turn in the opposite direction. When turning from south, the compass leads. The compass reads most accurately on easterly and westerly headings. Source: TP 12880E Chapter 8."
---

# Lesson GK-007: Gyroscopic Instruments

**Section:** General Knowledge  
**Lesson number:** 007  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 8, CARs 605.14

---

## Narration Script

Three of the six primary flight instruments rely on gyroscopes — spinning masses that resist changes in orientation due to the property of rigidity in space. Understanding how these instruments work, how they can fail, and how to cross-check them against other sources is critical for safe flight, especially when outside visual references are reduced.

---

**Gyroscopic Principles**

A gyroscope is a rapidly spinning mass (rotor). It exhibits two key properties:

1. **Rigidity in space**: a spinning gyro maintains its orientation in space unless a force is applied to it. This makes it useful for attitude and direction references.

2. **Precession**: when a force is applied to a spinning gyro, the gyro reacts as if that force had been applied 90° ahead in the direction of rotation. Precession causes gyroscopic instruments to drift over time.

The three gyroscopic instruments are:
1. Attitude Indicator (AI)
2. Heading Indicator (HI) / Directional Gyro (DG)
3. Turn Coordinator (TC)

---

**Attitude Indicator (AI)**

The attitude indicator (also called the artificial horizon) shows the aircraft's pitch and bank attitude relative to a stabilized artificial horizon. The gyro spin axis is maintained vertically by erection mechanisms.

In training aircraft, the AI is typically **vacuum-driven**: a vacuum pump (engine-driven) draws air through the instrument, spinning the gyro rotor at 8,000–12,000 RPM. Some aircraft use **electrically-driven** AI instruments instead.

**Vacuum system failure**: if the vacuum pump fails, the AI (and usually the HI) gradually topples and gives false, unreliable readings. The AI may appear to show straight-and-level while the aircraft is actually banking — a dangerous situation in IMC. Always cross-check the AI against the TC (usually electric) and outside references.

**Precession error**: over time, even with erection mechanisms, the AI drifts slightly. In a long coordinated turn, the AI may indicate a slightly different pitch or bank than actual. After returning to straight-and-level, the erection mechanism realigns the gyro.

**Limits**: most training aircraft AIs have a pitch limit of ±60–70° and a bank limit of ±100–110° before the gyro tumbles (becomes unreliable). After tumbling, the AI must be allowed to re-erect before it can be trusted.

---

**Heading Indicator (HI) / Directional Gyro (DG)**

The heading indicator shows the aircraft's heading on a compass card. Unlike the magnetic compass, the HI uses gyroscopic rigidity for stable, turn-error-free readings. However, it has **no north-seeking ability** — it must be synchronized with the magnetic compass.

**Pre-flight procedure**: with the aircraft in straight-and-level flight on a known heading, set the HI to match the magnetic compass reading.

**In-flight drift**: gyroscopic precession and the Earth's rotation cause the HI to drift away from the correct heading. In a typical training aircraft, drift can be 2–3° per 15 minutes. The pilot must re-synchronize the HI to the compass every 10–15 minutes during cruise flight.

**When to synchronize**: only synchronize the HI while in straight-and-level, unaccelerated flight — the magnetic compass has errors in turns and during acceleration/deceleration.

---

**Magnetic Compass**

The magnetic compass is the only heading instrument that requires no power — it works entirely on the Earth's magnetic field. For this reason, it is a required backup heading reference.

**Compass errors:**

**Variation**: the difference between true north (geographic north) and magnetic north. Variation is shown by isogonic lines on aeronautical charts. Pilots convert between true and magnetic headings using variation.

**Deviation**: local magnetic interference from the aircraft's own electrical systems, engine, and structure causes the compass to deviate from magnetic north. A compass correction card (swinging card) in the cockpit lists the deviation corrections for various headings. Periodic compass swings by an AME calibrate the deviation.

**Turning errors** (in northern hemisphere):
- Turning **from north**: compass lags — initially indicates a turn opposite to actual
- Turning **from south**: compass leads — indicates a larger turn than actual
- Turning **from east or west**: compass is most accurate

**Acceleration errors** (in northern hemisphere, on E or W headings):
- **Acceleration** causes a false northerly indication
- **Deceleration** causes a false southerly indication
- Memory aid: **ANDS** — Accelerate North, Decelerate South (on E/W headings)

---

**Turn Coordinator (TC)**

The turn coordinator shows the rate and direction of turn, and also shows roll rate during entry and recovery. It contains a gyro with its spin axis tilted about 30° from horizontal, giving it sensitivity to both roll and yaw.

The TC is almost always **electrically driven** — this makes it independent of the vacuum system and therefore a useful backup if vacuum fails.

The **inclinometer** (ball in curved tube, also called slip indicator) is a separate, liquid-filled instrument mounted below the TC. It shows whether a turn is coordinated:
- **Ball centred**: coordinated — rudder and aileron balanced, no sideslip
- **Ball displaced right**: apply right rudder ("step on the ball")
- **Ball displaced left**: apply left rudder

A **slip** is ball out from the direction of turn — too little rudder relative to bank. A **skid** is ball into the direction of turn — too much rudder or too little bank.

**Standard rate turn**: 3° per second, completing a 360° turn in 2 minutes. The TC has a mark indicating standard rate. At standard rate and bank angle: approximately 1° bank per 10 knots of airspeed (or Bank = TAS/10 + 7° as a rule of thumb).

---

**Six-Pack Cross-Check**

The six primary instruments are arranged in two columns of three. Effective instrument flying requires a systematic cross-check. When gyroscopic instruments fail:

| If vacuum fails | Reliable | Unreliable |
|---|---|---|
| Pitot-static | ASI, Altimeter, VSI | — |
| Gyroscopic | Turn coordinator (electric) | AI, HI |
| Magnetic | Compass | — |

When in doubt: trust the TC and compass over a suspect AI.

---

## Key Points

- **Rigidity in space**: gyro maintains orientation → used for attitude and heading
- **Precession**: gyro drifts over time → re-sync HI to compass every 10–15 min
- **AI (vacuum-driven)**: shows pitch and bank; fails with vacuum system loss; limits ±60–70° pitch, ±100–110° bank
- **HI**: stable, turn-error-free; no north-seeking; must be set to compass heading
- **Turn coordinator (electric)**: usually survives vacuum failure; shows rate/direction of turn
- **Inclinometer ball**: centred = coordinated; "step on the ball" to correct
- **Compass turning errors**: lags from north, leads from south (northern hemisphere)
- **Compass acceleration errors**: ANDS — Accelerate North, Decelerate South (on E/W)

---

*End of Lesson GK-007.*
