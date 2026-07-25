import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly base = environment.apiUrl;

  auth = {
    login: `${this.base}/auth/login`,
    register: `${this.base}/auth/register`,
    profile: `${this.base}/auth/profile`,
  };

  products = {
    list: `${this.base}/products`,
    details: (id: number) => `${this.base}/products/${id}`,
  };

  cart = {
    list: `${this.base}/cart`,
    add: `${this.base}/cart`,
    remove: (id: number) => `${this.base}/cart/${id}`,
  };
}
