import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  image = input.required<string>();
  title = input.required<string>();
  subtext = input.required<string>();
  price = input.required<string>();
  badge = input<string>();
  badgeColor = input<string>();
}
