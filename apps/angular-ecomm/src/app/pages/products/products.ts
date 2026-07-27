import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../core/services/product';
import { ProductCard } from '../../components/product-card/product-card';
import { Carousel } from '../../components/carousel/carousel';
import { EmptyState } from '../../components/empty-state/empty-state';
import { ProductCardSkeleton } from '../../components/product-card-skeleton/product-card-skeleton';

@Component({
  selector: 'app-products',
  imports: [ProductCard, Carousel, EmptyState, ProductCardSkeleton],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  productService = inject(Product);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');

      if (category) {
        this.productService.loadProductsByCategory(category);
      } else {
        this.productService.loadProducts();
      }
    });
  }

  viewProductDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
