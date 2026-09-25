FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
COPY packages/ packages/
COPY apps/web/package*.json apps/web/

RUN npm install --workspace=@road-sathi/web

COPY apps/web/ apps/web/

WORKDIR /app/apps/web
EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]
