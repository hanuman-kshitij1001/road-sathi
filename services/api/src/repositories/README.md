# Repositories Layer (`services/api/src/repositories`)

## Purpose
The Repository layer abstracts data persistence operations away from business logic. Services never execute raw SQL, MongoDB queries, or direct ORM calls directly—they talk exclusively through repositories.

## Conventions
- Extend `BaseRepository` for each aggregate root or domain model (e.g., `UserRepository`, `AssistanceRequestRepository`, `ProviderRepository`).
- Each repository encapsulates querying, filtering, pagination, and persistence specifics.
- Allows trivial mocking in unit tests and simplifies database technology transitions.
