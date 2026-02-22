import { Injectable } from '@angular/core';
import { Category } from '../category.model';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Smart Glasses' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: "IPhone 17 Pro Max",
      description: "Смартфон Apple iPhone 17 Pro Max 256Gb",
      price: 873340,
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpnG-UNZiL_E3lGtKc5vn7JXXVnLrvdrJpg&s",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j84MWNHwaT_5ZWrt9E74BXO&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtBqaabbly71S6IcqCJU1Dz36wM0LcAnZgcdNmp-aZB3-9TU3Y1SnO4aAli9EALw_wcB",
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: "IPhone 17 Pro",
      description: "Смартфон Apple iPhone 17 Pro 256GB",
      price: 804900,
      rating: 4.6,
      image: "data:image/jpeg;base64,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",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j84MWNHwaT_5ZWrt9E74BXO&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtBqaabbly71S6IcqCJU1Dz36wM0LcAnZgcdNmp-aZB3-9TU3Y1SnO4aAli9EALw_wcB",
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: "IPhone 17",
      description: "Смартфон Apple iPhone 17 256Gb",
      price: 592265,
      rating: 4.4,
      image: "https://resizer.mail.ru/p/73978d8a-5f93-5634-bdf9-01d76ca5589f/AQAKxjLCtCDFu7M-8ETspRNwb33aDX2ASonTZvsQU8O9PxmpHJ2w891YKO5B5kAwe2nEykwoynYaNv6CZO7kKP_2BTQ.jpg",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j84MWNHwaT_5ZWrt9E74BXO&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtBqaabbly71S6IcqCJU1Dz36wM0LcAnZgcdNmp-aZB3-9TU3Y1SnO4aAli9EALw_wcB",
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: "IPhone 15",
      description: "Смартфон Apple iPhone 15 128Gb",
      price: 402297,
      rating: 4.5,
      image: "https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j84MWNHwaT_5ZWrt9E74BXO&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtBqaabbly71S6IcqCJU1Dz36wM0LcAnZgcdNmp-aZB3-9TU3Y1SnO4aAli9EALw_wcB",
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: "IPhone 13",
      description: "Смартфон Apple iPhone 13 128Gb",
      price: 330000,
      rating: 4.2,
      image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111872_sp851-iphone13.png",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j84MWNHwaT_5ZWrt9E74BXO&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtBqaabbly71S6IcqCJU1Dz36wM0LcAnZgcdNmp-aZB3-9TU3Y1SnO4aAli9EALw_wcB",
      likes: 0,
      categoryId: 1
    },
    {
      id: 6,
      name: "MacBook Air 13 2020",
      description: "Ноутбук Apple MacBook Air 13 2020 13.3 / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A",
      price: 467994,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: "PRYME N5095",
      description: "Ноутбук PRYME N5095 15.6 / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25",
      price: 189990,
      rating: 4.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: "ELERON SmartBook",
      description: "Ноутбук ELERON SmartBook 15.6 / 8 Гб / M.2 256 Гб / Win 11 / S.PF01R.03T",
      price: 219990,
      rating: 3.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p84/p2e/77613207.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/eleron-smartbook-15-6-8-gb-m-2-256-gb-win-11-s-pf01r-03t-148407823/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: "Lenovo IdeaPad 3",
      description: "Ноутбук Lenovo IdeaPad 3 15.6 / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK",
      price: 171385,
      rating: 4.1,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: "Apple MacBook Air 13 2025",
      description: "Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123",
      price: 523015,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 11,
      name: "Apple AirPods 4",
      description: "Наушники Apple AirPods 4 белый",
      price: 60803,
      rating: 4.4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000",
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: "Apple EarPods Lightning",
      description: "Наушники Apple EarPods Lightning белый",
      price: 9694,
      rating: 4.3,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/naushniki-apple-earpods-lightning-belyi-4801876/?c=750000000",
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: "Air Pro 2",
      description: "Наушники Air pro 2 белый",
      price: 2399,
      rating: 3.1,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000",
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: "GERLAX GH-34",
      description: "Наушники GERLAX GH-34 черный",
      price: 2769,
      rating: 3.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000",
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: "JASPER JS70",
      description: "Наушники JASPER JS70 бежевый",
      price: 3490,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/naushniki-jasper-js70-bezhevyi-146025818/?c=750000000",
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: "Смарт-очки Frames Tempo Row",
      description: "Смарт-очки Frames Tempo Row черный",
      price: 108771,
      rating: 4.1,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb7/h1a/64225767260190.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/smart-ochki-frames-tempo-row-chernyi-101429756/?c=750000000",
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: "Ray-Ban META WAYFARER (Gen 2)",
      description: "Смарт-очки Ray-Ban META WAYFARER (Gen 2) Clear RW4012 601SSB 50-22 черный",
      price: 399000,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pfe/p2f/66984949.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-wayfarer-gen-2-clear-rw4012-601ssb-50-22-chernyi-146339967/?c=750000000",
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: "Ray-Ban Meta SKYLER Cinnamon",
      description: "Смарт-очки Ray-Ban Meta SKYLER Cinnamon Pink белый",
      price: 300000,
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p48/p1c/17562598.png?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-skyler-cinnamon-pink-belyi-132692893/?c=750000000                      ",
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: "Ray-Ban Meta Wayfarer Gen 2",
      description: "Смарт-очки Ray-Ban Meta Wayfarer Gen 2 RW4012 50-22 M черный",
      price: 375327,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pfe/pb4/73800562.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-wayfarer-gen-2-rw4012-50-22-m-chernyi-146815899/?c=750000000",
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: "Ray-Ban Meta Wayfarer Standard",
      description: "Смарт-очки Ray-Ban Meta Wayfarer Standard RW4006 601SM1 50-22 черный",
      price:277245,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pef/pd8/54777416.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-wayfarer-standard-rw4006-601sm1-50-22-chernyi-116509833/?c=750000000",
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
  constructor() {
    const saved = localStorage.getItem('products');
    if (saved) {
      this.products = JSON.parse(saved);
    }
  }
  private saveToStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
