import {NgModule} from '@angular/core';
import {CommonModule, NgFor, NgOptimizedImage} from '@angular/common';
import {RouterModule} from "@angular/router";
import {productsRoutes} from "./products.routes";
import {ProductsComponent} from "./components/products.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {SkeletonModule} from "primeng/skeleton";

@NgModule({
  declarations: [ProductsComponent,ProductDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    RouterModule.forChild(productsRoutes),
    NgOptimizedImage,
    Button,
    SkeletonModule,

  ]
})
export class ProductsModule {
}
