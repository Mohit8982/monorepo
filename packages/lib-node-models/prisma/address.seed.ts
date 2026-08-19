import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addresses = [
  {
    id: 1,
    userId: 1,
    name: "Mohit",
    phone: "9876543210",
    addressLine1: "123 MG Road",
    addressLine2: "Near Central Mall",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "452001",
    country: "India",
    isDefault: true,
  },
  {
    id: 2,
    userId: 1,
    name: "Mohit",
    phone: "9876543210",
    addressLine1: "45 Vijay Nagar",
    addressLine2: null,
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "452010",
    country: "India",
    isDefault: false,
  },
  {
    id: 3,
    userId: 2,
    name: "Admin User",
    phone: "9876543211",
    addressLine1: "10 Koramangala",
    addressLine2: "5th Block",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560095",
    country: "India",
    isDefault: true,
  },
  {
    id: 4,
    userId: 3,
    name: "John Doe",
    phone: "9876543212",
    addressLine1: "22 Park Street",
    addressLine2: null,
    city: "Kolkata",
    state: "West Bengal",
    postalCode: "700016",
    country: "India",
    isDefault: true,
  },
  {
    id: 5,
    userId: 4,
    name: "Guest User",
    phone: "9876543213",
    addressLine1: "78 Anna Salai",
    addressLine2: "Teynampet",
    city: "Chennai",
    state: "Tamil Nadu",
    postalCode: "600018",
    country: "India",
    isDefault: true,
  },
];

async function main() {
  for (const address of addresses) {
    await prisma.address.upsert({
      where: {
        id: address.id,
      },
      update: {
        userId: address.userId,
        name: address.name,
        phone: address.phone,
        addressLine1: address.addressLine1,
        addressLine2: address.addressLine2,
        city: address.city,
        state: address.state,
        postalCode: address.postalCode,
        country: address.country,
        isDefault: address.isDefault,
      },
      create: address,
    });
  }

  console.log(`${addresses.length} addresses seeded successfully`);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
