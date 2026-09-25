# ADR 0001: Monorepo Architecture and Layered API Pattern

## Status
Accepted

## Context
Road-Sathi requires multiple client applications (end-users, mechanics/partners, administrators) interacting with shared domains, common data types, and a centralized emergency dispatch engine. Furthermore, AI capabilities must evolve independently without compromising core emergency uptime.

## Decisions
1. **npm Workspaces Monorepo**: Enables single repository maintenance, unified dependency management, and instant sharing of contracts (`packages/types`, `packages/shared`, `packages/config`).
2. **Layered API Design (`Routes -> Controllers -> Services -> Repositories -> Database`)**: Prevents leaking HTTP concerns into business models and isolates database drivers from domain invariants.
3. **Decoupled AI Microservice**: Keeps machine learning, problem classification, and matching workloads isolated from the core request dispatch pipeline.

## Consequences
- Single pull request can touch client, server, and shared contracts safely.
- Eliminates code duplication across frontend portals.
- Clear mental model for developers joining the project over the next several years.
