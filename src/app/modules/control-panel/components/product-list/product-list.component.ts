import {Component, OnInit, signal} from '@angular/core';
import {ProductService} from "../../../products/service/product.service";
import {Product} from "../../../products/domain/product";
import {Confirmation, ConfirmationService} from "primeng/api";
import {FileUploadEvent} from "primeng/fileupload";
import {ref} from "@angular/fire/storage";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  layout: string = 'list';

  products: Product[] = [];
  showProductInfoDialog: any;
  productInfoHeader = 'Product Details';
  currentProduct: any
  uploadedFiles: any;
  selectedFile: any
  previewURL: any;

  constructor(private productService: ProductService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.productService.fetchProducts().subscribe(value => {
      this.products = value
    })
  }


  counterArray(n: number): any[] {
    return Array(n);
  }

  viewProduct(item: any) {
    this.showProductInfoDialog = true;
    this.productInfoHeader = 'View Product'
    this.currentProduct = {...item};
  }

  showEditDialog(item: any) {
    this.currentProduct = {...item};
    this.showProductInfoDialog = true;
    this.productInfoHeader = 'Edit Product'
  }

  updateProduct() {

    if( this.selectedFile){
      this.productService.uploadFile(this.currentProduct.id,this.selectedFile).then((res) => {
        console.log(ref);
      })
    }


    // this.productService.updateProduct(this.currentProduct).then(value => {
    //   this.fetchProducts();
    //   this.showProductInfoDialog = false;
    // })
  }

  deleteProduct(item: any) {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Are you sure you want to delete this product ?',
      accept: () => {
        this.productService.deleteProduct(item).then(value => {
          console.log(value);
          this.fetchProducts();

        })
      }, reject: () => {

      }
    })

  }


  onUpload($event: any) {

  }

  fileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;

      // Generate preview using FileReader
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewURL = e.target.result; // Set preview URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      alert('Please select an image file.');
      this.selectedFile = null;
      this.previewURL = null;
    }
  }
}
