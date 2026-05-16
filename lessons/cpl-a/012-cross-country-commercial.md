---
id: ANV-003
topic: cpl-a
order: 12
slug: cross-country-commercial
title: "Cross-Country Flight Planning — Commercial Standards"
duration_min: 20
status: draft
audio: https://media.suprun.workers.dev/ppl/lessons/cpl-a/012-cross-country-commercial.m4a
visual: null
sources:
  - "CARs 602.73–602.78 (Flight Plans and Itineraries)"
  - "CARs 602.88–602.89 (Fuel Requirements)"
  - "TP 12880E (Aeroplane Flight Training Manual)"
  - "AIM ENR Chapter"
  - "Transport Canada CPL-A Written Exam Guide"
questions:
  - id: q1
    prompt: "A commercial cross-country flight plan filed with NAV CANADA is closed when:"
    choices:
      A: "The aircraft departs from the departure aerodrome"
      B: "The pilot contacts ATC at the destination"
      C: "The pilot files an arrival report or cancels the flight plan with the appropriate unit"
      D: "The flight plan automatically closes 1 hour after the estimated time of arrival"
    answer: C
    explanation: "A flight plan must be closed by the pilot after landing by filing an arrival report with the FISE (Flight Information Service Element) or an ATC unit, or by cancelling it on arrival. If the flight plan is not closed and the ETA passes, search and rescue action may be initiated. Source: CARs 602.73; AIM RAC."
  - id: q2
    prompt: "Under CARs 602.73, which of the following domestic VFR flights requires a flight plan or flight itinerary?"
    choices:
      A: "A local area flight staying within 10 NM of the departure aerodrome"
      B: "A cross-country flight of 30 NM from the departure aerodrome"
      C: "Any flight conducted in Class E airspace"
      D: "A flight plan is only required for IFR flights"
    answer: B
    explanation: "CARs 602.73 requires a flight plan or flight itinerary for any VFR flight conducted beyond 25 NM from the departure aerodrome. A 30 NM flight exceeds this threshold. Source: CARs 602.73."
  - id: q3
    prompt: "When planning a commercial VFR cross-country with a weather forecast showing possible IFR conditions en route, what is the most appropriate action?"
    choices:
      A: "Proceed VFR and divert if actual conditions are encountered"
      B: "File IFR immediately since the forecast shows possible IFR conditions"
      C: "Evaluate whether a VFR alternate route or delayed departure would allow the flight to be conducted safely"
      D: "Notify ATC of the forecast and request priority handling"
    answer: C
    explanation: "Good flight planning requires evaluating whether the planned route can be flown safely given the forecast. If IFR conditions are possible, the options are to find an alternate VFR route, delay departure, or consider filing IFR if the pilot is qualified and the aircraft equipped. Proceeding and hoping to divert is poor practice. Source: CARs 602.02; TP 12880E."
  - id: q4
    prompt: "A VFR cross-country flight plan was filed with an ETA of 1430Z. It is now 1530Z and no arrival report has been received. Under standard SAR procedures, what occurs?"
    choices:
      A: "Nothing — the ETA window is automatically extended by 2 hours"
      B: "One hour after the ETA, the FISE initiates a communication search by attempting to contact the aircraft"
      C: "SAR is launched immediately at 1531Z without any communication search"
      D: "The flight plan is automatically cancelled after 2 hours with no further action"
    answer: B
    explanation: "If a flight plan is not closed within 1 hour of the ETA, NAV CANADA initiates a communication search — attempting to locate the aircraft by radio and telephone. If the aircraft cannot be located after that search, SAR action is initiated. Source: AIM RAC; NAV CANADA flight plan procedures."
  - id: q5
    prompt: "For a commercial VFR cross-country flight, the phrase 'point of no return' (PNR) refers to:"
    choices:
      A: "The point beyond which a diversion to the departure aerodrome is no longer possible due to fuel"
      B: "The midpoint of the route where equal distance remains to destination and departure"
      C: "The point where the aircraft enters the destination's Class C airspace"
      D: "The point beyond which the weather forecast is no longer reliable"
    answer: A
    explanation: "The Point of No Return (PNR) is the furthest point from the departure aerodrome to which the aircraft can fly and still have enough fuel to return. Beyond the PNR, the aircraft is committed to proceeding toward the destination (or finding an alternate). Source: TP 12880E Chapter 8."
---

# Lesson ANV-003: Cross-Country Flight Planning — Commercial Standards

**Subject:** Advanced Navigation  
**Lesson number:** 012 (ANV-003)  
**Estimated time:** 20 minutes  
**Status:** Draft skeleton — content authoring pending

Topics to be authored:
- Commercial-standard pre-flight planning process
- NOTAMs: types, interpretation, and how to access (NAV CANADA)
- Weather briefing: integrating METARs, TAFs, GFAs, SIGMETs, PIREPs
- Fuel planning: reserve requirements, contingency, alternate fuel
- Flight plan filing and closing procedures (CARs 602.73)
- Point of no return (PNR) and equal time point (ETP) for commercial planning
- Alternate aerodrome selection: CARs requirements and practical criteria
- Handling unexpected weather deterioration en route

---

## Narration Script

### Introduction

When you conduct a cross-country flight as a commercial pilot, you are held to a higher planning standard than a private pilot making the same trip. The regulations are more specific, the documentation requirements are more detailed, and the accountability for your decisions is greater because you may be carrying passengers who are paying for a safe, professional service. In this lesson you will learn the complete commercial cross-country flight planning process — from NOTAMs and weather briefing through fuel planning, flight plan filing, alternate selection, and the decisions you must make when conditions deteriorate en route. Sources: CARs 602.73, CARs 602.88, TP 12880E, and the AIM ENR and FLT Chapters.

### Starting With the Regulations

Before you touch a chart or call up a weather product, you need to know which regulations govern the flight. For a VFR cross-country flight in Canada, the key regulatory references are CARs 602.73 for flight plans and itineraries, CARs 602.88 for fuel requirements, and CARs 602.02 for the pilot-in-command's authority and duty of care.

CARs 602.73 requires a flight plan or flight itinerary for any VFR flight conducted more than 25 nautical miles from the departure aerodrome. A flight plan is filed with a NAV CANADA unit such as the Flight Information Service Element, or FISE, and triggers SAR notification procedures if the plan is not closed after arrival. A flight itinerary is a document left with a responsible person on the ground who agrees to contact authorities if the pilot does not report in by a specified time. Both serve the same safety function: if the aircraft is overdue, someone will know to start looking. For commercial operations, the flight plan is the standard — leaving an itinerary with a family member is not a commercial standard of operation. Source: CARs 602.73.

Under CARs 602.02, the pilot-in-command is responsible for the safe operation of the flight and has final authority over all aspects of the operation, including the decision to depart, continue, or divert. This authority cannot be delegated, and it cannot be overridden by a dispatcher, operations manager, or commercial pressure. If the PIC determines that it is unsafe to continue, the flight does not continue.

### NOTAM Checking

NOTAMs — Notices to Air Missions — are regulatory notices that advise pilots of hazards, restrictions, temporary changes to published procedures, or aerodrome information that has changed since the charts and publications were printed. For a commercial cross-country flight, checking NOTAMs is not optional — it is a required element of pre-flight planning.

You must check NOTAMs for the departure aerodrome, all en route navaids and fixes, any planned fuel stops, the destination aerodrome, and any planned alternate aerodrome. NOTAMs are available through the NAV CANADA NOTAMplus system, which can be accessed online or through a weather briefing call to NAV CANADA's FISE. Categories of NOTAMs that are particularly important for commercial operations include: runway or taxiway closures; unserviceable instrument approaches or navaids; changes to airspace activation, including temporary restricted airspace; airport lighting outages; and obstructions or construction activity.

When you review NOTAMs, do not just scan for your specific aerodrome — look at all NOTAMs in the region of your route. A NOTAM for an en route VOR or NDB that is out of service may affect your navigation plan or alternate aerodrome strategy.

### Weather Briefing

A complete commercial weather briefing integrates multiple product types and applies them systematically to your planned route and altitude. The products you must consult include: the current METARs for departure, destination, alternates, and en route reporting stations; the Terminal Aerodrome Forecasts, or TAFs, for departure and destination; the Graphical Area Forecast for your route corridor and altitude; any active SIGMETs for the route; any available PIREPs; and the upper wind forecasts for your cruise altitude.

The approach is to build a picture of the atmosphere along your route. Start with the GFA to understand the broad cloud, weather, and icing structure. Compare it to the METARs to see whether current conditions match the forecast. Look at the TAF for the destination to understand what to expect on arrival — particularly relevant if your flight is long enough that conditions will have changed significantly by the time you land. Check the TAF validity period against your estimated arrival time.

When you find a discrepancy between the forecast and current conditions — for example, the GFA shows clear skies but the METAR shows a 2,000-foot overcast — take the more conservative interpretation. Forecasts are not always right, and conditions that are worse than forecast require you to revisit your go/no-go decision. If conditions at the destination or en route are forecast to be VFR marginal or IFR, assess whether an alternate route exists that avoids the issue, whether a later departure time would improve the situation, or whether the flight should be postponed.

### Fuel Planning

Fuel planning for commercial operations is more rigorous than for private flying. The CARs establish minimum fuel requirements, but sound commercial practice often requires carrying more than the minimum. CARs 602.88 specifies the following minimums: for VFR day flight, sufficient fuel to reach the destination plus 30 minutes at normal cruise speed; for VFR night flight, destination fuel plus 45 minutes; for IFR flight, destination fuel plus the fuel to reach the most distant alternate plus 45 minutes. These are floors, not targets.

In commercial cross-country planning, you calculate fuel in segments. First, determine the fuel required to complete each leg at the planned power setting, using the aircraft's fuel flow data from the pilot's operating handbook. Second, add the reserve per CARs 602.88. Third, consider whether any additional contingency fuel is appropriate given forecast headwinds, weather deviations that might require longer routing, or the remoteness of the route. Fourth, check whether the calculated fuel load, added to the aircraft weight, keeps the aircraft within its maximum takeoff weight and centre of gravity limits.

If the fuel required plus reserves exceeds the fuel that can be loaded within weight and balance limits, you have two options: reduce payload (passengers or cargo) or plan a fuel stop en route. There is no third option.

### Alternate Aerodrome Selection

For commercial VFR operations, selecting an alternate aerodrome is good practice even when not specifically required by the regulations. An alternate is an aerodrome to which you can divert if the destination becomes unavailable — due to weather, a sudden NOTAM for a runway closure, or any other reason.

A good alternate must satisfy several criteria. It must be reachable with the fuel you will have on arrival at the decision point for diversion. It must have weather forecast to be at or above VFR minimums when you would arrive there. It must have the facilities you need — a fuel pump if you need fuel, appropriate hours of operation, and usable runways. It must have a usable communication frequency for arrival information.

For IFR operations, CARs specify when a filed alternate is mandatory: an alternate is required when the destination does not have a published instrument approach, or when the forecast at the destination for the period from one hour before to one hour after the estimated time of arrival does not meet the alternate planning minima specified in the Canada Air Pilot. For commercial VFR, there is no equivalent mandatory alternate requirement in the regulations, but operating without an alternate plan in deteriorating weather is inconsistent with the PIC's duty under CARs 602.02. Source: CARs 602.02.

### Filing and Closing the Flight Plan

Filing a VFR flight plan with NAV CANADA FISE before departure is straightforward. The flight plan form requires: aircraft identification, aircraft type and equipment codes, departure point and time, estimated cruising speed and altitude, route, destination, estimated time en route, fuel on board in hours and minutes, number of persons on board, alternate aerodrome, aircraft colour and markings, pilot name and contact, and home aerodrome.

The estimated time en route is particularly critical, because it determines when the FISE will begin their search communication actions if the flight plan has not been closed. Under standard NAV CANADA procedures, if a flight plan is not closed within one hour of the ETA, FISE begins a communication search — attempting to contact the aircraft and the destination aerodrome by radio and telephone. If contact cannot be established after that search, search and rescue action is initiated through the appropriate Joint Rescue Coordination Centre. For this reason, closing your flight plan immediately after landing is not just courteous — it is a regulatory and safety responsibility.

You close a VFR flight plan by contacting FISE by radio on the ground frequency or by telephone, giving them your aircraft identification and advising that you have landed. If you land at an uncontrolled aerodrome without radio contact, you can close by telephone. If for any reason you cannot close the plan in a timely manner — for example, if you land at an uncontrolled remote strip — make every effort to contact someone who can relay the closure.

### En Route Decision Making

Even the best pre-flight planning cannot anticipate every contingency. Weather changes, mechanical discrepancies arise, and fuel burns may differ from planned due to wind variations. The commercial pilot must continuously monitor the situation en route and be prepared to make diversion decisions well before they become urgent.

The standard for en route weather decision making is the same as for departure: if VFR conditions cannot be maintained at the planned altitude and on the planned route, the options are to find a route and altitude combination that does maintain VFR, or to divert. Continuing VFR into IMC is one of the most common causes of fatal accidents, and it remains a risk even for experienced commercial pilots under schedule pressure or passenger pressure.

Fuel monitoring en route should be systematic. Check your fuel quantity against your planned fuel burn at regular checkpoints. If you are burning significantly more fuel than planned — due to higher than forecast headwinds, for example — you need to identify the revised range available and confirm whether the destination and alternate remain reachable with required reserves. If they are not, you must land at an intermediate aerodrome to refuel. Making this decision early, while you still have abundant options, is professional airmanship. Deferring the decision until you are marginal on fuel eliminates options and puts you in a high-pressure situation. Source: TP 12880E; CARs 602.02.

### Passenger Handling in Commercial Operations

For commercial operations carrying passengers, additional responsibilities apply. Before boarding, you must brief passengers on emergency procedures — the location and use of emergency exits, the seatbelt requirement for taxi, takeoff, and landing, the restriction on smoking, and the prohibition on interfering with the flight crew. In air taxi operations under CARs Part VII, there are additional passenger briefing requirements specified in the operations manual.

During the flight, passengers in commercial operations are not just observers — you are providing a service, and your professional conduct in the cockpit affects their confidence in the operation. Announcing significant manoeuvres, explaining deviations from the planned route, and communicating weather-related decisions calmly and factually are all part of the commercial standard of service. Equally important is what you do not do: you do not allow passenger comfort preferences, schedule pressure, or commercial considerations to override safety decisions.

### Summary

In this lesson you learned that commercial cross-country planning requires checking NOTAMs for departure, en route, destination, and alternates; integrating METARs, TAFs, GFAs, SIGMETs, and PIREPs for a complete weather picture; calculating fuel to CARs 602.88 minimums — 30 minutes reserve for VFR day, 45 minutes for VFR night; filing a flight plan under CARs 602.73 for any flight beyond 25 nautical miles from departure; and closing the plan promptly after arrival to prevent unnecessary SAR action. Alternate aerodrome selection is a professional standard even when not mandated. En route decision making must be proactive, with fuel monitoring and weather evaluation at regular intervals. The PIC's authority and duty under CARs 602.02 is the overriding regulatory principle: safety cannot be compromised by commercial pressure. These principles form the core of the commercial cross-country planning questions on the Transport Canada CPL-A exam.

---

*End of Lesson ANV-003.*
