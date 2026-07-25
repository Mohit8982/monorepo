import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  banners = signal([
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1400',
  ]);

  currentIndex = signal(0);

  next() {
    this.currentIndex.update((i) => (i + 1) % this.banners().length);
  }

  previous() {
    this.currentIndex.update((i) => (i === 0 ? this.banners().length - 1 : i - 1));
  }
}
