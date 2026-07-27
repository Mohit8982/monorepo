import { Injectable } from "@nestjs/common";
import { AddToCartDto } from "./dto/add-to-cart.dto";

export type CartItem = {
  productId: string;
  quantity: number;
};

const cartStore = new Map<string, CartItem[]>();

@Injectable()
export class CartService {
  addToCart(userId: string, dto: AddToCartDto) {
    const cart = cartStore.get(userId) ?? [];
    const existing = cart.find((item) => item.productId === dto.productId);

    if (existing) {
      existing.quantity += dto.quantity;
    } else {
      cart.push({ productId: dto.productId, quantity: dto.quantity });
    }

    cartStore.set(userId, cart);
    return { userId, cart };
  }

  getCart(userId: string) {
    return cartStore.get(userId) ?? [];
  }
}
