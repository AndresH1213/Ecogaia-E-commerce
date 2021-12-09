import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminService } from './admin.service';
import { map } from 'rxjs/operators';
import { Combo } from '../models/Combo';
import { ShopService } from './shop.service';

const baseUrl = environment.baseUrl
interface ResponseCombo {
  resp:Boolean;
  combo:Combo
}

@Injectable({
  providedIn: 'root'
})
export class CombosService {

  constructor(private http: HttpClient,
              private admin: AdminService,
              private shopService: ShopService) { }

  createCombo(comboData: any) {
    const url = `${baseUrl}/combos`;
    const formData = new FormData();
    const {title, price, products, image } = comboData;
    formData.append('title', title);
    formData.append('price', price);
    formData.append('products', products);
    formData.append('image', image);
    return this.http.post(url, formData, this.admin.headers)
  }

  getCombos() {
    const url = `${baseUrl}/combos`;
    return this.http.get(url)
  }

  getOneCombo(title: string) {
    const url = `${baseUrl}/combos/one?title=${title}`;
    return this.http.get<ResponseCombo>(url).pipe(
      map(({combo}: any) => {
        const comboInstance = new Combo(combo._id,combo.title,combo.price,combo.image,combo.products);
        return comboInstance
      })
    )
  }

  addComboCart(comboData: any) {
    console.log(comboData)
    this.shopService.addProductCart(comboData)
  }
}
