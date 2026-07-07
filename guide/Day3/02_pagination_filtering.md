## Day 3: Feature Implementation (The Core)
*Focus: Querying the Gold/Silver matrix.*

## **Pagination & Filtering**

### 1. Додавання пагінації у Gold-шар (gold.ts)
Для Gold-шару найкраще використовувати параметр take (кількість) та skip (зміщення).
```TypeScript
// src/routes/gold.ts
// ... всередині запиту ...
const { days, page = 1 } = z.object({ 
  days: z.coerce.number().default(60),
  page: z.coerce.number().default(1) 
}).parse(request.query);

const factors = await prisma.factor_dataset.findMany({
  where: { company_id: company.company_id },
  orderBy: { date: 'desc' },
  take: days,
  skip: (page - 1) * days, // Пропускаємо попередні сторінки
});
```

### 2. Додавання курсорної пагінації у Silver-шар (silver.ts)
Для великих масивів даних (як price_dynamics або macro) краще використовувати Cursor-based pagination, оскільки вона ефективніша за skip.
```TypeScript
// src/routes/silver.ts
// Додай параметр cursor в запит до цін
const { cursor } = z.object({ cursor: z.coerce.number().optional() }).parse(request.query);

const prices = await prisma.fact_prices.findMany({
  where: { 
    company_id: company.company_id,
    // Якщо передано cursor (id останнього запису), беремо наступні
    ...(cursor && { id: { lt: cursor } }) 
  },
  orderBy: { id: 'desc' },
  take: 60,
});
```
