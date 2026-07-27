import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/services/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  route = inject(ActivatedRoute);
  productService = inject(Product);
  id = Number(this.route.snapshot.params['id']);

  constructor() {
    this.productService.getProductById(this.id);
    this.productService.searchResults.set([]);
  }
}
