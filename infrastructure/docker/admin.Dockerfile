FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
COPY packages/ packages/
COPY apps/admin/package*.json apps/admin/

RUN npm install --workspace=@road-sathi/admin

COPY apps/admin/ apps/admin/

WORKDIR /app/apps/admin
EXPOSE 3002

CMD ["npm", "run", "dev", "--", "--host"]
