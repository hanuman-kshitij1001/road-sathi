FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./
COPY packages/ packages/
COPY services/ai/package*.json services/ai/

RUN npm install --workspace=@road-sathi/ai --omit=dev

COPY services/ai/ services/ai/

WORKDIR /app/services/ai
EXPOSE 5001

CMD ["node", "src/server.js"]
