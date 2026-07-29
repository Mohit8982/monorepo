import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  http = inject(HttpClient);
  orders = signal<any[]>([]);

  constructor() {
    this.http.get('').subscribe({
      next: (orders: any) => {
        this.orders.set(orders);
      },
      error: (err) => {},
    });
  }
}
