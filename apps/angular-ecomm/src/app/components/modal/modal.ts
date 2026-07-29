import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  isOpen = input(false);

  close = output<void>();

  onBackdropClick() {
    this.close.emit();
  }
}
