import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Cart } from '../interfaces/product.interface';
import { of } from 'rxjs';
import { User } from '../models/User';

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  public cart: Cart = JSON.parse(localStorage.getItem('cart') || '')
  private _preferenceId: string | undefined;
  constructor(private http: HttpClient) { }

  get preferenceId() {
    return this._preferenceId;
  }

  get getCart() {
    return this.cart
  }

  postOrder(orderData: any) {
    const url = `${baseUrl}/shop/order`;

    return this.http.post(url, orderData).pipe(
      tap((resp: any) => {
        if (resp.ok) {
          this._preferenceId = resp.preferenceId
        }
      })
    );
  }

  addProductCart(productData: any) {
    
  }

  deleteProductCart( productData: any) {

  }

  retrieveCart(user: User) {

    const url = `${baseUrl}/shop/cart`

    return this.http.post(url, {
      user
    })
  }

  saveCart(user: User) {
    if (!this.cart) {
      return of(false)
    }
    const url = `${baseUrl}/shop/save-cart`

    return this.http.post(url, user)
  }
  
  saveClient(clientData: any) {
    const url = `${baseUrl}/shop/client`;

    return this.http.post(url, clientData)
  }
}
