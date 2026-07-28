import { Injectable, NotFoundException } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { productData } from "../data/data";

@Injectable()
export class ProductService {
  private productsFile = path.join(__dirname, "../data/products-1000.json");
  private products = this.loadProducts();

  private loadProducts() {
    try {
      return productData;
    } catch (error) {
      console.log("Products file not found, initializing with empty array");
      return [];
    }
  }

  private saveProducts() {
    fs.writeFileSync(this.productsFile, JSON.stringify(this.products, null, 2));
  }

  async findAll(page?: number, limit?: number) {
    if (page && limit) {
      const skip = (page - 1) * limit;
      return {
        data: this.products.slice(skip, skip + limit),
        total: this.products.length,
        page,
        limit,
      };
    }
    return this.products;
  }

  async findOne(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return this.transformProductData(product);
  }

  async create(createProductDto: CreateProductDto) {
    const newProduct = {
      id: 1,
      name: "Levi's Fashion Product 1",
      brand: "Levi's",
      price: 113460,
      image: "https://picsum.photos/seed/1/400/400",
      stock: 120,
      rating: 3.6,
      reviews: 2285,
      category: "Fashion",
      description: "Premium fashion product from Levi's.",
      specifications: {
        warranty: "2 Year",
        color: "Black",
        model: "M0001",
      },
    };
    this.products.push(newProduct);
    this.saveProducts();
    return newProduct;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    const updatedProduct = { ...product, ...updateProductDto };
    const index = this.products.findIndex((p) => p.id === id);
    this.products[index] = updatedProduct;
    this.saveProducts();
    return updatedProduct;
  }

  async delete(id: number) {
    const product = await this.findOne(id);
    this.products = this.products.filter((p) => p.id !== id);
    this.saveProducts();
    return { message: `Product ${id} deleted successfully`, product };
  }

  async getProductsByCategory(category: string, page?: number, limit?: number) {
    const filteredProducts = this.products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase(),
    );

    console.log(
      `Filtered products for category "${category}":`,
      filteredProducts.length,
      page,
      limit,
    );

    if (page && limit) {
      const skip = (page - 1) * limit;
      return {
        data: filteredProducts.slice(skip, skip + limit),
        total: filteredProducts.length,
        page,
        limit,
      };
    }

    console.log(
      `Returning all products for category "${category}" without pagination`,
    );

    return filteredProducts;
  }

  async search(q: string, page: number = 1, limit: number = 10) {
    const searchText = q.toLowerCase();
    const filtered = this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchText) ||
        p.category.toLowerCase().includes(searchText) ||
        p.brand.toLocaleLowerCase().includes(searchText),
    );

    const start = (page - 1) * limit;
    return {
      data: filtered.slice(start, start + limit),
      total: filtered.length,
      page,
      limit,
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
