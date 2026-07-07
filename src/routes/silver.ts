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
    const { page, limit } = z.object({
      page: z.coerce.number().default(1),
      limit: z.coerce.number().default(60)
    }).parse(request.query);

    const skip = (page - 1) * limit;

    const company = await prisma.dim_company.findFirst({
      where: { ticker: ticker.toUpperCase() },
      select: { company_id: true }
    });

    if (!company) return reply.status(404).send({ error: 'Компанію не знайдено' });

    // 2. Використання skip та take у запитах
    // Примітка: macro зазвичай не прив'язаний до компанії, тому його пагінація 
    // може працювати незалежно від company_id
    const [fundamentals, prices] = await Promise.all([
      prisma.fact_fundamentals.findMany({
        where: { company_id: company.company_id },
        orderBy: { filing_date: 'desc' },
        skip: (page - 1) * 4,
        take: 4
      }),
      prisma.fact_prices.findMany({
        where: { company_id: company.company_id },
        orderBy: { trade_date: 'desc' },
        skip: skip,
        take: limit
      })
    ]);

    // Використовуємо функцію серіалізації для всього об'єкта
    return serializeBigInt({
      ticker: ticker.toUpperCase(),
      pagination: { page, limit },
      concepts: {
        valuation: fundamentals,
        price_dynamics: prices
      }
    });
  });
}