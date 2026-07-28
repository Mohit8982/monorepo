import { Injectable } from "@nestjs/common";
import { AddToCartDto } from "./dto/add-to-cart.dto";
import { productData } from "../data/data";

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
    const cart = cartStore.get(userId) ?? [];
    const cartItems = cart.map((item, index) => {
      const product = productData.find(
        (p) => String(p.id) === String(item.productId),
      );

      const price = product?.price ?? 0;
      const quantity = item.quantity;
      const subtotal = parseFloat((price * quantity).toFixed(2));

      return {
        id: index + 1,
        productId: Number(item.productId),
        title: product?.name ?? "Unknown Product",
        category: product?.category ?? "Unknown",
        image: product?.image ?? "",
        price,
        quantity,
        stock: product?.stock ?? 0,
        subtotal,
      };
    });

    const subtotal = parseFloat(
      cartItems.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2),
    );
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const shipping = 0;
    const tax = parseFloat((subtotal * 0.08).toFixed(2));
    const total = parseFloat((subtotal + shipping + tax).toFixed(2));

    return {
      cartItems,
      summary: {
        totalItems,
        subtotal,
        shipping,
        tax,
        total,
      },
    };
  }

  getCartCount(userId: string) {
    const cart = cartStore.get(userId) ?? [];
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
}
