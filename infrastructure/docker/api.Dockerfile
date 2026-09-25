# Base stage for API service
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY packages/ packages/
COPY services/api/package*.json services/api/

RUN npm install --workspace=@road-sathi/api --omit=dev

# Copy source code
COPY services/api/ services/api/

WORKDIR /app/services/api
EXPOSE 5000

CMD ["node", "src/server.js"]
