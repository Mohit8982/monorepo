import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api';
import { STORAGE_KEYS } from '../constants/storage.constants';

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
        this.token.set(response.access_token);
        this.user.set(response.user);
        this.loading.set(false);
        this.errorMessage.set(null);

        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user));
        localStorage.setItem(STORAGE_KEYS.TOKEN, response.access_token);

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

  logout() {
    this.user.set(null);
    this.token.set(null);

    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  }

  restoreSession() {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
    const userJson = localStorage.getItem(STORAGE_KEYS.USER);

    if (!token || !userJson) {
      return;
    }

    try {
      const user = JSON.parse(userJson);

      console.log(token, user);

      this.token.set(token);
      this.user.set(user);
    } catch {
      this.logout(); // clears corrupted localStorage
    }
  }
}
