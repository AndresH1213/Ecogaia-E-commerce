import { Product } from '../models/Product';


export interface Cart {
    products: ProductCart[];
    totalValue: number;
}

export interface ProductCart {
    item: Product;
    quantity: number;
}