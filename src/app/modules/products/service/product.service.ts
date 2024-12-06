import {inject, Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {addDoc, collection, collectionData, Firestore, getDoc, getDocs, query, where} from "@angular/fire/firestore";
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

  addProduct(value: Product) {
    const productCollection = collection(this.firestore, 'products');
    return  addDoc(productCollection,value);
  }
}
