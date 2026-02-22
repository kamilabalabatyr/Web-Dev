import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
import { Category } from './category.model';      
import { Product } from './product.model';        
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.selectedProducts = this.productService
      .getProductsByCategory(id)
      .filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }
  searchTerm: string = '';

  sortByPriceAsc() {
    this.selectedProducts.sort((a, b) => a.price - b.price);
  }
  
  sortByPriceDesc() {
    this.selectedProducts.sort((a, b) => b.price - a.price);
  }
}


