import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  "Fashion",
  "Mobiles",
  "Electronics",
  "Appliances",
  "Home",
  "Beauty",
  "Food",
  "Auto",
  "2 Wheelers",
  "Toys",
];

async function main() {
  for (const name of categories) {
    await prisma.category.upsert({
      where: {
        name,
      },
      update: {},
      create: {
        name,
      },
    });
  }

  console.log("Categories seeded successfully");
}

main()
  .catch((error) => {
    console.error(error);
    (globalThis as any).process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
