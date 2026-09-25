# Deployment & Production Strategy

## Containerization
Each application and service contains an isolated Dockerfile in `infrastructure/docker/` and is orchestrated via `docker-compose.yml`.

## Microservices Topology
- **Core API (`services/api`)**: Horizontally auto-scaled behind a cloud load balancer.
- **AI Microservice (`services/ai`)**: Provisioned on compute-optimized instances to handle natural language processing and matching algorithms.
- **Static Frontends (`apps/*`)**: Built as static SPAs via Vite and distributed globally through CDN edge nodes (e.g. AWS CloudFront, Cloudflare).
