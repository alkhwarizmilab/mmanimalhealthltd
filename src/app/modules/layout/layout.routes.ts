import {Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout.component";
import {HomeComponent} from "./components/home/home.component";

export const layoutRoutes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'products', loadChildren: () => import("../products/products.module").then(m => m.ProductsModule)},
    ]
  },
];
