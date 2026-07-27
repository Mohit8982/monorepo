import { Component, inject, signal } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { Router, RouterLink } from '@angular/router';
import { LoginButton } from '../login-button/login-button';

@Component({
  selector: 'app-user-menu',
  imports: [RouterLink, LoginButton],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css',
})
export class UserMenu {
  authService = inject(Auth);
  private router = inject(Router);
  menuOpen = signal(false);

  clearSession() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
