import { Component, inject, signal } from '@angular/core';
import { CartItems } from '../../components/cart-items/cart-items';
import { Auth } from '../../core/services/auth';
import { EmptyCart } from '../../components/empty-cart/empty-cart';
import { CartService } from '../../core/services/cart-service';
import { RouterLink } from '@angular/router';
import { Modal } from '../../components/modal/modal';
@Component({
  selector: 'app-cart',
  imports: [CartItems, EmptyCart, RouterLink, Modal],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  auth = inject(Auth);
  cartService = inject(CartService);


  constructor() {
    this.cartService.loadCart();
  }
}
