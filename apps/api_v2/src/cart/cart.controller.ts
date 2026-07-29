import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { JwtGuard } from "../auth/guards/jwt.guard";
import { CartService } from "./cart.service";
import { AddToCartDto } from "./dto/add-to-cart.dto";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtGuard)
  @Post()
  addToCart(@Request() req: any, @Body() addToCartDto: AddToCartDto) {
    const userId = this.extractUserId(req.user);
    return this.cartService.addToCart(userId, addToCartDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  getCart(@Request() req: any) {
    const userId = this.extractUserId(req.user);
    return this.cartService.getCart(userId);
  }

  @UseGuards(JwtGuard)
  @Get("/count")
  getCartCount(@Request() req: any) {
    const userId = this.extractUserId(req.user);
    return this.cartService.getCartCount(userId);
  }

  @Post("payment")
  @UseGuards(JwtGuard)
  async payment(@Request() req: any) {
    return this.cartService.processPayment(req.user.id.toString());
  }

  private extractUserId(user: any): string {
    return (
      user?.sub?.toString() ||
      user?.id?.toString() ||
      user?.email ||
      user?.username ||
      "unknown"
    );
  }
}
