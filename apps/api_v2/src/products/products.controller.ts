import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  BadRequestException,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { JwtGuard } from "../auth/guards/jwt.guard";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";

@ApiTags("products")
@Controller("products")
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  async findAll(@Query("page") page?: string, @Query("limit") limit?: string) {
    const data = await this.productService.findAll(
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 10,
    );

    return data;
  }

  @Get("/category")
  async getProductsByCategory(
    @Query("category") category?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ) {
    if (!category) {
      throw new BadRequestException("category query param is required");
    }

    return this.productService.getProductsByCategory(
      category,
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 10,
    );
  }

  @Get("/search")
  async search(
    @Query("q") q?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ) {
    console.log("query::", q);
    if (!q) {
      throw new BadRequestException("q query param is required");
    }

    return this.productService.search(
      q,
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 10,
    );
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.productService.findOne(parseInt(id));
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put(":id")
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async update(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(parseInt(id), updateProductDto);
  }

  @Delete(":id")
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  async delete(@Param("id") id: string) {
    return this.productService.delete(parseInt(id));
  }
}
