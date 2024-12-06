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

  products: any[] = [
    /*{
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
    },*/
  ];

  constructor(private productService: ProductService) {
    window.scrollTo(0, 0);
  }


  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(data =>
    {
      this.products = data
    });
  }

  addproducts() {
    this.products.forEach(value => {
      this.productService.addProduct(value).then(r => {

      });
    })
  }

}
