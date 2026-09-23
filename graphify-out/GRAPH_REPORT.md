# Graph Report - Garuda_path  (2026-09-23)

## Corpus Check
- 4 files · ~2,307 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 27 nodes · 21 edges · 8 communities (4 shown, 4 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Optimization Core
- Mapbox Directions & Matrix Engine
- Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics
- Hub / Depot
- Technology Stack
- rules/graphify.md
- workflows/graphify.md
- 3. Real-World Failure Scenarios Tackled by Garuda Path

## God Nodes (most connected - your core abstractions)
1. `3. Real-World Failure Scenarios Tackled by Garuda Path` - 7 edges
2. `Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics` - 5 edges
3. `Optimization Core` - 4 edges
4. `Mapbox Directions & Matrix Engine` - 3 edges
5. `Fleet State & Capacity Allocator` - 2 edges
6. `graphify` - 1 edges
7. `Workflow: graphify` - 1 edges
8. `1. Problem Statement & Real-World Logistics Friction` - 1 edges
9. `2. Multi-Class Fleet Allotment Matrix` - 1 edges
10. `Scenario 1: The "Narrow Alley Alleyway Re-allotment" (Car Street / Temple Square)` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Optimization Core` --calls--> `Mapbox Directions & Matrix Engine`  [EXTRACTED]
  garuda_memory.md → garuda_memory.md  _Bridges community 0 → community 1_

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Fleet Management Entities** — garuda_memory_hub, garuda_memory_vehicle, garuda_memory_delivery_stop [EXTRACTED 0.90]
- **Routing Optimization Flow** — garuda_memory_optimization_core, garuda_memory_mapbox_engine, garuda_memory_dynamic_events [EXTRACTED 0.95]

## Communities (8 total, 4 thin omitted)

### Community 0 - "Optimization Core"
Cohesion: 0.40
Nodes (5): Delivery Stop (Order), Dynamic Events, Fleet State & Capacity Allocator, Optimization Core, Order Ingestion & Urgency Scorer

### Community 1 - "Mapbox Directions & Matrix Engine"
Cohesion: 0.67
Nodes (3): Real-Time Dispatcher Dashboard, Driver Mobile View & Live Telemetry, Mapbox Directions & Matrix Engine

### Community 2 - "Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics"
Cohesion: 0.40
Nodes (4): 1. Problem Statement & Real-World Logistics Friction, 2. Multi-Class Fleet Allotment Matrix, 4. Hackathon 3–5 Minute Demo Video Script & Storyboard, Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics

### Community 7 - "3. Real-World Failure Scenarios Tackled by Garuda Path"
Cohesion: 0.29
Nodes (7): 3. Real-World Failure Scenarios Tackled by Garuda Path, Scenario 1: The "Narrow Alley Alleyway Re-allotment" (Car Street / Temple Square), Scenario 2: The "Kulur NH66 Bridge Pothole Gridlock" Dynamic Inland Bypass, Scenario 3: Coastal Monsoon Cloudburst at Padil Underpass & EV Battery Safety Reroute, Scenario 4: Address Ambiguity Confidence Score (AACS) & Dynamic Micro-Hub Drop, Scenario 5: EV Battery Depletion (<15%) & Mid-Journey Split Offloading, Scenario 6: Dynamic Mid-Route Emergency Medical Insertion (Kankanady Hospital)

## Knowledge Gaps
- **19 isolated node(s):** `graphify`, `Workflow: graphify`, `1. Problem Statement & Real-World Logistics Friction`, `2. Multi-Class Fleet Allotment Matrix`, `Scenario 1: The "Narrow Alley Alleyway Re-allotment" (Car Street / Temple Square)` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 22 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `3. Real-World Failure Scenarios Tackled by Garuda Path` connect `3. Real-World Failure Scenarios Tackled by Garuda Path` to `Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **Why does `Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics` connect `Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics` to `3. Real-World Failure Scenarios Tackled by Garuda Path`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Why does `Optimization Core` connect `Optimization Core` to `Mapbox Directions & Matrix Engine`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **What connects `graphify`, `Workflow: graphify`, `1. Problem Statement & Real-World Logistics Friction` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._