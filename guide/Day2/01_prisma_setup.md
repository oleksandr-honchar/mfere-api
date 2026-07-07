## Day 2: Prisma ORM Integration
*Focus: Connecting to `mfere_prod`.*

## **Prisma Setup**
## Крок 1:  `npx prisma init` (якщо ще не зробив).

Виконай ці команди у терміналі (у корені проєкту mfere-api):
```Bash
# Встановлюємо Prisma CLI та клієнт
npm install prisma @prisma/client --save-dev

# Ініціалізуємо Prisma

```
Що це зробить:
1. prisma/schema.prisma: Створить файл конфігурації. Саме тут ми опишемо, як виглядають твої таблиці.
2. .env: Створить файл для зберігання секретних даних (адреса БД, логін, пароль).
3. Автоматизація: Prisma підготує середовище для "витягування" (pull) структури бази даних.

## Крок 2: Налаштуй `DATABASE_URL` у `.env`.
Відкрий створений файл .env і вкажи дані для підключення до mfere_prod:
```
DATABASE_URL="postgresql://ВАШ_ЛОГІН:ВАШ_ПАРОЛЬ@localhost:5432/mfere_prod?schema=public"
```
Примітка: Якщо у тебе база використовує схему silver або gold, заміни schema=public на schema=silver (або ту, яка потрібна зараз).

Що далі?
Як тільки ти натиснеш "Enter" після npx prisma init, в консолі з'явиться інструкція від Prisma.