import {NgModule} from '@angular/core';
import {CommonModule, NgFor, NgOptimizedImage} from '@angular/common';
import {RouterModule} from "@angular/router";
import {productsRoutes} from "./products.routes";
import {ProductsListComponent} from "./components/products-list.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {SkeletonModule} from "primeng/skeleton";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ImageModule} from "primeng/image";
import {DividerModule} from "primeng/divider";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [ProductsListComponent,ProductDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    RouterModule.forChild(productsRoutes),
    NgOptimizedImage,
    Button,
    SkeletonModule,
    ProductCardComponent,
    ImageModule,
    DividerModule,
    TagModule,

  ]
})
export class ProductsModule {
}
