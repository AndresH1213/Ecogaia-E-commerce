import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-individual',
  templateUrl: './toothbrush.component.html',
  styleUrls: ['../catalog.component.css']
})
export class ToothbrushComponent implements OnInit {

  public catalog: string[] = ['assets/images/toothbrush2.webp','assets/images/toothbrush.webp']

  public colors: string[] = [];
  public durezas: string[] = [];
  public cantidad: number = 1;
  public pickedProduct: any = {
    code: 'CDD',
    color: 'blanco',
    dureza: '1',
    cant: 1,
  }

  public productForm = this.fb.group({
    color: ['', Validators.required],
    dureza: ['', Validators.required],
    cant: [1, [Validators.min(1), Validators.max(15)]]
  })

  constructor(
    private fb: FormBuilder
  ) {
    this.colors = ['naranja', 'blanco', 'amarillo'];
    this.durezas = ['1','2','3','4']
  }

  ngOnInit(): void {
  }

  changeValue(value: number) {
    let newCant = this.productForm.get('cant')?.value + value;
    this.productForm.setValue({...this.productForm.value, cant: newCant});
    this.pickedProduct.cant = newCant;
    this.pickedProduct.color = this.productForm.get('color')?.value;
    this.pickedProduct.dureza = this.productForm.get('dureza')?.value;
  }
  onChange(value: any ) {
    console.log(value)
  }

  addCart() {
    console.log(this.productForm.value);
    console.log(this.pickedProduct)
  }

}
