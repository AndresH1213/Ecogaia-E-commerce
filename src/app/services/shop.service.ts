import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Cart, SelectedProduct } from '../interfaces/product.interface';;

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  public cart: Cart | undefined;
  private _preferenceId: string | undefined;
  constructor(private http: HttpClient) { }

  get preferenceId() {
    return this._preferenceId;
  }

  get getCart() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!)
    }
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

  addProductCart(selectedData: SelectedProduct) {
    let newCartData: Cart | undefined = this.getCart;
    const newProduct = selectedData.product;
    let newCant = selectedData.cant;
    const newCharacteristics = selectedData.characteristics
    if (!this.getCart) {
      const totalValue = newProduct.price * newCant
      newCartData = {
        products: [{
          item: newProduct,
          cant: newCant,
          characteristics : newCharacteristics
        }],
        totalValue
      }
      const cartDataStringify = JSON.stringify(newCartData);
      localStorage.setItem('cart', cartDataStringify);
      return
    }
    const oldCartProducts = this.getCart.products.map(product => product.item._id);
    const matchProducIndex = newCartData!.products.findIndex(({item, characteristics}) => {
      console.log(JSON.stringify(characteristics),'findindex',JSON.stringify(newCharacteristics))
      return item._id === newProduct._id && JSON.stringify(characteristics) === JSON.stringify(newCharacteristics)
    });
    console.log(matchProducIndex, 'match index')

    if (oldCartProducts.includes(newProduct._id) && matchProducIndex >= 0) {
      
      const productInCart = newCartData?.products[matchProducIndex];
      console.log(productInCart, 'matin');
      productInCart!.cant += newCant;
      newCartData?.products.splice(matchProducIndex, 1, productInCart!);
      newCartData!.totalValue += newProduct.price * newCant
      const newCartDataStringity = JSON.stringify(newCartData);
      localStorage.setItem('cart', newCartDataStringity);
      return
    }
    
    newCartData?.products.push({
      item: newProduct,
      cant: newCant,
      characteristics: newCharacteristics
    });
    newCartData!.totalValue += newProduct.price * newCant;
    const newCartDataStringity = JSON.stringify(newCartData);
    localStorage.setItem('cart', newCartDataStringity);
  }
  

  deleteProductCart( productData: any) {

  }
  
  saveClient(clientData: any) {
    const url = `${baseUrl}/shop/client`;

    return this.http.post(url, clientData)
  }
}
