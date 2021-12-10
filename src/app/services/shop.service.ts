import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Cart, ProductCart } from '../interfaces/product.interface';

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  public cart: Cart | undefined;
  constructor(private http: HttpClient) { }

  get getCart() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!)
    }
    return this.cart;
  }

  postOrder(orderData: any) {
    const url = `${baseUrl}/shop/order`;

    return this.http.post(url, orderData);
  }

  addProductCart(selectedData: ProductCart) {
    /* Update cart in the localStorage of the user */
    
    const newProduct = selectedData.item;
    const newCharacteristics = selectedData.characteristics;
    // upload the previous cart on the LS
    let newCartData: Cart | undefined = this.getCart;
    let newCant = selectedData.cant;
    // If there is no cart create the cart
    if (!this.getCart) {
      const totalValue = newProduct.price * newCant
      newCartData = {
        products: [{
          item: newProduct,
          cant: newCant,
          characteristics : newCharacteristics,
          combo: selectedData.combo
        }],
        totalValue
      }
      const cartDataStringify = JSON.stringify(newCartData);
      localStorage.setItem('cart', cartDataStringify);
      return
    }
    // Search for products that are already in the cart, the match has to be in _id and characteristics
    const oldCartProducts = this.getCart.products.map(product => product.item._id);
    const matchProducIndex = newCartData!.products.findIndex(({item, characteristics}) => {
      return item._id === newProduct._id && 
             JSON.stringify(characteristics) === JSON.stringify(newCharacteristics)
    });
    // If theres already that product (with the same characteristics) in the cart upload it
    if (oldCartProducts.includes(newProduct._id) && matchProducIndex >= 0) {
      // found the product in cart and put the new quantity/cant
      const productInCart = newCartData?.products[matchProducIndex];
      productInCart!.cant += newCant;
      // replace again and change the totalValue of the cart
      newCartData?.products.splice(matchProducIndex, 1, productInCart!);
      newCartData!.totalValue += newProduct.price * newCant

      // save cart
      const newCartDataStringity = JSON.stringify(newCartData);
      localStorage.setItem('cart', newCartDataStringity);
      return
    }
    // if the new product hasn't found in the cart push it to the cart and change totalValue
    newCartData?.products.push({
      item: newProduct,
      cant: newCant,
      characteristics: newCharacteristics,
      combo: selectedData.combo
    });
    newCartData!.totalValue += newProduct.price * newCant;
    const newCartDataStringity = JSON.stringify(newCartData);
    localStorage.setItem('cart', newCartDataStringity);
  }
  

  deleteProductCart( index: number): boolean {
    /* Delete and entire product in the cart */
    const cartData: any = this.getCart;
    const productRemoved: any = cartData.products.splice(index, 1);
    if (cartData?.products.length === 0) {
      localStorage.removeItem('cart'); 
      this.cart = undefined;
      return false;
    }
    if (productRemoved.length > 0) {
      cartData!.totalValue -= productRemoved[0].cant * productRemoved[0].item.price;
      localStorage.setItem('cart', JSON.stringify(cartData))
      return true;
    } 
    return false
  }
  
  saveClient(clientData: any) {
    const url = `${baseUrl}/shop/client`;

    return this.http.post(url, clientData)
  }
}
