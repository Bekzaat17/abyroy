FROM node:22-alpine AS builder

WORKDIR /app

# Проект использует pnpm (см. pnpm-lock.yaml) — установка через frozen-lockfile
# детерминированная и требует на порядок меньше запросов к registry, чем
# npm install без lock-файла (тот резолвил всё дерево зависимостей заново
# при каждой сборке — это и превращало обычную сборку в многоминутное "зависание").
#
# pnpm ставим НЕ через `corepack enable` — на этом хосте corepack (Node/undici,
# бьёт параллельно сразу по всем resolved-адресам registry.npmjs.org) стабильно
# словит ETIMEDOUT по всем адресам за секунды, даже когда обычный wget/curl к
# тому же registry работает нормально (проверено вручную десятки раз подряд).
# Поэтому качаем pnpm напрямую тем же простым wget.
ARG PNPM_VERSION=11.22.0
RUN wget -qT 20 -O /tmp/pnpm.tgz "https://registry.npmjs.org/pnpm/-/pnpm-${PNPM_VERSION}.tgz" \
    && mkdir -p /opt/pnpm \
    && tar -xzf /tmp/pnpm.tgz -C /opt/pnpm --strip-components=1 \
    && rm /tmp/pnpm.tgz \
    && chmod +x /opt/pnpm/bin/pnpm.cjs \
    && ln -s /opt/pnpm/bin/pnpm.cjs /usr/local/bin/pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Сама установка зависимостей — тоже через wget-совместимую сеть, но на всякий
# случай (если конкретно в этот момент сеть коротко "залипнет") ретраим.
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store sh -c ' \
    n=0; \
    until pnpm install --frozen-lockfile; do \
      n=$((n+1)); \
      if [ "$n" -ge 5 ]; then echo "pnpm install: сдался после $n попыток" >&2; exit 1; fi; \
      echo "pnpm install: попытка $n не удалась, повтор через 5с..." >&2; \
      sleep 5; \
    done'

COPY . .

RUN pnpm build

FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
