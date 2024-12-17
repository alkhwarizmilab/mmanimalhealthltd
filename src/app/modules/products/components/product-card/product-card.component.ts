import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Button, ButtonDirective} from "primeng/button";
import {SkeletonModule} from "primeng/skeleton";
import {NgIf} from "@angular/common";
import {AnimateOnScrollModule} from "primeng/animateonscroll";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink,
    ButtonDirective,
    Button,
    SkeletonModule,
    NgIf,
    AnimateOnScrollModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product: any;
}
