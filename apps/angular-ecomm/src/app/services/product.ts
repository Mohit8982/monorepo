import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../core/services/api';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);
  private api = inject(ApiService);

  products = signal<any[]>([]);
  loading = signal(false);

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
}
