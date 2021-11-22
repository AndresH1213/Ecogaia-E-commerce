import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getProducts() {
    const url = `${this.baseUrl}/products/all`;
    return this.http.get<{ok: boolean, products: Product[]}>(url).pipe(
      map(({products} ) => products)
    )
  }

  getSingleProduct(id: string) {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.get<{ok: Boolean, product: Product}>(url).pipe(
      map(({product}) => product )
    )
  }

  deleteProduct(id: string) {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.delete<{ok: Boolean, msg: string }>(url)
  }

  updateProduct(id: string, data: Product) {
    const url = `${this.baseUrl}/products/${id}`;
    console.log(id, data, 'updated')
    // return this.http.put<{ok: Boolean, msg: string }>(url, {})
  }
}
