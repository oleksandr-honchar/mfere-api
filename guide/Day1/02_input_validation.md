## Day 1: API Foundation & Zod Validation
*Focus: API structure and input safety.*

## **Input Validation**
## Крок 1: Встанови `zod`.

### 1. Встановлення Zod
Виконай у терміналі:
```Bash
npm install zod
```

### 2. Чому Zod важливий для твого API?
У світі Node.js ми не можемо покладатися на те, що клієнт (фронтенд або інший сервіс) надішле правильні типи даних. Zod дозволяє нам:
1. Валідувати параметри: Перевірити довжину тикера, наявність дати або тип показника.
2. Типізувати дані: Zod автоматично виведе TypeScript-типи, які ти зможеш використовувати в коді.

### 3. Практична реалізація (Приклад для /factors)
Створи файл src/schemas/tickerSchema.ts:
```TypeScript
import { z } from 'zod';

export const TickerParamsSchema = z.object({
  ticker: z.string().min(1).max(5).toUpperCase(), // Валідація: від 1 до 5 символів, верхній регістр
});

// Автоматично створюємо TypeScript тип на основі схеми
export type TickerParams = z.infer<typeof TickerParamsSchema>;
```
Тепер застосуй це у своєму роуті src/routes/factors.ts:
```TypeScript
import { FastifyInstance } from 'fastify';
import { TickerParamsSchema } from '../schemas/tickerSchema';

export async function factorsRoutes(fastify: FastifyInstance) {
  fastify.get('/:ticker', async (request, reply) => {
    // Валідуємо параметри, що прийшли від клієнта
    const { ticker } = TickerParamsSchema.parse(request.params);
    
    return { 
      message: `Fetching data for ${ticker}`,
      ticker 
    };
  });
}
```
Як це працює:
- Якщо користувач звернеться до /api/v1/factors/apple-inc-long-ticker, Zod автоматично викине помилку.
- Оскільки ми вже налаштували setErrorHandler у server.ts на попередньому кроці, користувач отримає охайну відповідь 400 Bad Request замість краху сервера.

## Крок 2: Створи схеми валідації для `ticker` (наприклад, перевірка, що це рядок з 1-5 символів).

### 1. Створи папку для схем, якщо її ще немає:
```Bash
mkdir src/schemas
```

### 2. Створи файл src/schemas/tickerSchema.ts і встав туди наступний код:
```TypeScript
import { z } from 'zod';

// Схема валідації тикера
export const TickerParamsSchema = z.object({
  ticker: z.string()
    .min(1, "Ticker must be at least 1 character")
    .max(5, "Ticker must be at most 5 characters")
    .transform((val) => val.toUpperCase()) // Автоматично перетворюємо у верхній регістр
});

// Тип для використання у TypeScript
export type TickerParams = z.infer<typeof TickerParamsSchema>;
```

Як це інтегрувати в роут:
Тепер у своєму файлі роутів (наприклад, src/routes/factors.ts) ти можеш використовувати цю схему для перевірки request.params:
```TypeScript
import { FastifyInstance } from 'fastify';
import { TickerParamsSchema } from '../schemas/ticker.schema';

export async function factorsRoutes(fastify: FastifyInstance) {
  fastify.get('/:ticker', async (request, reply) => {
    // Валідація через Zod
    // parse() викине помилку, якщо дані не проходять валідацію
    const { ticker } = TickerParamsSchema.parse(request.params);
    
    return { success: true, ticker };
  });
}
```
Чому ми додали .transform()?

Метод .transform((val) => val.toUpperCase()) — це дуже корисна річ у Zod. Навіть якщо користувач введе aapl (маленькими літерами), Zod автоматично перетворить це на AAPL ще до того, як дані потраплять у твою бізнес-логіку або запит до БД.