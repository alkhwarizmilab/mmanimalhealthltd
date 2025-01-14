import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Product} from "../../domain/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    window.scrollTo(0, 0);

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = this.productService.productMap.get(params['link']);
      if (!this.product) {
        this.productService.fetchProductByLinkOrId(params['link']).subscribe(value => {
          this.product = value;
        });
      }
    });


  }

}
