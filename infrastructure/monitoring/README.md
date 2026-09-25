# Monitoring & Observability Infrastructure (`infrastructure/monitoring`)

## Purpose
System observability, health monitoring, error tracking, and performance metrics.

## Roadmap
- OpenTelemetry / Prometheus metric collection.
- Structured centralized logging (ELK / Loki / CloudWatch).
- Grafana dashboards for API response times, request throughput, and provider dispatch latency.
- Health check endpoints (`/health`) on all microservices for orchestrator liveness and readiness probes.
