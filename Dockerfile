# Этап сборки
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап nginx
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html
