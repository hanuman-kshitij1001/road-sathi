# Services Layer (`services/api/src/services`)

## Purpose
The Service layer contains all business logic and domain rules for the platform.

## Responsibilities
- Coordinates interactions between repositories.
- Enforces domain validation, calculations, state transitions, and business invariants.
- Triggers notifications, events, and calls to external or internal microservices (such as `services/ai`).
- Completely isolated from HTTP concerns (`req`, `res`, status codes).
