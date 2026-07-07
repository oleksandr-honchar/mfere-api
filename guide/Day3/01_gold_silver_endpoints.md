## Day 3: Feature Implementation (The Core)
*Focus: Querying the Gold/Silver matrix.*

## **Gold/Silver Endpoints**

### Gold-шар: Feature Store для моделей
Ендпойнт GET /api/v1/gold/:ticker повертає готові до використання фічі для машинного навчання.
```TypeScript
// src/routes/gold.ts
import { FastifyInstance } from 'fastify';
import { TickerParamsSchema } from '../schemas/tickerSchema';
import { prisma } from '../lib/prisma';

export async function goldRoutes(fastify: FastifyInstance) {
  fastify.get('/:ticker', async (request, reply) => {
    try {
      // 1. Валідація
      const { ticker } = TickerParamsSchema.parse(request.params);
      
      // 2. Пошук компанії
      const company = await prisma.dim_company.findFirst({
        where: { ticker: ticker.toUpperCase() },
        select: { company_id: true }
      });

      if (!company) {
        return reply.status(404).send({ error: `Компанію з тікером ${ticker} не знайдено` });
      }

      // 3. Запит до факторів
      const factors = await prisma.factor_dataset.findMany({
        where: { company_id: company.company_id },
        orderBy: { date: 'desc' },
        take: 60,
      });

    return { 
      success: true, 
      ticker: ticker.toUpperCase(), 
      // Використовуємо .map, щоб перетворити BigInt на Number або String
      data: factors.map(item => ({
        ...item,
        company_id: Number(item.company_id) // Перетворюємо 219n на 219
      }))
    };
    } catch (error) {
      console.error("Помилка в роуті /factors/:ticker:", error); // Цей рядок покаже реальну помилку в терміналі
      return reply.status(500).send({ error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown' });
    }
  });
}
```

### 2. Silver-шар: Агрегація концептів
Ендпойнт GET /api/v1/silver/:ticker збирає контекстні дані з фундаментальних, цінових та макроекономічних джерел.
```Typescript
// src/routes/silver.ts
import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

// Допоміжна функція для очищення BigInt
const serializeBigInt = (obj: any) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? Number(value) : value
    )
  );
};

export async function silverRoutes(fastify: FastifyInstance) {
  fastify.get('/:ticker', async (request, reply) => {
    const { ticker } = z.object({ ticker: z.string() }).parse(request.params);

    const company = await prisma.dim_company.findFirst({
      where: { ticker: ticker.toUpperCase() },
      select: { company_id: true }
    });

    if (!company) return reply.status(404).send({ error: 'Компанію не знайдено' });

    const [fundamentals, prices, macro] = await Promise.all([
      prisma.fact_fundamentals.findMany({
        where: { company_id: company.company_id },
        take: 4
      }),
      prisma.fact_prices.findMany({
        where: { company_id: company.company_id },
        take: 60
      }),
      prisma.fact_macro.findMany({ take: 60 })
    ]);

    // Використовуємо функцію серіалізації для всього об'єкта
    return serializeBigInt({
      ticker: ticker.toUpperCase(),
      concepts: {
        valuation: fundamentals,
        price_dynamics: prices,
        macro_environment: macro
      }
    });
  });
}
```

### 3. Реєстрація роутів (server.ts)
Для того, щоб сервіси були доступні за адресами /api/v1/gold/:ticker та /api/v1/silver/:ticker, зареєструй їх у своєму головному файлі:
```TypeScript
import { goldRoutes } from './routes/gold';
import { silverRoutes } from './routes/silver';

// Реєстрація модулів
server.register(goldRoutes, { prefix: '/api/v1/gold' });
server.register(silverRoutes, { prefix: '/api/v1/silver' });
```
