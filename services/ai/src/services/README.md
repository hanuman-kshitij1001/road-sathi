# AI Service Pipelines (`services/ai/src/services`)

## Purpose
This directory will house domain-specific AI/ML pipelines and orchestrators. It is architected independently from the main API to allow AI workloads (CPU/GPU-bound tasks or LLM integrations) to scale on independent compute instances.

## Planned Capabilities
1. **Vehicle Problem Classification**:
   - Classifies user-reported symptoms (e.g. "engine clicking and won't turn over" → `BATTERY_JUMP_START`).
2. **Natural-Language Problem Understanding**:
   - Parses unstructured voice/text emergency inputs into structured problem attributes.
3. **Intelligent Service Recommendation**:
   - Recommends optimal roadside assistance category and checks whether specialized equipment (flatbed tow, EV mobile charger, tyre repair) is necessary.
4. **Smart Provider Matching**:
   - Scores nearby available service providers based on distance, rating, relevant tools, vehicle type, and current workload.
5. **Intelligent Assistance / Chatbot**:
   - Provides safe step-by-step guidance for distressed drivers stranded on the road while help is en route.
