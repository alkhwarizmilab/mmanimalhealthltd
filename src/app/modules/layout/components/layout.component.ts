import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(private http: HttpClient) {
    // this.http.get('http://localhost:4000/api/hello').subscribe(res => console.log(res));
  }
}
