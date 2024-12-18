import {inject, Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {
  collection,
  Firestore,
  getDocs,
  query,
  where
} from "@angular/fire/firestore";
import {Product} from "../domain/product";
import {ref, Storage, uploadBytesResumable} from "@angular/fire/storage";
import {APP_BASE_HREF} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productMap = new Map();
  firestore: Firestore = inject(Firestore);
  storage: Storage = inject(Storage);
  http: HttpClient = inject(HttpClient);

  constructor() {
  }

  fetchProducts(): Observable<any> {
    return  this.http.get('http://localhost:4000/api/products')
  }
  addProduct(formData:FormData): Observable<any> {
    return this.http.post('http://localhost:4000/api/products',formData)
  }
  updateProduct(formData:FormData, id:string): Observable<any> {
    return this.http.put('http://localhost:4000/api/products/'+id,formData)
  }
  deleteProduct(id:string): Observable<any> {
    return this.http.delete('http://localhost:4000/api/products/'+id)
  }
  fetchFeaturedProducts(): Observable<Product[]> {
    const productCollection = collection(this.firestore, 'products');
    const q = query(productCollection, where('category', '==', 'Featured'));
    // Wrap the async getDocs call in an Observable
    return from(getDocs(q).then((querySnapshot) => {
      const products: Product[] = [];
      querySnapshot.forEach((doc) => {
        let documentData = doc.data() as Product;
        documentData.id = doc.id; // Optionally assign the Firestore document ID to the product
        products.push(documentData);
      });
      return products; // Return the array of products
    }));
  }


d
}
