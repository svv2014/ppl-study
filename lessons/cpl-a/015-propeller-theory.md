---
id: ADE-003
topic: cpl-a
order: 15
slug: propeller-theory
title: "Propeller Theory and Variable-Pitch Systems"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/015-propeller-theory.m4a
visual: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual)"
  - "TP 1102 Vol. 4 (Aerodynamics)"
  - "Transport Canada CPL-A Written Exam Guide"
questions:
  - id: q1
    prompt: "Propeller efficiency is defined as the ratio of:"
    choices:
      A: "Thrust horsepower to brake horsepower"
      B: "Indicated airspeed to true airspeed"
      C: "Engine RPM to propeller RPM"
      D: "Static thrust to dynamic thrust"
    answer: A
    explanation: "Propeller efficiency = thrust horsepower (useful power output) ÷ brake horsepower (power delivered to the propeller shaft). A perfectly efficient propeller would convert all engine power into thrust, but in practice efficiency is less than 100% due to aerodynamic losses. Source: TP 12880E."
  - id: q2
    prompt: "A constant-speed propeller maintains constant RPM by:"
    choices:
      A: "The pilot manually adjusting the throttle to keep RPM constant"
      B: "A governor that changes blade pitch to absorb varying power demands"
      C: "An electronic fuel injection system that limits engine power automatically"
      D: "A fixed gear ratio between the engine and propeller"
    answer: B
    explanation: "A constant-speed propeller uses a governor that senses RPM deviations and automatically adjusts blade pitch (coarse = more resistance, fine = less resistance) to maintain the selected RPM. This allows the engine to operate at its most efficient RPM across a range of power settings. Source: TP 12880E."
  - id: q3
    prompt: "When a constant-speed propeller's governor fails and the propeller goes to full fine pitch, the engine will:"
    choices:
      A: "Overspeed, potentially beyond its red-line RPM limit"
      B: "Underspeed, causing the aircraft to lose performance"
      C: "Maintain its current RPM automatically"
      D: "Shut down due to the overly rich mixture caused by reduced airflow"
    answer: A
    explanation: "If the propeller goes to full fine (low) pitch and the governor fails, the propeller offers minimal resistance to the engine. Without the governor's control, the engine will tend to overspeed — potentially exceeding the red-line RPM. The pilot must immediately reduce throttle to prevent engine damage. Source: TP 12880E."
  - id: q4
    prompt: "Torque effect in a single-engine aircraft (with a clockwise-rotating propeller as seen from the rear) causes the aircraft to:"
    choices:
      A: "Yaw left and roll left"
      B: "Yaw right and roll right"
      C: "Pitch up on takeoff"
      D: "Have no effect because modern aircraft are designed to counteract torque"
    answer: A
    explanation: "Newton's third law: if the propeller rotates clockwise (as seen from the cockpit), the engine reacts by rotating counterclockwise. This reaction torque tends to roll the aircraft to the left. Combined with P-factor and gyroscopic precession on takeoff, it also creates a left-yaw tendency. Source: TP 12880E."
  - id: q5
    prompt: "P-factor (propeller asymmetric thrust) is most pronounced at:"
    choices:
      A: "High airspeed in level cruise"
      B: "High power, low airspeed, and high angle of attack (e.g., takeoff and initial climb)"
      C: "Descent with idle power"
      D: "Level flight at cruise power"
    answer: B
    explanation: "P-factor occurs because at a high angle of attack, the descending propeller blade (on the right side for a clockwise-rotating prop as seen from the rear) has a greater effective angle of attack and produces more thrust than the ascending blade. This creates asymmetric thrust that yaws the nose to the left. P-factor is most significant at high power and low airspeed. Source: TP 12880E."
---

# Lesson ADE-003: Propeller Theory and Variable-Pitch Systems

**Subject:** Aerodynamics & Engines  
**Lesson number:** 015 (ADE-003)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Topics to be authored:
- Propeller basics: blade angle, pitch, angle of attack of the blade
- Geometric pitch vs. effective pitch, propeller slip
- Fixed-pitch vs. variable-pitch vs. constant-speed: trade-offs
- Constant-speed propeller: governor operation, oil pressure system
- Feathering: when and why used (engine failure on multi-engine)
- Propeller asymmetric effects: torque, P-factor, gyroscopic precession, slipstream
- Critical engine on a multi-engine aircraft: concept and VMC
- Propeller-related emergency procedures: governor failure, propeller overspeed

---

## Narration Script

### Introduction

The propeller is the most visible and mechanically complex component of a piston or turboprop aircraft, yet many pilots treat it as a given — something that just works. For the commercial pilot, understanding propeller theory is necessary at several levels: for the written exam, for understanding the performance implications of different propeller systems, for managing multi-engine asymmetric thrust situations, and for recognising and responding to propeller system failures. This lesson takes you from propeller blade physics through constant-speed governor operation, feathering, propeller asymmetric effects, and the critical engine concept on multi-engine aircraft. Sources: TP 12880E; TP 1102 Vol. 4.

### The Propeller Blade as an Airfoil

Each propeller blade is an airfoil in the same fundamental sense as a wing. It has a curved leading edge, a flatter trailing edge, and a chord line connecting them. When air flows over the blade, it generates lift — but in the case of the propeller, this aerodynamic force is directed forward, producing thrust rather than the upward lift of a wing.

The blade angle — also called pitch — is the angle between the chord line of the propeller blade and the plane of rotation. A low blade angle, called fine pitch, means the blade is almost flat relative to the plane of rotation. A high blade angle, called coarse pitch, means the blade is twisted further toward parallel with the propeller's axis of rotation. This terminology can seem counterintuitive at first: fine pitch, despite the word "fine," is actually a small angle, while coarse pitch is a large angle.

The propeller blade must be twisted from root to tip because the tip of the blade travels much faster than the root — the velocity at any point on the blade is proportional to its distance from the hub. If the blade had a uniform angle from root to tip, the tip would have a much higher angle of attack than the root relative to the incoming airflow, causing the tip to stall and lose efficiency while the root operated well below its best angle of attack. The twist ensures that all stations along the blade operate at approximately the same effective angle of attack. Source: TP 12880E.

### Pitch, Slip, and Efficiency

Geometric pitch is the theoretical distance the propeller would advance through the air in one revolution if it were operating in a solid medium with no slip — like a screw through wood. Effective pitch is the actual distance the aircraft advances per revolution in real flight. The difference between geometric pitch and effective pitch is called propeller slip, and it represents the "work lost" in the aerodynamic process of converting rotation to forward thrust. In a perfectly efficient propeller with no slip, all of the engine's power would be converted to useful thrust. In practice, propeller efficiency — the ratio of thrust horsepower output to the brake horsepower delivered to the shaft — is typically 75 to 85 percent for a well-matched propeller at its design speed.

### Fixed-Pitch vs. Variable-Pitch vs. Constant-Speed Propellers

A fixed-pitch propeller has its blade angle permanently set at manufacture. Because a given blade angle is aerodynamically efficient at only one combination of airspeed and engine RPM, a fixed-pitch propeller is always a compromise. A climb propeller is set to fine pitch, optimising performance at high power and low airspeed — useful during takeoff and initial climb, but inefficient at cruise where higher blade angles would be more appropriate. A cruise propeller is set to coarser pitch, optimising cruise efficiency but producing poor climb performance. Most training aircraft use a compromise setting that is acceptable for both phases but optimal for neither.

A variable-pitch propeller allows the pilot to select different blade angles manually for different phases of flight. A two-position prop offers a fine pitch for takeoff and a coarse pitch for cruise. An adjustable-pitch prop might allow any angle within a range. These improve efficiency at different flight conditions but require the pilot to manage pitch changes manually.

A constant-speed propeller goes one step further by automatically maintaining a selected RPM regardless of changes in throttle, airspeed, or aircraft attitude. The governor senses the actual RPM and adjusts blade pitch to keep it constant: if RPM starts to rise — because the throttle was advanced, airspeed increased, or the aircraft began a descent — the governor increases blade angle, loading the engine more and bringing RPM back to the selected value. If RPM begins to fall — throttle reduced, airspeed decreased, or aircraft climbing into thinner air — the governor decreases blade angle, reducing the load and allowing RPM to return to the target. This automatic RPM management allows the engine to operate at its most efficient RPM across a wide range of flight conditions, and it is the standard on all but the most basic training aircraft.

### Governor Operation

The constant-speed propeller governor is a centrifugal flyweight device driven by the engine. Inside the governor, a set of rotating flyweights are connected to the pilot valve by a spring-loaded linkage. When RPM equals the selected value, the flyweights are in a balanced position, and the pilot valve is centred, allowing neither oil in nor oil out of the propeller pitch-change mechanism. When RPM exceeds the selected value, the flyweights fly outward against the spring, moving the pilot valve to direct oil pressure to decrease blade pitch (on most governor designs, engine oil pressure drives the blades toward fine pitch). When RPM falls below the selected value, the flyweights collapse inward, the spring prevails, and the pilot valve directs oil flow to increase blade pitch. The result is a continuous, fast-acting feedback loop that maintains the selected RPM very precisely.

The pilot selects the desired RPM using the propeller control lever, which preloads the governor spring. Increasing the spring preload requires more flyweight centrifugal force to reach equilibrium — which means a higher RPM. Decreasing preload allows the flyweights to balance at a lower RPM. In normal operation, the throttle controls manifold pressure (and therefore power for a given RPM), and the propeller lever controls RPM. These are adjusted together to achieve the desired power setting using the aircraft's power setting charts.

### Feathering

When an engine fails in flight in a multi-engine aircraft, the propeller of the failed engine continues to windmill — rotating in the airstream due to aerodynamic forces even though the engine is not producing power. A windmilling propeller creates significant drag — sometimes more drag than a fixed-pitch prop at cruise, because the blades are at a near-flat pitch that presents a large frontal area to the airstream. This drag significantly reduces the performance of the surviving engine.

Feathering a propeller means rotating the blades to the feathered position, where the leading edge faces directly into the airflow — approximately 90 degrees of blade angle. In the feathered position, the blade presents its minimum frontal area to the airstream and creates minimal drag. On a twin-engine aircraft, feathering the failed engine's propeller typically reduces total drag by 60 to 80 percent compared to leaving it windmilling, and dramatically improves single-engine climb performance and altitude maintenance. Most multi-engine aircraft have a propeller governor that can be commanded to feather the prop by moving the propeller lever into the feather gate. Source: TP 12880E.

### Propeller Asymmetric Effects

Four separate propeller effects contribute to left-yaw tendency in a single-engine aircraft with a clockwise-rotating propeller as viewed from the cockpit. You need to understand all four for the exam.

Torque is the reaction to the engine rotating the propeller clockwise. By Newton's third law, the engine experiences an equal and opposite reaction — the aircraft tends to rotate counterclockwise as seen from the pilot's perspective, which means the left wing is pushed down and the aircraft rolls left. Torque effect is most significant at high power settings.

P-factor, or propeller asymmetric thrust, occurs at high angles of attack. When the aircraft nose is raised — as during takeoff rotation or initial climb — the propeller disc is tilted relative to the airstream. The descending blade on the right side of the disc has a greater effective angle of attack and therefore produces more thrust than the ascending blade on the left. The asymmetric thrust yaws the nose to the left. P-factor is most pronounced at high power and low airspeed — exactly the conditions that exist during takeoff and initial climb.

Gyroscopic precession acts on the spinning propeller disc, which behaves as a gyroscope. Any force applied to change the plane of rotation produces a precession effect 90 degrees ahead in the direction of rotation. During a conventional tailwheel aircraft takeoff, when the tail is raised, a downward force is applied to the front of the propeller disc. Gyroscopic precession causes the resulting precession force to act 90 degrees ahead in the direction of rotation, which pushes the right side of the disc forward and the left side back — yawing the nose to the left.

Slipstream effect occurs because the propeller accelerates air not just rearward but also in a rotating spiral around the fuselage. This rotating slipstream strikes the vertical tail from the left, producing a left-yaw-inducing force. At high power settings and low airspeed, the slipstream velocity is high relative to the aircraft forward speed, and the slipstream effect is significant. Source: TP 12880E.

### The Critical Engine

In a multi-engine aircraft, if an engine fails, the remaining engine must provide enough thrust to maintain controlled flight. However, the engines' thrust forces do not act through the aircraft's centreline — they act at the propeller disc locations, which are offset from the centreline. When an engine fails, the thrust offset of the remaining engine creates a yawing moment toward the failed engine.

The critical engine is the engine whose failure creates the most asymmetric and hardest to control yawing moment. On a conventional twin with both propellers rotating clockwise as viewed from the cockpit, the left engine is the critical engine. Here is why: P-factor causes the effective thrust line of each engine to be displaced toward the descending blade side — to the right, for a clockwise-rotating propeller. This means the effective thrust of the left engine is closer to the centreline than the effective thrust of the right engine. When the left engine fails, the remaining right engine has its thrust line further from the centreline, creating a larger yawing moment, which is harder to counteract with the rudder. Left engine failure is therefore more critical than right engine failure.

Vmc is the minimum control speed — the minimum airspeed at which the aircraft can be kept straight with maximum rudder when the critical engine has failed and the remaining engine is producing maximum power. Below Vmc, the rudder cannot generate enough force to overcome the asymmetric thrust yawing moment, and directional control is lost. Vyse is the best single-engine rate of climb speed — commonly called blue-line speed because it is marked in blue on the airspeed indicator — and is the target speed after an engine failure in a twin. Operating at blue-line gives the aircraft its best chance of maintaining or gaining altitude on the single remaining engine. Source: TP 12880E.

### Governor Failure and Overspeed

If the constant-speed governor fails, the propeller will typically move to the fine pitch stop — the blade angle is reduced to its minimum value. At fine pitch, the propeller loads the engine very lightly, and with the throttle advanced, the engine will overspeed — run above its red-line RPM. Overspeed is dangerous because it can cause bearing failure, propeller blade tip separation, valve float, and other catastrophic engine failures.

If you experience an overspeed, the immediate action is to retard the throttle to reduce manifold pressure and bring the RPM down. In some aircraft, you can use the propeller control lever to attempt to load the propeller and reduce RPM, but if the governor is truly failed, the lever may have no effect. The priority is reducing power to prevent engine damage. Land as soon as practicable after a governor failure, and have the system inspected before the next flight. Source: TP 12880E.

### Summary

In this lesson you learned that the propeller blade is an airfoil producing thrust through the same lift principles as a wing. Blade angle, or pitch, is the angle between the chord line and the plane of rotation. Fine pitch is low blade angle; coarse pitch is high blade angle. Geometric pitch is the theoretical advance per revolution; effective pitch is the actual advance; propeller slip is the difference. Fixed-pitch propellers are a compromise between climb and cruise efficiency; constant-speed propellers use a centrifugal flyweight governor to maintain selected RPM by automatically adjusting blade angle. Feathering removes windmilling drag after engine failure in a multi-engine aircraft by rotating blades to face directly into the airflow. Four effects cause left-yaw in a clockwise-rotating single-engine aircraft: torque, P-factor, gyroscopic precession, and slipstream. The critical engine on a conventional twin is the left engine because its failure leaves the right engine's thrust line furthest from the centreline. Governor failure typically causes overspeed through propeller going to fine pitch, corrected immediately by reducing throttle.

---

*End of Lesson ADE-003.*
