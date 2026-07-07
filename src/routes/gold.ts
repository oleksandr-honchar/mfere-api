import { FastifyInstance } from 'fastify';
import { TickerParamsSchema } from '../schemas/tickerSchema';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

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

      const { days, page = 1 } = z.object({ 
        days: z.coerce.number().default(60),
        page: z.coerce.number().default(1) 
      }).parse(request.query);

      // 3. Запит до факторів
      const factors = await prisma.factor_dataset.findMany({
        where: { company_id: company.company_id },
        orderBy: { date: 'desc' },
        take: days,
        skip: (page - 1) * days
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