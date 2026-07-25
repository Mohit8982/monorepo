import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private api = inject(ApiService);
  private router = inject(Router);

  user = signal<any>(null);
  token = signal<string | null>(null);
  loading = signal<boolean>(false);
  isAuthenticated = computed(() => !!this.token());
  errorMessage = signal<string | null>(null);

  login(username: string, otp: string) {
    this.loading.set(true);
    return this.http.post(this.api.auth.login, { username, otp }).subscribe({
      next: (response: any) => {
        this.token.set(response.token);
        this.user.set(response.user);
        this.loading.set(false);
        this.errorMessage.set(null);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed:', error.error);
        this.loading.set(false);
        if (error.error && error.error.message) {
          this.errorMessage.set(error.error.message);
        } else {
          this.errorMessage.set('Login failed: An unknown error occurred.');
        }
      },
    });
  }
}
