import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<any>();
  productClick = output<number>();

  onCardClick() {
    this.productClick.emit(this.product().id);
  }
}
