import {Component, ViewEncapsulation} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {RouterLink} from "@angular/router";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MenubarModule,
    RouterLink,
    ToolbarModule,
    Button,
    CardModule,
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  linkClass = "text-700 hover:text-primary cursor-pointer transition-colors transition-duration-500 p-1";

  protected readonly window = window;
}
