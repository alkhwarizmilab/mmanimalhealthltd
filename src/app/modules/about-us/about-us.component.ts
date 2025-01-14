import {Component, ViewEncapsulation} from '@angular/core';
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";
import {NgForOf, NgStyle} from "@angular/common";
import {DividerModule} from "primeng/divider";
import {CardTitleComponent} from "./card-title/card-title.component";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-about-us',
  standalone: true,
    imports: [
        CardModule,
        TagModule,
        Button,
        NgForOf,
        NgStyle,
        DividerModule,
        CardTitleComponent,
        ImageModule
    ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  believes: any = [
    "Ethics",
    "Professionalism",
    "Transparency",
    "Innovation",
    "Quality",
    "Nature",
    "People",
  ];
  getRandomLightColor(): string {
    const r = Math.floor(Math.random() * 156 + 100); // Red: 100-255
    const g = Math.floor(Math.random() * 156 + 100); // Green: 100-255
    const b = Math.floor(Math.random() * 156 + 100); // Blue: 100-255
    return `rgba(${r}, ${g}, ${b},.5)`;
  }

}
