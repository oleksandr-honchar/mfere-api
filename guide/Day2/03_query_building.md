## Day 2: Prisma ORM Integration
*Focus: Connecting to `mfere_prod`.*

## **Query Building**
## Крок 1: Створи файл `src/lib/prisma.ts` для експорту клієнта.

Створи цей файл у своєму проєкті. Він буде відповідати за правильну ініціалізацію PrismaClient з урахуванням драйвер-адаптера для pg.

Додай у src/lib/prisma.ts наступний код:
```TypeScript
import { PrismaClient } from '../../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
```

## Крок 2: Написання запитів до analytics.factor_dataset з WHERE та ORDER BY.
Створи файл src/services/analytics.ts. Ми напишемо функцію, яка вибирає дані з урахуванням фільтрації та сортування.
```TypeScript
import { prisma } from '../lib/prisma';

/**
 * Отримуємо фактори для конкретної компанії за певний період.
 * Сортуємо по даті (останні зверху).
 */
export async function getCompanyFactors(companyId: bigint, limit: number = 60) {
  return await prisma.factor_dataset.findMany({
    where: {
      company_id: companyId,
    },
    orderBy: {
      date: 'desc', // Останні дані спочатку
    },
    take: limit,
  });
}

/**
 * Приклад складнішого запиту з вибіркою конкретних полів (Select)
 */
export async function getLatestMoments(companyId: bigint) {
  return await prisma.factor_dataset.findFirst({
    where: {
      company_id: companyId,
    },
    orderBy: {
      date: 'desc',
    },
    select: {
      date: true,
      mom_1m: true,
      mom_3m: true,
      mom_6m: true,
      mom_12m: true,
    }
  });
}
```
Оскільки в тебе вже є src/services/analytics.ts (або ти можеш створити його зараз), давай напишемо запит, який використовує твої знання про 60 торгових днів.

Примітка: Пам'ятай, що 60 торгових днів — це не 60 календарних днів. Якщо тобі потрібно отримати дані за останні 60 торгових днів, запит має бути динамічним.

Ось шаблон, який ти можеш використовувати для аналітичних запитів:
```TypeScript
import { prisma } from '../lib/prisma';

// Отримання останніх 60 торгових днів для компанії
export async function getFactorHistory(companyId: bigint) {
  return await prisma.factor_dataset.findMany({
    where: {
      company_id: companyId,
    },
    orderBy: {
      date: 'desc', // Останні дати зверху
    },
    take: 60, // Обмежуємо саме 60 записами (припускаючи, що таблиця містить лише торгові дні)
  });
}
```