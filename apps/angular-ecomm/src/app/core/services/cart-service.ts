import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private api = inject(ApiService);
  private http = inject(HttpClient);

  cartItems = signal<any[]>([]);
  summary = signal<any>(null);
  cartCount = signal<number>(0);
  checkoutLoading = signal(false);
  orderPlaced = signal(false);
  showModal = signal(false);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  proceedToCheckout() {
    this.checkoutLoading.set(true);
    this.orderPlaced.set(false);

    setTimeout(() => {
      this.http.post(`${this.api.cart.payment}`, {}).subscribe({
        next: () => {
          this.loadCart();
          this.getCartCount();
          this.checkoutLoading.set(false);
          this.openModal();
        },
        error: () => {
          alert('Payment Service Temporarily Down');
          this.checkoutLoading.set(false);
        },
      });
    }, 3000);
  }

  getCartCount() {
    const token = localStorage.getItem('access_token');

    if (!token) {
      this.cartCount.set(0);
      return;
    }

    this.http.get(`${this.api.cart.list}/count`).subscribe({
      next: (count: any) => {
        this.cartCount.set(count);
      },
      error: (error) => {
        console.log(error);
        this.cartCount.set(0);
      },
    });
  }

  addToCart(productId: string, quantity: number) {
    this.http.post(`${this.api.cart.add}`, { productId, quantity }).subscribe({
      next: (resp) => {
        this.cartCount.update((count) => count + 1);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  loadCart() {
    this.http.get(`${this.api.cart.list}`).subscribe({
      next: (response: any) => {
        this.cartItems.set(response.cartItems);
        this.summary.set(response.summary);
      },
      error: (error) => {
        console.log(error);
        this.cartCount.set(0);
        this.cartItems.set([]);
      },
    });
  }
}
