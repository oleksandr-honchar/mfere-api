# Day 1: API Foundation & Zod Validation
*Focus: API structure and input safety.*

## **Setup & Structuring**
## Крок 1: Створи папку `src/routes` та перенеси туди логіку ендпойнтів.

### 1. Створення структури
Виконай у терміналі:
```bash
mkdir src/routes
touch src/routes/health.ts
```

### 2. Опис роуту (src/routes/health.ts)
Це окремий файл, який відповідає лише за перевірку стану сервера. Використовуємо FastifyInstance для типізації:
```TypeScript
import { FastifyInstance } from 'fastify';

export async function healthRoutes(fastify: FastifyInstance) {
  fastify.get('/ping', async (request, reply) => {
    return { status: 'ok', message: 'MFERE API is running!' };
  });
}
```

### 3. Підключення в src/server.ts
Тепер очистимо основний файл сервера, залишивши там тільки конфігурацію:
```TypeScript
import Fastify from 'fastify';
import { healthRoutes } from './routes/health';

const fastify = Fastify({ logger: true });

// Реєстрація наших роутів
fastify.register(healthRoutes, { prefix: '/api/v1' });

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
```

## Крок 2: Налаштуй `fastify-swagger` для візуалізації API (це критично для Backend-розробника).

### 1. Встановлення пакетів
Виконай у терміналі:
```bash
npm install @fastify/swagger @fastify/swagger-ui
```

### 2. Реєстрація в src/server.ts
Додай ці реєстрації в головний файл сервера до реєстрації роутів:
```TypeScript
import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

const fastify = Fastify({ logger: true });

// 1. Реєстрація Swagger
fastify.register(swagger, {
  openapi: {
    info: {
      title: 'MFERE API',
      description: 'API для доступу до аналітичних даних MFERE',
      version: '1.0.0',
    },
  },
});

// 2. Реєстрація Swagger UI
fastify.register(swaggerUi, {
  routePrefix: '/docs', // Документація буде доступна за адресою http://localhost:3000/docs
});

// ... далі йде реєстрація твоїх роутів (healthRoutes тощо)
```

### 3. Автоматизація документації для роутів
Тепер, коли ти будеш додавати нові роути, наприклад, у src/routes/factors.ts, ти можеш додавати опис прямо в конфігурацію роуту:
```TypeScript
// Приклад в src/routes/factors.ts
fastify.get('/:ticker', {
  schema: {
    description: 'Отримання факторів для компанії',
    tags: ['Factors'],
    params: {
      type: 'object',
      properties: {
        ticker: { type: 'string', description: 'Тикер компанії (напр. AAPL)' }
      }
    }
  }
}, async (request, reply) => {
  // логіка...
});
```

### 4. Як це використовувати:
1. Запусти сервер npm run dev.
2. Перейди в браузері за адресою: http://localhost:3000/docs.