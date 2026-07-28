import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Product } from '../../core/services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  searchText = signal('');
  productService = inject(Product);

  private search$ = new Subject<string>();

  constructor() {
    this.search$
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((query) => {
        this.productService.searchProducts(query);
      });
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchText.set(value);
    this.search$.next(value);
  }

  openProduct(id: number) {
    this.searchText.set('');
    this.productService.searchResults.set([]);
    this.router.navigate(['/products', id]); // or product.id
  }
}
