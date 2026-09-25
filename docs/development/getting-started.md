# Local Development Guide

## Prerequisites
- Node.js >= 18.0.0 (Node 24 recommended)
- npm >= 9.0.0

## Quick Start
1. Clone the repository and navigate to root:
   ```bash
   cd Road-Sathi_project_main
   ```
2. Install workspace dependencies:
   ```bash
   npm install
   ```
3. Copy environment configuration:
   ```bash
   cp .env.example .env
   ```
4. Run all services and applications concurrently:
   ```bash
   npm run dev
   ```

## Running Individual Workspaces
- Start Web User App only:
  ```bash
  npm run dev:web
  ```
- Start Provider App only:
  ```bash
  npm run dev:provider
  ```
- Start Admin App only:
  ```bash
  npm run dev:admin
  ```
- Start Core REST API only:
  ```bash
  npm run dev:api
  ```
- Start AI Microservice only:
  ```bash
  npm run dev:ai
  ```
