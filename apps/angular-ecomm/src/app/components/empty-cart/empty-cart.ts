import { Component, inject } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { LoginButton } from '../login-button/login-button';

@Component({
  selector: 'app-empty-cart',
  imports: [LoginButton],
  templateUrl: './empty-cart.html',
  styleUrl: './empty-cart.css',
})
export class EmptyCart {
  auth = inject(Auth);
}
