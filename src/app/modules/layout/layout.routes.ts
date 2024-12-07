import {Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutUsComponent} from "../about-us/about-us.component";
import {GlobalPartnersComponent} from "../global-partners/global-partners.component";
import {GalleryComponent} from "../gallery/gallery.component";
import {ContactUsComponent} from "../contact-us/contact-us.component";

export const layoutRoutes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'about-us', component:AboutUsComponent},
      {path: 'products', loadChildren: () => import("../products/products.module").then(m => m.ProductsModule)},
      {path: 'global-partners', component:GlobalPartnersComponent},
      {path: 'gallery', component:GalleryComponent},
      {path: 'contact-us', component:ContactUsComponent},

    ]
  },
];
