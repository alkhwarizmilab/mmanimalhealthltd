import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink,
    ButtonDirective
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product: any;
}
