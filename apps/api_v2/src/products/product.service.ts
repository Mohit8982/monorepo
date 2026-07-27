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
    return product;
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
}
