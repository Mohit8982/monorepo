import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);
  private api = inject(ApiService);

  products = signal<any[]>([]);
  loading = signal(false);
  searchResults = signal<any[]>([]);
  searching = signal(false);
  productData = signal<any>(null);

  private readonly API_URL = this.api.products.list;

  loadProducts() {
    this.loading.set(true);

    this.http.get<any[]>(this.API_URL).subscribe({
      next: (data: any) => {
        this.products.set(data.data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      },
    });
  }

  loadProductsByCategory(category: string) {
    this.loading.set(true);

    this.http.get<any[]>(`${this.API_URL}/category?category=${category}`).subscribe({
      next: (data: any) => {
        this.products.set(data.data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      },
    });
  }

  searchProducts(query: string) {
    if (!query.trim()) {
      this.searchResults.set([]);
      return;
    }

    this.searching.set(true);

    const params = new HttpParams().set('q', query).set('page', 1).set('limit', 10);

    this.http
      .get<any[]>(`${this.API_URL}/search`, {
        params,
      })
      .subscribe({
        next: (products: any) => {
          this.searchResults.set(products.data);
          this.searching.set(false);
        },
        error: () => {
          this.searchResults.set([]);
          this.searching.set(false);
        },
      });
  }

  getProductById(id: number) {
    this.http.get(`${this.API_URL}/${id}`).subscribe({
      next: (product) => {
        console.log(product);
        this.productData.set(product);
      },
      error: () => {
        this.productData.set(null);
      },
    });
  }
}
