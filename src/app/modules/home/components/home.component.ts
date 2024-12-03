import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items = [
    {
      label: 'About Us',
      icon: 'pi pi-info-circle'
    },
    {
      label: 'Products',
      icon: 'pi pi-shopping-bag',
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

  // @ts-ignore
  products: any[] = [
    {
      name: 'Welcome to M.M Animal Health',
      image: '/images/product-images/img.png',
      inventoryStatus: 'INSTOCK'
    }, {
      name: 'Featured Product',
      image: '/images/product-images/img_1.png',
      inventoryStatus: 'INSTOCK'
    }, {
      name: 'Global Partners',
      image: '/images/product-images/img_2.png',
      inventoryStatus: 'INSTOCK'
    },

  ];
  // @ts-ignore
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
}
