import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../core/services/auth';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  fb = inject(FormBuilder);
  authService = inject(Auth);

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    otp: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, otp } = this.loginForm.value;
      this.authService.login(username!, otp!);
    }
  }
}
