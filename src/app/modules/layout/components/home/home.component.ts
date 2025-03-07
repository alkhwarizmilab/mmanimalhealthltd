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
      numVisible: 3,
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
      name: '',
      imageUrl: 'images/carausel/slide1.jpg',
    },
    {
      id: 2,
      name: '',
      imageUrl: 'images/carausel/slide2.jpg',
    },
    {
      id: 3,
      name: '',
      imageUrl: 'images/carausel/slide3.jpg',
    },
    {
      id: 4,
      name: '',
      imageUrl: 'images/carausel/slide4.jpg',
    },
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
    this.carousel = [...this.carousel,...this.carousel];
    this.productService.fetchFeaturedProducts().subscribe(data => {
      this.featuredProducts = data
    });
  }


}
