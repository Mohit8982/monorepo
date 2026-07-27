import { Component, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Menu } from 'lucide-angular';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.css',
})
export class MobileMenu {
  readonly Menu = Menu;

  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
