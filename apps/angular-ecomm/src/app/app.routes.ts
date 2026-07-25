import { Routes } from '@angular/router';

import { Products } from './pages/products/products';
import { ProductDetails } from './pages/product-details/product-details';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Products,
  },
  {
    path: 'products/:id',
    component: ProductDetails,
  },
  {
    path: 'category/:category',
    component: Products,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'login',
    component: Login,
  },
  // Always keep this LAST
  {
    path: '**',
    component: NotFound,
  },
];
