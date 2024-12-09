import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CardModule,
    Button
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
