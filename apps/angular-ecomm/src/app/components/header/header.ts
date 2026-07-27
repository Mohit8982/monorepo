import { Component, inject, signal } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { Logo } from '../logo/logo';
import { CartButton } from '../cart-button/cart-button';
import { UserMenu } from '../user-menu/user-menu';

@Component({
  selector: 'app-header',
  imports: [SearchBar, Logo, CartButton, UserMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'Angular E-Commerce';
}
