# Graph Report - Garuda_path  (2026-09-23)

## Corpus Check
- 5 files · ~2,950 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 34 nodes · 27 edges · 8 communities (4 shown, 4 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ad12e6b2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Optimization Core
- 🦅 Garuda Path — AI for Smart Mobility & Adaptive Fleet Logistics
- Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics
- Hub / Depot
- Technology Stack
- rules/graphify.md
- workflows/graphify.md
- 📦 6. Getting Started

## God Nodes (most connected - your core abstractions)
1. `🦅 Garuda Path — AI for Smart Mobility & Adaptive Fleet Logistics` - 8 edges
2. `Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics` - 7 edges
3. `Optimization Core` - 4 edges
4. `📦 6. Getting Started` - 3 edges
5. `Mapbox Directions & Matrix Engine` - 3 edges
6. `Fleet State & Capacity Allocator` - 2 edges
7. `graphify` - 1 edges
8. `Workflow: graphify` - 1 edges
9. `📌 1. Problem Statement` - 1 edges
10. `🚀 2. Solution: Garuda Path` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Fleet Management Entities** — garuda_memory_hub, garuda_memory_vehicle, garuda_memory_delivery_stop [EXTRACTED 0.90]
- **Routing Optimization Flow** — garuda_memory_optimization_core, garuda_memory_mapbox_engine, garuda_memory_dynamic_events [EXTRACTED 0.95]

## Communities (8 total, 4 thin omitted)

### Community 0 - "Optimization Core"
Cohesion: 0.25
Nodes (8): Delivery Stop (Order), Real-Time Dispatcher Dashboard, Driver Mobile View & Live Telemetry, Dynamic Events, Fleet State & Capacity Allocator, Mapbox Directions & Matrix Engine, Optimization Core, Order Ingestion & Urgency Scorer

### Community 1 - "🦅 Garuda Path — AI for Smart Mobility & Adaptive Fleet Logistics"
Cohesion: 0.25
Nodes (7): 📌 1. Problem Statement, 🚀 2. Solution: Garuda Path, 🚚 3. Heterogeneous 4-Class Clean EV Fleet, 🚨 4. Real-World Operational Scenarios Handled, 🛠️ 5. Technology Stack, 🏆 7. Hackathon Submission Information, 🦅 Garuda Path — AI for Smart Mobility & Adaptive Fleet Logistics

### Community 2 - "Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics"
Cohesion: 0.25
Nodes (7): 1. Problem Statement & Real-World Logistics Friction, 2. Continuous Multi-Stop Optimization Engine ("Connect in One Go"), 3. Real-Time Turn-by-Turn Navigation & Driver Telemetry, 4. Multi-Class Fleet Allotment Matrix, 5. Real-World Failure Scenarios Tackled by Garuda Path, 6. Hackathon 3–5 Minute Demo Video Script & Storyboard, Garuda Path — Intelligent AI Smart Mobility & Adaptive Fleet Logistics

### Community 7 - "📦 6. Getting Started"
Cohesion: 0.67
Nodes (3): 📦 6. Getting Started, Installation, Prerequisites

## Knowledge Gaps
- **24 isolated node(s):** `graphify`, `Workflow: graphify`, `📌 1. Problem Statement`, `🚀 2. Solution: Garuda Path`, `🚚 3. Heterogeneous 4-Class Clean EV Fleet` (+19 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 28 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `🦅 Garuda Path — AI for Smart Mobility & Adaptive Fleet Logistics` connect `🦅 Garuda Path — AI for Smart Mobility & Adaptive Fleet Logistics` to `📦 6. Getting Started`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `📦 6. Getting Started` connect `📦 6. Getting Started` to `🦅 Garuda Path — AI for Smart Mobility & Adaptive Fleet Logistics`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **What connects `graphify`, `Workflow: graphify`, `📌 1. Problem Statement` to the rest of the system?**
  _24 weakly-connected nodes found - possible documentation gaps or missing edges._