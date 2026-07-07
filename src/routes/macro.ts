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

export async function macroRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    const { page, limit } = z.object({
      page: z.coerce.number().default(1),
      limit: z.coerce.number().default(60)
    }).parse(request.query);

    const macroData = await prisma.fact_macro.findMany({
      orderBy: { date: 'desc' },
      skip: (page - 1) * limit,
      take: limit
    });

    return serializeBigInt({
      data: macroData
    });
  });
}