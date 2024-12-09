import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
