import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./home.routes";
import {HomeComponent} from "./components/home.component";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {InputTextModule} from "primeng/inputtext";
import {MenubarModule} from "primeng/menubar";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToolbarModule,
    Button,
    SplitButtonModule,
    InputTextModule,
    MenubarModule,
    CarouselModule,
    TagModule,
    CardModule
  ]
})
export class HomeModule { }
