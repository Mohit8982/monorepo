import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/services/product';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { KeyValuePipe } from '@angular/common';
import { CartService } from '../../core/services/cart-service';

@Component({
  selector: 'app-product-details',
  imports: [KeyValuePipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  route = inject(ActivatedRoute);
  productService = inject(Product);
  cartService = inject(CartService);
  id = toSignal(this.route.paramMap.pipe(map((params) => Number(params.get('id')))), {
    initialValue: 0,
  });

  constructor() {
    effect(() => {
      const id = this.id();
      if (id) {
        this.productService.getProductById(id);
      }
    });
  }

  onAddToCart(productId: string) {
    this.cartService.addToCart(productId.toString(), 1);
  }
}
