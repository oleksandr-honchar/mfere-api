import { prisma } from '../lib/prisma';

/**
 * Отримуємо фактори для конкретної компанії за певний період.
 * Сортуємо по даті (останні зверху).
 */
export async function getCompanyFactors(companyId: bigint, limit: number = 60) {
  return await prisma.factor_dataset.findMany({
    where: {
      company_id: companyId,
    },
    orderBy: {
      date: 'desc', // Останні дані спочатку
    },
    take: limit,
  });
}

/**
 * Приклад складнішого запиту з вибіркою конкретних полів (Select)
 */
export async function getLatestMoments(companyId: bigint) {
  return await prisma.factor_dataset.findFirst({
    where: {
      company_id: companyId,
    },
    orderBy: {
      date: 'desc',
    },
    select: {
      date: true,
      mom_1m: true,
      mom_3m: true,
      mom_6m: true,
      mom_12m: true,
    }
  });
}

// Отримання останніх 60 торгових днів для компанії
export async function getFactorHistory(companyId: bigint) {
  return await prisma.factor_dataset.findMany({
    where: {
      company_id: companyId,
    },
    orderBy: {
      date: 'desc', // Останні дати зверху
    },
    take: 60, // Обмежуємо саме 60 записами (припускаючи, що таблиця містить лише торгові дні)
  });
}