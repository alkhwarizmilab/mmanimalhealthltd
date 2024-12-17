import {Routes} from '@angular/router';
import {ProductsListComponent} from "./components/products-list.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";

export const productsRoutes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: ':id', component: ProductDetailsComponent},
];
