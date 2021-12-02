import { Product } from '../models/Product';


export interface Cart {
    products: ProductCart[];
    totalValue: number;
}

export interface ProductCart {
    item: Product;
    cant: number;
    characteristics?: any;
}

export interface SelectedProduct {
    product: Product;
    cant: number;
    characteristics?: any;
}