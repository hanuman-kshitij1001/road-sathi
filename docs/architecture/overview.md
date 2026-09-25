# Road-Sathi System Architecture Overview

## 1. Vision & Mission
Road-Sathi is an on-demand roadside emergency assistance platform connecting vehicle drivers stranded on highways, city roads, or remote locations with verified mechanics, towing trucks, puncture specialists, and EV recharge providers.

## 2. High-Level Architectural Model

```
+-----------------------------------------------------------------------------+
|                                CLIENT LAYER                                 |
|                                                                             |
|  [apps/web] (Port 3000)       [apps/provider] (Port 3001)    [apps/admin]   |
|  - Stranded Drivers           - Mechanics & Garages          (Port 3002)    |
|  - Service Requests           - Job Acceptance & Dispatch    - Ops Console  |
+----------------------+----------------------+-------------------------------+
                       |                      |
                       +-----------+----------+
                                   |
                                   v
+----------------------------------+------------------------------------------+
|                                GATEWAY & API                                |
|                                                                             |
|                       [services/api] (Port 5000)                             |
|  Express.js REST Engine                                                     |
|  Layers: Routes -> Controllers -> Services -> Repositories -> Database      |
+----------------------------------+------------------------------------------+
                                   |
               +-------------------+-------------------+
               |                                       |
               v                                       v
+--------------+---------------+     +----------------+-----------------------+
|          DATA LAYER          |     |           AI MICROSERVICE             |
|                              |     |                                       |
|  PostgreSQL (Spatial/PostGIS)|     |       [services/ai] (Port 5001)       |
|  Redis (Location Caching)    |     |  - Vehicle Problem Classification     |
|                              |     |  - Smart Provider Matching            |
+------------------------------+     +---------------------------------------+
```

## 3. Layer Separation of Concerns

### Routes Layer
- Declares HTTP endpoints, methods, and mounts validators and middlewares.
- Completely devoid of database or business logic.

### Controllers Layer
- Intercepts requests, validates authorization context, calls services, and formats standard responses via `ApiResponse`.

### Services Layer
- The domain brain. Contains business rules, price calculations, state transitions, event dispatches. Independent of Express or HTTP details.

### Repositories Layer
- Encapsulates database queries, filtering, joins, and transactions. Ensures that changing database technology does not break domain logic.

### Database Layer
- Connection pooling, migration management, and low-level driver integration.
