# MFERE API Service

Backend-сервіс на Node.js для доступу до аналітичних даних системи MFERE. Цей сервіс надає RESTful API для взаємодії з шарами Silver та Gold бази даних `mfere_prod`.

## 🚀 Основні можливості
- **High-Performance API**: Побудовано на Fastify для мінімальної затримки.
- **Type Safety**: Повна підтримка TypeScript та валідація даних через Zod.
- **ORM Integration**: Використання Prisma для безпечної роботи з PostgreSQL.
- **Documentation**: Swagger/OpenAPI інтеграція для тестування ендпоінтів.

## 🛠 Технологічний стек
- **Runtime**: Node.js
- **Framework**: Fastify
- **Database**: PostgreSQL (via Prisma ORM)
- **Validation**: Zod

## 📦 Встановлення та запуск

### 1. Клонування
```bash
git clone [https://github.com/your-username/mfere-api.git](https://github.com/your-username/mfere-api.git)
cd mfere-api