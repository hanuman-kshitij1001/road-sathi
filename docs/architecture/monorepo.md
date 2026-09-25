# Monorepo Structure & Package Boundaries

Road-Sathi uses an npm native workspaces monorepo architecture:

## Directory Breakdown

```
road-sathi/
├── apps/                 # Independent frontend user-facing applications
│   ├── web/              # End-user customer portal (React + Vite, Port 3000)
│   ├── provider/         # Mechanic & service partner portal (React + Vite, Port 3001)
│   └── admin/            # Platform administration & operations console (React + Vite, Port 3002)
│
├── services/             # Independent backend services & microservices
│   ├── api/              # Core Node.js / Express REST API (Port 5000)
│   └── ai/               # AI & ML pipeline microservice (Port 5001)
│
├── packages/             # Shared internal libraries across apps & services
│   ├── shared/           # Cross-cutting constants & utilities
│   ├── config/           # Centralized configuration & environment helpers
│   └── types/            # Shared data contracts & type definitions
│
├── infrastructure/       # Docker, database, and cloud deployment configs
├── docs/                 # Architecture, API, and technical documentation
└── scripts/              # Project maintenance and development scripts
```

## Dependency Rules
1. `apps/*` can consume `packages/*`.
2. `services/*` can consume `packages/*`.
3. `packages/*` cannot depend on `apps/*` or `services/*`.
4. Frontends cannot directly query databases or internal services without traversing `services/api`.
