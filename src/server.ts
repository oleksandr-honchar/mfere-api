import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/ping', async () => ({ status: 'ok' }));

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log('Server running on http://localhost:3000');
});