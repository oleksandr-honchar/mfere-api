import { prisma } from './lib/prisma';

async function checkTicker() {
  const ticker = 'INTC';
  const company = await prisma.dim_company.findFirst({
    where: { ticker: ticker }
  });
  console.log("Результат пошуку INTC:", company);
}

checkTicker();