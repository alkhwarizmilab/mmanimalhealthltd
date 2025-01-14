import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ControlPanelServiceService} from "../control-panel/service/control-panel-service.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    Button,
    InputTextModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private controlPanelService:ControlPanelServiceService) {
  }

  onLogin() {
    if (this.username && this.password) {
      console.log('Logged in with', this.username);
      this.controlPanelService.login({username:this.username, password:this.password});
    }
  }
}
