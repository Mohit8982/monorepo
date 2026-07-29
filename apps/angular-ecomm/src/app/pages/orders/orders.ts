import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { OrderService } from '../../core/services/order-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, RouterModule, DatePipe, DecimalPipe, TitleCasePipe],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  orderService = inject(OrderService);

  constructor() {
    this.orderService.getOrder();
    console.log(this.orderService.orders);
  }
}
