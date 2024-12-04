import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {layoutRoutes} from "./layout.routes";
import {LayoutComponent} from "./components/layout.component";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {InputTextModule} from "primeng/inputtext";
import {MenubarModule} from "primeng/menubar";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {CardModule} from "primeng/card";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {FooterComponent} from "./components/footer/footer.component";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(layoutRoutes),
    ToolbarModule,
    Button,
    SplitButtonModule,
    InputTextModule,
    MenubarModule,
    CarouselModule,
    TagModule,
    CardModule,
    TopBarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
