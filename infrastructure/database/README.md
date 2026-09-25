# Database Infrastructure (`infrastructure/database`)

## Purpose
This directory prepares the foundation for future database provisioning, migrations, backups, and replication configs.

## Roadmap
- PostgreSQL setup and Docker compose definition.
- Connection pooling (PgBouncer) for handling surge traffic during severe weather / highway incidents.
- Geolocation extension (PostGIS) for spatial spatial indexing (ST_DWithin, nearest mechanic search).
- Redis caching layer for geospatial provider location streams.
