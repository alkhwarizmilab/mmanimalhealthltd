export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  imageUrl?: string;
  category: string;
  stock: number;
}
