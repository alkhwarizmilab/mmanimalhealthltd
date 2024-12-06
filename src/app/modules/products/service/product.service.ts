import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Product} from "../domain/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  firestore: Firestore = inject(Firestore);
  constructor() { }

  fetchProducts(): Observable<any>{
    const itemCollection = collection(this.firestore, 'products');
    return collectionData<Product>(itemCollection, { idField: 'id' });
  }

  addProduct(value: Product) {
    const productCollection = collection(this.firestore, 'products');
    return  addDoc(productCollection,value);
  }
}
