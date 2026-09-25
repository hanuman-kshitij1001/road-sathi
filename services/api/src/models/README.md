# Models Layer (`services/api/src/models`)

## Purpose
This folder will hold database schema definitions and domain entity structures.

## Roadmap & Guidelines
- As database technologies are selected (e.g., PostgreSQL with Prisma/Knex or MongoDB with Mongoose), schemas, migrations, and model files reside here.
- Domain models represent data integrity rules, indexes, and entity relationships.
- Business operations belong in `services/`, not embedded inside model files.
