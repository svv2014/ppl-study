---
id: PAL-003
topic: cpl-a
order: 18
slug: aircraft-limitations
title: "Aircraft Limitations — Operating Envelope and Flight Manual"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/018-aircraft-limitations.m4a
visual: null
sources:
  - "TP 12880E (Aeroplane Flight Training Manual)"
  - "CARs 605 (Aircraft Equipment and Maintenance)"
  - "Transport Canada CPL-A Written Exam Guide"
  - "Aircraft AFM/POH (Approved Flight Manual)"
questions:
  - id: q1
    prompt: "The Approved Flight Manual (AFM) is a regulatory document because:"
    choices:
      A: "It is published by Transport Canada and applies to all aircraft of the same type"
      B: "It is approved by Transport Canada and forms part of the aircraft's type certificate — it is legally binding on the operator and pilot"
      C: "It is recommended guidance only, superseded by the manufacturer's POH"
      D: "It only applies to commercial operators — private pilots may use the POH instead"
    answer: B
    explanation: "The Approved Flight Manual (AFM) is approved by Transport Canada (or the certifying authority) and is part of the aircraft's type certificate data. Its limitations section is legally binding. The pilot and operator must not exceed any limitation in the AFM. Source: CARs 605.84; TP 12880E."
  - id: q2
    prompt: "VNE (never-exceed speed) is shown on the airspeed indicator by:"
    choices:
      A: "A yellow arc"
      B: "A red radial line"
      C: "A green arc"
      D: "A white arc"
    answer: B
    explanation: "VNE is indicated by a red radial line on the airspeed indicator. It must never be exceeded in any operation. Exceeding VNE risks structural damage or failure due to aeroelastic or flutter effects. Source: TP 12880E; CARs 605."
  - id: q3
    prompt: "VA (manoeuvring speed) is the speed below which:"
    choices:
      A: "The aircraft can be stalled only by abrupt full control deflection"
      B: "Full and abrupt control deflection will not exceed the aircraft's structural limit load factor"
      C: "The aircraft must be flown in turbulence"
      D: "Flaps may be extended without structural risk"
    answer: B
    explanation: "Manoeuvring speed (VA) is the speed at or below which full, abrupt control inputs will not exceed the aircraft's design limit load factor. Above VA, full deflection of a single control could cause structural damage. VA decreases as the aircraft gets lighter. Source: TP 12880E."
  - id: q4
    prompt: "The green arc on the airspeed indicator represents:"
    choices:
      A: "The normal operating range — from power-off stall speed (VS1) to the maximum structural cruise speed (VNO)"
      B: "The flap operating range — from minimum flap extension speed to maximum flap speed (VFE)"
      C: "The caution range — speeds that should be avoided in turbulence"
      D: "The speed range approved for instrument flight"
    answer: A
    explanation: "The green arc on the airspeed indicator covers the normal operating range from VS1 (stall speed in the clean configuration, lower end) to VNO (maximum structural cruising speed, upper end). Flight in this range is normal and approved. Source: TP 12880E; CARs 605."
  - id: q5
    prompt: "When an aircraft component's mandatory life limit has been reached (as specified in the AFM or maintenance schedule), the pilot-in-command's responsibility is to:"
    choices:
      A: "Log the limitation in the journey log and continue operations until the next scheduled maintenance"
      B: "Not operate the aircraft until the component has been replaced or the life limit reset by a licensed engineer"
      C: "Reduce cruise power by 10% to extend component life until maintenance can be performed"
      D: "Complete only local flights until the component is replaced"
    answer: B
    explanation: "Mandatory life limits in the AFM or maintenance schedule are regulatory limits. An aircraft with a time-expired component is unairworthy. The pilot-in-command must not fly the aircraft, and the component must be replaced by a licensed AME before return to service. Source: CARs 605; Aeronautics Act."
---

# Lesson PAL-003: Aircraft Limitations — Operating Envelope and Flight Manual

**Subject:** Performance & Limitations  
**Lesson number:** 018 (PAL-003)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Topics to be authored:
- Approved Flight Manual (AFM): legal status, structure, limitations section
- Airspeed limitations: VS, VS1, VFE, VNO, VNE, VA, VMC (multi-engine)
- Airspeed indicator markings: colour codes and their meanings
- G-load limits: normal vs. utility vs. aerobatic category
- Operating envelope: V-n diagram, load factor vs. airspeed
- Temperature limits: OAT limitations for engine start, operations
- Altitude limits: service ceiling, certified maximum operating altitude
- Mandatory life limits and airworthiness directives (ADs)
- PIC responsibility: pre-flight check of airworthiness documents

---

## Narration Script

### Introduction

Every aircraft has a defined envelope of conditions within which it is certified to operate. Fly within the envelope and the aircraft performs as the manufacturer designed it. Exceed the envelope and you enter unknown territory — potentially structurally dangerous territory — where the manufacturer's guarantees no longer apply and structural failure becomes a real possibility. For the commercial pilot, knowing and respecting the aircraft's limitations is not just an exam topic — it is a professional and legal responsibility. In this lesson you will learn to interpret the approved flight manual, understand the V-speed system, recognise airspeed indicator markings, apply load factor limits, and meet the pre-flight airworthiness obligations imposed by CARs. Sources: TP 12880E; CARs 602.02; CARs 625; AFM/POH.

### The Approved Flight Manual

The Approved Flight Manual, or AFM, is a Transport Canada-approved document that forms part of the aircraft's type certificate. It is not just a manufacturer's reference guide — it has legal standing. The limitations section of the AFM contains regulatory limits, not advisory guidelines. If the AFM states that maximum demonstrated crosswind is 17 knots, that is a published limitation that defines the certification basis. If the AFM lists an airspeed as VNE, that speed must never be exceeded, by regulation.

The AFM is required to be carried on board for all Canadian-registered aircraft. Along with the Certificate of Airworthiness, the maintenance release in the aircraft journey log, and the current weight and balance report, it is one of the documents that must be on board for the aircraft to be legally airworthy. Before every flight, you are responsible for ensuring these documents are current and on board.

The AFM is typically divided into sections: limitations, normal procedures, emergency procedures, and performance. The limitations section specifies the operating envelope within which the aircraft must remain. Any operation that exceeds a stated limitation renders the aircraft operation non-compliant with the certificate of airworthiness, and depending on the severity, may constitute a danger to persons and property in violation of the Aeronautics Act. Source: CARs 605.84; TP 12880E.

### V-Speeds

V-speeds are specific airspeed values, defined in the AFM, that mark boundaries of the operating envelope. You need to know the primary V-speeds for the CPL-A exam, their definitions, and their airspeed indicator markings.

VNE is the never-exceed speed. It is the absolute upper airspeed limit, beyond which structural damage or failure due to aeroelastic effects — flutter — may occur. VNE is marked on the airspeed indicator by a red radial line. No operation may exceed VNE under any circumstances. If you inadvertently exceed VNE, an engineering evaluation may be required before the next flight.

VNO is the maximum structural cruising speed. It is the highest airspeed for routine operations in smooth air. Above VNO and below VNE, the yellow arc on the airspeed indicator indicates the caution range — flight in smooth air only. In turbulence, you must not exceed VNO because a gust load added to the aerodynamic load above VNO could exceed the aircraft's limit load factor.

VA is the manoeuvring speed, also called the design manoeuvring speed. At or below VA, full and abrupt deflection of a single control surface will not exceed the aircraft's certified limit load factor. Above VA, the full deflection of a control surface could generate aerodynamic loads that exceed the structural limit. VA is not marked on the airspeed indicator but is published in the AFM. Critically, VA decreases as aircraft weight decreases. This is because at light weights, the wing stalls at a lower airspeed than at heavy weights. At VA, the wing will stall before reaching the limit load factor — the stall acts as a natural load limiter. At a lighter weight, stall occurs at an even lower airspeed, and the structural limit could be exceeded at the published heavy-weight VA value. Always use the VA appropriate to your actual weight. Source: TP 12880E.

VFE is the maximum flap extended speed. Extending flaps above VFE risks structural damage to the flaps and their attachments. VFE is marked on the airspeed indicator as the upper end of the white arc. The lower end of the white arc is VS0 — the stall speed in the landing configuration.

VLO is the maximum speed at which the landing gear may be operated — either extended or retracted. VLE is the maximum speed with the landing gear extended. These speeds apply to retractable-gear aircraft. Exceeding VLO can cause the gear doors or actuating mechanisms to fail. Exceeding VLE can cause structural damage to the extended gear assembly in the airstream. Source: TP 12880E.

### Airspeed Indicator Markings

The airspeed indicator colour coding provides immediate visual reference for V-speeds and operating ranges.

The white arc extends from VS0, the stall speed in the landing configuration at maximum weight, to VFE, the maximum flap extended speed. Flight within the white arc is permitted with flaps extended.

The green arc extends from VS1, the stall speed in the clean configuration at maximum weight, to VNO, the maximum structural cruising speed. Flight within the green arc represents normal operations.

The yellow arc extends from VNO to VNE. Flight in the yellow arc is permitted only in smooth air — this is the caution range. Avoid the yellow arc in turbulence or rough air.

The red radial line at VNE marks the absolute airspeed limit. Never exceed this indication.

Some aircraft also have a white radial line at a specific speed — for example, VY or VX for the aircraft type — though these are less common as standard markings. On multi-engine aircraft, a blue radial line marks VYSE, the best single-engine rate of climb speed. Source: TP 12880E; CARs 605.

### Load Factors and G-Limits

A load factor is the ratio of the aerodynamic lift supporting the aircraft to the aircraft's actual weight. In straight and level flight, lift equals weight and the load factor is 1g. In a 60-degree bank level turn, the load factor is 2g. In a steep spiral or abrupt pullout from a dive, the load factor can be much higher.

Aircraft are certified in different categories that specify the maximum load factors they are designed to withstand. Normal category aircraft are certified for a positive limit load factor of 3.8g and a negative limit load factor of 1.52g. Utility category aircraft are certified for positive 4.4g and negative 1.76g. Aerobatic category aircraft are certified for positive 6.0g and negative 3.0g. These are limit load factors — the aircraft must withstand them without permanent deformation. The ultimate load factor, which is 1.5 times the limit load factor, is the level the aircraft must withstand without structural failure, though some permanent deformation may occur.

Operating above the limit load factor can cause the aircraft to deform permanently — bent spars, buckled skin, distorted control surfaces. Operating above the ultimate load factor can cause structural failure. Structural damage from overstress may not be immediately obvious to the pilot: the aircraft may appear to fly normally but be significantly weakened. Any operation that may have resulted in exceeding the limit load factor requires an inspection by a licensed aircraft maintenance engineer before the next flight.

Turbulence increases load factors because gusts add to or subtract from the aerodynamic lift almost instantaneously, generating large acceleration spikes. This is why VNO — not VNE — is the turbulence speed limit. At VNO, the structural margin above the limit load factor is adequate to absorb the gust loads likely to be encountered in routine turbulence. Above VNO, the margin decreases, and severe turbulence could push the load factor above the limit. Source: TP 12880E; CARs 625 Appendix C.

### Operating Limitations and MEL

Beyond the V-speeds and load factors, the AFM contains other categories of limitations that the commercial pilot must know and respect. Temperature limits define the range of outside air temperatures within which the aircraft may be operated — both for engine start and for flight. Operating below the minimum temperature limit may prevent proper oil circulation on engine start; operating above the maximum temperature limit may affect structural integrity of composite components or seal materials.

Altitude limits specify the maximum certified operating altitude. This may be the service ceiling for normally-aspirated aircraft, or a specific certified maximum altitude for pressurised or turbocharged aircraft. Operating above the certified maximum altitude is a limitation violation regardless of the aircraft's actual performance capability.

Some aircraft are approved with a Minimum Equipment List, or MEL. An MEL lists specific items of equipment that may be inoperative under defined conditions, allowing the aircraft to continue in service with certain systems unserviceable rather than grounding it for every minor defect. Operating with an inoperative item not covered by an MEL — or operating with an item inoperative in conditions not permitted by the MEL — makes the aircraft unairworthy. Not all aircraft have approved MELs: if no MEL exists, all required equipment must be serviceable. Source: CARs 605.

### PIC Airworthiness Responsibility

CARs 602.02 establishes the pilot-in-command's responsibility to ensure the aircraft is airworthy before flight. This means conducting a thorough pre-flight inspection, checking that the required documents are on board and current, verifying the maintenance release in the journey log has been completed by a licensed AME, and checking for any maintenance deferrals or open defects.

A maintenance release — also called a technical log or journey log entry — is the AME's certification that the aircraft has been inspected and is airworthy for the next flight. The PIC must review the journey log before flight and check whether any defects are logged. If a defect is logged that has not been resolved or deferred under an MEL, the aircraft is unairworthy and the flight must not begin.

Annual inspections are required every 12 calendar months for most aircraft. 100-hour inspections are required for aircraft operating commercially for hire, every 100 hours of flight time. Airworthiness directives, issued by Transport Canada when a safety-critical defect is identified in a fleet, are mandatory compliance items that must be completed within the specified time limits. The PIC does not perform the inspection, but is responsible for knowing whether the required inspections are current before accepting the aircraft for a commercial flight. Source: CARs 602.02; CARs 625.

### Pre-Flight Airworthiness Check

The physical pre-flight inspection — the walk-around — is the PIC's personal verification that the aircraft is in the expected condition for flight. For commercial operations, this inspection must be systematic and thorough. You check the airframe structure for visible damage, the control surfaces for freedom of movement and correct direction of travel, the fuel and oil levels against planned requirements, the landing gear and tyres, the pitot-static system for obstructions, and the cockpit instruments and avionics for proper operation.

Any discrepancy found during the pre-flight — a low oil level, a dent in a control surface, a soft tyre, a loose inspection panel — must be resolved before flight. For minor items, you consult the MEL to determine whether flight is permitted. For anything that is not clearly within MEL provisions, you consult the maintenance organisation before departing. The commercial standard is simple: if in doubt, do not depart.

### Summary

In this lesson you learned that the Approved Flight Manual is a regulatory document whose limitations section is legally binding, and it must be carried on board along with the Certificate of Airworthiness, maintenance release, and weight and balance report. VNE — marked by the red radial line — must never be exceeded. VNO marks the upper edge of the green arc and the lower edge of the yellow caution range. VA is the manoeuvring speed that decreases with lower aircraft weight. VFE marks the top of the white arc. Normal category aircraft are approved for positive 3.8g, utility for 4.4g, and aerobatic for 6.0g. Operating above limit load factor risks permanent deformation; above ultimate load factor risks structural failure. MELs provide a framework for operating with specific equipment inoperative. CARs 602.02 places pre-flight airworthiness responsibility squarely on the pilot-in-command, who must verify that inspections are current, the journey log shows a valid maintenance release, and the physical pre-flight inspection reveals no unresolved defects. These principles are tested throughout the CPL-A exam and are the foundation of safe commercial aircraft operations.

---

*End of Lesson PAL-003.*
