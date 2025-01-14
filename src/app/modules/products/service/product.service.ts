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
import {Storage} from "@angular/fire/storage";
import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productMap = new Map();
  firestore: Firestore = inject(Firestore);
  storage: Storage = inject(Storage);
  http: HttpClient = inject(HttpClient);
  baseUrl = API_BASE_URL;

  constructor() {
  }

  fetchProducts(): Observable<any> {

    return this.http.get(this.baseUrl + '/api/products')
  }
  fetchProductByLinkOrId(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/api/products/' + id);
  }
  addProduct(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl + '/api/products', formData)
  }

  updateProduct(formData: FormData, id: string): Observable<any> {
    return this.http.put(this.baseUrl + '/api/products/' + id, formData)
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/api/products/' + id)
  }

  fetchFeaturedProducts(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/products?category=featured')
  }


}
