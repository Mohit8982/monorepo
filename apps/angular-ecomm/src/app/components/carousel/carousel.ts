import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  banners = signal([
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400', // Sneakers
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1400', // Fashion sale
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1400', // Smartphone
    'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1400', // Electronics
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1400', // Online shopping
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400', // Fashion store
  ]);

  currentIndex = signal(0);

  next() {
    this.currentIndex.update((i) => (i + 1) % this.banners().length);
  }

  previous() {
    this.currentIndex.update((i) => (i === 0 ? this.banners().length - 1 : i - 1));
  }
}
