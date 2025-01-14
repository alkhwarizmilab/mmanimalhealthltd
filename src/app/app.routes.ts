import {Routes} from '@angular/router';
import {LoginComponent} from "./modules/login/login.component";

export const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)},
  {path: 'login', component: LoginComponent},
  {path: 'control-panel', loadChildren: () => import("./modules/control-panel/control-panel.module").then(m => m.ControlPanelModule)},

];
