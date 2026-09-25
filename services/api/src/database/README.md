# Database Layer (`services/api/src/database`)

## Purpose
This folder encapsulates database connectivity, connection pooling, client lifecycles, and transaction management.

## Architecture
- **`connection.js`**: Provides unified initialization (`connect()`) and graceful teardown (`disconnect()`) hooks used by `server.js`.
- Future migration files, seeds, and ORM/ODM client initializations (e.g. Prisma Client, Knex, or Mongoose instance) belong here.
