import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {PrimeTemplate} from "primeng/api";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductService} from "../../../products/service/product.service";
import {Button} from "primeng/button";
import {SkeletonModule} from "primeng/skeleton";
import {AvatarModule} from "primeng/avatar";
import {ImageModule} from "primeng/image";
import {ProductCardComponent} from "../../../products/components/product-card/product-card.component";
import {DividerModule} from "primeng/divider";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {CardTitleComponent} from "../../../about-us/card-title/card-title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    CarouselModule,
    PrimeTemplate,
    NgOptimizedImage,
    RouterLink,
    Button,
    SkeletonModule,
    AvatarModule,
    ImageModule,
    NgForOf,
    NgIf,
    ProductCardComponent,
    DividerModule,
    AnimateOnScrollModule,
    CardTitleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
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


  carousel: any[] = [
    {
      id: 1,
      name: 'Welcome to M.M Animal Health',
      description: 'A comprehensive solution for animal health care.',
      price: 49.99,
      imageUrl: 'images/product-images/img.png',
      category: 'Animal Health',
      stock: 100,
    },
    {
      id: 2,
      name: 'Featured Product',
      description: 'Our top-quality featured product.',
      price: 89.99,
      imageUrl: 'images/product-images/img_1.png',
      category: 'Featured',
      stock: 200,
    },
    {
      id: 3,
      name: 'Global Partners',
      description: 'Trusted solutions from our global partners.',
      price: 69.99,
      imageUrl: 'images/product-images/img_2.png',
      category: 'Global Solutions',
      stock: 150,
    },
    {
      id: 4,
      name: 'Welcome to M.M Animal Health',
      description: 'A reliable choice for animal care.',
      price: 49.99,
      imageUrl: 'images/product-images/img.png',
      category: 'Animal Health',
      stock: 100,
    },
    {
      id: 5,
      name: 'Featured Product',
      description: 'Best-selling featured item.',
      price: 89.99,
      imageUrl: 'images/product-images/img_1.png',
      category: 'Featured',
      stock: 200,
    },
    {
      id: 6,
      name: 'Global Partners',
      description: 'Premium products from around the globe.',
      price: 69.99,
      imageUrl: 'images/product-images/img_2.png',
      category: 'Global Solutions',
      stock: 150,
    }

  ];
  featuredProducts: any[] = [
    {
      shimmer: true
    },  {
      shimmer: true
    },  {
      shimmer: true
    },  {
      shimmer: true
    },  {
      shimmer: true
    },

  ];

  ngOnInit(): void {
    this.productService.fetchFeaturedProducts().subscribe(data => {
      this.featuredProducts = data
    });
  }


}
