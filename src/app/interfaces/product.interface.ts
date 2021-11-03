export interface Product {
    code: string;
    imgUrl?: string;
    name: string;
    price: number;
}

export interface ProductPicked {
    code: string;
    cant: number;
    dureza?: string;
    color?: string;
    talla?: string;
}