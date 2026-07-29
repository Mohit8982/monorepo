import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);
  private api = inject(ApiService);

  orders = signal<any[]>([]);

  getOrder() {
    this.http.get(`${this.api.order.list}`).subscribe({
      next: (resp: any) => {
        this.orders.set(resp);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
