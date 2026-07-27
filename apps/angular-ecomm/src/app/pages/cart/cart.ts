import { Component, inject } from '@angular/core';
import { CartItems } from '../../components/cart-items/cart-items';
import { Auth } from '../../core/services/auth';
import { EmptyCart } from '../../components/empty-cart/empty-cart';
@Component({
  selector: 'app-cart',
  imports: [CartItems, EmptyCart],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  auth = inject(Auth);
}
