import { PrismaClient } from "@prisma/client";
import { productData } from "./data/data";

const prisma = new PrismaClient();

async function main() {
  // Get all categories
  const categories = await prisma.category.findMany();

  // Convert:
  //
  // Fashion -> 1
  // Mobiles -> 2
  // Electronics -> 3
  //
  // etc.
  const categoryMap = new Map(
    categories.map((category) => [category.name, category.id]),
  );

  const product = productData.map(
    (product: {
      category: string;
      name: any;
      id: any;
      brand: any;
      price: any;
      image: any;
      stock: any;
      rating: any;
      reviews: any;
      description: any;
      specifications: any;
    }) => {
      const categoryId = categoryMap.get(product.category);

      if (!categoryId) {
        throw new Error(
          `Category "${product.category}" not found for product "${product.name}"`,
        );
      }

      return {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        stock: product.stock,
        rating: product.rating,
        reviews: product.reviews,
        description: product.description,
        specifications: product.specifications,
        categoryId,
      };
    },
  );

  await prisma.product.createMany({
    data: product,
    skipDuplicates: true,
  });

  console.log(`${productData.length} products seeded successfully`);
}

main()
  .catch((error) => {
    console.error(error);
    (globalThis as any).process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
