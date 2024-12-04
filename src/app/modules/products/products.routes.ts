import {Routes} from '@angular/router';
import {ProductsComponent} from "./components/products.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";

export const productsRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: ':id', component: ProductDetailsComponent},
];
