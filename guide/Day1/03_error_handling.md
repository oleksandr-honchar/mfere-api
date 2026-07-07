## Day 1: API Foundation & Zod Validation
*Focus: API structure and input safety.*

## **Error Handling**
## Напиши глобальний обробник помилок (`fastify.setErrorHandler`), щоб API не "падало", а повертало клієнту красивий JSON з описом помилки (400, 404, 500).

Додай цей код у свій src/server.ts після реєстрації всіх роутів, але перед функцією start():
```TypeScript
import { ZodError } from 'zod';
import { FastifyError } from 'fastify'; // Імпортуємо інтерфейс помилки

fastify.setErrorHandler((error, request, reply) => {
  // 1. Обробка Zod помилок (Validation)
  if (error instanceof ZodError) {
    return reply.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Validation failed',
      details: error.issues.map(err => ({
        path: err.path,
        message: err.message
      }))
    });
  }

  // 2. Обробка помилок Fastify (включаючи 404)
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
```
Чому цей код крутий:

1. ZodError: Якщо користувач передасть неправильний тикер, API не впаде з 500-ю помилкою, а поверне зрозумілий JSON з детальним описом того, що саме не так (наприклад, "Ticker must be at least 1 character").

2. Логування: Ми зберігаємо логування критичних помилок (request.log.error(error)), щоб ти міг бачити їх у консолі сервера, але клієнту віддаємо безпечне повідомлення.

3. HTTP відповідність: Кожна помилка повертає правильний статус-код (400, 404 або 500).