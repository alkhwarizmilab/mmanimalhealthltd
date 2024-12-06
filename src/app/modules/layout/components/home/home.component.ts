import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {PrimeTemplate} from "primeng/api";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductService} from "../../../products/service/product.service";
import {Button} from "primeng/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    CarouselModule,
    PrimeTemplate,
    NgOptimizedImage,
    RouterLink,
    Button
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
constructor(private productService: ProductService) {
}
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
  featuredProducts: any[] = [
    // {
    //   name: 'Welcome to M.M Animal Health',
    //   image: 'images/product-images/img.png',
    //   inventoryStatus: 'INSTOCK'
    // }, {
    //   name: 'Featured Product',
    //   image: 'images/product-images/img_1.png',
    //   inventoryStatus: 'INSTOCK'
    // }, {
    //   name: 'Global Partners',
    //   image: 'images/product-images/img_2.png',
    //   inventoryStatus: 'INSTOCK'
    // },{
    //   name: 'Welcome to M.M Animal Health',
    //   image: 'images/product-images/img.png',
    //   inventoryStatus: 'INSTOCK'
    // }, {
    //   name: 'Featured Product',
    //   image: 'images/product-images/img_1.png',
    //   inventoryStatus: 'INSTOCK'
    // }, {
    //   name: 'Global Partners',
    //   image: 'images/product-images/img_2.png',
    //   inventoryStatus: 'INSTOCK'
    // },

  ];

  ngOnInit(): void {
    this.productService.fetchFeaturedProducts().subscribe(data =>
    {
      this.featuredProducts = data
    });
  }



}
