---
id: AMT-002
topic: cpl-a
order: 7
slug: icing-types-avoidance
title: "Icing — Causes, Types, and Avoidance"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/007-icing-types-avoidance.m4a
visual: null
sources:
  - "TP 1102 Vol. 5 (Advanced Meteorology)"
  - "CARs 605 (Aircraft Equipment Requirements)"
  - "AIM MET Chapter (Icing)"
  - "Transport Canada CPL-A Written Exam Guide"
questions:
  - id: q1
    prompt: "Which type of structural icing forms when large supercooled water droplets spread and freeze, creating a smooth, dense, and heavy ice layer?"
    choices:
      A: "Rime ice"
      B: "Clear (glaze) ice"
      C: "Frost"
      D: "Mixed ice"
    answer: B
    explanation: "Clear ice (also called glaze ice) forms from large supercooled water droplets that spread before freezing, creating a smooth, transparent, and very dense deposit. It is the most hazardous structural icing type because it adds the most weight and is hardest to detect visually. Source: TP 1102 Vol. 5."
  - id: q2
    prompt: "Rime ice is characterised by:"
    choices:
      A: "A clear, dense, heavy deposit that is difficult to remove"
      B: "A rough, milky-white, brittle deposit formed from small supercooled droplets"
      C: "Freezing rain that coats horizontal surfaces only"
      D: "Ice that forms inside the engine intake only"
    answer: B
    explanation: "Rime ice is rough, milky-white, and brittle. It forms when small supercooled water droplets freeze almost instantly on contact with the aircraft surface, trapping air bubbles. While lighter than clear ice, rime ice seriously disrupts airfoil shape. Source: TP 1102 Vol. 5."
  - id: q3
    prompt: "The temperature range most conducive to carburetor icing in an aircraft without carburetor heat is approximately:"
    choices:
      A: "−40°C to −20°C"
      B: "−20°C to 0°C"
      C: "−10°C to +25°C"
      D: "0°C to +35°C"
    answer: C
    explanation: "Carburetor icing can occur in ambient temperatures from approximately −10°C to +25°C, even in clear air with no visible moisture, due to the venturi effect cooling and fuel vaporisation in the carburetor. The risk is highest in humid conditions around 10°C–20°C. Source: TP 12880E; TP 1102."
  - id: q4
    prompt: "A PIREP reports moderate icing at FL095. A commercial pilot is planning to cruise at FL085 on the same route 90 minutes later. How should this PIREP be used?"
    choices:
      A: "It can be disregarded — PIREPs are only valid at the time of report"
      B: "It should be treated as a current hazard warning; icing conditions at nearby altitudes should be assumed until confirmed otherwise"
      C: "The pilot may proceed since the planned altitude is 1,000 feet below the reported icing"
      D: "A PIREP at FL095 only applies to IFR aircraft — VFR pilots are not required to consider it"
    answer: B
    explanation: "PIREPs are valuable real-time hazard information but age quickly. A report 90 minutes old at an adjacent altitude should be treated with caution — icing layers can shift vertically. The pilot should seek more recent reports and treat the area as potentially hazardous. Source: AIM MET Chapter."
  - id: q5
    prompt: "The primary regulatory requirement governing flight into known icing conditions for a non-ice-certified aircraft is:"
    choices:
      A: "The pilot must file IFR"
      B: "Flight into known icing conditions is prohibited without appropriate de-ice or anti-ice equipment"
      C: "Flight is permitted provided the PIC files a special routing"
      D: "Night flight into icing is prohibited but day flight is permitted"
    answer: B
    explanation: "CARs prohibit flight into known or forecast icing conditions unless the aircraft is equipped with appropriate de-icing or anti-icing equipment certified for flight in icing conditions. For aircraft not equipped for icing, the pilot must avoid all known icing areas. Source: CARs 605; TP 1102 Vol. 5."
---

# Lesson AMT-002: Icing — Causes, Types, and Avoidance

**Subject:** Advanced Meteorology  
**Lesson number:** 007 (AMT-002)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Extends PPL-A icing basics to commercial-standard depth. See `lessons/meteorology/` for PPL-A foundation lesson on icing.

Topics to be authored:
- Structural icing: clear (glaze) vs. rime vs. mixed — formation, hazards, recognition
- Carburetor icing: temperature-humidity envelope, recognition, remedy
- Tail plane icing and its specific aerodynamic hazards
- De-ice vs. anti-ice systems — boots, bleed-air, TKS, pitot heat
- Regulatory requirements for flight in known icing (CARs 605)
- PIREPs and SIGMETs for icing — how to interpret and apply

---

## Narration Script

### Introduction

Icing is one of the most insidious hazards in aviation because it works silently, it degrades aircraft performance in multiple ways at once, and it can develop far faster than many pilots expect. For the commercial pilot, understanding icing goes beyond the basic awareness introduced at the PPL level. You need to understand exactly how different ice types form, how each type affects the aircraft differently, where carburetor icing fits into the picture, and what the regulations say about operating in icing conditions. This lesson covers all of that, and it will also prepare you to interpret icing information from PIREPs and SIGMETs accurately. Let us start at the physics level and build up to the operational picture.

### The Physics of Supercooled Water

Water does not always freeze at zero degrees Celsius. In a clean atmosphere with no ice nuclei to trigger crystallisation, liquid water droplets can remain liquid at temperatures well below freezing. These are called supercooled water droplets, and they are the root cause of structural icing. When a supercooled droplet strikes the surface of an aircraft, the impact provides the energy needed to trigger freezing, and the droplet rapidly solidifies. The form that ice takes — and therefore its density, weight, and aerodynamic impact — depends mainly on the size of the droplets and the temperature at which they contact the aircraft.

### Clear Ice

Clear ice, also called glaze ice, is the most hazardous form of structural icing. It forms when large supercooled water droplets — the kind found in freezing rain or in cumuliform clouds — strike the aircraft and spread out as a thin film before freezing. Because the droplets are large and spread before solidifying, they trap fewer air bubbles, and the resulting ice layer is smooth, hard, transparent, and extremely dense. Dense ice is heavy ice. On a wing leading edge, clear ice may be nearly invisible against the grey or white paint of the aircraft, making it very difficult to detect visually. More importantly, because the ice flows back from the leading edge before freezing, it adheres to the wing surface in a shape that does not follow the contour of the deicing boot, which means even an aircraft with pneumatic boot deicers can accumulate clear ice faster than the boots can shed it. Clear ice forms most readily at temperatures close to zero degrees Celsius, where large droplets remain mostly liquid until impact, and it is commonly encountered in freezing rain, drizzle, and in the lower portions of convective cloud. Source: TP 1102 Vol. 5.

### Rime Ice

Rime ice forms from small supercooled water droplets — the kind found in stratus-type cloud or fog at subfreezing temperatures. When a small droplet strikes the aircraft, it freezes almost instantly with very little spreading. The rapid freezing traps many air bubbles, giving rime ice its characteristic rough, milky-white, opaque, and brittle texture. Rime ice is lighter per unit volume than clear ice, but it is still extremely dangerous because its rough surface disrupts the laminar flow over the airfoil. Even a thin coating of rough ice on a wing leading edge can significantly increase drag and reduce lift, effectively ruining the wing's aerodynamic efficiency. Rime ice typically forms in the temperature range of minus 10 to minus 20 degrees Celsius, though the boundaries are not sharp. Source: TP 1102 Vol. 5.

### Mixed Ice

In real-world icing encounters, pure clear ice or pure rime ice is the exception rather than the rule. You will commonly encounter mixed ice, which is a combination of both types. The classic scenario involves a cloud layer with large supercooled droplets near its warmer base where temperatures are close to zero, transitioning to smaller droplets and colder temperatures nearer the cloud top. As the aircraft climbs through such a layer, the ice character can change from clear at the bottom to a mixed or rime form higher up. Mixed ice has the dangerous physical properties of both types — it can be heavy and adhere strongly like clear ice, while also being rough enough to seriously disrupt airflow. It is also the most unpredictable in terms of how it accumulates and whether it responds to deicing systems.

### Carburetor Icing

Structural icing affects the outside of the aircraft, but carburetor icing attacks from inside the engine. It is an entirely separate mechanism and can occur under conditions where structural icing would never form — even on a clear, sunny day. Here is how it works. Air entering the carburetor passes through a venturi tube that causes a pressure drop. By Bernoulli's principle, the pressure drop causes a temperature drop — the so-called venturi cooling effect. This temperature drop can be as much as 20 to 30 degrees Celsius within the carburetor throat. Additionally, as fuel vaporises in the carburetor, it absorbs heat from the airflow, cooling the mixture even further. The combined effect can lower the temperature inside the carburetor below zero degrees Celsius even when the outside air temperature is well above freezing, and any moisture in the air will then freeze on the throttle butterfly valve and the carburetor walls, progressively restricting the airflow and richening the mixture.

The temperature range for carburetor icing risk extends from approximately minus 10 degrees Celsius to plus 25 degrees Celsius, with the risk highest in humid conditions between plus 10 and plus 20 degrees Celsius. This is exactly the kind of mild, warm, hazy summer day that looks deceptively benign. Relative humidity does not need to be 100 percent; even moderate humidity of 50 to 80 percent can produce enough moisture for carburetor ice to form.

In an aircraft with a fixed-pitch propeller, the first symptom of carburetor icing is an unexplained drop in engine RPM with no change in throttle position. In an aircraft with a constant-speed propeller and a manifold pressure gauge, the symptom is a drop in manifold pressure — the RPM stays constant because the governor adjusts pitch, but the engine is producing less power. The remedy is to apply full carburetor heat, which routes warm air from around the exhaust manifold into the carburetor. This will temporarily worsen the situation as the ice melts and water passes through the engine, causing a rough-running period. If the engine then smooths out and power returns, carburetor ice was the culprit. Carburetor heat should be applied before power reductions, on approach, and during any prolonged low-power operation. Source: TP 12880E; TP 1102.

### Tailplane Icing

Tailplane icing is a particularly dangerous phenomenon because the recovery action is counterintuitive to everything a pilot normally does. The horizontal stabiliser on most aircraft has a symmetric or reflexed airfoil that operates at a negative angle of attack — it is producing downforce to balance the nose-heavy tendency of the wing's lift. If ice accumulates on the leading edge of the horizontal stabiliser, it disrupts this airfoil, reducing its ability to maintain that downforce. The result is a sudden and aggressive pitch-down moment. In a turboprop or piston-powered aircraft, this can occur when flaps are extended on approach: flap extension shifts the centre of lift forward and increases the downwash over the tail, which increases the angle of attack on the tailplane — exactly the condition that will cause an iced-up tailplane to stall.

The critical point for you to remember is that tailplane ice stall requires the opposite control response from a wing stall. If you experience a sudden pitch-down during approach in icing conditions, the instinct is to pull back on the controls. But if the cause is tailplane ice stall, pulling back increases the angle of attack on the already-stalled stabiliser and makes the situation dramatically worse. The correct response is to reduce flap setting, add power, and if possible, reduce airspeed. Retract flaps in stages while monitoring the pitch response. Recognising this scenario in advance is the best defence: if you have been flying in icing conditions and you see ice on the windshield or wing, assume the tailplane also has ice and treat every approach with extreme caution. Source: TP 1102 Vol. 5.

### De-ice and Anti-ice Systems

Aircraft systems for dealing with icing fall into two categories: anti-ice systems, which prevent ice from forming, and de-ice systems, which remove ice after it has already accumulated.

Pneumatic de-ice boots are the most common de-ice system on general aviation and turboprop aircraft. Rubber bladders bonded to the leading edges of wings and tail surfaces are periodically inflated by bleed air or a venturi pump, cracking off the ice that has accumulated. The key operating principle is that boots should not be activated too early. If you inflate the boots as soon as ice begins to form, you may smooth the ice into the inflated bladder shape, and when the boots deflate, the ice bridges across them and resists subsequent inflation — a phenomenon called boot bridging. Let a small amount of ice accumulate first, then activate the boots, then allow them to return to the deflated position so subsequent ice accumulation can be cracked off in the next cycle.

Anti-ice systems, in contrast, are designed to prevent accumulation. Bleed-air anti-ice heats wing leading edges, engine inlets, and windshields continuously, preventing supercooled droplets from freezing on contact. TKS systems, sometimes called weeping wing systems, pump a glycol-based fluid through porous titanium leading edges, forming a film that both prevents freezing and washes away any ice that does form. Pitot heat is one of the simplest anti-ice systems: an electrical element in the pitot tube keeps it warm to prevent blocking by ice, which would give erroneous airspeed indications.

The important operational distinction for your exam is that anti-ice systems protect surfaces they are applied to continuously, but they cannot protect every surface. De-ice boots protect leading edges but not the entire airfoil. Even a fully certified icing aircraft is not immune to severe icing, and no aircraft is certified for unlimited flight in all icing conditions.

### Regulations and PIREPs

CARs prohibit flight into known or forecast icing conditions unless the aircraft is certified and equipped for flight in icing. The pilot-in-command must ensure that the aircraft's certificate of airworthiness includes an icing certification if icing conditions are forecast or encountered. An aircraft without icing certification must avoid all known icing areas. This is not advisory — it is regulatory. Source: CARs 605.

For gathering icing information in flight, PIREPs are your most current tool. A PIREP reporting icing will specify the location, altitude, intensity (trace, light, moderate, severe), and the type of ice if the pilot was able to identify it. Icing intensity in PIREPs uses standard Transport Canada criteria: trace icing is barely noticeable and accumulates slowly; light icing requires occasional use of de-icing equipment; moderate icing requires frequent use and is potentially hazardous to an aircraft not equipped for icing; severe icing exceeds the capability of deicing equipment and must be exited immediately. SIGMETs for icing are issued by NAV CANADA when moderate or greater icing is expected over a defined geographic area. When you see a SIGMET for icing on your route, treat it as a hard constraint — not a factor to be weighed and minimised.

### Summary

In this lesson you learned that clear ice forms from large supercooled droplets near zero degrees Celsius, creating a smooth, dense, heavy layer that is the most hazardous structural ice type. Rime ice forms from small droplets at colder temperatures, creating a rough, milky, brittle deposit that severely disrupts airfoil performance. Mixed ice combines the properties of both. Carburetor icing can occur at temperatures between minus 10 and plus 25 degrees Celsius, and is remedied by applying carburetor heat. Tailplane icing produces a counterintuitive pitch-down tendency on approach that requires reducing flaps and adding power rather than pulling back. De-icing systems remove accumulated ice while anti-ice systems prevent accumulation. CARs prohibit flight into known icing without appropriate certification and equipment. And PIREPs and SIGMETs are your primary operational tools for icing avoidance. With these principles solid, you are well prepared for the icing questions on the Transport Canada CPL-A exam.

---

*End of Lesson AMT-002.*
