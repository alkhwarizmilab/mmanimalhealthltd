import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {PrimeTemplate} from "primeng/api";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CardModule,
        CarouselModule,
        PrimeTemplate
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  // @ts-ignore
  products: any[] = [
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
    },{
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
  // @ts-ignore
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
}
