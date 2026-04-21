---
id: GK-011
topic: general-knowledge
order: 11
slug: aircraft-stability
title: "Aircraft Stability and Controllability"
duration_min: 20
status: complete
audio: null
visual: null
sources:
  - TP 12880E Chapter 3
  - TP 12880E Chapter 4
questions:
  - id: q1
    prompt: "Static stability in an aircraft refers to:"
    choices:
      A: "The aircraft's tendency to continue in the displaced direction after a disturbance"
      B: "The aircraft's initial tendency to return to its original attitude after a disturbance"
      C: "The aircraft's ability to remain in straight and level flight without pilot input over time"
      D: "The absence of oscillation after a disturbance"
    answer: B
    explanation: "Static stability is the initial reaction to a disturbance. Positive static stability: the aircraft tends to return to its original attitude. Neutral static stability: the aircraft stays in the displaced attitude. Negative static stability: the aircraft continues to move away from the original attitude. Source: TP 12880E Chapter 3."
  - id: q2
    prompt: "Dynamic stability describes:"
    choices:
      A: "How quickly an aircraft reaches its trimmed airspeed after an engine power change"
      B: "The long-term behaviour of an aircraft after a disturbance — whether oscillations damp out over time"
      C: "The force required to hold a given control input at different airspeeds"
      D: "Whether an aircraft tends to turn left or right when released from straight and level"
    answer: B
    explanation: "Dynamic stability describes the time history of the aircraft's response after a disturbance. Positive dynamic stability: oscillations diminish over time (damp out). Neutral: oscillations continue at constant amplitude. Negative: oscillations increase in amplitude over time — eventually uncontrollable. Source: TP 12880E Chapter 3."
  - id: q3
    prompt: "The dihedral angle on a wing provides:"
    choices:
      A: "Increased maximum lift coefficient by increasing effective wing camber"
      B: "Lateral (roll) stability — when one wing drops, the lower wing generates more lift and rolls the aircraft back upright"
      C: "Directional stability by increasing the side area of the wing"
      D: "Improved high-speed performance by reducing wave drag"
    answer: B
    explanation: "Dihedral is the upward tilt of the wings from root to tip. When a gust causes one wing to drop, that wing experiences a higher angle of attack (it moves into the relative wind), generating more lift and rolling the aircraft back toward wings-level. This is lateral stability, also called dihedral effect. Source: TP 12880E Chapter 3."
  - id: q4
    prompt: "Dutch roll is an undesirable flight characteristic involving:"
    choices:
      A: "A rapid alternating roll and yaw motion, with each oscillation reinforcing the other"
      B: "An uncontrolled spin entry from a steep bank"
      C: "Oscillation in pitch at a constant speed"
      D: "Lateral drift caused by a crosswind in a slip"
    answer: A
    explanation: "Dutch roll is a coupled lateral-directional oscillation — the aircraft simultaneously rolls and yaws in a rocking motion. It is caused by high dihedral combined with low directional stability (small vertical stabilizer). Modern swept-wing jets use yaw dampers to suppress dutch roll. Source: TP 12880E Chapter 3."
  - id: q5
    prompt: "An aircraft with a neutral point ahead of the centre of gravity is:"
    choices:
      A: "Longitudinally stable — positive pitch stability"
      B: "Longitudinally unstable — the CG ahead of the neutral point means the aircraft will pitch away from any displacement"
      C: "Laterally stable"
      D: "Directionally stable"
    answer: B
    explanation: "The neutral point is the aerodynamic centre of the whole aircraft (wing + tail). For longitudinal stability, the CG must be AHEAD of the neutral point. If the CG is behind the neutral point (aft of it), the aircraft is longitudinally unstable. Most certified aircraft have a CG range that ensures the CG is always ahead of the neutral point. Source: TP 12880E Chapter 3."
---

# Lesson GK-011: Aircraft Stability and Controllability

**Section:** General Knowledge  
**Lesson number:** 011  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapters 3–4

---

## Narration Script

Stability is a built-in design property of the aircraft — it determines how the aircraft behaves when disturbed from its trimmed condition. Understanding stability helps you predict aircraft behaviour, understand why your aircraft handles the way it does, and recognize when something is wrong.

---

**Static vs. Dynamic Stability**

These are two different but related concepts:

**Static stability** is the aircraft's **initial reaction** when displaced from equilibrium:
- **Positive static stability**: tends to return toward original attitude — stable
- **Neutral static stability**: stays in the displaced position — neither stable nor unstable
- **Negative static stability**: continues to move away from original attitude — unstable

**Dynamic stability** describes the **long-term behaviour** after a disturbance:
- **Positive dynamic stability**: oscillations decrease in amplitude over time — eventually returns to original attitude
- **Neutral dynamic stability**: oscillations continue at constant amplitude indefinitely
- **Negative dynamic stability**: oscillations increase in amplitude — eventually divergent

An aircraft can be statically stable but dynamically unstable. Most certified light aircraft have positive static and positive dynamic stability in pitch, roll, and yaw — they are inherently stable and tend to return to trimmed flight after a disturbance without pilot input.

---

**Longitudinal Stability (Pitch)**

Longitudinal stability is stability about the lateral axis — pitch stability.

The key relationship: for positive longitudinal stability, the **centre of gravity must be ahead of the neutral point** (the aerodynamic centre of the whole aircraft). When the nose pitches up, the horizontal tail generates a restoring downward force that pushes the nose back down. This is the function of the horizontal stabilizer.

**CG effects on longitudinal stability:**
- Forward CG: more stable, more resistant to pitch changes, higher stick forces
- Aft CG: less stable, lighter stick forces, less resistance to pitch disturbances; at the extreme, can be unrecoverable

This is why the CG must stay within the approved envelope — if the CG moves behind the neutral point, the aircraft becomes unstable in pitch.

---

**Lateral Stability (Roll)**

Lateral stability is stability about the longitudinal axis — roll stability.

**Dihedral effect**: the main source of lateral stability in most training aircraft. Wings with dihedral (tilted upward from root to tip) generate a self-righting tendency. When a gust raises one wing, the lower wing sees a slightly higher effective angle of attack, generating more lift, which rolls the aircraft back toward wings-level.

**High wings**: high-wing aircraft have an inherent pendulum stability effect — the weight hangs below the wing attachment, which resists rolling.

**Sweepback**: swept wings also contribute to dihedral effect because the leading wing advances and generates more lift.

---

**Directional Stability (Yaw)**

Directional stability is stability about the vertical axis — yaw stability.

The **vertical stabilizer** provides weathervane directional stability — like the tail fin on an arrow, it aligns the fuselage with the relative airflow. If the nose yaws to one side, the increased angle of the vertical stabilizer to the airflow generates a side force that yaws the nose back.

---

**Coupled Motions: Dutch Roll and Spiral Instability**

**Dutch roll** is a coupled lateral-directional oscillation. When an aircraft with high dihedral but weak directional stability is disturbed, it tends to roll and yaw simultaneously in an oscillating pattern. Each roll produces a yaw, which produces a roll in the other direction — a rocking, corkscrew motion. Dutch roll is generally well-damped in light training aircraft but is a significant issue in swept-wing jets (addressed with yaw dampers).

**Spiral instability**: if an aircraft has strong directional stability but weak lateral stability, a small roll disturbance causes the nose to yaw into the low wing, which steepens the bank. The bank continues to increase. This is spiral instability — if unchecked, it leads to a spiral dive. Most light aircraft have mildly spiral-unstable characteristics (the divergence is very slow). Regular scan and prompt correction by the pilot prevents this from developing.

---

**Longitudinal Oscillation: Phugoid**

The **phugoid** is a long-period pitch oscillation. When disturbed from level flight, the aircraft pitches up, slows, pitches down, speeds up, pitches up again — the cycle continues. It has a long period (minutes) and small amplitude. Most light aircraft have positive phugoid stability — the oscillation damps out slowly. Pilots can damp it with minor control inputs.

Distinguish phugoid (pitch oscillates, altitude and speed oscillate, nearly constant AOA) from the short-period pitch oscillation (rapid oscillation in AOA, very short period, must never be driven by pilot).

---

**Controllability vs. Stability**

There is a trade-off: a highly stable aircraft is resistant to disturbances, but also resistant to control inputs — it takes more effort to manoeuvre. A less stable aircraft is more manoeuvrable but requires more pilot attention to keep under control. Transport Canada-certified aircraft must be controllable throughout their flight envelope, with good stability characteristics, to protect against pilot error.

---

## Key Points

- **Static stability**: initial response to disturbance (positive = tends to return)
- **Dynamic stability**: long-term response (positive = oscillations damp out)
- **Longitudinal stability**: CG must be ahead of neutral point; forward CG = more stable
- **Dihedral**: provides lateral (roll) stability — wing drops, lower wing generates more lift
- **Vertical stabilizer**: provides directional (yaw) weathervane stability
- **Dutch roll**: roll-yaw coupled oscillation from high dihedral + weak directional stability
- **Spiral instability**: strong directional stability + weak lateral stability → diverging bank; slow onset
- **Phugoid**: long-period pitch oscillation; normally self-correcting with small pilot inputs

---

*End of Lesson GK-011.*
