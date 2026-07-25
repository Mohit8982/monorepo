import { Component, inject, signal } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  imports: [RouterLink],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css',
})
export class UserMenu {
  authService = inject(Auth);
  menuOpen = signal(false);
}
