import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlPanelComponent} from "./components/home/control-panel.component";
import {RouterModule} from "@angular/router";
import {cpRoutes} from "./control-panel.routes";
import {MenuModule} from "primeng/menu";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {SettingsComponents} from "./components/setup/settings-components.component";
import {DataViewModule} from "primeng/dataview";
import {FormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import {SkeletonModule} from "primeng/skeleton";
import {Button} from "primeng/button";
import {HeaderComponent} from "../layout/components/header/header.component";
import {FooterComponent} from "../layout/components/footer/footer.component";
import {ToastModule} from "primeng/toast";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {EditorComponent, TINYMCE_SCRIPT_SRC} from "@tinymce/tinymce-angular";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
@NgModule({
  declarations: [ControlPanelComponent, ProductListComponent, SettingsComponents],
  imports: [
    RouterModule.forChild(cpRoutes),
    CommonModule,
    MenuModule,
    DataViewModule,
    FormsModule,
    SelectButtonModule,
    SkeletonModule,
    Button,
    HeaderComponent,
    FooterComponent,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    FileUploadModule,
    EditorComponent,
    InputGroupModule,
    InputGroupAddonModule,
  ], providers: [
    ConfirmationService,
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class ControlPanelModule {
}
