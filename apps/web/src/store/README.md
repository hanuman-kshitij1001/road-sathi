# Global State Store (`src/store`)

## Purpose
This folder manages client-side cross-cutting state (such as user session, active emergency assistance request, global UI toast notifications).

## Guidelines
- Lightweight state (Zustand or Context API) is recommended.
- Feature-scoped state should live inside its respective feature folder.
- Server cache state should be handled by React Query / TanStack Query in future phases.
