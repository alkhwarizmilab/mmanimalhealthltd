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


  constructor(/*private photoService: PhotoService*/) {}

  ngOnInit() {
    // this.photoService.getImages().then((images) => (this.images = images));
    this.images = [
      {
        itemImageSrc: 'images/gallery/image1.jpeg',
        title: 'SMO Guard Gold',
      }, {
        itemImageSrc: 'images/gallery/image2.jpeg',
        title: 'GrowMix',
      }, {
        itemImageSrc: 'images/gallery/image3.jpeg',
        title: 'Grow Zyme',
      },
    ];


  }
}
