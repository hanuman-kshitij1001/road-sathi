# Road-Sathi (रोड साथी)

> **Production-grade on-demand roadside emergency assistance platform connecting vehicle drivers with nearby mechanics, towing, puncture repair, fuel delivery, battery jump-start, and EV mobile charging.**

---

## 1. Project Purpose

When a vehicle breaks down on a highway, city road, or remote location, finding trusted and immediate mechanical assistance is stressful, unpredictable, and often unsafe. **Road-Sathi** solves this critical problem by providing a real-time, location-aware roadside emergency response network connecting stranded motorists with vetted service partners (garages, mobile mechanics, towing operators, and emergency assistance specialists).

---

## 2. Architecture Overview

Road-Sathi is architected as an **npm Workspaces Monorepo** designed for long-term scalability, clear boundaries, and multi-client code reuse:

```
+---------------------------------------------------------------------------------+
|                                 MONOREPO LAYOUT                                 |
+---------------------------------------------------------------------------------+
| apps/                                                                           |
|   ├── web/        -> User Web Client (React 18 + Vite, Port 3000)               |
|   ├── provider/   -> Mechanic / Partner Portal (React 18 + Vite, Port 3001)     |
|   └── admin/      -> Operations & Administration (React 18 + Vite, Port 3002)   |
|                                                                                 |
| services/                                                                       |
|   ├── api/        -> Core REST API (Node.js + Express, Port 5000)               |
|   └── ai/         -> AI/ML Problem Understanding & Matching (Port 5001)         |
|                                                                                 |
| packages/                                                                       |
|   ├── shared/     -> Shared Constants & Utility Functions                       |
|   ├── config/     -> Centralized Environment & Port Configurations              |
|   └── types/      -> Standard Data Contracts & Type Definitions                 |
|                                                                                 |
| infrastructure/   -> Dockerfiles, Database & Monitoring Configurations          |
| docs/             -> Architectural Decision Records (ADRs) & Engineering Guides |
| scripts/          -> Validation & Tooling Scripts                               |
+---------------------------------------------------------------------------------+
```

### Core Backend Architectural Flow (`services/api`)
The core backend strictly enforces a 5-layer separation of concerns:
```
Routes  ──▶  Controllers  ──▶  Services  ──▶  Repositories  ──▶  Database
(HTTP)       (Validation)      (Domain Logic) (Data Access)      (Persistence)
```

---

## 3. Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Monorepo** | npm Workspaces (native multi-package management) |
| **Frontend Applications** | React 18, Vite 6, Modern Component Architecture, Vanilla CSS Design System |
| **Backend Services** | Node.js (>= 18), Express.js, Helmet, CORS |
| **Containerization** | Docker, Docker Compose |
| **Code Sharing** | ES Modules (`@road-sathi/shared`, `@road-sathi/config`, `@road-sathi/types`) |

---

## 4. Current Foundation vs. Planned Features

### Current Foundation (Implemented)
- [x] Complete Monorepo workspace configuration with npm workspaces.
- [x] Three independent frontend setups (`apps/web`, `apps/provider`, `apps/admin`) with Vite, path aliasing, and custom modern CSS design systems.
- [x] Core REST API service structure (`services/api`) implementing Route -> Controller -> Service -> Repository -> Database separation.
- [x] AI Microservice foundation (`services/ai`) architected independently for decoupled scaling.
- [x] Reusable shared packages (`packages/shared`, `packages/config`, `packages/types`).
- [x] Standardized API JSON response envelope (`ApiResponse`) and centralized error handling middleware.
- [x] Real-time diagnostic telemetry and health check endpoints on all services.
- [x] Infrastructure containerization templates (`infrastructure/docker/`, `docker-compose.yml`).
- [x] Comprehensive documentation in `docs/` and foundation validation script in `scripts/`.

### Planned Modules (Next Phases)
- [ ] **Authentication & Identity**: JWT-based auth, OTP phone login, role-based access control (User, Provider, Admin).
- [ ] **Interactive Geolocation & Maps**: Real-time GPS coordinate broadcasting, spatial nearest-mechanic queries (PostGIS), Google Maps integration.
- [ ] **Service Request Dispatch Engine**: Real-time WebSocket matching, mechanic acceptance timeouts, ETA calculations.
- [ ] **Payment & Escrow System**: Digital payment gateway, automated partner settlement, transparent pricing engine.
- [ ] **AI Problem Diagnosis**: NLP voice/text issue triage, automatic service categorization, and predictive equipment recommendation.

---

## 5. Development Principles

1. **Separation of Concerns**: HTTP handlers do not know about databases; business logic does not know about Express `req`/`res`.
2. **Modular Architecture**: Features are grouped by domain capabilities, allowing multiple engineering teams to contribute in parallel.
3. **No Premature Bloat**: Minimal, production-grade dependencies without unused libraries.
4. **Resilience & Graceful Teardown**: Services capture `SIGTERM`/`SIGINT` signals to close active connections cleanly.
5. **Standardized Contracts**: Clients and servers communicate via typed contracts and unified error envelopes.

---

## 6. Getting Started

### Prerequisites
- Node.js (version 18 or higher; Node 20/24 recommended)
- npm (version 9 or higher)

### Setup & Installation
```bash
# 1. Install all dependencies across all workspaces
npm install

# 2. Copy the environment variables template
cp .env.example .env
```

### Running Applications & Services

Run all services concurrently:
```bash
npm run dev
```

Or run any service/application individually:
```bash
# Frontend User Application (http://localhost:3000)
npm run dev:web

# Provider / Partner Portal (http://localhost:3001)
npm run dev:provider

# Admin Operations Dashboard (http://localhost:3002)
npm run dev:admin

# Core Backend REST API (http://localhost:5000)
npm run dev:api

# AI Microservice (http://localhost:5001)
npm run dev:ai
```

### Verify Architecture Foundation
```bash
node scripts/verify-foundation.js
```
