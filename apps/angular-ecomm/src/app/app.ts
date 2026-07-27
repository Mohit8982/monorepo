import { Component, inject } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { MenuBar } from './components/menu-bar/menu-bar';
import { RouterOutlet } from '@angular/router';
import { Auth } from './core/services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MenuBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private authService = inject(Auth);

  constructor() {
    this.authService.restoreSession();
  }
}
[];
