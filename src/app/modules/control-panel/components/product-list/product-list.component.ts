import {Component, OnInit, signal} from '@angular/core';
import {ProductService} from "../../../products/service/product.service";
import {Product} from "../../../products/domain/product";
import {Confirmation, ConfirmationService} from "primeng/api";
import {EditorComponent} from "@tinymce/tinymce-angular";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  layout: string = 'list';

  products: Product[] = [];
  showProductInfoDialog: any;
  productInfoHeader = 'Product Details';
  productDialogMode = 'new';
  currentProduct: Product
  uploadedFiles: any;
  selectedFile: any
  previewURL: any;
  init: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount fullscreen',
    base_url: '/tinymce', // Root for resources
    suffix: '.min'        // Suffix to use when loading resources
  };
  constructor(private productService: ProductService, private confirmationService: ConfirmationService) {
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
    this.productDialogMode = 'view'
    this.showProductInfoDialog = true;
    this.productInfoHeader = 'View Product'
    this.currentProduct = {...item};
  }

  addProductDialog() {
    this.productDialogMode = 'new'
    this.showProductInfoDialog = true;
    this.productInfoHeader = 'Add Product'
    this.currentProduct = {
      link: "",
      category: "", description: "", id: "", name: "", price: 0, shortDescription: "", stock: 0}
  }

  showEditDialog(item: any) {
    this.productDialogMode = 'edit'
    this.currentProduct = {...item};
    this.showProductInfoDialog = true;
    this.productInfoHeader = 'Edit Product'
  }

  updateProduct() {
    let formData = new FormData();
    formData.append('product', JSON.stringify(this.currentProduct));
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    this.productService.updateProduct(formData,this.currentProduct.id).subscribe(value => {
      this.fetchProducts();
    });
    this.showProductInfoDialog = false;

  }

  addProduct() {
    let formData = new FormData();
    formData.append('product', JSON.stringify(this.currentProduct));
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);

    }
    this.productService.addProduct(formData).subscribe(value => {
      this.fetchProducts();
    });
    this.showProductInfoDialog = false;

  }

  deleteProduct(item: any) {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Are you sure you want to delete this product ?',
      accept: () => {
        this.productService.deleteProduct(item.id).subscribe(value => {
          this.fetchProducts();
          this.showProductInfoDialog = false;

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
