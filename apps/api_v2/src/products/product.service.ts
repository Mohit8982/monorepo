import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "../prisma/prisma.service";
import { ProductSearchResponse } from "./types/product-response.type";

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page?: number, limit?: number): Promise<any[]> {
    if (page && limit) {
      const skip = (page - 1) * limit;
      const products = await this.prisma.product.findMany({
        skip: skip,
        take: limit,
      });
      return products;
    }
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return this.transformProductData(product);
  }

  async create(createProductDto: CreateProductDto) {
    return true;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    const updatedProduct = { ...product, ...updateProductDto };
    const { id: _, ...dataWithoutId } = updatedProduct;
    await this.prisma.product.update({
      where: { id: id },
      data: dataWithoutId,
    });
    return updatedProduct;
  }

  async delete(id: number) {
    await this.findOne(id);
    await this.prisma.product.delete({ where: { id: id } });
    return { message: `Product ${id} deleted successfully` };
  }

  async getProductsByCategory(
    category: string,
    page?: number,
    limit?: number,
  ): Promise<any> {
    const where = {
      category: {
        name: category,
      },
    };

    if (page && limit) {
      const skip = (page - 1) * limit;

      const [products, total] = await Promise.all([
        this.prisma.product.findMany({
          where,
          skip,
          take: limit,
          orderBy: {
            id: "asc",
          },
        }),

        this.prisma.product.count({
          where,
        }),
      ]);

      return {
        data: products,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    }

    return this.prisma.product.findMany({
      where,
      orderBy: {
        id: "asc",
      },
    });
  }

  async search(
    q: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<ProductSearchResponse> {
    const searchText = q.trim();

    const skip = (page - 1) * limit;

    const where = {
      OR: [
        {
          name: {
            contains: searchText,
          },
        },
        {
          brand: {
            contains: searchText,
          },
        },
      ],
    };

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          id: "asc",
        },
      }),

      this.prisma.product.count({
        where,
      }),
    ]);

    return {
      data: products,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async transformProductData(product: any) {
    // 1. Calculate realistic dynamic pricing
    const discountPercentage = Math.floor(Math.random() * 25) + 5; // Generates a 5% to 29% discount
    const originalPrice = Math.round(
      product.price / (1 - discountPercentage / 100),
    );

    // 2. Generate a gallery of related images based on the existing ID
    const images = [
      product.image,
      `https://picsum.photos/seed/${product.id}_1/400/400`,
      `https://picsum.photos/seed/${product.id}_2/400/400`,
      `https://picsum.photos/seed/${product.id}_3/400/400`,
    ];

    // 3. Create dynamic highlights and specs based on the product category
    let highlights = [];
    let extraSpecs = {};

    switch (product.category) {
      case "Mobiles":
        highlights = [
          "256 GB ROM",
          "17.43 cm (6.9 inch) Display",
          "Triple Camera Setup",
          "5G Enabled",
        ];
        extraSpecs = {
          storage: "256 GB",
          ram: "8 GB",
          display: "6.9 inch",
          battery: "5000 mAh",
          network: "5G",
        };
        break;
      case "Fashion":
        highlights = [
          "100% Premium Material",
          "Comfort Fit",
          "Machine Washable",
          "Latest Trend",
        ];
        extraSpecs = {
          fit: "Regular",
          material: "Cotton Blend",
          washCare: "Machine Wash",
          gender: "Unisex",
        };
        break;
      case "Electronics":
        highlights = [
          "Bluetooth 5.0",
          "Noise Cancellation",
          "Fast Charging",
          "High-Fidelity Audio",
        ];
        extraSpecs = {
          connectivity: "Wireless",
          batteryLife: "24 Hours",
          chargingPort: "Type-C",
          weight: "250g",
        };
        break;
      case "Home":
      case "Appliances":
        highlights = [
          "Energy Efficient",
          "Ergonomic Design",
          "Durable Build",
          "Easy Setup",
        ];
        extraSpecs = {
          powerRating: "5 Star",
          material: "Stainless Steel / Wood",
          voltage: "220V",
        };
        break;
      default:
        highlights = [
          "Premium Quality",
          "Highly Rated",
          "1 Year Warranty",
          "Best in Class",
        ];
        extraSpecs = {
          weight: "Varies",
          dimensions: "Standard",
          origin: "India",
        };
    }

    // 4. Return the newly formatted object
    return {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: originalPrice,
      discountPercentage: discountPercentage,
      image: product.image,
      images: images,
      stock: product.stock,
      rating: product.rating,
      reviews: product.reviews,
      category: product.category,
      description: product.description,
      offers: [
        "10% Instant Discount on HDFC Bank Cards",
        "Get extra ₹1,000 off on select cards",
        "No Cost EMI starting from ₹2,999/month",
        "Exchange Offer up to ₹15,000",
      ],
      delivery: {
        pincode: "452001",
        expected: "Tomorrow",
      },
      highlights: highlights,
      specifications: {
        ...product.specifications,
        ...extraSpecs,
      },
    };
  }
}
