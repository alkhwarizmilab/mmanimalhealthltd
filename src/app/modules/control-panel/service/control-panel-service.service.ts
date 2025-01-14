import {inject, Injectable} from '@angular/core';
import * as http from "node:http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ControlPanelServiceService {
  http: HttpClient = inject(HttpClient);

  constructor() { }

  login(param: { password: string; username: string }):Observable<any> {

    return this.http.post('/api/login', param);
  }
}
