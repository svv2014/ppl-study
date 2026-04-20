---
id: NAV-002
topic: navigation
order: 2
slug: lat-lon-map-reading
title: "Latitude, Longitude, and Map Reading"
duration_min: 20
status: complete
audio: https://media.suprun.workers.dev/ppl/lessons/navigation/002-lat-lon-map-reading.m4a
visual: /visuals/nav002-lat-lon-map-reading.html
sources:
  - TP 12880E
  - TP 9994
questions:
  - id: q1
    prompt: "One degree of latitude equals approximately how many nautical miles?"
    choices:
      A: "60 nautical miles"
      B: "90 nautical miles"
      C: "111 nautical miles"
      D: "69 nautical miles"
    answer: A
    explanation: "One degree of latitude equals approximately 60 nautical miles everywhere on Earth. This is because the Earth is divided into 360 degrees of latitude (180° north to 180° south counted as 90° in each direction from the equator), and the circumference of the Earth through the poles is approximately 21,600 NM — 21,600 ÷ 360 = 60 NM per degree. Note: 1° = 111 km ≈ 60 NM. The other options (90 NM, 111 NM) are plausible distractors — the exam expects the 60 NM figure. Source: TP 12880E Chapter 9."
  - id: q2
    prompt: "On a VFR Navigation Chart (VNC), the latitude/longitude grid lines are printed every 30 minutes of arc. If you are at the 45°N parallel and you count two grid lines northward, what latitude are you at?"
    choices:
      A: "45°30′N"
      B: "46°00′N"
      C: "47°00′N"
      D: "45°02′N"
    answer: B
    explanation: "The VNC grid is printed every 30 minutes (30′) of arc. Counting two grid lines northward from 45°00′N: first line = 45°30′N, second line = 46°00′N. Each grid step is 30 minutes, so two steps = 60 minutes = 1 full degree. The grid spacing of 30′ is a key exam fact. Source: TP 9994, TP 12880E Chapter 9."
  - id: q3
    prompt: "A pilot reports their position as 'N 44°30′, W 076°15′'. Which of the following best describes this location?"
    choices:
      A: "30 nautical miles north of the 44°N parallel, and 15 nautical miles east of the 76°W meridian"
      B: "30 nautical miles north of the 44°N parallel, and 15 nautical miles west of the 76°W meridian"
      C: "Half a degree north of 44°N, and a quarter degree west of 076°W"
      D: "A location in the southern hemisphere, east of Greenwich"
    answer: C
    explanation: "The coordinates N 44°30′, W 076°15′ mean 44 degrees and 30 minutes North latitude, 76 degrees and 15 minutes West longitude. 30 minutes = 0.5° and 15 minutes = 0.25°, so the position is half a degree north of 44°N and a quarter degree west of 076°W. Option A is wrong because 30′ of latitude is 30 NM — but this is only true for latitude, not exactly for longitude (which varies with cosine of latitude). Option B reverses the direction. Option D is wrong — N and W indicate northern hemisphere, west of Greenwich. Source: TP 12880E Chapter 9."
  - id: q4
    prompt: "On a VNC, the distance between adjacent longitude lines (30′ apart) is noticeably shorter than the distance between adjacent latitude lines (also 30′ apart) at 50°N. Why?"
    choices:
      A: "Longitude lines are drawn at a different scale than latitude lines on Canadian charts"
      B: "One minute of longitude equals more nautical miles than one minute of latitude"
      C: "The length of a degree of longitude decreases as latitude increases, because meridians converge toward the poles"
      D: "Latitude lines are exaggerated on VNCs to make terrain easier to read"
    answer: C
    explanation: "Meridians (longitude lines) converge toward the poles, so the actual ground distance between two meridians shrinks as you move away from the equator. At the equator, 1° of longitude ≈ 60 NM (same as latitude). At 50°N, 1° of longitude ≈ 60 × cos(50°) ≈ 60 × 0.643 ≈ 38.6 NM. At 60°N, it drops to ≈ 30 NM. On the chart, both grid spacings look similar on paper, but the actual ground distance they represent differs. This is a direct consequence of the spherical shape of the Earth. Source: TP 12880E Chapter 9."
  - id: q5
    prompt: "You are planning a route from a departure point at N 49°00′, W 081°00′ to a destination at N 51°00′, W 081°00′. Both points are on the same meridian. The VNC you are using shows a Maximum Elevation Figure (MEF) of 42 in one of the 30′ grid squares along your route. What does the MEF of 42 indicate, and approximately how far apart (in nautical miles) are your two waypoints?"
    choices:
      A: "MEF means the highest terrain is 42 feet MSL; the waypoints are 60 NM apart"
      B: "MEF means the highest terrain or obstacle plus buffer is 4,200 feet MSL; the waypoints are 120 NM apart"
      C: "MEF means the average terrain elevation is 4,200 feet AGL; the waypoints are 120 NM apart"
      D: "MEF means the highest terrain or obstacle plus buffer is 420 feet MSL; the waypoints are 60 NM apart"
    answer: B
    explanation: "Two parts: (1) The MEF is printed in hundreds of feet — a value of '42' means 4,200 feet MSL. It represents the highest terrain or obstacle in that 30′ grid square, plus a safety buffer. Fly above this altitude to ensure terrain and obstacle clearance. (2) The two waypoints differ by 2° of latitude (49°N to 51°N). Since 1° of latitude = 60 NM everywhere, 2° = 120 NM. Both waypoints are on the same meridian (same longitude), so the distance is purely a latitude calculation. This question connects NAV-001's MEF concept with the degree-to-NM conversion from this lesson. Source: TP 9994, TP 12880E Chapter 9."
---

# Lesson NAV-002: Latitude, Longitude, and Map Reading

**Section:** Navigation  
**Lesson number:** 002  
**Estimated time:** 20 minutes  
**Source:** TP 12880E Chapter 9, TP 9994 (VFR Chart User's Guide)

---

## Narration Script

In the previous lesson you learned to read VFR chart symbols — airports, airspace, terrain, NAVAIDs. Now we're going to add the coordinate system underneath all of it. Latitude and longitude are how you pinpoint any location on Earth, report your position to ATC, read a chart grid, and measure distances. This is foundational navigation math.

---

**The Coordinate Grid — What It Is**

Imagine wrapping a grid around the entire Earth. Two families of lines make up that grid.

**Latitude lines** — called *parallels* — run horizontally, east to west. They measure how far north or south you are from the equator. The equator is 0°, the North Pole is 90°N, and the South Pole is 90°S. Canada sits between roughly 42°N and 83°N.

**Longitude lines** — called *meridians* — run vertically, north to south. They measure how far east or west you are from the Prime Meridian, which runs through Greenwich, England. The Prime Meridian is 0°. Moving west, you reach 90°W (near Chicago), then 135°W (Alaska coast), then 180° — the international date line in the Pacific. Moving east from Greenwich, you eventually reach 180° from the other direction. All of Canada is west of Greenwich, so Canadian positions carry a W designation.

---

**Degrees, Minutes, and Seconds**

Each degree is divided into 60 minutes (written with the symbol ′). Each minute is divided into 60 seconds (written with ″). For the written exam and for VNC chart work, you typically work to the nearest minute — seconds are rarely needed for VFR navigation.

A full position looks like this: **N 45°30′, W 075°45′**

That means: 45 degrees and 30 minutes North latitude, 75 degrees and 45 minutes West longitude. This is how you report your position to ATC, and it's how fixes are published in aviation documents.

---

**How Far Is One Degree?**

Here is the most important number in this lesson:

**One degree of latitude = 60 nautical miles.**

This is true everywhere on Earth. Why? Because one minute of arc on the Earth's surface (not a minute of time — a minute of arc, 1/60 of a degree) equals exactly one nautical mile by definition. So 60 minutes = 60 NM, and that's one degree. This relationship is intentional — the nautical mile was originally defined this way.

Source: TP 12880E Chapter 9.

If two waypoints are 2° of latitude apart (same longitude), they are exactly **120 NM** apart.  
If two waypoints are 30′ of latitude apart, they are **30 NM** apart.  
These are quick, mental-math calculations that you will use repeatedly in cross-country planning.

---

**Longitude Is Different — Meridians Converge**

The distance between two longitude lines changes with latitude. At the equator, one degree of longitude equals 60 NM — same as latitude. But as you move toward the poles, the meridians converge. At any latitude, the ground distance covered by one degree of longitude is:

**1° longitude ≈ 60 NM × cos(latitude)**

At 45°N (roughly southern Ontario), cos(45°) ≈ 0.707, so 1° of longitude ≈ 42 NM.  
At 50°N (central Canada), cos(50°) ≈ 0.643, so 1° of longitude ≈ 38.6 NM.  
At 60°N (northern Canada), cos(60°) = 0.5, so 1° of longitude ≈ 30 NM.

For the written exam, you won't be asked to solve a trigonometric equation. But you need to understand **why** longitude distance varies and be able to recognize that 1° of longitude is *less* than 60 NM in Canada.

Source: TP 12880E Chapter 9.

---

**Reading the VNC Grid — 30-Minute Spacing**

On a Canadian VNC (VFR Navigation Chart), latitude and longitude lines are printed every **30 minutes of arc** — that is, every half degree. Each grid square on the chart is therefore 30′ × 30′.

Reading a position from the chart is a counting exercise:

1. Find the nearest printed degree label on the chart border (e.g., 45°N or 076°W).
2. Count grid lines from that label toward your point of interest.
3. Each grid line represents 30′.
4. Estimate the remaining minutes visually (each 30′ strip is 30 equal-minute subdivisions).

**Example:** You are looking at an airport. The nearest printed latitude below it reads 45°. There is one grid line between the 45° label and the airport, and the airport is about halfway between that grid line and the next. That puts it at approximately 45° + 30′ + 15′ = **45°45′N**.

Source: TP 9994.

---

**Position Reporting Format**

When you report your position to ATC or record a fix on your flight log, use this format:

**N DD°MM′, W DDD°MM′**

Where DD is degrees latitude (two digits), DDD is degrees longitude (three digits, because longitude can reach 180°), and MM is minutes. Always include the hemisphere designators (N/S and E/W).

Example: **N 45°30′, W 075°45′**

This tells ATC you are at 45 degrees 30 minutes North, 75 degrees 45 minutes West. In central Canada, all positions are North latitude and West longitude.

---

**MEF and the 30-Minute Grid**

You learned about the Maximum Elevation Figure (MEF) in NAV-001. The MEF is directly tied to the 30′ × 30′ grid. Each grid square has one MEF value — the highest terrain or obstacle in that square, plus a buffer, expressed in hundreds of feet MSL. The bold number you see in each grid square corresponds to exactly the 30′ grid spacing you just learned.

When planning a route, check every MEF in every 30′ grid square your track crosses. Your planned cruise altitude should clear all those MEF values.

Source: TP 9994, TP 12880E Chapter 9.

---

**Coming Up: True vs Magnetic Heading**

Once you can read a grid position and measure a lat/lon distance, the next step is to measure a *direction* between two points. That direction is a true bearing — based on True North. But your aircraft compass points to Magnetic North, which is different. The correction between true and magnetic directions is called **magnetic variation**. That is the subject of NAV-003, the next lesson.

---

**Putting It Together**

Latitude and longitude give you the address of any point on Earth. As a VFR pilot:

- You read positions from the VNC using the 30′ grid.
- You report positions to ATC in the N DD°MM′, W DDD°MM′ format.
- You use 1° latitude = 60 NM to quickly estimate north-south distances.
- You remember that longitude distances shrink with latitude due to meridian convergence.
- You use the MEF in each 30′ grid square when checking terrain clearance along a route.

These skills are the foundation for every cross-country planning calculation you will do.

---

## Quick Reference: Latitude and Longitude

| Concept | Value / Rule |
|---------|-------------|
| 1° of latitude | 60 NM (everywhere) |
| 1′ of latitude | 1 NM (by definition) |
| 1° of longitude at equator | ≈ 60 NM |
| 1° of longitude at 45°N | ≈ 42 NM |
| 1° of longitude at 60°N | ≈ 30 NM |
| VNC grid spacing | 30 minutes (30′) per grid line |
| Position report format | N DD°MM′, W DDD°MM′ |
| MEF grid tie-in | One MEF per 30′ × 30′ grid square |
| Parallels | Lines of latitude (east-west) |
| Meridians | Lines of longitude (north-south) |
| Prime Meridian | 0° longitude, Greenwich, England |

---

*End of Lesson NAV-002.*
