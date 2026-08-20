FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Сеть до npm registry с этого хоста нестабильна (часть запросов виснет
# и уходит в таймаут). Кэш-mount позволяет повторным сборкам переиспользовать
# уже скачанные пакеты и не начинать install с нуля при сетевых сбоях.
RUN --mount=type=cache,target=/root/.npm npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
