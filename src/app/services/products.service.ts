import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product.interface';
import { Observer } from 'rxjs';

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
}
