import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { MenuBar } from './components/menu-bar/menu-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MenuBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
[];
