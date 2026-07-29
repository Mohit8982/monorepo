import {
  Controller,
  Get,
  Request,
  UseGuards,
} from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { JwtGuard } from "@/auth/guards/jwt.guard";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtGuard)
  @Get()
  getOrders(@Request() req: any) {
    const userId = req.user.id.toString();
    return this.ordersService.orders(userId);
  }
}
