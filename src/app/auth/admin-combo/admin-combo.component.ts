import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import Swal from 'sweetalert2';
import { CombosService } from '../../services/combos.service';

@Component({
  selector: 'app-admin-combo',
  templateUrl: './admin-combo.component.html',
  styles: [
  ]
})
export class AdminComboComponent implements OnInit {
  
  @Input() products: Product[] = []

  addCombo: Product | undefined;
  newCombo: Product[] = [];
  imageCombo: File | undefined;
  price: number = 0;
  title: string = 'Combo Espectacular'; //default

  constructor(private comboService: CombosService) { }

  ngOnInit(): void {
  }

  onImageChange(target: any) {
    this.imageCombo = target.files[0];
  }

  pushCombo() {
    if (!this.addCombo) {
      Swal.fire('Falta algo', 'No hay producto', 'info')
      return 
    }
    this.newCombo.push(this.addCombo!);
  }

  removeProd(prodId: string) {
    const indexProduct = this.newCombo.findIndex(product => product._id === prodId);
    this.newCombo.splice(indexProduct, 1);
  }

  saveCombo() {
    if (this.price < 0) {
      Swal.fire('error', 'Precio no puede ser menor a 0', 'error')
    }
    const productsId = this.newCombo.map(product => product._id);
    const comboData = {
      title: this.title,
      products: productsId,
      price: this.price,
      image: this.imageCombo
    }
    this.comboService.createCombo(comboData).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire('Existo', 'Se ha agregado el combo a la base de datos', 'success')
      } else {
        Swal.fire('Warning', resp.msg, 'warning')
      }
    })
  }

  removeCombo(id: string) {

  }

}
