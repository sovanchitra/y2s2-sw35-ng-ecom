import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products = [
    {
      image:
        'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
      title: 'Monstera Deliciosa',
      subtext: 'Low Maintenance',
      price: '$45.00',
      badge: 'Popular',
      badgeColor: 'bg-white/90 text-stone-900',
    },
    {
      image:
        'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&q=80&w=800',
      title: 'Snake Plant Laurentii',
      subtext: 'Air Purifying',
      price: '$32.00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1416879598555-141687959855?auto=format&fit=crop&q=80&w=800',
      title: 'ZZ Plant',
      subtext: 'Low Light Tolerant',
      price: '$38.00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&q=80&w=800',
      title: 'Fiddle Leaf Fig',
      subtext: 'Bright Light',
      price: '$65.00',
      badge: 'New',
      badgeColor: 'bg-green-100/90 text-green-800',
    },
  ];
}
