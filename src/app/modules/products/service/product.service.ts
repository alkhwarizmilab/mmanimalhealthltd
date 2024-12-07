import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from "rxjs";
import {
  addDoc,
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  where
} from "@angular/fire/firestore";
import {Product} from "../domain/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productMap = new Map();
  firestore: Firestore = inject(Firestore);

  constructor() {
  }

  fetchProducts(): Observable<any> {
    const itemCollection = collection(this.firestore, 'products');
    return collectionData<Product>(itemCollection, {idField: 'id'});
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
    return addDoc(productCollection, value);
  }

  fetchProductById(docId: string): Observable<any> {
    // Reference the specific document
    const productDocRef = doc(this.firestore, `products/${docId}`);

    // Fetch the document using getDoc and convert it to an Observable
    return from(getDoc(productDocRef).then((docSnap) => {
      if (docSnap.exists()) {
        return docSnap.data(); // Return document data
      } else {
        throw new Error('Document does not exist!');
      }
    }));
  }
}
