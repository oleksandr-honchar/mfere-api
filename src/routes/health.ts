import { FastifyInstance } from 'fastify';

export async function healthRoutes(fastify: FastifyInstance) {
  fastify.get('/ping', async (request, reply) => {
    return { status: 'ok', message: 'MFERE API is running!' };
  });
}