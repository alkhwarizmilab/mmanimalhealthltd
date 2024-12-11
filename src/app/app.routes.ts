import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)},
  {path: 'control-panel', loadChildren: () => import("./modules/control-panel/control-panel.module").then(m => m.ControlPanelModule)},

];
