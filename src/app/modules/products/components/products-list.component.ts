import {Component, inject, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {PrimeTemplate} from "primeng/api";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {collection, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {ProductService} from "../service/product.service";
import {Product} from "../domain/product";

@Component({
  selector: 'app-products',

  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  firestore = inject(Firestore);

  products: any[] = [
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

  constructor(private productService: ProductService) {

  }


  ngOnInit(): void {
    this.fetchProducts();
    try {
      window.scrollTo(0, 0);
    } catch (e){

    }

  }


  private fetchProducts() {
    this.productService.fetchProducts().subscribe(data => {
      this.products = data
      let productMap = new Map();
      this.products.map(products => {
        productMap.set(products.id, products);
      })
      this.productService.productMap = productMap;
    });
  }



}
