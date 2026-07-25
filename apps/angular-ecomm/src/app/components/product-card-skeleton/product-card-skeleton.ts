import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card-skeleton',
  imports: [],
  templateUrl: './product-card-skeleton.html',
  styleUrl: './product-card-skeleton.css',
})
export class ProductCardSkeleton {
  count = input(8);
}
