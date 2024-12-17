import { Component } from '@angular/core';
import {GalleriaModule} from "primeng/galleria";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    GalleriaModule, FormsModule, ReactiveFormsModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: any[] | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 4
    },
    {
      breakpoint: '991px',
      numVisible: 2,
    },
    {
      breakpoint: '767px',
      numVisible: 3,
    }
  ];

  constructor(/*private photoService: PhotoService*/) {}

  ngOnInit() {
    // this.photoService.getImages().then((images) => (this.images = images));
    this.images = [
      {
        itemImageSrc: 'https://placehold.co/300x400',
        thumbnailImageSrc: 'https://placehold.co/50x50',
        title: 'Mountain Landscape',
        alt: 'A beautiful view of a mountain landscape.',
      },
      {
        itemImageSrc: 'https://placehold.co/500x300',
        thumbnailImageSrc: 'https://placehold.co/50x50',
        title: 'City Skyline',
        alt: 'A bustling city skyline at night.',
      },
      {
        itemImageSrc: 'https://placehold.co/400x600',
        thumbnailImageSrc: 'https://placehold.co/50x50',
        title: 'Serene Lake',
        alt: 'A calm lake surrounded by trees.',
      },
      {
        itemImageSrc: 'https://placehold.co/600x400',
        thumbnailImageSrc: 'https://placehold.co/50x50',
        title: 'Sunny Beach',
        alt: 'A sunny beach with blue skies.',
      },
      {
        itemImageSrc: 'https://placehold.co/450x450',
        thumbnailImageSrc: 'https://placehold.co/50x50',
        title: 'Snowy Forest',
        alt: 'A snow-covered forest in winter.',
      },
    ];


  }
}
