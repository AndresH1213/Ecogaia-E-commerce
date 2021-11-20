export interface Product {
    name: string;
    price: number;
    imgUrl?: string;
    code?: string;
}

export interface ProductPicked {
    code: string;
    cant: number;
    dureza?: string;
    color?: string;
    talla?: string;
}