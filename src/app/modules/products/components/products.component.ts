import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {PrimeTemplate} from "primeng/api";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  // @ts-ignore
  products: any[] = [
    {
      name: 'Welcome to M.M Animal Health',
      image: '/images/product-images/img.png',
      inventoryStatus: 'INSTOCK',
      link: '12'
    }, {
      name: 'Featured Product',
      image: '/images/product-images/img_1.png',
      inventoryStatus: 'INSTOCK',
      link: '12'
    }, {
      name: 'Global Partners',
      image: '/images/product-images/img_2.png',
      inventoryStatus: 'INSTOCK'
    },

    {
      name: 'Welcome to M.M Animal Health',
      image: '/images/product-images/img.png',
      inventoryStatus: 'INSTOCK'
    }, {
      name: 'Featured Product',
      image: '/images/product-images/img_1.png',
      inventoryStatus: 'INSTOCK'
    }, {
      name: 'Global Partners',
      image: '/images/product-images/img_2.png',
      inventoryStatus: 'INSTOCK'
    },
  ];
}
