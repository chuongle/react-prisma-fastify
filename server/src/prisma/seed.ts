import { categories, items, variants } from 'coffee-pos-mock-data';

import { Decimal } from '@prisma/client/runtime/library';

import { PrismaClient, Size } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({ data: categories.categories });
  await prisma.item.createMany({ data: items.items });
  const itemVariants = variants.variants.map(v => ({
    ...v,
    price: new Decimal(v.price),
    size: v.size as Size,
  }));
  await prisma.itemVariant.createMany({ data: itemVariants });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
