import { z } from 'zod';

// Схема валідації тикера
export const TickerParamsSchema = z.object({
  ticker: z.string()
    .min(1, "Ticker must be at least 1 character")
    .max(5, "Ticker must be at most 5 characters")
    .transform((val) => val.toUpperCase()) // Автоматично перетворюємо у верхній регістр
});

// Тип для використання у TypeScript
export type TickerParams = z.infer<typeof TickerParamsSchema>;