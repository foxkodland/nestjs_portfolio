# --- Этап 1: Сборка приложения ---
FROM node:24-alpine AS builder
WORKDIR /app

# Зависимости
COPY package*.json ./
RUN npm install --no-audit --progress=false

# Весь проект
COPY . .
RUN npx prisma contract emit
RUN npm run build


# --- Этап 2: Финальный легковесный образ ---
FROM node:24-alpine
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# для миграций
COPY --from=builder /app/src/prisma ./src/prisma
COPY --from=builder /app/prisma*.config.ts ./

# Порт
EXPOSE 3000

# Миграции бд и запуск приложения
CMD npx prisma db update && node dist/main
