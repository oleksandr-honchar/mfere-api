import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { ZodError } from 'zod';
import { FastifyError } from 'fastify'; // Імпортуємо інтерфейс помилки
import { healthRoutes } from './routes/health';
import { goldRoutes } from './routes/gold';
import { silverRoutes } from './routes/silver';
import { macroRoutes } from './routes/macro';

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

// 3. Реєстрація роутів
fastify.register(healthRoutes, { prefix: '/api/v1' });
fastify.register(goldRoutes, { prefix: '/api/v1/gold' });
fastify.register(silverRoutes, { prefix: '/api/v1/silver' });
fastify.register(macroRoutes, { prefix: '/api/v1/macro' });

// 4. Глобальний обробник помилок
fastify.setErrorHandler((error, request, reply) => {
  // 1. Обробка Zod помилок (Validation)
  if (error instanceof ZodError) {
    return reply.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Validation failed',
      // Тепер TypeScript зрозуміє, що 'error' - це ZodError, і дозволить доступ до 'issues'
      details: error.issues.map(err => ({
        path: err.path,
        message: err.message
      }))
    });
  }

  // 2. Обробка помилок Fastify (у тому числі 404)
  const fastifyError = error as FastifyError;

  if (fastifyError.statusCode === 404) {
    return reply.status(404).send({
      statusCode: 404,
      error: 'Not Found',
      message: fastifyError.message
    });
  }

  // 3. Логування та 500 помилка
  request.log.error(error);
  reply.status(500).send({
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'An unexpected error occurred'
  });
});

const start = async () => {
  try {
    // Чекаємо, поки всі плагіни зареєструються
    await fastify.ready();
    
    // Тепер можна виводити роути
    console.log(fastify.printRoutes());
    
    await fastify.listen({ port: 3000 });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();