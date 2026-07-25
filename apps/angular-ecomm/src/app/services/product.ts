import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);

  products = signal<any[]>([]);
  loading = signal(false);

  private readonly API_URL = 'http://localhost:3001/products';

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
}
