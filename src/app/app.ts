import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { ProductList } from './components/product-list/product-list';

@Component({
  imports: [Navbar, Hero, ProductList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('y2s2-sw35-ng-ecom');
}
