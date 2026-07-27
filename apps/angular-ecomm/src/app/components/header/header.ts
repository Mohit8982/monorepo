import { Component, signal } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { Logo } from '../logo/logo';
import { CartButton } from '../cart-button/cart-button';
import { UserMenu } from '../user-menu/user-menu';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { LucideAngularModule, Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [SearchBar, Logo, CartButton, UserMenu, SearchBar, MobileMenu, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'Angular E-Commerce';
  drawerOpen = signal(false);
  readonly Menu = Menu;

  openDrawer() {
    this.drawerOpen.set(true);
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }
}
