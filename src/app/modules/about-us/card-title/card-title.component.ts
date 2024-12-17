import {Component, Input} from '@angular/core';
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [
    DividerModule
  ],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {
  @Input() title!: string;

}
