import {Component, Input} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {ToolbarModule} from "primeng/toolbar";
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MenuModule} from "primeng/menu";
import {Button} from "primeng/button";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    MenubarModule,
    ToolbarModule,
    NgOptimizedImage,
    MenuModule,
    Button
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(private router:Router) {
}
  items = [
    {
      label: 'About Us',
      icon: 'pi pi-info-circle',
      command: () => {
        this.router.navigate(['/about-us']);
      }
    },
    {
      label: 'Products',
      icon: 'pi pi-shopping-bag',
      command: () => {
        this.router.navigate(['/products']);
      }
    },
    {
      separator: true
    },
    {
      label: 'Global Partners',
      icon: 'pi pi-star',
      command: () => {
        this.router.navigate(['/global-partners']);
      }
    },
    {
      label: 'Gallery',
      icon: 'pi pi-images',
      command: () => {
        this.router.navigate(['/gallery']);
      }
    },

    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      command: () => {
        this.router.navigate(['/contact-us']);
      }
    }
  ]
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
