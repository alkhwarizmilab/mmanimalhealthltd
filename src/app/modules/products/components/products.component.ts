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

  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  firestore = inject(Firestore);

  products: any[] = [ ];

  constructor(private productService: ProductService) {
  }


  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(data =>
    {
      this.products = data
    });
  }

  // addproducts() {
  //   this.products.forEach(value => {
  //     this.productService.addProduct(value).then(r => {
  //
  //     });
  //   })
  // }

}
