# Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics

## 1. Problem Statement & Real-World Logistics Friction
In fast-growing urban and semi-urban hubs like **Mangalore (Mangaluru)**, last-mile logistics accounts for over **53% of total supply chain costs**. Operations suffer from critical real-world failure modes:
- **First-Attempt Delivery Failure & Cost Spiral**: 20%–30% failure rates in regular commerce and up to 40%–49% in Cash-on-Delivery (COD), costing ~₹1,500 per failed attempt across re-attempts, RTO (Return to Origin), and phone calls.
- **Address Ambiguity**: 45% of delivery delays in Indian semi-urban areas stem from descriptive landmark addresses (*"Behind old temple, 2nd cross"*), causing 15–20 minutes of wandering per stop.
- **Narrow Street Gridlocks**: Historic market quarters (Car Street, Bunder) measure only 1.8m–2.5m wide; 4-wheel vans get stuck or must park 400m away, forcing multiple manual walking trips.
- **Cascading SLA Collapse ("Accordion Effect")**: A 20-minute delay at Stop #2 cascades down the chain, breaching SLAs for later time-windowed orders and triggering in-flight customer cancellations.
- **Single-Artery Bridge Chokepoints**: The twin bridges at Kulur (NH66 over Gurupura river) create 45–75 minute bottlenecks when port container trailers slow down.
- **Coastal Monsoon Flash Flooding**: Padil Underpass, Kottara Chowki, and Bunder flood under 300+ mm water during monsoons, threatening EV battery enclosures (IP67 high-voltage contactor cutoffs) and halting traffic.
- **"Cube Out" vs "Weigh Out" Dilemma**: E-commerce parcels have low density (110–140 kg/m³), filling van volume before reaching payload limit; grocery/FMCG cartons weigh out before filling 30% of space.
- **EV Range Anxiety & Thermal Drop**: High tropical humidity and stop-and-go driving drop real-world EV range by 25%–35%, causing mid-trip stranding without dynamic charge/split-offload awareness.

---

## 2. Multi-Class Fleet Allotment Matrix

Garuda Path manages a heterogeneous, clean-energy fleet categorized into 4 distinct vehicle classes tailored for urban and semi-urban geography:

| Vehicle Class | Benchmark Vehicle | Max Payload | Max Volume | Real-World Range | Min Road Width | Cost/KM | Primary Operational Allotment Role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Class 1: Cargo E-Bike (2W)** | Zypp / Hero Nyx Commercial Cargo | **100 kg** | **0.25 m³** | **70 km** (Swappable Battery, 3 min swap) | **1.2 m** | ₹3.50 | Rapid P1 medical orders, hyper-dense narrow alleys (Car Street), dynamic split-offload pickups. |
| **Class 2: EV 3W Cargo (L5N)** | Mahindra Treo Zor Delivery Van | **550 kg** | **3.40 m³** | **80 km** (AC Plug, 3.5h charge) | **2.2 m** | ₹6.80 | High-density e-commerce parcels, mid-tier residential corridors (Bejai, Kadri, Mallikatta). |
| **Class 3: Heavy EV 3W (L5N)** | Euler HiLoad EV Liquid-Cooled | **688 kg** | **4.20 m³** | **115 km** (DC Fast Charge, 15 min +50km) | **2.4 m** | ₹7.20 | Heavy retail, beverage crates, steep coastal/hilly terrain (Kadri Hills, Derebail). |
| **Class 4: EV LCV Mini-Truck (4W)** | Tata Ace EV Box Container | **600–1,000 kg** | **5.90 m³** | **90 km** (DC Fast CCS2, 90 min) | **3.5 m** | ₹11.50 | B2B wholesale, bulky white goods, port container consolidation (Panambur Port to central hubs). |

---

## 3. Real-World Failure Scenarios Tackled by Garuda Path

### Scenario 1: The "Narrow Alley Alleyway Re-allotment" (Car Street / Temple Square)
- **Friction**: Delivery order of 75kg / 0.65 m³ assigned to an address on an alley of width 2.1m.
- **Garuda Path AI Logic**: CVRP road geometry constraint filters out 4W vans (`min_width < 3.5m`) and large 3Ws; automatically allots an **EV 2-Wheeler fleet pair** or assigns a **Curbside Transshipment Node** where an Euler HiLoad transfers parcels for rapid foot/e-bike drop.

### Scenario 2: The "Kulur NH66 Bridge Pothole Gridlock" Dynamic Inland Bypass
- **Friction**: Container breakdown on Kulur bridge causes 50-minute delay; 4 downstream deliveries in Baikampady industrial corridor risk SLA penalty.
- **Garuda Path AI Logic**: Google Gemini AI detects telemetry speed drop (<6 km/h for >10 mins); triggers dynamic reroute via **Baikampady–Kavoor inland bypass** (+4.2 km distance, -34 mins delay, saving net ₹650 SLA penalties).

### Scenario 3: Coastal Monsoon Cloudburst at Padil Underpass & EV Battery Safety Reroute
- **Friction**: 350 mm standing water at Padil Railway Underpass threatens EV battery enclosure immersion and motor damage.
- **Garuda Path AI Logic**: Sets infinite impedance on the underpass edge; dynamically routes vehicle onto the **Highland Ridge Arterial (Pumpwell–Kankanady–Falnir)**; verifies battery SoC can sustain the +3.2% gradient climb.

### Scenario 4: Address Ambiguity Confidence Score (AACS) & Dynamic Micro-Hub Drop
- **Friction**: Customer address is ambiguous (*"Near big banyan tree, behind pump house"*), risking a 20-minute search.
- **Garuda Path AI Logic**: Address engine computes $AACS = 0.35$ (< 0.70 threshold); triggers automated GPS ping to customer; if unresolved, redirects delivery to the nearest verified partner Kirana Store / Micro-Locker Hub, avoiding wasted search mileage.

### Scenario 5: EV Battery Depletion (<15%) & Mid-Journey Split Offloading
- **Friction**: EV Van #02 drops to 14% SoC near Kadri Hills with 7 remaining stops; nearest fast charger has a 40-minute queue.
- **Garuda Path AI Logic**: System freezes van route; directs van to nearest low-tariff charging pad; splits the 7 remaining stops into two nearby active Express E-Bikes based on volume/payload; maps a 3-minute curbside cross-dock handoff.

### Scenario 6: Dynamic Mid-Route Emergency Medical Insertion (Kankanady Hospital)
- **Friction**: Urgent P1 life-critical medical order needed at Father Muller Hospital while vehicles are mid-trip.
- **Garuda Path AI Logic**: Marginal insertion cost calculation ($\Delta C$) identifies closest vehicle with capacity; re-sequences route ahead of standard deliveries; guarantees <25 min delivery.

---

## 4. Hackathon 3–5 Minute Demo Video Script & Storyboard
- **0:00 – 0:45 (The Problem Hook)**: Explain the ₹1,500 cost per failed delivery, address ambiguity, and static route gridlocks in Indian cities like Mangalore.
- **0:45 – 1:30 (Architecture & Live Map)**: Walk through the React+Vite + Node+Express + SQLite + Gemini AI architecture; showcase the Mapbox GL live delivery grid of Mangalore.
- **1:30 – 2:45 (Live Scenario Demonstrations)**:
  - Trigger NH66 Bridge Gridlock -> Show Google Gemini AI analyze the disruption and reroute via Baikampady inland bypass.
  - Trigger P1 Hospital Emergency -> Show dynamic marginal insertion into nearest EV Van.
  - Show EV Battery Drain offloading to E-Bikes.
- **2:45 – 3:30 (ROI Dashboard & Metrics)**: Show 32% travel time saved, 24% fuel saved, 100% P1 SLA compliance.
- **3:30 – 4:00 (Conclusion & Scalability)**: Clean zero-emission fleet impact and commercial deployment viability.
