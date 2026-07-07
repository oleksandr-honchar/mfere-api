# 4-Day MFERE API Roadmap: From Server to Production

# Етап 0: Ініціалізація та запуск (Commands Checklist)

Цей крок перетворює порожню папку на робоче середовище Backend-сервісу.

### 1. Ініціалізація проєкту
```bash
# Створюємо папку
mkdir mfere-api
cd mfere-api

# Ініціалізуємо npm (створює package.json)
npm init -y
```

### 2. Встановлення залежностей
```bash
# Продакшн залежності
npm install fastify zod

# Розробницькі залежності
npm install typescript ts-node @types/node ts-node-dev --save-dev
```

### 3. Конфігурація TypeScript (tsconfig.json)
Створи файл tsconfig.json у корені проєкту і встав туди:
```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### 4. Налаштування скриптів (package.json)
Відкрий package.json і заміни блок "scripts" на цей:
```
"scripts": {
  "dev": "ts-node-dev --respawn src/server.ts",
  "start": "node dist/server.js",
  "build": "tsc"
}
```

### 5. Створення сервера
```bash
# Створюємо папку для коду
mkdir src

# Створюємо файл сервера (src/server.ts)
touch src/server.ts
```

Додай цей код у src/server.ts:
```
import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/ping', async () => ({ status: 'ok' }));

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log('Server running on http://localhost:3000');
});
```

### 6. Запуск
```bash
npm run dev
```

## Day 1: API Foundation & Zod Validation
*Focus: API structure and input safety.*

- **0:00 - 1:30**: **Setup & Structuring**. 
  - Створи папку `src/routes` та перенеси туди логіку ендпоінтів.
  - Налаштуй `fastify-swagger` для візуалізації API (це критично для Backend-розробника).
- **1:30 - 3:00**: **Input Validation**. 
  - Встанови `zod`. 
  - Створи схеми валідації для `ticker` (наприклад, перевірка, що це рядок з 1-5 символів).
- **3:00 - 4:00**: **Error Handling**. 
  - Напиши глобальний обробник помилок (`fastify.setErrorHandler`), щоб API не "падало", а повертало клієнту красивий JSON з описом помилки (400, 404, 500).

## Day 2: Prisma ORM Integration
*Focus: Connecting to `mfere_prod`.*

- **0:00 - 1:30**: **Prisma Setup**.
  - `npx prisma init` (якщо ще не зробив).
  - Налаштуй `DATABASE_URL` у `.env`.
- **1:30 - 3:00**: **Database Mapping**.
  - `npx prisma db pull`.
  - `npx prisma generate` (це створить типи для твоїх Silver/Gold таблиць).
- **3:00 - 4:00**: **Query Building**.
  - Створи файл `src/lib/prisma.ts` для експорту клієнта.
  - Напиши перші запити до `Silver` таблиць з `WHERE` та `ORDER BY`.

## Day 3: Feature Implementation (The Core)
*Focus: Querying the Gold/Silver matrix.*

- **0:00 - 2:00**: **Gold/Silver Endpoints**.
  - Gold-шар: Feature Store для моделей - створення eндпойнта GET /api/v1/gold/:ticker, який повертає готові до використання фічі для машинного навчання.
  - Silver-шар: Агрегація концептів - створення eндпойнта GET /api/v1/silver/:ticker, який збирає контекстні дані з фундаментальних, цінових та макроекономічних джерел.
- **2:00 - 4:00**: **Pagination & Filtering**.
  - Додай `limit` та `offset` (або `cursor`) у запити, щоб API не повертало мільйони рядків за раз.

## Day 4: Docker & Quality Assurance
*Focus: Production readiness.*

- **0:00 - 1:30**: **Unit Tests**.
  - Встанови `jest` та `ts-jest`.
  - Напиши тест для перевірки, що твій ендпоінт `/factors/:ticker` повертає статус 200 та коректні дані.
- **1:30 - 3:00**: **Dockerization**.
  - Створи `Dockerfile` (multi-stage build).
  - Створи `docker-compose.yml`, щоб піднімати сервер та базу одним кліком.
- **3:00 - 4:00**: **Final Documentation**.
  - Перевір, що у Swagger (Swagger UI) відображаються всі твої ендпоінти.

---

## Checklist для ініціалізації (що вже зроблено):
1. [x] Створено репозиторій та `npm init`.
2. [x] Налаштовано `tsconfig.json`.
3. [x] Встановлено `fastify` та `typescript`.
4. [x] Створено файл `src/server.ts` та запущено ендпоінт `/ping`.

**Наступний крок для вас сьогодні:**
Оскільки "ping" вже працює, я рекомендую почати з **Day 1 (частина про структуру папок)**. 
Почніть з того, щоб винести роути у окремий файл. Це зробить ваш код "дорослим".

Потрібен приклад того, як правильно розбити код на `routes` (щоб `server.ts` не був величезним)?