FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
COPY packages/ packages/
COPY apps/provider/package*.json apps/provider/

RUN npm install --workspace=@road-sathi/provider

COPY apps/provider/ apps/provider/

WORKDIR /app/apps/provider
EXPOSE 3001

CMD ["npm", "run", "dev", "--", "--host"]
