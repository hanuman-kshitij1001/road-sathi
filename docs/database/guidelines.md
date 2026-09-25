# Database Architecture & Conventions

## Principles
1. **Spatial Indexing for Roadside Dispatch**: Geolocation coordinates (latitude/longitude) must use spatial indices (PostGIS / GeoJSON) to allow sub-second nearest-neighbor queries.
2. **Immutable Audit Trails**: State transitions (e.g. `REQUEST_INITIATED`, `PROVIDER_ACCEPTED`, `ARRIVED_ON_SCENE`, `COMPLETED`) should maintain immutable event records for dispute resolution and insurance verifications.
3. **Optimistic Locking**: Prevents race conditions where two mechanics simultaneously attempt to accept the same emergency dispatch request.
4. **Clean Abstraction**: All database interactions must flow through the Repositories layer (`services/api/src/repositories`).
