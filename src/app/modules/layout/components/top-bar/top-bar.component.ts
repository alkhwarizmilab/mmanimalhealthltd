import {Component, Input} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {ToolbarModule} from "primeng/toolbar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    MenubarModule,
    ToolbarModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
constructor(private router:Router) {
}
  items = [
    {
      label: 'About Us',
      icon: 'pi pi-info-circle'
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
    },
    {
      label: 'Gallery',
      icon: 'pi pi-images',
    },

    {
      label: 'Contact',
      icon: 'pi pi-envelope'
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
