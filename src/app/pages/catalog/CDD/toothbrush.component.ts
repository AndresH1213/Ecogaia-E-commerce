import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-individual',
  templateUrl: './toothbrush.component.html',
  styleUrls: ['../catalog.component.css']
})
export class ToothbrushComponent implements OnInit {

  public colors: string[] = [];
  public durezas: number[] = [];
  public cantidad: number = 1;
  public productForm!: FormGroup;
  public selectedColor?: string;

  constructor(
    private fb: FormBuilder
  ) {
    this.colors = ['naranja', 'blanco', 'amarillo'];
    this.durezas = [1,2,3,4]
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      color: [''],
      dureza: [1],
      cantidad: [1]
    })
  }

  changeValue(value: number) {
    console.log(this.productForm.value)
  }
  onChange(value: any ) {
    console.log(value)
  }

}
