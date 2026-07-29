import { Injectable } from "@nestjs/common";
import { ordersMap } from "@/cart/cart.service";

@Injectable()
export class OrdersService {
  orders(userId: string) {
    const orders = ordersMap.get(userId);
    if (!orders) {
      return [];
    } else {
      return orders;
    }
  }
}
