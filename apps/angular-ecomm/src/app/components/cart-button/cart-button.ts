import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart-service';

@Component({
  selector: 'app-cart-button',
  imports: [RouterLink],
  templateUrl: './cart-button.html',
  styleUrl: './cart-button.css',
})
export class CartButton {
  cartService = inject(CartService);

  constructor() {
    this.cartService.getCartCount();
  }
}
