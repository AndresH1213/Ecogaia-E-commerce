import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  get token() {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  };

  toProductData(productForm: any) {

    console.log(productForm)

    const formData = new FormData();

    // setting all the productform values to formData, in case that a file come in the form can be
    // send as file and not as json;
    const { name, image, price, characteristics } = productForm
    
    // append the values
    formData.append('name', name);
    formData.append('imageUrl', image);
    formData.append('price', price);
    formData.append('characteristics', characteristics)
  
    return formData
  }

  constructor(private http: HttpClient) { }

  getProducts() {
    const url = `${baseUrl}/products/all`;
    return this.http.get<{ok: boolean, products: Product[]}>(url).pipe(
      map(({products} ) => products)
    )
  }

  getSingleProduct(id: string) {
    const url = `${baseUrl}/products/${id}`;
    return this.http.get<{ok: Boolean, product: Product}>(url).pipe(
      map(({product}) => product )
    )
  }

  addProduct(productForm: any ) {
    const url = `${baseUrl}/products`;

    const formData = this.toProductData(productForm);

    return this.http.post(url, formData, this.headers)

  }

  deleteProduct(id: string) {
    const url = `${baseUrl}/products/${id}`;
    return this.http.delete<{ok: Boolean, msg: string }>(url, this.headers)
  }

  updateProduct(id: string, productForm: any) {
    const url = `${baseUrl}/products/${id}`;

    console.log(id, productForm, 'updated')

    const formData = this.toProductData(productForm);
    return this.http.put<{ok: Boolean, msg: string }>(url, formData, this.headers)
  }
}
