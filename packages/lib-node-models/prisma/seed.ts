import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      id: 1,
      username: "mohit",
      name: "Mohit",
      email: "mohit@example.com",
    },
    {
      id: 2,
      username: "admin",
      name: "Admin User",
      email: "admin@example.com",
    },
    {
      id: 3,
      username: "john",
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 4,
      username: "guest",
      name: "Guest User",
      email: "guest@example.com",
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: {
        id: user.id,
      },
      update: {
        name: user.name,
        email: user.email,
      },
      create: user,
    });
  }

  console.log("Users seeded successfully");
}

main()
  .catch((error) => {
    console.error(error);
    (globalThis as any).process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
