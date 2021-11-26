import { Product } from 'src/app/models/Product';


export class User {
    constructor(
        public email: string,
        public role?: 'CUSTOMER' | 'CLIENT' | 'ADMINISTRATOR',
        public uid?: string,
        public cart?: Cart,
    ) { }
};

interface Cart {
    products: ProductCart;
    totalValue: number;
}

interface ProductCart {
    item: Product;
    quantity: number;
}