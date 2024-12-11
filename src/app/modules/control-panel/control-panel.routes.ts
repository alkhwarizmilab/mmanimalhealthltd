import {Routes} from '@angular/router';
import {ControlPanelComponent} from "./components/home/control-panel.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {SettingsComponents} from "./components/setup/settings-components.component";

export const cpRoutes: Routes = [
  {
    path: '', component: ControlPanelComponent, children: [
      {path: 'product-list', component: ProductListComponent},
      {path: 'settings', component: SettingsComponents},
    ]
  },

];
