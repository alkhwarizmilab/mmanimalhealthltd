import {Routes} from '@angular/router';
import {ControlPanelComponent} from "./components/home/control-panel.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {SettingsComponents} from "./components/setup/settings-components.component";
import {AuthGuard} from "./service/authguard";

export const cpRoutes: Routes = [
  {
    path: '', component: ControlPanelComponent, canActivate: [AuthGuard],  children: [
      {path: '', component: ProductListComponent},
      {path: 'product-list', component: ProductListComponent},
      {path: 'settings', component: SettingsComponents},
    ]
  },

];
