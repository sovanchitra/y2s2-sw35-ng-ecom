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
        'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Monstera Deliciosa',
      subtext: 'Low Maintenance',
      price: '$45.00',
      badge: 'Popular',
      badgeColor: 'bg-white/90 text-stone-900',
    },
    {
      image:
        'https://images.unsplash.com/photo-1593482892540-73c9199d8949?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Snake Plant Laurentii',
      subtext: 'Air Purifying',
      price: '$32.00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    {
      image:
        'https://images.unsplash.com/photo-1723471719246-d8fa048f0ee0?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Spider Plant',
      subtext: 'Pet Friendly',
      price: '$18.00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1617181662114-129ff735b95a?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Calathea',
      subtext: 'Beautiful Foliage',
      price: '$35.00',
      badge: 'Limited',
      badgeColor: 'bg-purple-100/90 text-purple-900',
    },
    {
      image:
        'https://images.unsplash.com/photo-1602573852058-ef7c665fcd92?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Heartleaf Philodendron',
      subtext: 'Easy to Grow',
      price: '$28.00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1536846826492-c51b3984bc96?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'String of Pearls',
      subtext: 'Succulent Vine',
      price: '$24.00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1698659036245-35d318caeea5?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Bird of Paradise',
      subtext: 'Tropical Vibe',
      price: '$85.00',
      badge: 'Large',
      badgeColor: 'bg-blue-100/90 text-blue-900',
    },
    {
      image:
        'https://images.unsplash.com/photo-1704869727879-25ed3c235e7d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Boston Fern',
      subtext: 'Lush & Green',
      price: '$30.00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1657401923955-efe43f7d1196?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'English Ivy',
      subtext: 'Classic Climber',
      price: '$20.00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1621552330975-f5f9c85dc9c9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Jade Plant',
      subtext: 'Symbol of Luck',
      price: '$26.00',
      badge: 'Popular',
      badgeColor: 'bg-white/90 text-stone-900',
    },
  ];
}
