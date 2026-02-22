import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone with A17 Pro chip and titanium design.',
      price: 650000,
      rating: 4.8,
      image: 'https://cdn.tgdd.vn/Products/Images/42/299033/Slider/iphone-15-pro-thumbyt-1020x570.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-natural-titanium-112262815/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Samsung smartphone with powerful camera system.',
      price: 480000,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFlMr8YaxWg9h5C8fUmYy2c--J2FuKvxT3g&s',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-black-113718927/'
    },
    {
      id: 3,
      name: 'iPhone 17 Pro Max',
      description: 'iPhone 17 Pro Max, 256 ГБ, Серебристый',
      price: 915990,
      rating: 4.9,
      image: 'https://itmag.kz/upload/iblock/444/14/product_image_127514_1392130.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-black-113718927/'
    },
    {
      id: 4,
      name: 'Amina Cook',
      description: 'Хорошо готовит, убирает, моет, все делает',
      price: 0,
      rating: 5.0,
      image: '/assets/amina.jpg',
      images: ['assets/amina.jpg', 'assets/amina.jpg', 'assets/amina.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-black-113718927/'
    },
    {
      id: 5,
      name: 'ShugiJan',
      description: 'Любить говядину, любимый город - Атырау!',
      price: 1,
      rating: 5.0,
      image: '/assets/sjugi.jpg',
      images: ['assets/sjugi.jpg', 'assets/sjugi.jpg', 'assets/sjugi.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-black-113718927/'
    }
  ];

}
