import { Injectable } from '@angular/core';
import { Category } from '../category.model';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  products: Product[] = [
    // сюда добавим 20 товаров (по 5 на категорию)
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }
}